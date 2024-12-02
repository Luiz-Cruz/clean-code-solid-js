import { Tax } from "../entities/Tax.js";
import { Discount } from "../entities/Discount.js";

export class StrategySelector {
    getTaxStrategy(country) {
        return Tax.getStrategy(country);
    }

    getDiscountStrategy(discountCode) {
        return Discount.getStrategy(discountCode);
    }
}
