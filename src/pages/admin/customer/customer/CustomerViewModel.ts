
import { useCustomerModel } from "./CustomerModel";
// import { } from "./CustomerTypes";

export function useCustomerViewModel(){
    const { navigate } =  useCustomerModel();
    // your code here
    return{ navigate }
}
    