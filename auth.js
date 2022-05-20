function lpGetAuthenticationToken(callback) {

  console.log('lpGetAuthenticationToken has benn called');
  const jwt = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3d3dy5scGJyYW5kLmNvbSIsInN1YiI6ImxwYl9zdWJzYzEiLCJleHAiOjE3MTc0OTkwMjIsImlhdCI6MTUxNTIxOTAyMiwiZW1haWwiOiJzdWJzYzFAZ21haWwuY29tIiwibHBfc2RlcyI6W3sidHlwZSI6ImN0bXJpbmZvIiwiaW5mbyI6eyJjdXN0b21lcklkIjoibHBiX3N1YnNjMSIsImJhbGFuY2UiOjExLjcsImN1cnJlbmN5IjoiVVNEIiwic3RvcmVaaXBDb2RlIjoiMDAwMDUifX1dfQ.bCQ4fCXmFN8t5T9Z5uJkQ5u6pYgb-47sVRrymzfoU36JDV_W0fB_SBKJ40LlJwE_0e30kMYf6asoiqn-WB87WQgcOlnmNeM_1W2AhgXfoV821E7ig9BqKPBnlVWfg74IGVZWBKdgjN_lYy2yFnqEDWNDrO912Pd7yTah7bum0EhRzTPzZwpu_d1BVOvl-pFMcOzflG3PiG_poV3hsvprrsIOz8NoJl73_7dYoXbhk9ITZOy2gnGhl2UrYsNO1BdS8GUwehdtMElI_ykBO32jrf3hq4EmqDd8gXuJ-zKtnfa7BLXKHx0a3gG8lex7YCO0-kkbhfQA3zENCU44qKJzdw";
  callback(jwt);
}

//Identity function auth
lpTag.identities = [];
lpTag.identities.push(identityFn);
function identityFn(callback) {
  callback (
    {
      iss: "https://www.lpbrand.com",
      acr: "loa1",
      sub: "lpb_subsc1"
    }
  );
} 
