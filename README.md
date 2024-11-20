# Componente `CalendarComponent`

## Descrição

O componente `CalendarComponent` exibe um botão para selecionar uma data em um intervalo entre uma data de início e uma data de término. O usuário pode escolher uma data utilizando um `DateTimePicker`, e a data selecionada será retornada para o componente pai.

## Como Rodar

 - Apos clonar o projeto execute o comando `npm install` para as dependencias
 - Para iniciar rode o comando `npm run start` 

## Funcionalidade

- **Botão de seleção de data**: Exibe o `DateTimePicker` quando pressionado.
- **Exibição do `DateTimePicker`**: Permite que o usuário escolha uma data dentro de um intervalo configurado (de `startDate` a `endDate`).
- **Evento de mudança de data**: Quando o usuário seleciona uma data, o componente atualiza e envia a data selecionada para o componente pai.

---

## Props do Componente

### 1. **`startDate`** (string)
- **Descrição**: Define a data mínima que pode ser selecionada pelo usuário no `DateTimePicker`.
- **Exemplo**: `"2024-11-01"`

### 2. **`endDate`** (string)
- **Descrição**: Define a data máxima que pode ser selecionada pelo usuário no `DateTimePicker`.
- **Exemplo**: `"2024-11-30"`

### 3. **`onDateChange`** (função)
- **Descrição**: Função callback que é chamada quando o usuário seleciona uma nova data. A data selecionada é passada para essa função como parâmetro no formato `YYYY-MM-DD`.
- **Exemplo**: `(date: string) => void`

---

## Outputs e Eventos

### `onDateChange`
- **Descrição**: Evento disparado quando uma nova data é selecionada.
- **Valor do evento**: A data selecionada no formato `YYYY-MM-DD`.
- **Exemplo**:
  ```tsx
  onDateChange("2024-11-15");
