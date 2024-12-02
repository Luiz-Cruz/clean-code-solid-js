import { discountCodes, taxRates } from "../database/inMemoryDatabase.js"

export const getDiscount = (code) => {
    return discountCodes.find((discount) => discount.code === code) || { discount: 0 };
};

export const getTaxRate = (country, state, category) => {
    if (taxRates[country]) {
        const stateRates = taxRates[country][state] || taxRates[country].default;
        return stateRates[category] || stateRates.default;
    }
    return taxRates.default;
};
