import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const {b: base, l:limit , s:showTable} = yarg;

let output = "";
const headerMessage = `
${'='.repeat(35)}
          Tabla del ${base}
${'='.repeat(35)}\n
`

let i = 1;

  while (i <= limit) {
    output +=`${base} x ${i} = ${base * i}\n`
    i++;
  }


output = headerMessage + output;
if(showTable){
  console.log(output);
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, {recursive: true});

fs.writeFileSync(`${outputPath}/table-${base}.txt`, output)