const fs = require('fs')
const path = require('path')
const node_uid = require('node-uid')
const readline = require('readline')

const r1 = readline.createInterface({
    input: fs.createReadStream("./wxAddress.txt")
});

let addressData = [];
let country, province, city;
let countryObj = {}, provinceObj = {}, cityObj = {};

r1.on('line', function(line){ //事件监听
    let arr = line.split('|');
    let eng = arr[0], val = arr[1];
    let keys = eng.split('_');

    if (keys.length === 1 && val !== country) {
        country = val;
        provinceObj = {};
        cityObj = {};
        if (countryObj.name) {
            addressData.push(countryObj);
        }
        countryObj = {
            name: val,
            english: eng,
            child: []
        }
    }
    if (keys.length === 2) {
        provinceObj = {
            name: val,
            english: eng,
            child: []
        }
        countryObj.child.push(provinceObj);
    }
    if (keys.length === 3) {
        cityObj = {
            name: val,
            english: eng,
            child: []
        }
        provinceObj.child.push(cityObj);
    }
});

r1.on('close', () => {
    fs.writeFile('./wxAddressTree.json', JSON.stringify(addressData), (err) => {
        if (!err) {
            console.log('生成树成功')
        }
    })
})
