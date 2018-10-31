const fs = require('fs')
const path = require('path')
const node_uid = require('node-uid')

// 生成aux框架需要的微信数据
fs.readFile('./address.json', (err, data) => {
    let addr = JSON.parse(data);
    console.log(addr);
});
