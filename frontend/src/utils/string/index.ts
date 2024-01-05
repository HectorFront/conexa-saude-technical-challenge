/**
 * @author Hector Rodrigues da Silva
 * @class FormatString
 */
export class FormatString {

    /**
     *
     * @param str
     */
    static capitalize(str: string) {
       return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     *
     * @param str
     */
    static validEmail(str: string) {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(str);
    }

    /**
     *
     * @param str
     */
    static removeAccents(str: string) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    /**
     *
     * @param str
     */
    static formatCurrency(str: string | number) {
        return str.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
}