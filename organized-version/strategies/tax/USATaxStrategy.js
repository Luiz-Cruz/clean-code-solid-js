import { TaxStrategy } from "./TaxStrategy.js";

export class USATaxStrategy extends TaxStrategy {
    constructor() {
        super();
        this.taxRates = {
            CA: { electronics: 0.0825, books: 0.07, default: 0.08 },
            TX: { electronics: 0.08, default: 0.06 },
            default: 0.05,
        };
    }

    isValidState(state) {
        return Boolean(this.taxRates[state] || this.taxRates.default);
    }

    isValidCategory(state, category) {
        const stateRates = this.taxRates[state] || this.taxRates.default;
        return Boolean(stateRates[category] || stateRates.default);
    }

    calculate(country, state, category, price) {
        const stateRates = this.taxRates[state] || this.taxRates.default;
        const rate = stateRates[category] || stateRates.default;
        return price * rate;
    }
}
