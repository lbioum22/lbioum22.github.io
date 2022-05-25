//SDEs
indow.lpTag = window.lpTag || {};
lpTag.sdes = lpTag.sdes||[];
lpTag.sdes.push(
{
  "type": "ctmrinfo",
  "info": {
    "customerId": "lpb_subsc1",
    "balance": 11.7,
    "currency": "USD",
    "storeZipCode": "Shopping Cart JS Unauthenticated"
  }

}
);

//Identity function unauthorised
lpTag.identities = [];
lpTag.identities.push(identityFn);
function identityFn(callback) {
  callback(null);
}

//Section
lpTag.section = [
   "Athenticated"
 ];
