import { Box, Button } from "@mui/material";
import { ITransactionsProps } from "./TransactionsTypes";
import { useNavigate } from "react-router-dom";
import { goToRegisterProductPage } from "routes/navigate";

export function Transactions({ transactions }: ITransactionsProps) {
    const navigate = useNavigate();

    return transactions.map((transaction) => {
        return (
            <Button
                variant="contained"
                onClick={() => goToRegisterProductPage(navigate)} // definir forma de mandar essa informação
            >
                {transaction.label}
            </Button>
        )
    })
}