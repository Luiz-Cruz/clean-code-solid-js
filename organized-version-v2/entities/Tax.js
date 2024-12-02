import { USATaxStrategy } from "../strategies/tax/USATaxStrategy.js";
import { CanadaTaxStrategy } from "../strategies/tax/CanadaTaxStrategy.js";
import { DefaultTaxStrategy } from "../strategies/tax/DefaultTaxStrategy.js";

export class Tax {
    constructor(country, state, category) {
        this.country = country;
        this.state = state;
        this.category = category;
    }

    static taxStrategies = {
        USA: new USATaxStrategy(),
        Canada: new CanadaTaxStrategy(),
    };

    static getValidCountries() {
        return Object.keys(Tax.taxStrategies);
    }

    static getStrategy(country) {
        return Tax.taxStrategies[country] || new DefaultTaxStrategy();
    }

    isValidCountry() {
        return Tax.getValidCountries().includes(this.country);
    }

    isValidState() {
        const strategy = Tax.getStrategy(this.country);
        return strategy.isValidState(this.state);
    }

    isValidCategory() {
        const strategy = Tax.getStrategy(this.country);
        return strategy.isValidCategory(this.state, this.category);
    }
}
