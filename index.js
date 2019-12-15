const fs = require("fs")
const jquery=require('jquery')
const jsdom=require('jsdom') 

const html = fs.readFileSync('test.html').toString('utf8') 
const dom= new jsdom.JSDOM(html) 
const $=jquery(dom.window);

let ss=$('h1');
console.log(ss.eq(0).text())