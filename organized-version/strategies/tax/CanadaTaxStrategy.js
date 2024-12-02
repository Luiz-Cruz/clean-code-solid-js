import { TaxStrategy } from "./TaxStrategy.js";

export class CanadaTaxStrategy extends TaxStrategy {
    calculate(country, state, category, price) {
        const taxRates = { electronics: 0.12, default: 0.1 };
        return price * (taxRates[category] || taxRates.default);
    }
}
