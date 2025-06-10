import style from "./RegisterBrandPage.module.scss";
import { useRegisterBrandPageViewModel } from "./RegisterBrandPageViewModel";
import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./mock";

function RegisterBrandsPage() {
    const {
        context,
        titlePage,
        dataBrands,
        totalRegister,
        getAllBrands,
    } = useRegisterBrandPageViewModel();
    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <>
            <Grid container size={12}>
                <Grid size={12} className="titlearea">
                    <Typography component="h6" className="title">
                        {titlePage}
                    </Typography>
                    <Typography component="span" className="counter">
                        {totalRegister}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                size={12}
                spacing={2}
                sx={{ margin: "8px 0" }}
            >
                <TextField
                    id="select-actions-items"
                    select
                    label="Ações"
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
                    onClick={() => { }}
                >
                    Novo Produto
                </Button>
            </Grid>
            <Grid container justifyContent="center" size={12}>
                <Grid size={{ xs: 12, sm: 6  }}>
                    <DataGrid
                        columns={columns}
                        rows={dataBrands}
                        getRowId={(row) => row.id}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </Grid>

            </Grid>
        </>
    )
}

export default RegisterBrandsPage