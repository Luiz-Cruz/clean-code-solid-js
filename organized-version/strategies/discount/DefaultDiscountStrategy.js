import { DiscountStrategy } from "./DiscountStrategy.js";

export class DefaultDiscountStrategy extends DiscountStrategy {
    calculate(price, discountCode) {
        return 0; // No discount for unsupported codes
    }
}
