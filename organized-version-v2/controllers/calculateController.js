import { StrategySelector } from "../services/strategySelector.js";
import { CalculateService } from "../services/calculateService.js";

export const calculateHandler = (req, res) => {
    const { country, state, category, price, discountCode } = req.query;

    try {
        // Instanciar o StrategySelector
        const selector = new StrategySelector();

        // Obter as estratégias do selector
        const taxStrategy = selector.getTaxStrategy(country);
        const discountStrategy = selector.getDiscountStrategy(discountCode);

        // Criar o serviço de cálculo com as estratégias
        const calculateService = new CalculateService(taxStrategy, discountStrategy);

        // Realizar o cálculo
        const report = calculateService.calculate(country, state, category, parseFloat(price), discountCode);

        // Retornar a resposta
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ error: error.message || "An error occurred while calculating the price." });
    }
};
