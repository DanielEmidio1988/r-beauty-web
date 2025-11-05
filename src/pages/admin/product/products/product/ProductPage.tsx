import { goToRegisterProductPage } from "../../../../../routes/navigate";
import { useProductPageViewModel } from "./ProductPageViewModel";
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import { columns } from "./mock";
import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";


function ProductsPage() {
    const {
        titlePage,
        dataProducts,
        totalRegister,
        navigate,
        context,
    } = useProductPageViewModel();
    const paginationModel = { page: 0, pageSize: 5 };
    const [productsSelected, setProductsSelected] = useState<GridRowSelectionModel>({ type: 'include', ids: new Set() });



    return (
        <Grid container size={12}>
            <Grid size={12} className="titlearea">
                <Typography component="h6" className="title">
                    {titlePage}
                </Typography>
                <Typography component="span" className="detail_content counter">
                    {totalRegister}
                </Typography>
            </Grid>
            <Grid
                className="tabledatacontainer"
                container
                size={12}
                sx={{ margin: "8px 0" }}
            >
                <Grid
                    container
                    size={12}
                    spacing={2}
                    sx={{ margin: "8px 0" }}
                >
                    <TextField
                        id="select-actions-items"
                        select
                        // label="Ações"
                        defaultValue=""
                    >
                        <MenuItem value="">
                            ""
                        </MenuItem>
                        <MenuItem value="">
                            Ativar selecionados
                        </MenuItem>
                        <MenuItem value="">
                            Desativar selecionados
                        </MenuItem>
                    </TextField>
                    <Button
                        variant="contained"
                        onClick={() => goToRegisterProductPage(navigate)}
                    >
                        Novo Produto
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => goToRegisterProductPage(navigate)}
                    >
                        Importar
                    </Button>
                </Grid>
                <Grid size={12}>
                    {/* Analisar checkbox pq não esta funcionando */}
                    <DataGrid
                        rows={dataProducts}
                        columns={columns}
                        getRowId={(row) => row.id}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        onRowSelectionModelChange={(newRowSelectionModel) => {
                            console.log("newRowSelected ", newRowSelectionModel)
                            setProductsSelected(newRowSelectionModel);
                        }}
                        rowSelectionModel={productsSelected}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductsPage;