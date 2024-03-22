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
    let i = 1;
    let output = "";

    while (i <= limit) {
      output += `${base} x ${i} = ${base * i}\n`;
      i++;
    }

    return output;
  }
}
