export function rBeautyUtils(){

    function formatCurrencyMoney(value: number | undefined, format: string, currency: string):string{
        const currencyMoney = value ? value : 0;

        return currencyMoney.toLocaleString(format, {
            style: "currency",
            currency: currency
        })
    }
    return{formatCurrencyMoney}
}