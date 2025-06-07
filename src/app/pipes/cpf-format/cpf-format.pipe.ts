import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfFormat'
})
export class CpfFormatPipe implements PipeTransform {


  transform(value: string | null | undefined): string {
    if (!value) return '';

    const cleaned = value.replace(/\D/g, ''); // remove tudo que não for número

    if (cleaned.length !== 11) return value; // CPF precisa ter 11 dígitos

    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

}
