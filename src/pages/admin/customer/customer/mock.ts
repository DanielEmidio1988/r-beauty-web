import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    {
        field: "cli_name",
        headerName: "Nome cliente",
        flex: 3
    },
    {
        field: "cli_phone",
        headerName: "Telefone",
        flex: 2,
    },
    {
        field: "cli_email",
        headerName: "E-mail",
        flex: 2,
    },
    {
        field: "cli_address",
        headerName: "Endereço",
        flex: 3,
    },
]