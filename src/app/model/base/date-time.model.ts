import { isNullOrUndefined } from "util";

/**
 * Classe usada para converter um objeto de data para o formato aceito no back-end.
 */
export class DateTimeConversor {
    /**
     * Converte um objeto data e hora do bootstrap para o formato 'dd/mm/aaaa hh:mm'.
     * Caso não seja passado hora o valor default é '00:00'.
     * @param obj objeto de entrada
     * @param nomeCampoData nome do campo de data
     * @param possuiHora verifica se o campo irá possuir hora 
     * @param nomeCampoHora nome do campo hora
     */
    public ConverterDateParaString(obj: any, nomeCampoData: string, possuiHora: boolean = false, nomeCampoHora: string = ''): string {
        let data: string = '';
        if (!isNullOrUndefined(obj[nomeCampoData])) {
            if (possuiHora)
                data = `${obj[nomeCampoData].day}/${obj[nomeCampoData].month}/${obj[nomeCampoData].year} ${obj[nomeCampoHora].hour}:${obj[nomeCampoHora].minute}`
            else
                data = `${obj[nomeCampoData].day}/${obj[nomeCampoData].month}/${obj[nomeCampoData].year} 00:00`;
        }
        return data;
    }
}