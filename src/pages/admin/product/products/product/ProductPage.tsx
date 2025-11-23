// import { goToRegisterProductPage } from "../../../../../routes/navigate"; // provaveçmente utilizarei
import { useProductPageViewModel } from "./ProductPageViewModel";
import { Grid, Typography } from "@mui/material";
import { TableContextProvider } from "contexts/tablecontextprovider/TableContextProvider";
import { IProductsData } from "./ProductPageTypes";
import { TypeTable } from "contexts/tablecontextprovider/TableContextProviderTypes";


function ProductsPage() {
    const {
        titlePage,
        totalRegister,
        // navigate, // provavelmente utilizarei
        // context, // provavelmente utilizarei
    } = useProductPageViewModel();

    return (
        <Grid container size={12}>
            <Grid size={12} className="titlearea"> {/* Repassar para CustomTable */}
                <Typography component="h6" className="title">
                    {titlePage}
                </Typography>
                <Typography component="span" className="detail_content counter">
                    {totalRegister} 
                </Typography>
            </Grid>
            <Grid className="tabledatacontainer" size={12} sx={{ margin: "8px 0" }}>
                <TableContextProvider<IProductsData[]>
                    params={{
                        label: "products",
                        endpoint: "products",
                        typeTable: TypeTable.FORM,
                        checkbox: true,
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default ProductsPage;