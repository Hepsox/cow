const mesInfos = require("./information.js");
const cowsay = require("cowsay");
console.log(cowsay.think({
    text : `${mesInfos.firstName} ${mesInfos.campus}`,
    e : "oO",
    T : "U "
})); 