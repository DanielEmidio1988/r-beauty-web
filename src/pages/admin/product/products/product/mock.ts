import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    {
        field: "id",
        headerName: "ID",
    },
    {
        field: "name",
        headerName: "Produto",
    },
    {
        field: "brand",
        headerName: "Marca",
    },
    {
        field: "stock",
        headerName: "Estoque",
    },
    {
        field: "sale_value",
        headerName: "Preço de venda",
    },
    {
        field: "suggested_sale",
        headerName: "Preço sugerido venda",
    },
    {
        field: "promotional_value",
        headerName: "Preço promocional",
    },
    {
        field: "promotion_expiration_date",
        headerName: "Data expiração promoção",
    },
    {
        field: "cost",
        headerName: "Preço de custo",
    },
    {
        field: "name",
        headerName: "Produto",
    },
    {
        field: "product_unavailable",
        headerName: "Produto ativo",
    }
];