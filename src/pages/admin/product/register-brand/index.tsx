import React, {useState} from "react";
import MenuAdmin from "../../../../components/menu-admin";
import style from "./RegisterBrandPage.module.scss";

function RegisterBrandPage(){ //Alterar para register Brand
    const brandsFields = [
        {
            field: "name", label: "Marca", type: "text" 
        },
        {
            field: "profit", label: "Lucratividade", type: "number" 
        },
        {
            field: "brand_unavailable", label: "Marca Ativa", type: "checkbox" 
        }
    ]
    const [dataBrands, setDataBrands] = useState([])

    function getAllBrands(){

    }

    function newBrand(){
        //cadastro de marca
    }

    function filterBrand(){
        //filtro de marca
    }

    return(
        <main className={`pageadmin`}>
            <section className={`sectionarea_admin`}>
                <MenuAdmin/>
                <div className={`dataarea`}>
                    <div className={``}>

                        <button>Novo</button>
                        {/* Filtro */}

                    </div>
                    <div className={`tabledata`}>
                        <table>
                            <tr>
                                <th>Marca</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>
                                    <span>Boticário</span>
                                </td>
                                <td>
                                    {/* Icones editar/excluir */}
                                </td>
                            </tr>
                        </table>

                    </div>
                    <div className={`pagination`}>
                        <button>Anterior</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>Próximo</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default RegisterBrandPage