/** kitadmin-v2.1.0 MIT License By http://kit.zhengjinfan.cn Author Van Zheng */ ;
"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o
} : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
};
layui.define(["mockjsbase", "utils", "lodash"], function (o) {
    var e = layui.mockjsbase,
        t = layui.utils,
        r = layui.lodash;
    o("mockjs", {
        inject: function (o) {
            if ("object" === (void 0 === o ? "undefined" : _typeof(o))) {
                var n = r.keys(o);
                r.forEach(n, function (r, n) {
                    var c = r.split(" "),
                        i = c[0].toLocaleLowerCase(),
                        f = c[1];
                    if (t.oneOf(i, ["get", "post", "put", "delete"])) {
                        var s = o[r];
                        t.oneOf(void 0 === s ? "undefined" : _typeof(s), ["object", "array", "function"]) ? e.mock(f, i, s) : t.error("mockjs config error:template 只支持类型为：[object,array,function] 的处理方式.")
                    } else t.error("mockjs config error:请求方式只支持：[GET,POST,PUT,DELETE]")
                })
            } else t.error("mockjs inject error:APIs参数类型只能为object,请检查.")
        }
    })
});
//# sourceMappingURL=mockjs.js.map