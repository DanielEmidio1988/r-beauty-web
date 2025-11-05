
import { useRegisterBrandModel } from "./RegisterBrandModel";
// import { } from "./RegisterBrandTypes";

export function useRegisterBrandViewModel(){
    const { navigate } =  useRegisterBrandModel();
    // your code here
    return{ navigate }
}
    