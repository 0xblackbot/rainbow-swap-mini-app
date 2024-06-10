import {useTonConnectUI} from '@tonconnect/ui-react';
import {FC, useMemo, useState} from 'react';

import styles from './wallet-menu.module.css';
import {trackButtonClick} from '../../../hooks/use-analytics.hook.ts';
import {useDisableMainButton} from '../../../hooks/use-disable-main-button.hook.ts';
import {getClassName} from '../../../utils/style.utils.ts';

interface Props {
    walletAddress: string;
}

export const WalletMenu: FC<Props> = ({walletAddress}) => {
    const [tonConnectUI] = useTonConnectUI();

    const [isOpen, setIsOpen] = useState(false);

    const shortWalletAddress = useMemo(
        () => walletAddress.slice(0, 4) + '...' + walletAddress.slice(-4),
        [walletAddress]
    );

    useDisableMainButton(isOpen);

    const handleMenuClick = () => {
        trackButtonClick('Header Menu');
        setIsOpen(value => !value);
    };
    const handleClose = () => {
        trackButtonClick('Header Menu Backdrop');
        setIsOpen(false);
    };
    const handleDisconnect = () => {
        trackButtonClick('Header Disconnect');
        tonConnectUI.disconnect();
        setIsOpen(false);
    };

    return (
        <>
            <button className={styles.wallet_button} onClick={handleMenuClick}>
                {shortWalletAddress}
            </button>

            <div
                className={getClassName(
                    styles.menu_backdrop,
                    isOpen ? styles.open : styles.close
                )}
                onClick={handleClose}
            >
                <div className={styles.menu_content}>
                    <button
                        className={getClassName(
                            styles.menu_explore_button,
                            styles.menu_button
                        )}
                    >
                        <a
                            className={styles.a_button}
                            href={`https://tonviewer.com/${walletAddress}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View in Explorer
                        </a>
                    </button>
                    <button
                        className={getClassName(
                            styles.menu_disconnect_button,
                            styles.menu_button
                        )}
                        onClick={handleDisconnect}
                    >
                        Disconnect
                    </button>
                </div>
            </div>
        </>
    );
};
