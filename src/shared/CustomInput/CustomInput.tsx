import {ChangeEvent, forwardRef} from 'react';

import styles from './CustomInput.module.css';
import {Asset} from '../../interfaces/asset.interface.ts';
import {EMPTY_FN} from '../../utils/emptyfn.ts';
import {formatNumber} from '../../utils/format-number.utils.ts';
import {getMaxSentAmount} from '../../utils/get-max-sent-amount.utils.ts';
import {AssetSelector} from '../asset-selector/asset-selector.tsx';

interface Props {
    label: string;
    balance: string | undefined;
    isInputEnabled: boolean;
    inputValue: string;
    onInputValueChange?: (newInputValue: string) => void;
    assetValue: Asset;
    onAssetValueChange: (newAssetValue: Asset) => void;
    isLoading?: boolean;
    assetSelectorHeaderTitle: string;
}

export const CustomInput = forwardRef<HTMLInputElement, Props>(
    (
        {
            label,
            isInputEnabled,
            inputValue,
            assetValue,
            isLoading,
            balance = '0',
            onInputValueChange = EMPTY_FN,
            onAssetValueChange,
            assetSelectorHeaderTitle
        },
        ref
    ) => {
        const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
            let value = e.target.value;
            value = value.replace(/,/g, '.');

            if (value.charAt(0) === '.' || value.charAt(0) === ',') {
                value = '0.';
            }
            const regex = new RegExp(`^\\d*(\\.\\d{0,9})?$`);
            if (regex.test(value)) {
                const [integer, decimal] = value.split('.');
                if (decimal?.length > assetValue.decimals) {
                    e.target.value =
                        integer + '.' + decimal.slice(0, assetValue.decimals);
                    onInputValueChange(e.target.value);
                } else {
                    onInputValueChange(value);
                }
            }
        };

        const usdAmount =
            parseFloat(inputValue) * parseFloat(assetValue.exchangeRate);

        const setMaxAssetAmount = () => {
            const checkedBalance = getMaxSentAmount(
                balance,
                assetValue.address
            );

            onInputValueChange(checkedBalance);
        };

        return (
            <div className={styles.container}>
                <p className={styles.container_label}>{label}</p>
                <div className={styles.input_container}>
                    <AssetSelector
                        value={assetValue}
                        headerTitle={assetSelectorHeaderTitle}
                        onChange={onAssetValueChange}
                    />
                    <div className={styles.input_wrapper}>
                        <div className={styles.empty_container}>
                            {isLoading ? (
                                <div className={styles.loader_spinner} />
                            ) : null}
                        </div>
                        {isInputEnabled ? (
                            <input
                                type="tel"
                                inputMode="decimal"
                                className={styles.input_field}
                                onChange={handleInputChange}
                                value={inputValue}
                                placeholder="0"
                                disabled={!isInputEnabled}
                                required={isInputEnabled}
                                ref={ref}
                            />
                        ) : (
                            <span className={styles.span_field}>
                                {inputValue}
                            </span>
                        )}
                    </div>
                </div>

                <div className={styles.input_info}>
                    <div className={styles.input_info_balance}>
                        <p>Balance: {formatNumber(parseFloat(balance), 2)}</p>
                        {isInputEnabled ? (
                            <button
                                className={styles.input_info_button}
                                onClick={setMaxAssetAmount}
                            >
                                Max
                            </button>
                        ) : null}
                    </div>
                    <p className={styles.input_usd_balance}>
                        ${formatNumber(usdAmount, 2)}
                    </p>
                </div>
            </div>
        );
    }
);
