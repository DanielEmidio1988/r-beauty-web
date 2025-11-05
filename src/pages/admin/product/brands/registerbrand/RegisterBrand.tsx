
import style from "./RegisterBrand.module.scss";
import { useRegisterBrandViewModel } from "./RegisterBrandViewModel";

function RegisterBrand(){
    const { navigate } = useRegisterBrandViewModel();

    return(
        <div className={style.registerbrand}>
            {/* your code here */}
        </div>
    )
}

export default RegisterBrand
