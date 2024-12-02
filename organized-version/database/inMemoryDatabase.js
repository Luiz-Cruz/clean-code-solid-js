const discountCodes = [
    { code: "SUMMER10", discount: 0.1 },
    { code: "WINTER15", discount: 0.15 },
];

const taxRates = {
    USA: {
        CA: { electronics: 0.0825, books: 0.07, default: 0.08 },
        TX: { electronics: 0.08, default: 0.06 },
        default: 0.05,
    },
    Canada: { electronics: 0.12, default: 0.1 },
    default: 0.15,
};

export { discountCodes, taxRates };
