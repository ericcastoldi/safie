const apiResultModel = {
  success: false,
  error: null,
  data: null
};

const createResult = (nativeOptions, extendedOptions) => {
  let opt = extendedOptions ? extendedOptions : {};
  return Object.assign({}, apiResultModel, opt, nativeOptions);
};

const successResult = (data, extendedOptions) => {
  var resultData = data ? data : {};

  return createResult({
    success: true,
    data: resultData
  }, extendedOptions);
};

const errorResult = (err, extendedOptions) => {
  return createResult({
    success: false,
    error: err
  }, extendedOptions);
};

module.exports = {
  successResult: successResult,
  errorResult: errorResult
};
