Start script missing error when running npm start



I'm receiving this error when trying to debug my node application using the npm start command.

> npm start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
npm ERR! Missing script: "start"
npm ERR!
npm ERR! Did you mean one of these?
npm ERR!     npm star # Mark your favorite packages       
npm ERR!     npm stars # View packages marked as favorites
npm ERR!
npm ERR! To see a list of scripts, run:
npm ERR!   npm run

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\forsa\AppData\Local\npm-cache\_logs\2022-07-12T00_29_54_787Z-debug-0.log



It looks like you might not have defined a start script in your package.json file or your project does not contain a server.js file.

If there is a server.js file in the root of your package, then npm will default the start command to node server.js.



You could either change the name of your application script to server.js or add the following to your package.json

"scripts": {
    "start": "node your-script.js"
}
Or ... you could just run node your-script.js directly

link: https://www.youtube.com/watch?v=5evYVOjQ4nM


