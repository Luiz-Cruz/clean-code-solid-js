# Comparação entre Versão Desorganizada e Versão Organizada da API de Cálculo de Preços

---

## Introdução

Este projeto apresenta duas implementações para uma API que calcula o preço final de um produto com base no país, estado, categoria e um código de desconto opcional. O objetivo é demonstrar as diferenças entre um código **desorganizado e acoplado** e um código **estruturado e modular**, seguindo boas práticas de desenvolvimento.

---

## Estrutura do Projeto

Versão referência para o desafio`organized-version-v1`:

```plaintext
├── organized-version-v1/
│   ├── src/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── entities/
│   │   ├── factories/
│   │   ├── middlewares/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── .gitignore
│   │   ├── app.js
│   │   ├── package.json
│   └── README.md
├── organized-version-v2/
│   ├── src/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── entities/
│   │   ├── middlewares/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── strategies/
│   │   ├── .gitignore
│   │   ├── app.js
│   │   ├── package.json
│   └── README.md
├── unorganized-version/
│   ├── .gitignore
│   ├── app.js
│   ├── package.json
│   └── README.md
└── README.md

```

---

# Versão Desorganizada (unorganized-version)

## Características

#### Monolítica e Acoplada:

- Toda a lógica de cálculo de impostos, descontos, validação e geração de relatórios está em uma única função.

- Difícil de testar e manter, já que alterações em uma parte do código podem impactar outras inesperadamente.

#### Dificuldade de Leitura:

- A lógica está misturada, tornando o código confuso e difícil de entender.

#### Sem Modularidade:

- Nenhuma separação clara de responsabilidades. Todo o código está no mesmo arquivo.

### Problemas

#### Violação do Princípio de Responsabilidade Única (SRP):

- Uma única função combina múltiplas responsabilidades.

#### Alta complexidade:

- Adicionar novos países, estados ou códigos de desconto exige modificar o código existente.

#### Tratamento de erros limitado:

- Os erros são tratados de forma genérica, sem clareza sobre o que deu errado.

---

# Versão Organizada (organized-version)

### Características

#### Modular e Escalável:

- O código está dividido em módulos como controllers, services, entities, e strategies.

- Cada módulo tem uma única responsabilidade.

#### Uso de Padrões de Design:
- Strategy Pattern: Implementado para cálculos de impostos e descontos, tornando o sistema extensível.

- Injeção de Dependências: O serviço de cálculo (CalculateService) recebe as estratégias como dependências.

#### Validações Encapsuladas:

- A validação de parâmetros foi movida para as classes Tax e Discount.
Adesão ao SOLID:

- O código segue os princípios de design, como SRP, DIP e OCP.

### Benefícios

#### Fácil de Ler e Manter:

- Cada classe ou módulo tem uma responsabilidade bem definida, tornando o código mais simples de entender.

#### Facilidade para Adicionar Novos Requisitos:
- Adicionar novos países, estados ou códigos de desconto não exige modificar o código existente, apenas criar novas estratégias.

#### Testabilidade:
- A lógica foi desacoplada, permitindo que cada componente seja testado de forma isolada.

---

# Comparação Resumida


| **Aspecto**           | **Unorganized-Version**                     | **Organized-Version**                                               |
|-----------------------|---------------------------------------------|---------------------------------------------------------------------|
| **Estrutura**         | Monolítica                                  | Modular e bem organizada                                            |
| **Legibilidade**      | Baixa                                       | Alta                                                                |
| **Testabilidade**     | Difícil de testar                           | Fácil de testar                                                     |
| **Extensibilidade**   | Difícil de expandir                         | Fácil de expandir                                                   |
| **Manutenção**        | Complexa                                    | Simples                                                             |
| **Padrões de Design** | Não segue padrões                           | Usa Strategy, Service, Repository Pattern e Injeção de Dependências |
| **Validações**        | Misturadas com a lógica principal           | Encapsuladas em classes específicas                                 |

---

# Objetivo do Projeto

Este projeto foi criado para:

1. Demonstrar os problemas de um código mal organizado e acoplado .
2. Mostrar como boas práticas, padrões de design e princípios como SOLID podem tornar o código mais limpo, fácil de manter e escalável.

---

# Como Executar
unorganized-version
```bash
cd unorganized-version
npm install
npm run dev
```

organized-version
```bash
cd organized-version
npm install
npm run dev
```
