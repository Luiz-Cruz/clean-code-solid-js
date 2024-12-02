import { taxRates } from "../database/inMemoryDatabase.js";

export const getTaxRate = (country, state, category) => {
    if (taxRates[country]) {
        const stateRates = taxRates[country][state] || taxRates[country].default;
        return stateRates[category] || stateRates.default;
    }
    return taxRates.default;
};
