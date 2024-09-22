import { useState } from "react";
import MenuAdmin from "../../../components/menu-admin";

function HomeAdminPage(){
    return(
        <>
            <main>
                <section>
                    <MenuAdmin/>
                    <div>
                        {/* Resumo proximos boletos e clientes a Pagar
                        Proximas contas a Receber
                        Resumo Vendas */}
                    </div>
                </section>


            </main>
        </>
    )
}

export default HomeAdminPage;