const fs = require('fs')
const path = require('path')
const node_uid = require('node-uid')

// 生成aux框架需要的微信数据
fs.readFile('../wxAddressTree.json', (err, data) => {
    let addr = JSON.parse(data);
    let auxAddr = generateAuxAddress(addr);
    fs.writeFile('./auxAddress4.json', JSON.stringify(auxAddr), (err) => {
        console.log(err);
    })
});


let level = 0;
/**
 * 生成aux地址插件的数据
 * @param address
 * @param parent
 */
const generateAuxAddress = (address, parent = 0) => {
    let auxData = [], i, len, uid;
    for (i = 0, len = address.length; i < len; i++) {
        uid = node_uid(8);
        auxData.push({
            name: address[i].name,
            parent: parent,
            value: address[i].name
        });
        let child = address[i]['child'];
        if (Array.isArray(child) && child.length > 0) {
            auxData = auxData.concat(generateAuxAddress(child, address[i].name))
        }
        // if (level < 2) {
        //     level += 1;
        //     if (Array.isArray(child) && child.length > 0) {
        //         auxData = auxData.concat(generateAuxAddress(child, address[i].name))
        //     } else {
        //         auxData = auxData.concat(generateAuxAddress([{ name: uid }], address[i].name))
        //     }
        // } else {
        //     level = 0;
        // }
    }
    return auxData;
}
