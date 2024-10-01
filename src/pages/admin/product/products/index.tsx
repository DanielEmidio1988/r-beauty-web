import React, {useState, useEffect} from "react";
import { IProduct } from "../../../../types/IProduct";
import MenuAdmin from "../../../../components/menu-admin";
import HeaderAdmin from "../../../../components/header/header-admin";
import products from "../../../../assets/data/products.json";
import {BsArrowLeftCircle, BsArrowLeftCircleFill, BsArrowRightCircle, BsArrowRightCircleFill} from "react-icons/bs";

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
    const [product, setProduct] = useState<IProduct | {}>({
        id: "",
        id_user: "",
        name: "",
        brand: "",
        profit: 0,
        cost: 0,
        suggested_sale: 0,
        sale_value: 0,
        promotional_value: 0,
        active_promotion: false,
        promotion_expiration_date: "",
        stock: 0,
        product_unavailable: false,
    });
    const productsFields: IProductFields[] = [
        {
            name: "name",
            label: "Nome do produto",
            legend: "",
            type: "text"
        },
        {
            name: "brand",
            label: "Marca do produto",
            legend: "",
            type: "select"
        },
        {
            name: "cost",
            label: "Custo do produto",
            legend: "Valor do produto no momento que ele foi adquirido na ultima compra",
            type: "number"
        },
        {
            name: "suggested_sale",
            label: "Preço de venda sugerido",
            legend: "Valor de venda sugerido com base na margem de lucro da marca",
            type: "number"
        },
        {
            name: "sale_value",
            label: "Preço de venda",
            legend: "Valor padrão de venda do produto",
            type: "number"
        },
        {
            name: "stock",
            label: "Quantidade em estoque",
            legend: "",
            type: "number"
        },
        {
            name: "active_promotion",
            label: "Promoção Ativa",
            legend: "",
            type: "checkbox"
        },
        {
            name: "promotion_name",
            label: "Nome campanha",
            legend: "Nome da campanha que está atribuido o periodo promocional",
            type: "text"
        },
        {
            name: "promotional_value",
            label: "Preço promocional",
            legend: "Valor que será aplicado na venda no momento da venda, caso a promoção esteja ativa",
            type: "number"
        },
        {
            name: "promotion_expiration_date",
            label: "Data encerramento promoção",
            legend: "",
            type: "number"
        }
               
    ];

    useEffect(()=>{
        getAllProducts();
    });

    function getAllProducts(){
        const allProducts = products
        const totalProducts = allProducts.length > 1 ? `${allProducts.length} registros` : `${allProducts.length} registro`;
        setDataProducts(allProducts);
        setTotalRegister(totalProducts);
    }

    function newProduct(){
        //cadastro de produto
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
                            <span className={`counter`}>{totalRegister}</span>
                        </div>                      
                    </div>
                    <div className={`tabledatacontainer`}>
                        <div className={`settings`}>
                            <select className={``}>
                                <option value={""}>Ações</option>
                                <option value={""}>Ativar Selecionados</option>
                                <option value={""}>Desativar Selecionados</option>
                            </select>
                            <button onClick={()=> newProduct()}>Novo</button>
                        </div>
                        <div className={`tablerow width_100`}>
                            <table className={`table`} cellPadding={0} cellSpacing={0}>
                                <tr>
                                    <th><input type="checkbox"/></th>
                                    <th><span>Produto</span></th>
                                    <th><span>Marca</span></th>
                                    <th><span>Estoque</span></th>
                                    <th><span>Preço de Venda</span></th>
                                    <th><span>Preço Promocional</span></th>
                                    <th><span>Data Expiração Promoção</span></th>
                                    <th><span>Preço de Custo</span></th>
                                    <th><span>Quantidade Estoque</span></th>
                                    <th><span>Produto Ativo</span></th>
                                </tr>
                                {dataProducts && dataProducts.map((dataProducts)=>{
                                    return(
                                        <tr key={dataProducts.id}>
                                            <td><input type="checkbox"/></td>
                                            <td><span>{dataProducts.name}</span></td>
                                            <td><span>{dataProducts.brand}</span></td>
                                            <td><span>{dataProducts.stock}</span></td>
                                            <td><span>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(dataProducts.sale_value)}</span></td>
                                            <td><span>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(dataProducts.promotional_value)}</span></td>
                                            <td><span>{dataProducts.promotion_expiration_date}</span></td>
                                            <td><span>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(dataProducts.promotional_value)}</span></td>
                                            <td><span>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(dataProducts.cost)}</span></td>
                                            <td>
                                                <span className={`${!dataProducts.product_unavailable ? `inactive_item` : `active_item`}`}>
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