import { yarg } from "./config/plugins/yargs.plugin"
import { ServerApp } from "./presentation/server-app";


const { b: base, l:limit, s:showTable, n:name, d: destination} = yarg;


(async()=>{
  await main();
})()


async function main() {

  ServerApp.run({base, limit, showTable, name, destination})
}