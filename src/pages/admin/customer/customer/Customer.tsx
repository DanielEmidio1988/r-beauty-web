
import style from "./Customer.module.scss";
import { useCustomerViewModel } from "./CustomerViewModel";

function Customer(){
    const { navigate } = useCustomerViewModel();

    return(
        <div className={style.customer}>
            {/* your code here */}
        </div>
    )
}

export default Customer
