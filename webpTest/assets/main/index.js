System.register("chunks:///_virtual/main",["./NewComponent.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/NewComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,o,r;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,r=t.Component}],execute:function(){var c;e._RF.push({},"1658dZ/+LtJg7RUk3GW/8za","NewComponent",void 0);var s=o.ccclass;o.property,t("NewComponent",s("NewComponent")(c=function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){var t=navigator.userAgent,n=t.match(/OS (\d+)_/i),e=(n&&parseInt(n[1],10),/iP(hone|od|ad)/.test(t),window.cc.sys.hasFeature);window.cc.sys.hasFeature=function(t){return"WEBP"!==t&&e.call(this,t)}},e}(r))||c);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});