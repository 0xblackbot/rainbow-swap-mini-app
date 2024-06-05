import {Address} from '@ton/core';

import {CalculatedSwapRoute} from './calculated-swap-route.type.ts';
import {SwapRouteType} from '../../enums/swap-route-type.enum.ts';
import {GAS_AMOUNT, WORKCHAIN} from '../../globals.ts';
import {TransferParams} from '../../interfaces/transfer-params.interface.ts';
import {toNano} from '../../utils/big-int.utils.ts';
import {getQueryId} from '../../utils/transfer-params.utils.ts';
import {dedust_getTransferParams} from '../dedust/transfer-params.utils.ts';
import {RainbowWalletContract} from '../rainbow/rainbow-wallet.contract.ts';
import {rainbow_getTransferParams} from '../rainbow/transfer-params.utils.ts';
import {ston_getTransferParams} from '../ston/transfer-params.utils.ts';

export const getSwapRouteTransferParams = (
    swapRoute: CalculatedSwapRoute,
    senderAddress: Address
) => {
    const queryId = getQueryId();
    if (swapRoute.type === SwapRouteType.DeDust) {
        return dedust_getTransferParams(
            swapRoute.route,
            queryId,
            GAS_AMOUNT,
            senderAddress,
            senderAddress,
            senderAddress,
            true
        );
    }
    if (swapRoute.type === SwapRouteType.Ston) {
        return ston_getTransferParams(
            swapRoute.routeStep,
            queryId,
            GAS_AMOUNT,
            senderAddress,
            senderAddress,
            senderAddress,
            true
        );
    }

    return rainbow_getTransferParams(
        swapRoute.firstChunk,
        swapRoute.secondChunk,
        queryId,
        GAS_AMOUNT,
        senderAddress
    );
};

export const getRainbowWalletActivationTransferParams = (
    senderAddress: Address
): TransferParams => {
    const rainbowWallet = RainbowWalletContract.create({
        workchain: WORKCHAIN,
        ownerAddress: senderAddress
    });

    return {
        to: rainbowWallet.address,
        value: toNano('0.01', 9),
        init: rainbowWallet.init
    };
};