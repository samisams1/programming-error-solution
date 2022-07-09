Start script missing error when running npm start



I'm receiving this error when trying to debug my node application using the npm start command.

Error:
npm ERR! Windows_NT 6.3.9600
npm ERR! argv "C:\\Program Files\\nodejs\\\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" "start"
npm ERR! node v0.12.7
npm ERR! npm  v2.11.3

npm ERR! missing script: start
npm ERR!
npm ERR! If you need help, you may report this error at:
npm ERR!     <https://github.com/npm/npm/issues>npm ERR! Please include the following file with any support request:
npm ERR!     C:\Users\andrmoll.NORTHAMERICA\Documents\GitHub\SVIChallenge\npm-debug.log

From the debug file:
Error: missing script: start
       at run (C:\Program Files\nodejs\node_modules\npm\lib\run-script.js:142:19)
       at C:\Program Files\nodejs\node_modules\npm\lib\run-script.js:58:5
       at C:\Program Files\nodejs\node_modules\npm\node_modules\read-package-json\read-json.js:345:5
       at checkBinReferences_ (C:\Program Files\nodejs\node_modules\npm\node_modules\read-package-json\read-json.js:309:45)
       at final (C:\Program Files\nodejs\node_modules\npm\node_modules\read-package-json\read-json.js:343:3)
       at then (C:\Program Files\nodejs\node_modules\npm\node_modules\read-package-json\read-json.js:113:5)
       at C:\Program Files\nodejs\node_modules\npm\node_modules\read-package-json\read-json.js:300:12
       at evalmachine.<anonymous>:334:14
       at C:\Program Files\nodejs\node_modules\npm\node_modules\graceful-fs\graceful-fs.js:102:5
       at FSReqWrap.oncomplete (evalmachine.<anonymous>:95:15



It looks like you might not have defined a start script in your package.json file or your project does not contain a server.js file.

If there is a server.js file in the root of your package, then npm will default the start command to node server.js.

https://docs.npmjs.com/misc/scripts#default-values

You could either change the name of your application script to server.js or add the following to your package.json

"scripts": {
    "start": "node your-script.js"
}
Or ... you could just run node your-script.js directly
