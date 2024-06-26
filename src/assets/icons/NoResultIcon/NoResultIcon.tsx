import {FC} from 'react';

interface Props {
    width?: string;
    height?: string;
    className?: string;
}

export const NoResultsIcon: FC<Props> = ({
    width = '16px',
    height = '16px',
    className = ''
}): JSX.Element => (
    <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{width, height}}
        className={className}
    >
        <path
            d="M73.7503 36.25H48.7503C47.0927 36.25 45.503 36.9085 44.3309 38.0806C43.1588 39.2527 42.5003 40.8424 42.5003 42.5V92.5C42.5003 94.1576 43.1588 95.7473 44.3309 96.9194C45.503 98.0915 47.0927 98.75 48.7503 98.75H86.2503C87.9079 98.75 89.4976 98.0915 90.6697 96.9194C91.8418 95.7473 92.5003 94.1576 92.5003 92.5V55L73.7503 36.25Z"
            stroke="#C2C2C8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M73.7497 36.25V55H92.4997" fill="#C2C2C8" />
        <path
            d="M73.7497 36.25V55H92.4997"
            stroke="#AEAEB2"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M79.9997 70.625H54.9997"
            stroke="#AEAEB2"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M79.9997 83.125H54.9997"
            stroke="#AEAEB2"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M61.2497 58.125H58.1247H54.9997"
            stroke="#AEAEB2"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M43.125 54.375C34.8407 54.375 28.125 47.6593 28.125 39.375C28.125 31.0907 34.8407 24.375 43.125 24.375C51.4093 24.375 58.125 31.0907 58.125 39.375C58.125 47.6593 51.4093 54.375 43.125 54.375Z"
            stroke="#707070"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M24.3753 58.125L32.5316 49.9688"
            stroke="#707070"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
