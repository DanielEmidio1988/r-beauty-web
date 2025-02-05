import { useRegisterBrandPage } from "./useRegisterBrandPage";
import style from "./RegisterBrandPage.module.scss";
import {BsArrowLeftCircle, BsArrowLeftCircleFill, BsArrowRightCircle, BsArrowRightCircleFill} from "react-icons/bs";
import MenuAdmin from "../../../../../layouts/adminlayout/components/menuadmin/MenuAdmin";
import HeaderAdmin from "../../../../../layouts/adminlayout/components/header-admin/HeaderAdmin";

function RegisterBrandsPage() {
    const logic = useRegisterBrandPage();

    return (
        <main className={`pageadmin`}>
            <section className={`sectionarea_admin`}>
                <MenuAdmin />
                <div className={`dataarea`}>
                    <HeaderAdmin/>
                    <div className={`infopage`}>
                        <div className={`titlearea`}>
                            <h6 className={`title`}>{logic.titlePage}</h6>
                            <span className={`counter`}>{logic.totalRegister}</span>
                        </div>                      
                    </div>
                    <div className={`tabledatacontainer`}>
                        <div className={`settings`}>
                            <select className={``}>
                                <option value={""}>Ações</option>
                                <option value={""}>Ativar Selecionados</option>
                                <option value={""}>Desativar Selecionados</option>
                            </select>
                            {/* <button onClick={()=> newBrand()}>Novo</button> */}
                        </div>
                        <div className={`tablerow width_100`}>
                            <table className={`table`} cellPadding={0} cellSpacing={0}>
                                <tr>
                                    <th><input type="checkbox"/></th>
                                    <th><span>Marca</span></th>
                                    <th><span>Lucratividade</span></th>
                                    <th><span>Marca Ativa</span></th>
                                </tr>
                                {logic.dataBrands && logic.dataBrands.map((dataBrand)=>{
                                    return(
                                        <tr key={dataBrand.id}>
                                            <td><input type="checkbox"/></td>
                                            <td><span>{dataBrand.name}</span></td>
                                            <td><span>{dataBrand.profit} %</span></td>
                                            <td>
                                                <span className={`${!dataBrand.brand_unavailable ? `inactive_item` : `active_item`}`}>
                                                    {!dataBrand.brand_unavailable ? `Ativo ` : `Inativo`}
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

export default RegisterBrandsPage