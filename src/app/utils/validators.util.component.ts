import { FormControl } from "@angular/forms";

/**
 * Verifica se o campo possui somente números.
 * @param form Control a ser validada
 */
export function SomenteNumeros(form: FormControl) {
    const regexSoNumero: RegExp = /[^0-9]/;
    if (String(form.value).match(regexSoNumero)) {
        return { soNumero: true }
    }
}

/**
 * Verifica se a UF inserida é válida.
 * @param control UF a ser validada
 */
export function validateUF(control: FormControl) {
    const regUFIsValid: RegExp = /(A|a)(C|c|L|l|M|m|P|p)|(B|b)(A|a)|(C|c)(E|e)|(D|d)(F|f)|(E|e)(S|s)|(G|g)(O|o)|(M|m)(A|a|G|g|S|s|T|t)|(P|p)(A|a|B|b|E|e|I|i|R|r)|(R|r)(J|j|N|n|O|o|R|r|S|s)|(S|s)(C|c|E|e|P|p)|(T|t)(O|o)/;
    const uf = control.value ? String(control.value).replace(/[^0-9A-Za-z]/g, '') : '';
    if (uf.search(regUFIsValid) && uf.length >= 2) {
        return { ufValidation: true };
    }
}

/**
 * Verifica se o valor do campo é menor que o valor da variavel passada, retorna mensagem de erro caso verdadeiro
 * @param valueComparer Valor a ser comparado com o tamanho da string do FormControl
 * @param withSpecialCharacter Variavel usada para verificar se o valor a ser comparado irá validar caracteres especiais
 */
export function requiredMinLength(valueComparer, withSpecialCharacter = false) {
    return function (control: FormControl) {
        let value;
        if (!withSpecialCharacter) {
            value = control.value ? String(control.value).replace(/[^0-9A-Za-z]/g, '') : '';
        } else {
            value = control.value ? String(control.value) : '';
        }
        if (value.length > 0) {
            if (value.length < valueComparer) {
                return { minLengthCustom: 'Quantidade de caracter(es) inválido(s).' };
            }
        }
    }
}

/**
 * Verifica se o valor do campo é maior que o valor da variavel passada, retorna mensagem de erro caso verdadeiro
 * @param valueComparer Valor a ser comparado com o tamanho da string do FormControl
 * @param withSpecialCharacter Variavel usada para verificar se o valor a ser comparado irá validar caracteres especiais
 */
export function requiredMaxLength(valueComparer, withSpecialCharacter = false) {
    return function (control: FormControl) {
        let value;
        if (!withSpecialCharacter) {
            value = control.value ? String(control.value).replace(/[^0-9A-Za-z]/g, '') : '';
        } else {
            value = control.value ? String(control.value) : '';
        }
        if (value.length > valueComparer) {
            return { maxLengthCustom: 'Limite máximo de ' + valueComparer + ' caracteres excedido.' };
        }
    }
}
/**
 * Verifica se o valor é maior do que a data passada, retornando mensagem de erro caso verdadeiro.
 * @param dateComparer Data a ser comparada, caso nenhum valor seja passado essa data pega a data atual.
 */
export function validateDateMoreThen(dateComparer?: FormControl) {
    return function (control: FormControl) {
        if (control.value && control.value.year) {
            let data = new Date(`${control.value.year}-${control.value.month}-${control.value.day} 06:00 `);
            let dataComparacao = dateComparer && dateComparer.value && dateComparer.value.year ?
                new Date(`${dateComparer.value.year}-${dateComparer.value.month}-${dateComparer.value.day}`)
                : new Date();
            dataComparacao.setHours(0, 0, 0, 0);
            if (data > dataComparacao)
                return { dateMoreThen: 'O campo não pode possuir valor maior que a data:' + dataComparacao.toLocaleDateString() + '.' }
        }
    }
}

/**
 * Verifica se o valor é menor do que a data passada, retornando mensagem de erro caso verdadeiro.
 * @param dateComparer Campo do formulario a ser comparado ao valor selecionado, caso não seja passado nenhum dado será usado a data atual.
 */
export function validateDateLessThen(dateComparer?: FormControl) {
    return function (control: FormControl) {
        if (control.value && control.value.year) {
            let data = new Date(`${control.value.year}-${control.value.month}-${control.value.day} 06:00`);
            let dataComparacao = dateComparer && dateComparer.value && dateComparer.value.year ? new Date(`${dateComparer.value.year}-${dateComparer.value.month}-${dateComparer.value.day} 00:00`)
                : new Date();
            dataComparacao.setHours(0, 0, 0, 0);
            if (data < dataComparacao)
                return { dateLessThen: `O campo não pode possuir valor menor que a data: ${dataComparacao.toLocaleString()}` }
        }
    }
}

/**
 * Compara se o valor está entre duas datas passadas.
 * @param dateComparerMoreThan Data maior que..
 * @param dateComparerLessThan Data menor que..
 */
export function ComparerBetweenDate(dateComparerMoreThan: FormControl, dateComparerLessThan: FormControl) {
    return function (control: FormControl) {
        if (control.value && control.value.year && dateComparerMoreThan.value && dateComparerMoreThan.value.year
            && dateComparerLessThan.value && dateComparerLessThan.value.year) {
            let data = new Date(`${control.value.year}-${control.value.month}-${control.value.day}`);
            let dataComparacaoMaiorQue = new Date(`${dateComparerMoreThan.value.year}-${dateComparerMoreThan.value.month}-${dateComparerMoreThan.value.day}`);
            let dataComparacaoMenorQue = new Date(`${dateComparerLessThan.value.year}-${dateComparerLessThan.value.month}-${dateComparerLessThan.value.day}`);
            if (dataComparacaoMaiorQue < data && data > dataComparacaoMenorQue)
                return { dateLessThen: `O campo deve está entre as datas: ${dataComparacaoMaiorQue.toDateString()} e ${dataComparacaoMenorQue.toDateString()}.` }
        }
    }
}