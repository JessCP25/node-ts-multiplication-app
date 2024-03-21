import { mainModule } from "process"
import { yarg } from "./config/plugins/yargs.plugin"


console.log(process.argv)

console.log(yarg);

(async()=>{
  await main();
})()


async function main() {
  console.log('Ejecutando main')
}