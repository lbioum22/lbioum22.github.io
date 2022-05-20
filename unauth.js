//Identity function unauthorised
lpTag.identities = [];
lpTag.identities.push(identityFn);
function identityFn(callback) {
  callback(null);
}
