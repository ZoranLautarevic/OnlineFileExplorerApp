const {execSync} = require("child_process");

try {
    const result = execSync("pwd").toString();
    console.log(result);
}catch(err) {
    console.log(`Error: ${err}`);
}