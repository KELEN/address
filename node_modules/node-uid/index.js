
let lengthVersion = 30;
const mult = process.memoryUsage().heapTotal % 1000;
module.exports = function(length) {
    if (length && typeof length !== 'number') return;
    lengthVersion = Number(length) || lengthVersion;
    const now = Date.now() * process.memoryUsage().heapUsed * mult;
    const radix = 36;
    let id = now.toString(radix);
    const getId = function() {
        if (id.length < lengthVersion) {
            id = id + now.toString(radix);
            return getId();
        }
        return id.slice(0, lengthVersion);
    };
    return getId();
};
