import { DiscountStrategy } from "./DiscountStrategy.js";

export class SummerDiscountStrategy extends DiscountStrategy {
    calculate(price, discountCode) {
        return discountCode === "SUMMER10" ? price * 0.1 : 0;
    }
}
