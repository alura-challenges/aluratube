"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.headers = headers;
exports.previewData = previewData;
exports.cookies = cookies;
var _requestAsyncStorage = require("./request-async-storage");
var _staticGenerationBailout = require("./static-generation-bailout");
function headers() {
    (0, _staticGenerationBailout).staticGenerationBailout('headers');
    const requestStore = _requestAsyncStorage.requestAsyncStorage && 'getStore' in _requestAsyncStorage.requestAsyncStorage ? _requestAsyncStorage.requestAsyncStorage.getStore() : _requestAsyncStorage.requestAsyncStorage;
    return requestStore.headers;
}
function previewData() {
    (0, _staticGenerationBailout).staticGenerationBailout('previewData');
    const requestStore = _requestAsyncStorage.requestAsyncStorage && 'getStore' in _requestAsyncStorage.requestAsyncStorage ? _requestAsyncStorage.requestAsyncStorage.getStore() : _requestAsyncStorage.requestAsyncStorage;
    return requestStore.previewData;
}
function cookies() {
    (0, _staticGenerationBailout).staticGenerationBailout('cookies');
    const requestStore = _requestAsyncStorage.requestAsyncStorage && 'getStore' in _requestAsyncStorage.requestAsyncStorage ? _requestAsyncStorage.requestAsyncStorage.getStore() : _requestAsyncStorage.requestAsyncStorage;
    return requestStore.cookies;
}

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

//# sourceMappingURL=headers.js.map