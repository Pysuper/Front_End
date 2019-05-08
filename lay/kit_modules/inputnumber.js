/** kitadmin-v2.1.0 MIT License By http://kit.zhengjinfan.cn Author Van Zheng */
;"use strict";
layui.define(["jquery", "laytpl"], function (t) {
    var e = layui.jquery, i = layui.laytpl,
        n = ['<div class="kit-inputnumber" kit-in-for="{{d.id}}" style="left:{{d.left}}px;">', '  <div class="kit-inputnumber-up"><i class="layui-icon">&#xe619;</i></div>', '  <div class="kit-inputnumber-down"><i class="layui-icon">&#xe61a;</i></div>', "</div>"],
        a = function () {
            this.config = {max: 1e6, min: 0, precision: 1, defaultType: "integer", onClicked: void 0}
        };
    a.prototype.set = function (t) {
        return e.extend(!0, this.config, t), this
    }, a.prototype.render = function () {
        var t = this.config;
        e('input[kit-target="inputnumber"]').each(function () {
            var a = e(this);
            if (!a.attr("data-rendered")) {
                var u = r.randomCode();
                i(n.join("")).render({id: u, left: a[0].offsetWidth - 28}, function (i) {
                    var n = a[0].min || t.min, l = a[0].max || t.max, o = a.attr("kit-in-precision") || t.precision;
                    a.attr("kit-in-type") || t.defaultType;
                    a[0].id = u, a.parent().append(i), a.attr("data-rendered", "true");
                    var d = a.val();
                    switch (0 == r.validate(d) && a.val(0), t.defaultType) {
                        case"integer":
                            parseInt(d) > parseInt(l) && a.val(l), parseInt(d) < parseInt(n) && a.val(n);
                            break;
                        case"double":
                            parseFloat(d) > parseFloat(l) && a.val(l), parseFloat(d) < parseFloat(n) && a.val(n)
                    }
                    var s = e('div[kit-in-for="' + u + '"]');
                    s.find(".kit-inputnumber-up").off("click").on("click", function () {
                        var e = r.validate(a.val());
                        if ("integer" === t.defaultType) {
                            var i = parseInt(e);
                            (i += parseInt(o)) >= (l = parseInt(l)) && (i = l), a.val(i)
                        }
                        r.isFunction(t.onClicked) && t.onClicked({elem: a, value: e})
                    }), s.find(".kit-inputnumber-down").off("click").on("click", function () {
                        var e = r.validate(a.val());
                        if ("integer" === t.defaultType) {
                            var i = parseInt(e);
                            (i -= parseInt(o)) <= (n = parseInt(n)) && (i = n), a.val(i)
                        }
                        r.isFunction(t.onClicked) && t.onClicked({elem: a, value: e})
                    })
                })
            }
        })
    };
    var r = {
        randomCode: function () {
            return Math.random().toString(36).substr(2)
        }, validate: function (t) {
            return "" !== t && u.isInteger(t) || u.isDouble(t) ? t : 0
        }, isFunction: function (t) {
            return "function" == typeof t
        }
    }, u = {
        isInteger: function (t) {
            return 0 != t.length && /^[-+]?\d*$/.test(t)
        }, isDouble: function (t) {
            return 0 != t.length && /^[-\+]?\d+(\.\d+)?$/.test(t)
        }
    };
    t("inputnumber", new a)
});
//# sourceMappingURL=inputnumber.js.map
