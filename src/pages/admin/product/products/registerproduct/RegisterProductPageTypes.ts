export enum SECTION_REGISTER{
    registerdata = "Cadastro",
    history = "Histórico",
    details = "Detalhes"
};

export interface ISectionRegister{
    type: SECTION_REGISTER,
};