import { hooks } from "../../../../utils/hooks";

interface ISummary{
    value: number,
    description: string,
    color: string,
}

export function useBalanceSummary(){
    const [summarys, setSummarys] = hooks.useState<ISummary[]>([
        {
            value: 10000,
            description: "Em vendas",
            color: "#B5E61D"
        },
        {
            value: 2800,
            description: "A receber",
            color: "#6496D1"
        },
        {
            value: 15000,
            description: "A pagar",
            color: "#FA5D7C"
        }
    ]);

    function getBalanceSummary(){
        //Função para buscar dados do balanço financeiro resumido
    }

    return{summarys, setSummarys, getBalanceSummary}
}