import { TaxStrategy } from "./TaxStrategy.js";

export class DefaultTaxStrategy extends TaxStrategy {
    calculate(country, state, category, price) {
        return price * 0.15; // Default tax rate for unsupported countries
    }

    isValidState(state) {
        return true; // No specific validation for states in default
    }

    isValidCategory(state, category) {
        return true; // All categories are valid for default
    }
}
