import { DiscountStrategy } from "./DiscountStrategy.js";

export class WinterDiscountStrategy extends DiscountStrategy {
    calculate(price, discountCode) {
        return discountCode === "WINTER15" ? price * 0.15 : 0;
    }
}
