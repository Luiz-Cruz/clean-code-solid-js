import { Tax } from "../entities/Tax.js";
import { Discount } from "../entities/Discount.js";

export const validateCalculateParams = (req, res, next) => {
    const { country, state, category, price, discountCode } = req.query;

    if (!country || !state || !category || !price) {
        return res.status(400).json({
            error: "The 'country', 'state', 'category', and 'price' parameters are required.",
        });
    }

    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
        return res.status(400).json({
            error: "The 'price' parameter must be a valid number greater than zero.",
        });
    }

    const tax = new Tax(country, state, category);

    if (!tax.isValidCountry()) {
        return res.status(400).json({
            error: `The country '${country}' is not supported.`,
        });
    }

    if (!tax.isValidState()) {
        return res.status(400).json({
            error: `The state '${state}' is not supported for the country '${country}'.`,
        });
    }

    if (!tax.isValidCategory()) {
        return res.status(400).json({
            error: `The category '${category}' is not valid for the state '${state}' in the country '${country}'.`,
        });
    }

    const discount = new Discount(discountCode);

    if (!discount.isValid()) {
        return res.status(400).json({
            error: `The discount code '${discountCode}' is not valid.`,
        });
    }

    next();
};
