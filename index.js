const REG_EXP = new RegExp("^gs://([^/]+)/(.+)$");
const parse = uri => {
  const bucket = uri.replace(REG_EXP, "$1");
  const file = uri.replace(REG_EXP, "$2");
  return {
    uri,
    bucket,
    file
  };
};
module.exports = {
  parse
};
