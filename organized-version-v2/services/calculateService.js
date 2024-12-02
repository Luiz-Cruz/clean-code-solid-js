export class CalculateService {
    constructor(taxStrategy, discountStrategy) {
        this.taxStrategy = taxStrategy;
        this.discountStrategy = discountStrategy;
    }

    calculate(country, state, category, price, discountCode) {
        // Calcula taxas e descontos usando as estratégias fornecidas
        const tax = this.taxStrategy.calculate(country, state, category, price);
        const discount = this.discountStrategy.calculate(price, discountCode);
        const finalPrice = price + tax - discount;

        // Retorna o relatório final
        return {
            country,
            state,
            category,
            price: parseFloat(price.toFixed(2)),
            discountCode,
            tax: parseFloat(tax.toFixed(2)),
            discount: parseFloat(discount.toFixed(2)),
            finalPrice: parseFloat(finalPrice.toFixed(2)),
        };
    }
}
