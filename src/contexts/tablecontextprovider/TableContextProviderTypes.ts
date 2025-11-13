export interface ITableContextProviderProps<T>{
    params: IParamsTableProvider;
}

export interface ITableContextProvider<T> {
    fetchData: () => void;
}

export interface IParamsTableProvider{
    /**
     * Responsável por parametrizar a solicitação de dados que o componente deve gerar para tabela
     */
    label: string; // Valor do aria-label da tabela
    endpoint: string; // Endpoint que será feito a requisição dos dados
    checkbox?: boolean; // Define se as linhas da tabela são selecionaveis via checkbox
    typeTable: TypeTable; // Tipo de dado que será renderizado ao clicar sobre a linha da tabela
}

export enum TypeTable {
    /**
     * Responsável por definir o tipo de dado que será renderizado ao clicar na linha da tabela
     */
    MODAL = "modal",
    FORM = "form",
}

export interface IHeadersAndColumns {
    /**
     * Responsável por toda estrutura da tabela como estrutura de dados, 
     */
    headers: IHeaders[]; // Estrutura de cabeçalho da tabela
    transactions: ITransactions[];
}

export interface IHeaders {
    /**
     * Responsável pela estrutura de dados da tabela
     */
    rowId: string;
    label: string; // Nome da coluna que será renderizado na tela
    description: string; // Descrição detalhada dos dados exibidos na coluna ao passar o mouse sobre o cabeçalho da coluna
    type: "string" | "number"; // Tipo de dado da coluna "númerico" ou "texto"
}

interface ITransactions {
    /**
     * Responsável por definir todas as transações liberadas para o tipo de tabela renderizado, como Cadastro, Edição, entre outros.
     */
    label: string;
}