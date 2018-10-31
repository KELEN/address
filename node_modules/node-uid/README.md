# node-uid
generate unique id
## Install

```bash
$ npm install node-uid
```
## Test

```js
let node_uid = require('node-uid')
node_uid() // -> 27j7nc6s2724k8297814l1c2d4dc2
node_uid(15) // -> 52fd63t7kp202g
```
## API

node-uid is a function that receive a param that is the length of id generated, the module was tested with 10^12 id generated consecutively and the id was unique.