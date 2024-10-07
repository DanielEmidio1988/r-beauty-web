import React, {useState, useEffect} from "react";
import { IProduct } from "../../../../types/IProduct";
import MenuAdmin from "../../../../components/menu-admin";
import HeaderAdmin from "../../../../components/header/header-admin";
import products from "../../../../assets/data/products.json";
import {BsArrowLeftCircle, BsArrowLeftCircleFill, BsArrowRightCircle, BsArrowRightCircleFill} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { goToRegisterProductPage } from "../../../../routes/navigate";

interface ILegend{
    name: string;
    legend: string;
}

interface IOption{
    name: string;
    label: string; 
}

interface IProductFields {
    name: string;
    label: string;
    legend: string;
    type: string;
    options?: []
}

function ProductsPage(){
    const titlePage: string = "Cadastro de Produtos";
    const [dataProducts, setDataProducts] = useState<IProduct[] | []>([]);
    const [totalRegister, setTotalRegister] = useState<String>("0 registro");
    const navigate = useNavigate();

    useEffect(()=>{
        getAllProducts();
    });

    function getAllProducts(){
        const allProducts = products
        const totalProducts = allProducts.length > 1 ? `${allProducts.length} registros` : `${allProducts.length} registro`;
        setDataProducts(allProducts);
        setTotalRegister(totalProducts);
    }

    function goToEditProduct(){

    }

    function filterProduct(){

    }

    return(
        <main className={`pageadmin`}>
            <section className={`sectionarea_admin`}>
                <MenuAdmin />
                <div className={`dataarea`}>
                    <HeaderAdmin/>
                    <div className={`infopage`}>
                        <div className={`titlearea`}>
                            <h6 className={`title`}>{titlePage}</h6>
                            <span className={`detail_content counter`}>{totalRegister}</span>
                        </div>                      
                    </div>
                    <div className={`tabledatacontainer`}>
                        <div className={`settings`}>
                            <select className={``}>
                                <option value={""}>Ações</option>
                                <option value={""}>Ativar Selecionados</option>
                                <option value={""}>Desativar Selecionados</option>
                            </select>
                            <button onClick={()=> goToRegisterProductPage(navigate)}>Novo</button>
                        </div>
                        <div className={`tablerow width_100`}>
                            <table className={`table`} cellPadding={0} cellSpacing={0}>
                                <tr>
                                    <th><input type="checkbox"/></th>
                                    <th><span className={`detail_content`}>Produto</span></th>
                                    <th><span className={`detail_content`}>Marca</span></th>
                                    <th><span className={`detail_content`}>Estoque</span></th>
                                    <th><span className={`detail_content`}>Preço de Venda</span></th>
                                    <th><span className={`detail_content`}>Preço Promocional</span></th>
                                    <th><span className={`detail_content`}>Data Expiração Promoção</span></th>
                                    <th><span className={`detail_content`}>Preço de Custo</span></th>
                                    <th><span className={`detail_content`}>Quantidade Estoque</span></th>
                                    <th><span className={`detail_content`}>Produto Ativo</span></th>
                                </tr>
                                {dataProducts && dataProducts.map((dataProducts)=>{
                                    return(
                                        <tr key={dataProducts.id}>
                                            <td><input type="checkbox"/></td>
                                            <td><span className={`detail_content`}>{dataProducts.name}</span></td>
                                            <td><span className={`detail_content`}>{dataProducts.brand}</span></td>
                                            <td><span className={`detail_content`}>{dataProducts.stock}</span></td>
                                            <td><span className={`detail_content`}>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(dataProducts.sale_value)}</span></td>
                                            <td><span className={`detail_content`}>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(dataProducts.promotional_value)}</span></td>
                                            <td><span className={`detail_content`}>{dataProducts.promotion_expiration_date}</span></td>
                                            <td><span className={`detail_content`}>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(dataProducts.promotional_value)}</span></td>
                                            <td><span className={`detail_content`}>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(dataProducts.cost)}</span></td>
                                            <td>
                                                <span className={`detail_content ${!dataProducts.product_unavailable ? `inactive_item` : `active_item`}`}>
                                                    {!dataProducts.product_unavailable ? `Ativo ` : `Inativo`}
                                                </span>    
                                            </td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>
                        <div className={`pagination`}>                       
                            <BsArrowLeftCircle color=""/>                          
                            <button className={`btn_pagination active_page`}>1</button>
                            <button className={`btn_pagination`}>2</button>
                            <button className={`btn_pagination`}>3</button>
                            <BsArrowRightCircleFill/>
                        </div>
                    </div>         
                </div>
            </section>
        </main>
    )
}

export default ProductsPage;