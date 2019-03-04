module.exports = function check(str, bracketsConfig) {
    let obj = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        obj[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }
    let resultArr = [];
    let strToArr = str.split("");
    for (let i = 0; i < strToArr.length; i++) {
        if (resultArr.length === 0) {
            resultArr.push(strToArr[i]);
            continue;
        }
        if (strToArr[i] === obj[resultArr[resultArr.length - 1]]) {
            resultArr.pop();
        } else {
            resultArr.push(strToArr[i]);
        }
    }
    return resultArr.length === 0;
};
