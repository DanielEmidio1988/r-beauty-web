import style from "./RegisterBrandPage.module.scss";
import { BsArrowLeftCircle, BsArrowLeftCircleFill, BsArrowRightCircle, BsArrowRightCircleFill } from "react-icons/bs";
import MenuAdmin from "../../../../../layouts/adminlayout/components/menuadmin/MenuAdmin";
import HeaderAdmin from "../../../../../layouts/adminlayout/components/headeradmin/HeaderAdmin";
import { useRegisterBrandPageViewModel } from "./RegisterBrandPageViewModel";

function RegisterBrandsPage() {
    const {
        context,
        titlePage,
        dataBrands,
        totalRegister,
        getAllBrands,
    } = useRegisterBrandPageViewModel()

    return (
        <>
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
                    {/* <button onClick={()=> newBrand()}>Novo</button> */}
                </div>
                <div className={`tablerow width_100`}>
                    <table className={`table`} cellPadding={0} cellSpacing={0}>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th><span>Marca</span></th>
                            <th><span>Lucratividade</span></th>
                            <th><span>Marca Ativa</span></th>
                        </tr>
                        {dataBrands && dataBrands.map((dataBrand) => {
                            return (
                                <tr key={dataBrand.id}>
                                    <td><input type="checkbox" /></td>
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
                    <BsArrowLeftCircle color="" />
                    <button className={`btn_pagination active_page`}>1</button>
                    <button className={`btn_pagination`}>2</button>
                    <button className={`btn_pagination`}>3</button>
                    <BsArrowRightCircleFill />
                </div>
            </div>
        </>
    )
}

export default RegisterBrandsPage