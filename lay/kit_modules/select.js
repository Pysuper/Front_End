/** kitadmin-v2.1.0 MIT License By http://kit.zhengjinfan.cn Author Van Zheng */ ;
"use strict";
var _createClass = function () {
    function t(t, i) {
        for (var e = 0; e < i.length; e++) {
            var l = i[e];
            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(t, l.key, l)
        }
    }
    return function (i, e, l) {
        return e && t(i.prototype, e), l && t(i, l), i
    }
}();

function _classCallCheck(t, i) {
    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function")
}
layui.define(["layer", "lodash", "laytpl", "utils"], function (t) {
    layui.layer;
    var i = layui.jquery,
        e = layui.lodash,
        l = layui.laytpl,
        a = layui.utils,
        n = (i("body"), ['<ul class="kit-select-dropdown layui-anim layui-anim-upbit" style="width:{{d.width}}px;top:{{d.top}}px;" kit-target="{{d.targetId}}">', '  <li class="kit-item">', '    <a href="javascript:;">#xxx</a>', "  </li>", '  <li class="kit-item">', '    <a href="javascript:;">#xxx</a>', "  </li>", '  <li class="kit-item">', '    <a href="javascript:;">#xxx</a>', "  </li>", '  <li class="kit-item">', '    <a href="javascript:;">#xxx</a>', "  </li>", "</ul>"]),
        s = ['<div class="kit-select" kit-id="{{d.targetId}}">', '  <div class="kit-select-render">', '    <div class="kit-select-input">', '      <ul class="kit-select-tags">', '        <li class="kit-item">', '          <a href="javascript:;">', "            <span>#1xx</span>", '            <i class="layui-icon">&#x1006;</i>', "          </a>", "        </li>", '        <li class="kit-item">', '          <input type="text" />', "        </li>", "      </ul>", "    </div>", "  </div>", "</div>"];
    t("select", new(function () {
        function t() {
            _classCallCheck(this, t), this.config = {}
        }
        return _createClass(t, [{
            key: "render",
            value: function (t) {
                i(void 0 === t ? "select.kit-select-target" : "select.kit-select-target[lay-filter=" + t + "]").each(function () {
                    var t = i(this),
                        c = a.randomCode();
                    this.id = c, this.style.display = "none", console.log(t);
                    var r = this.multiple;
                    console.log(r), l(s.join("")).render({
                        targetId: c
                    }, function (e) {
                        t.after(e);
                        var a = i(".kit-select[kit-id=" + c + "]"),
                            s = a.width(),
                            r = a[0].clientHeight;
                        console.log(a), a.find(".kit-select-input").on("click", function (t) {
                            layui.stope(t);
                            var e = i(this).find("input");
                            e.focus(), e.on("input propertychange", function (t) {
                                layui.stope(t);
                                var e = i(this).val().length;
                                i(this).width(8 * e)
                            });
                            var o = i(".kit-select-dropdown[kit-target=" + c + "]");
                            o.length > 0 ? o.show() : l(n.join("")).render({
                                targetId: c,
                                width: s,
                                top: r + 2
                            }, function (t) {
                                a.find(".kit-select-render").append(t)
                            }), i(document).on("click", function () {
                                i(".kit-select-dropdown[kit-target=" + c + "]").hide(), i(this).off("click")
                            })
                        })
                    });
                    var o = [];
                    e.forEach(this.children, function (t, i) {
                        o.push({
                            value: t.value,
                            text: t.innerText
                        })
                    }), i(this).on("change", function () {
                        console.log("cc")
                    })
                }), console.log("cccc")
            }
        }]), t
    }()))
});
//# sourceMappingURL=select.js.map