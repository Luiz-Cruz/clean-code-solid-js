import { discountCodes } from "../database/inMemoryDatabase.js";

export const getDiscount = (code) => {
    return discountCodes.find((discount) => discount.code === code) || { discount: 0 };
};
