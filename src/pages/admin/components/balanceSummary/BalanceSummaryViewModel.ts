import { useBalanceSummaryModel } from "./BalanceSummaryModel";
import { BalanceSummaryProps } from "./BalanceSummaryTypes";
import { hooks } from "../../../../utils/hooks";

export function useBalanceSummaryViewModel(props: BalanceSummaryProps){
    const { summarys, setSummarys } = useBalanceSummaryModel();


    async function fetchBalance(){
        //Função para buscar dados do balanço financeiro resumido
        
        setSummarys([
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
    };

    hooks.useEffect(() => {
        fetchBalance();
    },[]);

    return {
        summarys
    } 
}