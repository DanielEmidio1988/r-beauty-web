
import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import style from "./Customer.module.scss";
import { useCustomerViewModel } from "./CustomerViewModel";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
import { columns } from "./mock";
import { useState } from "react";

function Customer() {
    const { 
        navigate, 
        titlePage, 
        totalRegister,
        dataCustomer,
    } = useCustomerViewModel();
    const paginationModel = { page: 0, pageSize: 5 };
    const [customerSelected, setCustomerSelected] = useState<GridRowSelectionModel>({ type: 'include', ids: new Set() });

    return (
        <Grid container size={12} className={style.customer}>
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
                        onClick={() => {}}
                    >
                        Novo Cliente
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {}}
                    >
                        Importar
                    </Button>
                </Grid>
                <Grid size={12}>
                    {/* Analisar checkbox pq não esta funcionando */}
                    <DataGrid
                        rows={dataCustomer}
                        columns={columns}
                        getRowId={(row) => row.id}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        onRowSelectionModelChange={(newRowSelectionModel) => {
                            console.log("newRowSelected ", newRowSelectionModel)
                            setCustomerSelected(newRowSelectionModel);
                        }}
                        rowSelectionModel={customerSelected}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Customer
