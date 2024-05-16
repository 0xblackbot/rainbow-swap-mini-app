import {isDefined} from '@rnw-community/shared';
import {Address} from '@ton/core';
import {
    useTonConnectModal,
    useTonConnectUI,
    useTonWallet
} from '@tonconnect/ui-react';
import {useContext, useEffect, useMemo} from 'react';

import {useOutputAssetAmount} from './hooks/use-output-asset-amount.hook.ts';
import styles from './swap-form.module.css';
import {ToggleAssetsButton} from './toggle-assets-button/toggle-assets-button.tsx';
import {SwapFormContext} from '../../../hooks/swap-form/swap-form.context.tsx';
import {CustomInput} from '../../../shared/CustomInput/CustomInput.tsx';
import {FormButton} from '../../../shared/FormButton/FormButton.tsx';
import {useDispatch} from '../../../store';
import {addPendingSwapTransactionActions} from '../../../store/balances/wallet-actions.ts';
import {
    useIsProcessingSwapTransactionSelector,
    useWalletSelector
} from '../../../store/balances/wallet-selectors.ts';
import {loadSwapRoutesActions} from '../../../store/swap-routes/swap-routes-actions.ts';
import {useSwapRoutesSelector} from '../../../store/swap-routes/swap-routes-selectors.ts';
import {mapSwapRouteToRoute} from '../../../swap-routes/shared/calculated-swap-route.utils.ts';
import {getSwapRouteMessage} from '../../../swap-routes/shared/message.utils.ts';
import {toNano} from '../../../utils/big-int.utils.ts';
import {bocToHash} from '../../../utils/boc.utils.ts';

export const SwapForm = () => {
    const wallet = useTonWallet();
    const connectModal = useTonConnectModal();
    const [tonConnectUI] = useTonConnectUI();

    const dispatch = useDispatch();
    const swapRoutes = useSwapRoutesSelector();
    const balances = useWalletSelector();
    const isProcessingSwapTransaction =
        useIsProcessingSwapTransactionSelector();
    const routes = useMemo(
        () => swapRoutes.map(mapSwapRouteToRoute),
        [swapRoutes]
    );

    const {
        inputAsset,
        setInputAsset,
        outputAsset,
        setOutputAsset,
        inputAssetAmount,
        setInputAssetAmount
    } = useContext(SwapFormContext);

    const outputAssetAmount = useOutputAssetAmount(
        routes,
        outputAsset.decimals
    );

    useEffect(() => {
        if (inputAssetAmount === '') {
            dispatch(loadSwapRoutesActions.success([]));
        } else {
            dispatch(
                loadSwapRoutesActions.submit({
                    inputAssetAmount: toNano(
                        inputAssetAmount,
                        inputAsset.decimals
                    ).toString(),
                    inputAssetAddress: inputAsset.address,
                    outputAssetAddress: outputAsset.address
                })
            );
        }
    }, [inputAssetAmount, inputAsset, outputAsset, dispatch]);

    const handleConnectClick = () => connectModal.open();
    const handleToggleAssetsClick = () => {
        setInputAsset(outputAsset);
        setOutputAsset(inputAsset);
    };
    const handleSwapClick = async () => {
        const walletAddress = wallet?.account.address;

        if (!isDefined(walletAddress)) {
            throw new Error('Wallet address is not defined');
        }

        const senderAddress = Address.parse(walletAddress);
        const senderRawAddress = senderAddress.toRawString();

        const messages = await Promise.all(
            swapRoutes.map(swapRoute =>
                getSwapRouteMessage(swapRoute, senderAddress)
            )
        );

        const response = await tonConnectUI
            .sendTransaction({
                validUntil: Math.floor(Date.now() / 1000) + 1 * 60,
                from: senderRawAddress,
                messages
            })
            .catch(() => undefined);

        if (isDefined(response)) {
            dispatch(
                addPendingSwapTransactionActions.submit({
                    senderRawAddress,
                    bocHash: bocToHash(response.boc)
                })
            );
        }
    };

    console.log('isProcessingSwapTransaction', isProcessingSwapTransaction);

    return (
        <>
            <div className={styles.body_div}>
                <CustomInput
                    label="You pay"
                    isInputEnabled={true}
                    inputValue={inputAssetAmount}
                    assetValue={inputAsset}
                    balance={balances[inputAsset.address]}
                    onInputValueChange={setInputAssetAmount}
                    onAssetValueChange={setInputAsset}
                />
                <ToggleAssetsButton onClick={handleToggleAssetsClick} />
                <CustomInput
                    label="You receive"
                    isInputEnabled={false}
                    inputValue={outputAssetAmount}
                    assetValue={outputAsset}
                    onAssetValueChange={setOutputAsset}
                />
            </div>

            {wallet ? (
                <>
                    <FormButton
                        text="Swap"
                        type="button"
                        onClick={handleSwapClick}
                        className={styles.body_button}
                    />
                </>
            ) : (
                <FormButton
                    text="Connect Wallet"
                    type="button"
                    onClick={handleConnectClick}
                    className={styles.body_button}
                />
            )}
        </>
    );
};