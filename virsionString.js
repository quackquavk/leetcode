/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  v1Revision = [];
  v2Revision = [];
  for (let i = 0; i < version1.length; i++) {
    if (version2[i] === "1") {
      v2Revision.push(version2[i]);
    }
    if (version1[i] === "1") {
      v1Revision.push(version1[i]);
    }
    if (version1[i] === ".") {
      continue;
    }
  }
  return v2Revision.join()=== v1Revision.join()? 0:0;
};
console.log(compareVersion("1.0.0", "1.0"));
