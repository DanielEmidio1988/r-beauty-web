import React, {useState} from "react";
import MenuAdmin from "../../../../components/menu-admin";

function RegisterProductPage(){
    const productsFields = [
        {
            field: "", label: "", type: "" 
        }
    ]
    const [dataProducts, setDataProducts] = useState([])

    function getAllProducts(){

    }

    function newProduct(){
        //cadastro de produto
    }

    function filterProduct(){

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
                                <th>Lucratividade</th>
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

export default RegisterProductPage;