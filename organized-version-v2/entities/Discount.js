import { SummerDiscountStrategy } from "../strategies/discount/SummerDiscountStrategy.js";
import { WinterDiscountStrategy } from "../strategies/discount/WinterDiscountStrategy.js";

export class Discount {
    constructor(discountCode) {
        this.discountCode = discountCode;
    }

    static discountStrategies = {
        SUMMER10: new SummerDiscountStrategy(),
        WINTER15: new WinterDiscountStrategy(),
    };

    static getValidCodes() {
        // Retorna os nomes dos códigos válidos
        return Object.keys(Discount.discountStrategies);
    }

    static getStrategy(discountCode) {
        // Retorna a estratégia correspondente ou uma estratégia padrão
        return Discount.discountStrategies[discountCode] || new DefaultDiscountStrategy();
    }

    isValid() {
        // Verifica se o código é válido
        return !this.discountCode || Discount.getValidCodes().includes(this.discountCode);
    }
}
