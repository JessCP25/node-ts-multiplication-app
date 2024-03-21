import fs from "fs";

let output = "";
const base = 5;
const headerMessage = `
${'='.repeat(35)}
          Tabla del ${base}
${'='.repeat(35)}\n
`

let i = 1;

while (i < 11) {
  output +=`${base} x ${i} = ${base * i}\n`
  i++;
}

output = headerMessage + output;
console.log(output);

const outputPath = `outputs`;

fs.mkdirSync(outputPath, {recursive: true});

fs.writeFileSync(`${outputPath}/table-${base}.txt`, output)