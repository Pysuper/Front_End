/** kitadmin-v2.1.0 MIT License By http://kit.zhengjinfan.cn Author Van Zheng */
;"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
layui.define(function (e) {
    var t, n;
    t = this, n = function () {
        var e, t, n = {version: "0.2.0"}, r = n.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };

        function o(e, t, n) {
            return e < t ? t : e > n ? n : e
        }

        function i(e) {
            return 100 * (-1 + e)
        }

        n.configure = function (e) {
            var t, n;
            for (t in e) void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
            return this
        }, n.status = null, n.set = function (e) {
            var t = n.isStarted();
            e = o(e, r.minimum, 1), n.status = 1 === e ? null : e;
            var u = n.render(!t), c = u.querySelector(r.barSelector), l = r.speed, f = r.easing;
            return u.offsetWidth, s(function (t) {
                "" === r.positionUsing && (r.positionUsing = n.getPositioningCSS()), a(c, function (e, t, n) {
                    var o;
                    o = "translate3d" === r.positionUsing ? {transform: "translate3d(" + i(e) + "%,0,0)"} : "translate" === r.positionUsing ? {transform: "translate(" + i(e) + "%,0)"} : {"margin-left": i(e) + "%"};
                    return o.transition = "all " + t + "ms " + n, o
                }(e, l, f)), 1 === e ? (a(u, {transition: "none", opacity: 1}), u.offsetWidth, setTimeout(function () {
                    a(u, {transition: "all " + l + "ms linear", opacity: 0}), setTimeout(function () {
                        n.remove(), t()
                    }, l)
                }, l)) : setTimeout(t, l)
            }), this
        }, n.isStarted = function () {
            return "number" == typeof n.status
        }, n.start = function () {
            n.status || n.set(0);
            return r.trickle && function e() {
                setTimeout(function () {
                    n.status && (n.trickle(), e())
                }, r.trickleSpeed)
            }(), this
        }, n.done = function (e) {
            return e || n.status ? n.inc(.3 + .5 * Math.random()).set(1) : this
        }, n.inc = function (e) {
            var t = n.status;
            return t ? ("number" != typeof e && (e = (1 - t) * o(Math.random() * t, .1, .95)), t = o(t + e, 0, .994), n.set(t)) : n.start()
        }, n.trickle = function () {
            return n.inc(Math.random() * r.trickleRate)
        }, e = 0, t = 0, n.promise = function (r) {
            return r && "resolved" !== r.state() ? (0 === t && n.start(), e++, t++, r.always(function () {
                0 == --t ? (e = 0, n.done()) : n.set((e - t) / e)
            }), this) : this
        }, n.render = function (e) {
            if (n.isRendered()) return document.getElementById("nprogress");
            c(document.documentElement, "nprogress-busy");
            var t = document.createElement("div");
            t.id = "nprogress", t.innerHTML = r.template;
            var o, s = t.querySelector(r.barSelector), u = e ? "-100" : i(n.status || 0),
                l = document.querySelector(r.parent);
            return a(s, {
                transition: "all 0 linear",
                transform: "translate3d(" + u + "%,0,0)"
            }), r.showSpinner || (o = t.querySelector(r.spinnerSelector)) && d(o), l != document.body && c(l, "nprogress-custom-parent"), l.appendChild(t), t
        }, n.remove = function () {
            l(document.documentElement, "nprogress-busy"), l(document.querySelector(r.parent), "nprogress-custom-parent");
            var e = document.getElementById("nprogress");
            e && d(e)
        }, n.isRendered = function () {
            return !!document.getElementById("nprogress")
        }, n.getPositioningCSS = function () {
            var e = document.body.style,
                t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
            return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
        };
        var s = function () {
            var e = [];

            function t() {
                var n = e.shift();
                n && n(t)
            }

            return function (n) {
                e.push(n), 1 == e.length && t()
            }
        }(), a = function () {
            var e = ["Webkit", "O", "Moz", "ms"], t = {};

            function n(n) {
                return n = n.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (e, t) {
                    return t.toUpperCase()
                }), t[n] || (t[n] = function (t) {
                    var n = document.body.style;
                    if (t in n) return t;
                    for (var r, o = e.length, i = t.charAt(0).toUpperCase() + t.slice(1); o--;) if ((r = e[o] + i) in n) return r;
                    return t
                }(n))
            }

            function r(e, t, r) {
                t = n(t), e.style[t] = r
            }

            return function (e, t) {
                var n, o, i = arguments;
                if (2 == i.length) for (n in t) void 0 !== (o = t[n]) && t.hasOwnProperty(n) && r(e, n, o); else r(e, i[1], i[2])
            }
        }();

        function u(e, t) {
            return ("string" == typeof e ? e : f(e)).indexOf(" " + t + " ") >= 0
        }

        function c(e, t) {
            var n = f(e), r = n + t;
            u(n, t) || (e.className = r.substring(1))
        }

        function l(e, t) {
            var n, r = f(e);
            u(e, t) && (n = r.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1))
        }

        function f(e) {
            return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
        }

        function d(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }

        return n
    }, "function" == typeof define && define.amd ? define(n) : "object" === (void 0 === e ? "undefined" : _typeof(e)) ? module.exports = n() : t.NProgress = n(), e("nprogress")
});
//# sourceMappingURL=nprogress.js.map
