import { AbstractControl } from '@angular/forms'
const cpfCnpj = require('cpf_cnpj')

/**
 * Faz a validação de CNPJ
 */
export const isValidCNPJ = ( control: AbstractControl ): { [ key: string ]: boolean } => {
  if ( !control.value ) { return null }
  return cpfCnpj.CNPJ.isValid( control.value )
    ? null
    : { cnpj: true }
}
