
import { Grid, Typography } from "@mui/material";
import style from "./CustomerStatement.module.scss";
import { useCustomerStatementViewModel } from "./CustomerStatementViewModel";
import { useState } from "react";
import { DataGrid, GridRowSelectionModel } from "@mui/x-data-grid";
import { columns } from "./mock";

function CustomerStatement(){
    const { 
        navigate,
        customerStatement,
        titlePage,
        totalRegister
    } = useCustomerStatementViewModel();
    const paginationModel = { page: 0, pageSize: 5 };

    return(
        <Grid 
            container
            size={12}
            className={style.customerstatement}
        >
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
                <Grid size={12}>
                    {/* Analisar checkbox pq não esta funcionando */}
                    <DataGrid
                        rows={customerStatement}
                        columns={columns}
                        getRowId={(row) => row.id}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CustomerStatement
