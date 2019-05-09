/** kitadmin-v2.1.0 MIT License By http://kit.zhengjinfan.cn Author Van Zheng */ ;
"use strict";
var _createClass = function () {
    function e(e, l) {
        for (var a = 0; a < l.length; a++) {
            var i = l[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    return function (l, a, i) {
        return a && e(l.prototype, a), i && e(l, i), l
    }
}();

function _classCallCheck(e, l) {
    if (!(e instanceof l)) throw new TypeError("Cannot call a class as a function")
}
layui.define(["layer", "utils", "axios", "laytpl"], function (e) {
    var l = "cascader",
        a = layui.jquery,
        i = layui.layer,
        n = layui.utils,
        s = layui.lodash,
        t = layui.laytpl,
        c = {
            tpl: ['<div class="kit-cascader" kit-filter="{{d.filter}}">', '  <div class="kit-cascader-title">', '    <span class="kit-cascader-show">{{d.placeholder}}</span>', '    <div class="kit-icon">', '      <i class="layui-icon">&#xe61a;</i>', "    </div>", "  </div>", "  {{d.content}}", "</div>"],
            renderHTML: function (e) {
                var l = e._elem,
                    a = e.data,
                    i = e.callback,
                    s = e.filter,
                    c = ['<ul class="kit-cascader-list">'];
                this.recursion(c, a, 0);
                var r = l[0].placeholder;
                l.attr("lay-filter", s), c.length > 0 && (c.push("</ul>"), t(this.tpl.join("")).render({
                    placeholder: "" === r ? "Please select" : r,
                    content: c.join(""),
                    filter: s
                }, function (e) {
                    l.after(e), n.isFunction(i) && i()
                }))
            },
            recursion: function (e, l, a) {
                var i = this,
                    n = [];
                s.forEach(l, function (e, l) {
                    e.pid === a && n.push(e)
                }), n.length > 0 && s.forEach(n, function (l) {
                    e.push('<li class="kit-item" data-value="' + l.value + '" data-label="' + l.label + '">'), e.push('<a href="javascript:;">'), e.push("<span>" + l.label + "</span>");
                    var a = l.children;
                    void 0 !== a && null !== a && a.length > 0 && e.push('<i class="layui-icon">&#xe602;</i>'), e.push("</a>"), void 0 !== a && null !== a && a.length > 0 && (e.push('<ul class="kit-cascader-child layui-anim layui-anim-fadein">'), i.recursion(e, a, l.id), e.push("</ul>")), e.push("</li>")
                })
            }
        },
        r = function () {
            function e() {
                _classCallCheck(this, e), this.config = {
                    filter: n.randomCode()
                }
            }
            return _createClass(e, [{
                key: "set",
                value: function (e) {
                    return a.extend(!0, this.config, e), this
                }
            }, {
                key: "render",
                value: function (e) {
                    var l = this,
                        i = {
                            elem: void 0,
                            defaultValues: [],
                            disabled: !1,
                            data: [],
                            onChange: void 0,
                            onClick: void 0,
                            filter: l.config.filter
                        };
                    a.extend(!0, i, e), void 0 !== i.elem ? n.isString(i.elem) && 0 === a(i.elem).length ? console.warn("Cascader Error:请为cascader绑定elem.") : n.isObject(i.elem) && 0 === i.elem.length ? console.warn("Cascader Error:请为cascader绑定elem.") : (i.elem = n.isString(i.elem) ? a(i.elem) : i.elem, i.elem.length > 1 ? console.warn("Cascader Error:一次只能渲染一个Cascader.") : c.renderHTML({
                        filter: i.filter,
                        _elem: i.elem,
                        data: [{
                            id: 1,
                            pid: 0,
                            value: "440000",
                            label: "广东省",
                            children: [{
                                id: 2,
                                pid: 1,
                                value: "440100",
                                label: "广州市",
                                children: [{
                                    id: 3,
                                    pid: 2,
                                    value: "440106",
                                    label: "天河区"
                                }, {
                                    id: 4,
                                    pid: 2,
                                    value: "440104",
                                    label: "越秀区"
                                }, {
                                    id: 5,
                                    pid: 2,
                                    value: "440105",
                                    label: "海珠区"
                                }]
                            }]
                        }, {
                            id: 11,
                            pid: 0,
                            value: "510000",
                            label: "四川省",
                            children: [{
                                id: 22,
                                pid: 11,
                                value: "510100",
                                label: "成都市",
                                children: [{
                                    id: 33,
                                    pid: 22,
                                    value: "510101",
                                    label: "市辖区"
                                }, {
                                    id: 44,
                                    pid: 22,
                                    value: "510104",
                                    label: "锦江区"
                                }, {
                                    id: 55,
                                    pid: 22,
                                    value: "510105",
                                    label: "青羊区"
                                }]
                            }]
                        }],
                        callback: function () {
                            l.bind(i)
                        }
                    })) : console.warn("Cascader Error:请为cascader绑定elem.")
                }
            }, {
                key: "bind",
                value: function (e) {
                    var l = a("*[kit-filter=" + e.filter + "]"),
                        i = l.find(".kit-cascader-show"),
                        s = void 0;
                    i.on("click", function (e) {
                        layui.stope(e), (s = l.find(".kit-cascader-list")).hasClass("layui-show") || (s.addClass("layui-show"), a(document).one("click", function (e) {
                            layui.stope(e), s.removeClass("layui-show")
                        }))
                    }), l.find(".kit-item").on("click", function (t) {
                        layui.stope(t);
                        var c = {
                                values: [],
                                labels: [],
                                objs: []
                            },
                            r = a(this);
                        r.addClass("layui-this").siblings().removeClass("layui-this");
                        var u = r.children(".kit-cascader-child");
                        u.length > 0 ? (r.siblings().find(".kit-item").removeClass("layui-this"), r.siblings().find(".kit-cascader-child").removeClass("layui-show"), u.addClass("layui-show")) : (l.find("li.layui-this").each(function (e, l) {
                            var i = a(this).attr("data-value"),
                                n = a(this).attr("data-label");
                            c.values.push(i), c.labels.push(n), c.objs.push({
                                value: i,
                                label: n
                            })
                        }), s && s.removeClass("layui-show"), i.html(c.labels.join("/")), e.elem.val(c.values.join(",")), n.isFunction(e.onChange) && e.onChange({
                            elem: e.elem,
                            obj: c
                        })), n.isFunction(e.onClick) && e.onClick({
                            elem: r,
                            obj: {
                                value: r.attr("data-value"),
                                label: r.attr("data-label")
                            }
                        })
                    })
                }
            }, {
                key: "hello",
                value: function () {
                    i.msg("cccc")
                }
            }, {
                key: "on",
                value: function (e, a) {
                    return layui.onevent.call(this, l, e, a)
                }
            }]), e
        }();
    e(l, r)
});
//# sourceMappingURL=cascader.js.map