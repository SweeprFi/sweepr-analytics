const { ethers } = require("ethers");
const { defaultData } = require("./data");

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const safeGet = (reference, data, index, decimals = 6) => {
  if (data && data[index] && data[index].success) {
    let value = data[index].returnValues[0];
    switch (reference.type) {
      case 1:
        const dec = reference?.decimals >= 0 ? reference.decimals : decimals;
        return parser(parseInt(value?.hex, 16), dec);
      case 2:
        return toDate(parseInt(value?.hex, 16));
      case 3:
        return value?.hex ? parseInt(value?.hex, 16)/(86400) : 0; // 60*60*24
      case 4:
        return (!!value).toString();
      case 5:
        return Number(parseInt(value?.hex, 16));
      default:
        return value;
    }
  }
  return defaultData[reference.type];
}

const decodeStakes = (stakes, decimals) => {
  return stakes.map((stake, index) => {
    return {
      nftId: index,
      Owner: stake[0],
      TokenBoundAccount: stake[1],
      StakedAmount: parser(stake[2], decimals),
      claimedAmount: parser(stake[3], decimals),
    }
  });
}

const parser = (v, d, p = 5) => {
  if(!v) return 0;
  return Number((v / (10 ** d)).toFixed(p));
}

const format = (value, d = 18, p = 5) => {
  return Number(Number(ethers.formatUnits(value,d)).toFixed(p));
}

const toDate = (value) => {
  if (!value || value === 0) return '';
  const date = new Date(value * 1000);
  if(!date.getMonth()) return '';
  return month[date.getMonth()] + ' ' + date.getDate() + ', ' + zeroToNum(date.getHours()) + ':' + zeroToNum(date.getMinutes());
}

const zeroToNum = (val) => {
  return ('00' + val).slice(-2);
}

module.exports = { parser, format, toDate, safeGet, decodeStakes }
