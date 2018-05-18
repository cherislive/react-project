const isSupport = function () {
  return "undefined" !== typeof navigator && -1 !== navigator.userAgent.indexOf("Chrome");
}();
/**
 * @param {string} clientCipher
 * @return {?}
 */
const Debug = function (clientCipher) {
  /** @type {!Array<?>} */
  let randomColor = [Math.floor(50 * Math.random() + 200), Math.floor(50 * Math.random() + 150), Math.floor(50 * Math.random() + 100)].sort(function () {
    return Math.random() - .5;
  });
  /** @type {string} */
  randomColor = "rgb(" + randomColor[0] + ", " + randomColor[1] + ", " + randomColor[2] + ")";
  /** @type {null} */
  let test = null;
  test = isSupport ? function () {
    try {
      if (Debug.disable || "undefined" === typeof window.console || !console.log || !console.log.apply) {
        return;
      }
      /** @type {!Array} */
      var curryArgs = ["%c\u3010%s\u3011%c " + clientCipher + " %c ", "background: #ddd", new Date(), "background: " + randomColor, "background: #333;color: white"];
      console.log.apply(console, curryArgs.concat([].slice.call(arguments, 0)));
    } catch (i) {
    }
  } : function () {
    try {
      if (Debug.disable || "undefined" === typeof window.console || !console.log || !console.log.apply) {
        return;
      }
      /** @type {!Array} */
      var curryArgs = ["\u3010%s\u3011 " + clientCipher + " %s ", new Date()];
      console.log.apply(console, curryArgs.concat([].slice.call(arguments, 0)));
    } catch (n) {
    }
  };
  // }, test.time = function (data) {
  //   console.time('moduleName' + "@" + data);
  // }, test.timeEnd = function () {
  //   console.timeEnd('moduleName' + "@" + 'label');
  // }, test;
  return test;
};
Debug.disable = window.DISABLE_TXV_BROWSERLOG || false;
/** @type {function(string): ?} */
module.exports = Debug;