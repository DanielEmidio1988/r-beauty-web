export interface ITableContextProviderProps<T>{
    params: IParamsTableProvider;
}

export interface ITableContextProvider<T> {
    fetchData: () => void;
}

export interface IHeadersAndColumnsResponse {
    status: number;
    data: {
        data: IHeadersAndColumns;
    }
    message?: string;
}

export interface IParamsTableProvider{
    /**
     * Responsável por parametrizar a solicitação de dados que o componente deve gerar para tabela
     */
    label: string; // Valor do aria-label da tabela
    endpoint: string; // Endpoint que será feito a requisição dos dados
    checkbox?: boolean; // Define se as linhas da tabela são selecionaveis via checkbox
    typeTable: TypeTable; // Tipo de dado que será renderizado ao clicar sobre a linha da tabela
    actionLabel?: string; // Valor da label do TextField do tipo "Select" (opcional) 
    title?: string; // Titulo da tabela exibido na página (opcional)
    totalRegister?: boolean; // Exibe total de registros da tabela (opcional)
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
    actions: IActions[];
}

export interface IHeaders {
    /**
     * Responsável pela estrutura de dados da tabela
     */
    rowId: string;
    label: string; // Nome da coluna que será renderizado na tela
    description: string; // Descrição detalhada dos dados exibidos na coluna ao passar o mouse sobre o cabeçalho da coluna
    type: string; // Tipo de dado da coluna "númerico" ou "texto"
}

export interface ITransactions {
    /**
     * Responsável por definir todas as transações liberadas para o tipo de tabela renderizado como Cadastro, Importação, entre outros.
     */
    label: string;
}

export interface IActions {
    /**
     * Responsável por definir todas as ações liberadas para o tipo de tabela renderizado como Exportar Dados, Inativar/Ativar selecionados, entre outros.
     */
    label: string;
    value: string;
    endpoint: string | null;
}