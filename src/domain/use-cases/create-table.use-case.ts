export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    const headerMessage = `
${"=".repeat(35)}
          Tabla del ${base}
${"=".repeat(35)}\n
`;
    let i = 1;
    let output = "";

    while (i <= limit) {
      output += `${base} x ${i} = ${base * i}\n`;
      i++;
    }

    output = headerMessage + output;

    return output;
  }
}
