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
        field: "osc_openstatement",
        headerName: "Extrato",
        flex: 2,
    },
    {
        field: "osc_statusstatement",
        headerName: "Situação Status",
        flex: 2,
    },
]