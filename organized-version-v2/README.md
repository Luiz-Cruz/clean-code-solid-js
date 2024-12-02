# Calcular Preço Final com Impostos e Descontos (versão melhorada)

---

## Objetivo

Este projeto é uma API bem estruturada e modular que calcula o preço final de um produto com base no país, estado,
categoria do produto e um código de desconto opcional. A API aplica práticas de desenvolvimento limpas e segue os
princípios do SOLID, utilizando estratégias para cálculos de impostos e descontos, além de validações encapsuladas.

---

## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/calculate**.
2. ✅ Os parâmetros obrigatórios são:
    - **country** (país)
    - **state** (estado)
    - **category** (categoria do produto).
    - **price** (preço do produto, como número).
3. ✅ Opcionalmente, pode receber:
    - **discountCode** (código de desconto aplicável).
4. ✅ Calcula os impostos com base no país, estado e categoria do produto usando estratégias específicas.
5. ✅ Aplica descontos válidos usando estratégias específicas.
6. ✅ Realiza validações encapsuladas nas classes `Tax` e `Discount`.
7. ✅ Retorna um JSON contendo o preço final calculado com detalhes.

---

## Parâmetros da Rota **/calculate**

| Parâmetro        | Tipo   | Obrigatório | Descrição                                     |
|------------------|--------|-------------|-----------------------------------------------|
| **country**      | String | ✅           | País do cliente (ex.: USA, Canada).           |
| **state**        | String | ✅           | Estado do cliente (ex.: CA, TX).              |
| **category**     | String | ✅           | Categoria do produto (ex.: electronics).      |
| **price**        | Number | ✅           | Preço do produto em formato numérico.         |
| **discountCode** | String | ❌           | Código de desconto aplicável (ex.: SUMMER10). |

---

## Exemplo de Requisição

### URL

```plaintext
GET http://localhost:3000/calculate?country=USA&state=CA&category=electronics&price=100&discountCode=SUMMER10
```

---

## Códigos de desconto válidos
- SUMMER10: Aplica 10% de desconto.
- WINTER15: Aplica 15% de desconto.

---

## Validação
As validações estão centralizadas nas classes de domínio Tax e Discount:

- Tax: Valida país, estado e categoria.
- Discount: Valida se o código de desconto é válido.

---
## Exceções
### Erro 400

Ocorre quando qualquer um dos seguintes parâmetros obrigatórios está ausente ou inválido:

- country: País do cliente (ex.: USA, Canada).
- state: Estado do cliente (ex.: CA, TX).
- category: Categoria do produto (ex.: electronics, books).
- price: Preço do produto (deve ser numérico e maior que zero).

Ou se um código de desconto inválido for informado:

```json
{
   "error": "The discount code 'INVALIDCODE' is not valid."
}
```
### Erro 500

Retorna quando ocorre qualquer outro problema inesperado no servidor, como falha de lógica ou exceções não tratadas.

```json
{
   "error": "An unexpected error occurred on the server."
}
```

---
### Melhoria do Código

O código foi refatorado para:

- Estrutura Modular: Cada responsabilidade é encapsulada em uma classe ou função específica.
- Princípios SOLID:
SRP: Cada classe e função tem uma única responsabilidade.
-- OCP: O sistema é facilmente extensível, permitindo adicionar novos países, estados ou códigos de desconto sem modificar o código existente.
- DIP: O CalculateService recebe as estratégias como dependências, promovendo injeção de dependência.
- Uso do Strategy Pattern: Estratégias para impostos e descontos foram implementadas.
- Validações Encapsuladas: Validações específicas foram movidas para as classes Tax e Discount.

---

## Como executar o projeto

1. Instale as dependências:
   
 ```bash
 npm install
 ```

2. Inicie o servidor:

```bash
npm run dev
```

A API estará disponível em http://localhost:3000.
