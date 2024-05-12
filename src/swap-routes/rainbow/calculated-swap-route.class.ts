import {Address} from '@ton/core';

import {rainbow_getTransferParams} from './transfer-params.utils';
import {SwapRouteType} from '../../enums/swap-route-type.enum';
import {GAS_AMOUNT} from '../../globals';
import {RouteStepWithCalculation} from '../../interfaces/route-step-with-calculation.interface';
import {parseRouteStepWithCalculation} from '../../utils/route-step-with-calculation.utils';
import {
    getQueryId,
    transferParamsToMessage
} from '../../utils/transfer-params.utils';
import {AbstractCalculatedSwapRoute} from '../abstract/calculated-swap-route.class';

export class RainbowCalculatedSwapRoute extends AbstractCalculatedSwapRoute<SwapRouteType.Rainbow> {
    constructor(
        private firstChunk: RouteStepWithCalculation[],
        private secondChunk: RouteStepWithCalculation[]
    ) {
        super(SwapRouteType.Rainbow);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromParsedJson(value: any) {
        const parsedFirstChunk = value.firstChunk.map(
            parseRouteStepWithCalculation
        );
        const parsedSecondChunk = value.secondChunk.map(
            parseRouteStepWithCalculation
        );

        return new RainbowCalculatedSwapRoute(
            parsedFirstChunk,
            parsedSecondChunk
        );
    }

    public getRoute = () => [...this.firstChunk, ...this.secondChunk];

    async getMessage(senderAddress: Address) {
        const transferParams = await rainbow_getTransferParams(
            this.firstChunk,
            this.secondChunk,
            getQueryId(),
            GAS_AMOUNT,
            senderAddress
        );

        return transferParamsToMessage(transferParams);
    }
}