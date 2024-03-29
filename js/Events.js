function Events(e) {
    var t, n, i, o = {},
        r = Array;
    e = e || this, e.on = function(e, t, n) {
        o[e] || (o[e] = []), o[e].push({
            f: t,
            c: n
        })
    }, e.off = function(e, i) {
        for (n = o[e] || [], t = n.length = i ? n.length : 0; ~--t < 0;) i == n[t].f && n.splice(t, 1)
    }, e.emit = function() {
        for (i = r.apply([], arguments), n = o[i.shift()] || [], i = i[0] instanceof r && i[0] || i, t = n.length; ~--t < 0;) n[t].f.apply(n[t].c, i)
    }
}


var SimplexNoise = function(e) {
    void 0 == e && (e = Math), this.grad3 = [
        [1, 1, 0],
        [-1, 1, 0],
        [1, -1, 0],
        [-1, -1, 0],
        [1, 0, 1],
        [-1, 0, 1],
        [1, 0, -1],
        [-1, 0, -1],
        [0, 1, 1],
        [0, -1, 1],
        [0, 1, -1],
        [0, -1, -1]
    ], this.grad4 = [
        [0, 1, 1, 1],
        [0, 1, 1, -1],
        [0, 1, -1, 1],
        [0, 1, -1, -1],
        [0, -1, 1, 1],
        [0, -1, 1, -1],
        [0, -1, -1, 1],
        [0, -1, -1, -1],
        [1, 0, 1, 1],
        [1, 0, 1, -1],
        [1, 0, -1, 1],
        [1, 0, -1, -1],
        [-1, 0, 1, 1],
        [-1, 0, 1, -1],
        [-1, 0, -1, 1],
        [-1, 0, -1, -1],
        [1, 1, 0, 1],
        [1, 1, 0, -1],
        [1, -1, 0, 1],
        [1, -1, 0, -1],
        [-1, 1, 0, 1],
        [-1, 1, 0, -1],
        [-1, -1, 0, 1],
        [-1, -1, 0, -1],
        [1, 1, 1, 0],
        [1, 1, -1, 0],
        [1, -1, 1, 0],
        [1, -1, -1, 0],
        [-1, 1, 1, 0],
        [-1, 1, -1, 0],
        [-1, -1, 1, 0],
        [-1, -1, -1, 0]
    ], this.p = [];
    for (var t = 0; 256 > t; t++) this.p[t] = Math.floor(256 * e.random());
    this.perm = [];
    for (var t = 0; 512 > t; t++) this.perm[t] = this.p[255 & t];
    this.simplex = [
        [0, 1, 2, 3],
        [0, 1, 3, 2],
        [0, 0, 0, 0],
        [0, 2, 3, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 2, 3, 0],
        [0, 2, 1, 3],
        [0, 0, 0, 0],
        [0, 3, 1, 2],
        [0, 3, 2, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 3, 2, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 2, 0, 3],
        [0, 0, 0, 0],
        [1, 3, 0, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 3, 0, 1],
        [2, 3, 1, 0],
        [1, 0, 2, 3],
        [1, 0, 3, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 0, 3, 1],
        [0, 0, 0, 0],
        [2, 1, 3, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 0, 1, 3],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [3, 0, 1, 2],
        [3, 0, 2, 1],
        [0, 0, 0, 0],
        [3, 1, 2, 0],
        [2, 1, 0, 3],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [3, 1, 0, 2],
        [0, 0, 0, 0],
        [3, 2, 0, 1],
        [3, 2, 1, 0]
    ]
};
SimplexNoise.prototype.dot = function(e, t, n) {
    return e[0] * t + e[1] * n
}, SimplexNoise.prototype.dot3 = function(e, t, n, i) {
    return e[0] * t + e[1] * n + e[2] * i
}, SimplexNoise.prototype.dot4 = function(e, t, n, i, o) {
    return e[0] * t + e[1] * n + e[2] * i + e[3] * o
}, SimplexNoise.prototype.noise = function(e, t) {
    var n, i, o, r, s, a = .5 * (Math.sqrt(3) - 1),
        l = (e + t) * a,
        d = Math.floor(e + l),
        c = Math.floor(t + l),
        u = (3 - Math.sqrt(3)) / 6,
        h = (d + c) * u,
        f = d - h,
        p = c - h,
        m = e - f,
        _ = t - p;
    m > _ ? (r = 1, s = 0) : (r = 0, s = 1);
    var g = m - r + u,
        v = _ - s + u,
        b = m - 1 + 2 * u,
        E = _ - 1 + 2 * u,
        x = 255 & d,
        y = 255 & c,
        w = this.perm[x + this.perm[y]] % 12,
        C = this.perm[x + r + this.perm[y + s]] % 12,
        S = this.perm[x + 1 + this.perm[y + 1]] % 12,
        T = .5 - m * m - _ * _;
    0 > T ? n = 0 : (T *= T, n = T * T * this.dot(this.grad3[w], m, _));
    var A = .5 - g * g - v * v;
    0 > A ? i = 0 : (A *= A, i = A * A * this.dot(this.grad3[C], g, v));
    var R = .5 - b * b - E * E;
    return 0 > R ? o = 0 : (R *= R, o = R * R * this.dot(this.grad3[S], b, E)), 70 * (n + i + o)
}, SimplexNoise.prototype.noise3d = function(e, t, n) {
    var i, o, r, s, a, l, d, c, u, h, f = 1 / 3,
        p = (e + t + n) * f,
        m = Math.floor(e + p),
        _ = Math.floor(t + p),
        g = Math.floor(n + p),
        v = 1 / 6,
        b = (m + _ + g) * v,
        E = m - b,
        x = _ - b,
        y = g - b,
        w = e - E,
        C = t - x,
        S = n - y;
    w >= C ? C >= S ? (a = 1, l = 0, d = 0, c = 1, u = 1, h = 0) : w >= S ? (a = 1, l = 0, d = 0, c = 1, u = 0, h = 1) : (a = 0, l = 0, d = 1, c = 1, u = 0, h = 1) : S > C ? (a = 0, l = 0, d = 1, c = 0, u = 1, h = 1) : S > w ? (a = 0, l = 1, d = 0, c = 0, u = 1, h = 1) : (a = 0, l = 1, d = 0, c = 1, u = 1, h = 0);
    var T = w - a + v,
        A = C - l + v,
        R = S - d + v,
        k = w - c + 2 * v,
        H = C - u + 2 * v,
        D = S - h + 2 * v,
        M = w - 1 + 3 * v,
        L = C - 1 + 3 * v,
        N = S - 1 + 3 * v,
        F = 255 & m,
        B = 255 & _,
        O = 255 & g,
        U = this.perm[F + this.perm[B + this.perm[O]]] % 12,
        P = this.perm[F + a + this.perm[B + l + this.perm[O + d]]] % 12,
        I = this.perm[F + c + this.perm[B + u + this.perm[O + h]]] % 12,
        V = this.perm[F + 1 + this.perm[B + 1 + this.perm[O + 1]]] % 12,
        j = .6 - w * w - C * C - S * S;
    0 > j ? i = 0 : (j *= j, i = j * j * this.dot3(this.grad3[U], w, C, S));
    var z = .6 - T * T - A * A - R * R;
    0 > z ? o = 0 : (z *= z, o = z * z * this.dot3(this.grad3[P], T, A, R));
    var G = .6 - k * k - H * H - D * D;
    0 > G ? r = 0 : (G *= G, r = G * G * this.dot3(this.grad3[I], k, H, D));
    var K = .6 - M * M - L * L - N * N;
    return 0 > K ? s = 0 : (K *= K, s = K * K * this.dot3(this.grad3[V], M, L, N)), 32 * (i + o + r + s)
}, SimplexNoise.prototype.noise4d = function(e, t, n, i) {
    var o, r, s, a, l, d, c, u, h, f, p, m, _, g, v, b, E, x = this.grad4,
        y = this.simplex,
        w = this.perm,
        C = (Math.sqrt(5) - 1) / 4,
        S = (5 - Math.sqrt(5)) / 20,
        T = (e + t + n + i) * C,
        A = Math.floor(e + T),
        R = Math.floor(t + T),
        k = Math.floor(n + T),
        H = Math.floor(i + T),
        D = (A + R + k + H) * S,
        M = A - D,
        L = R - D,
        N = k - D,
        F = H - D,
        B = e - M,
        O = t - L,
        U = n - N,
        P = i - F,
        I = B > O ? 32 : 0,
        V = B > U ? 16 : 0,
        j = O > U ? 8 : 0,
        z = B > P ? 4 : 0,
        G = O > P ? 2 : 0,
        K = U > P ? 1 : 0,
        W = I + V + j + z + G + K;
    d = y[W][0] >= 3 ? 1 : 0, c = y[W][1] >= 3 ? 1 : 0, u = y[W][2] >= 3 ? 1 : 0, h = y[W][3] >= 3 ? 1 : 0, f = y[W][0] >= 2 ? 1 : 0, p = y[W][1] >= 2 ? 1 : 0, m = y[W][2] >= 2 ? 1 : 0, _ = y[W][3] >= 2 ? 1 : 0, g = y[W][0] >= 1 ? 1 : 0, v = y[W][1] >= 1 ? 1 : 0, b = y[W][2] >= 1 ? 1 : 0, E = y[W][3] >= 1 ? 1 : 0;
    var X = B - d + S,
        Y = O - c + S,
        Q = U - u + S,
        q = P - h + S,
        J = B - f + 2 * S,
        Z = O - p + 2 * S,
        $ = U - m + 2 * S,
        ee = P - _ + 2 * S,
        te = B - g + 3 * S,
        ne = O - v + 3 * S,
        ie = U - b + 3 * S,
        oe = P - E + 3 * S,
        re = B - 1 + 4 * S,
        se = O - 1 + 4 * S,
        ae = U - 1 + 4 * S,
        le = P - 1 + 4 * S,
        de = 255 & A,
        ce = 255 & R,
        ue = 255 & k,
        he = 255 & H,
        fe = w[de + w[ce + w[ue + w[he]]]] % 32,
        pe = w[de + d + w[ce + c + w[ue + u + w[he + h]]]] % 32,
        me = w[de + f + w[ce + p + w[ue + m + w[he + _]]]] % 32,
        _e = w[de + g + w[ce + v + w[ue + b + w[he + E]]]] % 32,
        ge = w[de + 1 + w[ce + 1 + w[ue + 1 + w[he + 1]]]] % 32,
        ve = .6 - B * B - O * O - U * U - P * P;
    0 > ve ? o = 0 : (ve *= ve, o = ve * ve * this.dot4(x[fe], B, O, U, P));
    var be = .6 - X * X - Y * Y - Q * Q - q * q;
    0 > be ? r = 0 : (be *= be, r = be * be * this.dot4(x[pe], X, Y, Q, q));
    var Ee = .6 - J * J - Z * Z - $ * $ - ee * ee;
    0 > Ee ? s = 0 : (Ee *= Ee, s = Ee * Ee * this.dot4(x[me], J, Z, $, ee));
    var xe = .6 - te * te - ne * ne - ie * ie - oe * oe;
    0 > xe ? a = 0 : (xe *= xe, a = xe * xe * this.dot4(x[_e], te, ne, ie, oe));
    var ye = .6 - re * re - se * se - ae * ae - le * le;
    return 0 > ye ? l = 0 : (ye *= ye, l = ye * ye * this.dot4(x[ge], re, se, ae, le)), 27 * (o + r + s + a + l)
}, ATUtil = {
    randomRange: function(e, t) {
        return e + Math.random() * (t - e)
    },
    randomInt: function(e, t) {
        return Math.floor(e + Math.random() * (t - e + 1))
    },
    map: function(e, t, n, i, o) {
        return ATUtil.lerp(ATUtil.norm(e, t, n), i, o)
    },
    lerp: function(e, t, n) {
        return t + (n - t) * e
    },
    norm: function(e, t, n) {
        return (e - t) / (n - t)
    },
    shuffle: function(e) {
        for (var t, n, i = e.length; i; t = parseInt(Math.random() * i), n = e[--i], e[i] = e[t], e[t] = n);
        return e
    },
    clamp: function(e, t, n) {
        return Math.max(Math.min(e, n), t)
    }
};
var dat = dat || {};
dat.gui = dat.gui || {}, dat.utils = dat.utils || {}, dat.controllers = dat.controllers || {}, dat.dom = dat.dom || {}, dat.color = dat.color || {}, dat.utils.css = function() {
    return {
        load: function(e, t) {
            var t = t || document,
                n = t.createElement("link");
            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.getElementsByTagName("head")[0].appendChild(n)
        },
        inject: function(e, t) {
            var t = t || document,
                n = document.createElement("style");
            n.type = "text/css", n.innerHTML = e, t.getElementsByTagName("head")[0].appendChild(n)
        }
    }
}(), dat.utils.common = function() {
    var e = Array.prototype.forEach,
        t = Array.prototype.slice;
    return {
        BREAK: {},
        extend: function(e) {
            return this.each(t.call(arguments, 1), function(t) {
                for (var n in t) this.isUndefined(t[n]) || (e[n] = t[n])
            }, this), e
        },
        defaults: function(e) {
            return this.each(t.call(arguments, 1), function(t) {
                for (var n in t) this.isUndefined(e[n]) && (e[n] = t[n])
            }, this), e
        },
        compose: function() {
            var e = t.call(arguments);
            return function() {
                for (var n = t.call(arguments), i = e.length - 1; i >= 0; i--) n = [e[i].apply(this, n)];
                return n[0]
            }
        },
        each: function(t, n, i) {
            if (e && t.forEach === e) t.forEach(n, i);
            else if (t.length === t.length + 0)
                for (var o = 0, r = t.length; r > o && !(o in t && n.call(i, t[o], o) === this.BREAK); o++);
            else
                for (o in t)
                    if (n.call(i, t[o], o) === this.BREAK) break
        },
        defer: function(e) {
            setTimeout(e, 0)
        },
        toArray: function(e) {
            return e.toArray ? e.toArray() : t.call(e)
        },
        isUndefined: function(e) {
            return void 0 === e
        },
        isNull: function(e) {
            return null === e
        },
        isNaN: function(e) {
            return e !== e
        },
        isArray: Array.isArray || function(e) {
            return e.constructor === Array
        },
        isObject: function(e) {
            return e === Object(e)
        },
        isNumber: function(e) {
            return e === e + 0
        },
        isString: function(e) {
            return e === e + ""
        },
        isBoolean: function(e) {
            return e === !1 || e === !0
        },
        isFunction: function(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }
    }
}(), dat.controllers.Controller = function(e) {
    var t = function(e, t) {
        this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onFinishChange = this.__onChange = void 0
    };
    return e.extend(t.prototype, {
        onChange: function(e) {
            return this.__onChange = e, this
        },
        onFinishChange: function(e) {
            return this.__onFinishChange = e, this
        },
        setValue: function(e) {
            return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this
        },
        getValue: function() {
            return this.object[this.property]
        },
        updateDisplay: function() {
            return this
        },
        isModified: function() {
            return this.initialValue !== this.getValue()
        }
    }), t
}(dat.utils.common), dat.dom.dom = function(e) {
    function t(t) {
        return "0" === t || e.isUndefined(t) ? 0 : (t = t.match(i), e.isNull(t) ? 0 : parseFloat(t[1]))
    }
    var n = {};
    e.each({
        HTMLEvents: ["change"],
        MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
        KeyboardEvents: ["keydown"]
    }, function(t, i) {
        e.each(t, function(e) {
            n[e] = i
        })
    });
    var i = /(\d+(\.\d+)?)px/,
        o = {
            makeSelectable: function(e, t) {
                void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function() {
                    return !1
                } : function() {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off")
            },
            makeFullscreen: function(t, n, i) {
                e.isUndefined(n) && (n = !0), e.isUndefined(i) && (i = !0), t.style.position = "absolute", n && (t.style.left = 0, t.style.right = 0), i && (t.style.top = 0, t.style.bottom = 0)
            },
            fakeEvent: function(t, i, o, r) {
                var o = o || {},
                    s = n[i];
                if (!s) throw Error("Event type " + i + " not supported.");
                var a = document.createEvent(s);
                switch (s) {
                    case "MouseEvents":
                        a.initMouseEvent(i, o.bubbles || !1, o.cancelable || !0, window, o.clickCount || 1, 0, 0, o.x || o.clientX || 0, o.y || o.clientY || 0, !1, !1, !1, !1, 0, null);
                        break;
                    case "KeyboardEvents":
                        s = a.initKeyboardEvent || a.initKeyEvent, e.defaults(o, {
                            cancelable: !0,
                            ctrlKey: !1,
                            altKey: !1,
                            shiftKey: !1,
                            metaKey: !1,
                            keyCode: void 0,
                            charCode: void 0
                        }), s(i, o.bubbles || !1, o.cancelable, window, o.ctrlKey, o.altKey, o.shiftKey, o.metaKey, o.keyCode, o.charCode);
                        break;
                    default:
                        a.initEvent(i, o.bubbles || !1, o.cancelable || !0)
                }
                e.defaults(a, r), t.dispatchEvent(a)
            },
            bind: function(e, t, n, i) {
                return e.addEventListener ? e.addEventListener(t, n, i || !1) : e.attachEvent && e.attachEvent("on" + t, n), o
            },
            unbind: function(e, t, n, i) {
                return e.removeEventListener ? e.removeEventListener(t, n, i || !1) : e.detachEvent && e.detachEvent("on" + t, n), o
            },
            addClass: function(e, t) {
                if (void 0 === e.className) e.className = t;
                else if (e.className !== t) {
                    var n = e.className.split(/ +/); - 1 == n.indexOf(t) && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                }
                return o
            },
            removeClass: function(e, t) {
                if (t) {
                    if (void 0 !== e.className)
                        if (e.className === t) e.removeAttribute("class");
                        else {
                            var n = e.className.split(/ +/),
                                i = n.indexOf(t); - 1 != i && (n.splice(i, 1), e.className = n.join(" "))
                        }
                } else e.className = void 0;
                return o
            },
            hasClass: function(e, t) {
                return RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
            },
            getWidth: function(e) {
                return e = getComputedStyle(e), t(e["border-left-width"]) + t(e["border-right-width"]) + t(e["padding-left"]) + t(e["padding-right"]) + t(e.width)
            },
            getHeight: function(e) {
                return e = getComputedStyle(e), t(e["border-top-width"]) + t(e["border-bottom-width"]) + t(e["padding-top"]) + t(e["padding-bottom"]) + t(e.height)
            },
            getOffset: function(e) {
                var t = {
                    left: 0,
                    top: 0
                };
                if (e.offsetParent)
                    do t.left += e.offsetLeft, t.top += e.offsetTop; while (e = e.offsetParent);
                return t
            },
            isActive: function(e) {
                return e === document.activeElement && (e.type || e.href)
            }
        };
    return o
}(dat.utils.common), dat.controllers.OptionController = function(e, t, n) {
    var i = function(e, o, r) {
        i.superclass.call(this, e, o);
        var s = this;
        if (this.__select = document.createElement("select"), n.isArray(r)) {
            var a = {};
            n.each(r, function(e) {
                a[e] = e
            }), r = a
        }
        n.each(r, function(e, t) {
            var n = document.createElement("option");
            n.innerHTML = t, n.setAttribute("value", e), s.__select.appendChild(n)
        }), this.updateDisplay(), t.bind(this.__select, "change", function() {
            s.setValue(this.options[this.selectedIndex].value)
        }), this.domElement.appendChild(this.__select)
    };
    return i.superclass = e, n.extend(i.prototype, e.prototype, {
        setValue: function(e) {
            return e = i.superclass.prototype.setValue.call(this, e), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), e
        },
        updateDisplay: function() {
            return this.__select.value = this.getValue(), i.superclass.prototype.updateDisplay.call(this)
        }
    }), i
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.NumberController = function(e, t) {
    var n = function(e, i, o) {
        n.superclass.call(this, e, i), o = o || {}, this.__min = o.min, this.__max = o.max, this.__step = o.step, e = this.__impliedStep = t.isUndefined(this.__step) ? 0 == this.initialValue ? 1 : Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__step, e = e.toString(), this.__precision = e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0
    };
    return n.superclass = e, t.extend(n.prototype, e.prototype, {
        setValue: function(e) {
            return void 0 !== this.__min && e < this.__min ? e = this.__min : void 0 !== this.__max && e > this.__max && (e = this.__max), void 0 !== this.__step && e % this.__step != 0 && (e = Math.round(e / this.__step) * this.__step), n.superclass.prototype.setValue.call(this, e)
        },
        min: function(e) {
            return this.__min = e, this
        },
        max: function(e) {
            return this.__max = e, this
        },
        step: function(e) {
            return this.__step = e, this
        }
    }), n
}(dat.controllers.Controller, dat.utils.common), dat.controllers.NumberControllerBox = function(e, t, n) {
    var i = function(e, o, r) {
        function s() {
            var e = parseFloat(c.__input.value);
            n.isNaN(e) || c.setValue(e)
        }

        function a(e) {
            var t = d - e.clientY;
            c.setValue(c.getValue() + t * c.__impliedStep), d = e.clientY
        }

        function l() {
            t.unbind(window, "mousemove", a), t.unbind(window, "mouseup", l)
        }
        this.__truncationSuspended = !1, i.superclass.call(this, e, o, r);
        var d, c = this;
        this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(this.__input, "change", s), t.bind(this.__input, "blur", function() {
            s(), c.__onFinishChange && c.__onFinishChange.call(c, c.getValue())
        }), t.bind(this.__input, "mousedown", function(e) {
            t.bind(window, "mousemove", a), t.bind(window, "mouseup", l), d = e.clientY
        }), t.bind(this.__input, "keydown", function(e) {
            13 === e.keyCode && (c.__truncationSuspended = !0, this.blur(), c.__truncationSuspended = !1)
        }), this.updateDisplay(), this.domElement.appendChild(this.__input)
    };
    return i.superclass = e, n.extend(i.prototype, e.prototype, {
        updateDisplay: function() {
            var e, t = this.__input;
            if (this.__truncationSuspended) e = this.getValue();
            else {
                e = this.getValue();
                var n = Math.pow(10, this.__precision);
                e = Math.round(e * n) / n
            }
            return t.value = e, i.superclass.prototype.updateDisplay.call(this)
        }
    }), i
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.common), dat.controllers.NumberControllerSlider = function(e, t, n, i, o) {
    var r = function(e, n, i, o, s) {
        function a(e) {
            e.preventDefault();
            var n = t.getOffset(d.__background),
                i = t.getWidth(d.__background);
            return d.setValue(d.__min + (d.__max - d.__min) * ((e.clientX - n.left) / (n.left + i - n.left))), !1
        }

        function l() {
            t.unbind(window, "mousemove", a), t.unbind(window, "mouseup", l), d.__onFinishChange && d.__onFinishChange.call(d, d.getValue())
        }
        r.superclass.call(this, e, n, {
            min: i,
            max: o,
            step: s
        });
        var d = this;
        this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), t.bind(this.__background, "mousedown", function(e) {
            t.bind(window, "mousemove", a), t.bind(window, "mouseup", l), a(e)
        }), t.addClass(this.__background, "slider"), t.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
    };
    return r.superclass = e, r.useDefaultStyles = function() {
        n.inject(o)
    }, i.extend(r.prototype, e.prototype, {
        updateDisplay: function() {
            return this.__foreground.style.width = (this.getValue() - this.__min) / (this.__max - this.__min) * 100 + "%", r.superclass.prototype.updateDisplay.call(this)
        }
    }), r
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"), dat.controllers.FunctionController = function(e, t, n) {
    var i = function(e, n, o) {
        i.superclass.call(this, e, n);
        var r = this;
        this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === o ? "Fire" : o, t.bind(this.__button, "click", function(e) {
            return e.preventDefault(), r.fire(), !1
        }), t.addClass(this.__button, "button"), this.domElement.appendChild(this.__button)
    };
    return i.superclass = e, n.extend(i.prototype, e.prototype, {
        fire: function() {
            this.__onChange && this.__onChange.call(this), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.getValue().call(this.object)
        }
    }), i
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.BooleanController = function(e, t, n) {
    var i = function(e, n) {
        i.superclass.call(this, e, n);
        var o = this;
        this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), t.bind(this.__checkbox, "change", function() {
            o.setValue(!o.__prev)
        }, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay()
    };
    return i.superclass = e, n.extend(i.prototype, e.prototype, {
        setValue: function(e) {
            return e = i.superclass.prototype.setValue.call(this, e), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), e
        },
        updateDisplay: function() {
            return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, i.superclass.prototype.updateDisplay.call(this)
        }
    }), i
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.color.toString = function(e) {
    return function(t) {
        if (1 == t.a || e.isUndefined(t.a)) {
            for (t = t.hex.toString(16); t.length < 6;) t = "0" + t;
            return "#" + t
        }
        return "rgba(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + "," + t.a + ")"
    }
}(dat.utils.common), dat.color.interpret = function(e, t) {
    var n, i, o = [{
        litmus: t.isString,
        conversions: {
            THREE_CHAR_HEX: {
                read: function(e) {
                    return e = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i), null === e ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString())
                    }
                },
                write: e
            },
            SIX_CHAR_HEX: {
                read: function(e) {
                    return e = e.match(/^#([A-F0-9]{6})$/i), null === e ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + e[1].toString())
                    }
                },
                write: e
            },
            CSS_RGB: {
                read: function(e) {
                    return e = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/), null === e ? !1 : {
                        space: "RGB",
                        r: parseFloat(e[1]),
                        g: parseFloat(e[2]),
                        b: parseFloat(e[3])
                    }
                },
                write: e
            },
            CSS_RGBA: {
                read: function(e) {
                    return e = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/), null === e ? !1 : {
                        space: "RGB",
                        r: parseFloat(e[1]),
                        g: parseFloat(e[2]),
                        b: parseFloat(e[3]),
                        a: parseFloat(e[4])
                    }
                },
                write: e
            }
        }
    }, {
        litmus: t.isNumber,
        conversions: {
            HEX: {
                read: function(e) {
                    return {
                        space: "HEX",
                        hex: e,
                        conversionName: "HEX"
                    }
                },
                write: function(e) {
                    return e.hex
                }
            }
        }
    }, {
        litmus: t.isArray,
        conversions: {
            RGB_ARRAY: {
                read: function(e) {
                    return 3 != e.length ? !1 : {
                        space: "RGB",
                        r: e[0],
                        g: e[1],
                        b: e[2]
                    }
                },
                write: function(e) {
                    return [e.r, e.g, e.b]
                }
            },
            RGBA_ARRAY: {
                read: function(e) {
                    return 4 != e.length ? !1 : {
                        space: "RGB",
                        r: e[0],
                        g: e[1],
                        b: e[2],
                        a: e[3]
                    }
                },
                write: function(e) {
                    return [e.r, e.g, e.b, e.a]
                }
            }
        }
    }, {
        litmus: t.isObject,
        conversions: {
            RGBA_OBJ: {
                read: function(e) {
                    return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) && t.isNumber(e.a) ? {
                        space: "RGB",
                        r: e.r,
                        g: e.g,
                        b: e.b,
                        a: e.a
                    } : !1
                },
                write: function(e) {
                    return {
                        r: e.r,
                        g: e.g,
                        b: e.b,
                        a: e.a
                    }
                }
            },
            RGB_OBJ: {
                read: function(e) {
                    return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) ? {
                        space: "RGB",
                        r: e.r,
                        g: e.g,
                        b: e.b
                    } : !1
                },
                write: function(e) {
                    return {
                        r: e.r,
                        g: e.g,
                        b: e.b
                    }
                }
            },
            HSVA_OBJ: {
                read: function(e) {
                    return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) && t.isNumber(e.a) ? {
                        space: "HSV",
                        h: e.h,
                        s: e.s,
                        v: e.v,
                        a: e.a
                    } : !1
                },
                write: function(e) {
                    return {
                        h: e.h,
                        s: e.s,
                        v: e.v,
                        a: e.a
                    }
                }
            },
            HSV_OBJ: {
                read: function(e) {
                    return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) ? {
                        space: "HSV",
                        h: e.h,
                        s: e.s,
                        v: e.v
                    } : !1
                },
                write: function(e) {
                    return {
                        h: e.h,
                        s: e.s,
                        v: e.v
                    }
                }
            }
        }
    }];
    return function() {
        i = !1;
        var e = arguments.length > 1 ? t.toArray(arguments) : arguments[0];
        return t.each(o, function(o) {
            return o.litmus(e) ? (t.each(o.conversions, function(o, r) {
                return n = o.read(e), i === !1 && n !== !1 ? (i = n, n.conversionName = r, n.conversion = o, t.BREAK) : void 0
            }), t.BREAK) : void 0
        }), i
    }
}(dat.color.toString, dat.utils.common), dat.GUI = dat.gui.GUI = function(e, t, n, i, o, r, s, a, l, d, c, u, h, f, p) {
    function m(e, t, n, r) {
        if (void 0 === t[n]) throw Error("Object " + t + ' has no property "' + n + '"');
        r.color ? t = new c(t, n) : (t = [t, n].concat(r.factoryArgs), t = i.apply(e, t)), r.before instanceof o && (r.before = r.before.__li), v(e, t), f.addClass(t.domElement, "c"), n = document.createElement("span"), f.addClass(n, "property-name"), n.innerHTML = t.property;
        var s = document.createElement("div");
        return s.appendChild(n), s.appendChild(t.domElement), r = _(e, s, r.before), f.addClass(r, N.CLASS_CONTROLLER_ROW), f.addClass(r, typeof t.getValue()), g(e, r, t), e.__controllers.push(t), t
    }

    function _(e, t, n) {
        var i = document.createElement("li");
        return t && i.appendChild(t), n ? e.__ul.insertBefore(i, params.before) : e.__ul.appendChild(i), e.onResize(), i
    }

    function g(e, t, n) {
        if (n.__li = t, n.__gui = e, p.extend(n, {
                options: function(t) {
                    return arguments.length > 1 ? (n.remove(), m(e, n.object, n.property, {
                        before: n.__li.nextElementSibling,
                        factoryArgs: [p.toArray(arguments)]
                    })) : p.isArray(t) || p.isObject(t) ? (n.remove(), m(e, n.object, n.property, {
                        before: n.__li.nextElementSibling,
                        factoryArgs: [t]
                    })) : void 0
                },
                name: function(e) {
                    return n.__li.firstElementChild.firstElementChild.innerHTML = e, n
                },
                listen: function() {
                    return n.__gui.listen(n), n
                },
                remove: function() {
                    return n.__gui.remove(n), n
                }
            }), n instanceof l) {
            var i = new a(n.object, n.property, {
                min: n.__min,
                max: n.__max,
                step: n.__step
            });
            p.each(["updateDisplay", "onChange", "onFinishChange"], function(e) {
                var t = n[e],
                    o = i[e];
                n[e] = i[e] = function() {
                    var e = Array.prototype.slice.call(arguments);
                    return t.apply(n, e), o.apply(i, e)
                }
            }), f.addClass(t, "has-slider"), n.domElement.insertBefore(i.domElement, n.domElement.firstElementChild)
        } else if (n instanceof a) {
            var o = function(t) {
                return p.isNumber(n.__min) && p.isNumber(n.__max) ? (n.remove(), m(e, n.object, n.property, {
                    before: n.__li.nextElementSibling,
                    factoryArgs: [n.__min, n.__max, n.__step]
                })) : t
            };
            n.min = p.compose(o, n.min), n.max = p.compose(o, n.max)
        } else n instanceof r ? (f.bind(t, "click", function() {
            f.fakeEvent(n.__checkbox, "click")
        }), f.bind(n.__checkbox, "click", function(e) {
            e.stopPropagation()
        })) : n instanceof s ? (f.bind(t, "click", function() {
            f.fakeEvent(n.__button, "click")
        }), f.bind(t, "mouseover", function() {
            f.addClass(n.__button, "hover")
        }), f.bind(t, "mouseout", function() {
            f.removeClass(n.__button, "hover")
        })) : n instanceof c && (f.addClass(t, "color"), n.updateDisplay = p.compose(function(e) {
            return t.style.borderLeftColor = n.__color.toString(), e
        }, n.updateDisplay), n.updateDisplay());
        n.setValue = p.compose(function(t) {
            return e.getRoot().__preset_select && n.isModified() && C(e.getRoot(), !0), t
        }, n.setValue)
    }

    function v(e, t) {
        var n = e.getRoot(),
            i = n.__rememberedObjects.indexOf(t.object);
        if (-1 != i) {
            var o = n.__rememberedObjectIndecesToControllers[i];
            if (void 0 === o && (o = {}, n.__rememberedObjectIndecesToControllers[i] = o), o[t.property] = t, n.load && n.load.remembered) {
                if (n = n.load.remembered, n[e.preset]) n = n[e.preset];
                else {
                    if (!n[A]) return;
                    n = n[A]
                }
                n[i] && void 0 !== n[i][t.property] && (i = n[i][t.property], t.initialValue = i, t.setValue(i))
            }
        }
    }

    function b(e) {
        var t = e.__save_row = document.createElement("li");
        f.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), f.addClass(t, "save-row");
        var n = document.createElement("span");
        n.innerHTML = "&nbsp;", f.addClass(n, "button gears");
        var i = document.createElement("span");
        i.innerHTML = "Save", f.addClass(i, "button"), f.addClass(i, "save");
        var o = document.createElement("span");
        o.innerHTML = "New", f.addClass(o, "button"), f.addClass(o, "save-as");
        var r = document.createElement("span");
        r.innerHTML = "Revert", f.addClass(r, "button"), f.addClass(r, "revert");
        var s = e.__preset_select = document.createElement("select");
        if (e.load && e.load.remembered ? p.each(e.load.remembered, function(t, n) {
                w(e, n, n == e.preset)
            }) : w(e, A, !1), f.bind(s, "change", function() {
                for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
                e.preset = this.value
            }), t.appendChild(s), t.appendChild(n), t.appendChild(i), t.appendChild(o), t.appendChild(r), T) {
            var t = document.getElementById("dg-save-locally"),
                a = document.getElementById("dg-local-explain");
            t.style.display = "block", t = document.getElementById("dg-local-storage"), "true" === localStorage.getItem(document.location.href + ".isLocal") && t.setAttribute("checked", "checked");
            var l = function() {
                a.style.display = e.useLocalStorage ? "block" : "none"
            };
            l(), f.bind(t, "change", function() {
                e.useLocalStorage = !e.useLocalStorage, l()
            })
        }
        var d = document.getElementById("dg-new-constructor");
        f.bind(d, "keydown", function(e) {
            e.metaKey && (67 === e.which || 67 == e.keyCode) && k.hide()
        }), f.bind(n, "click", function() {
            d.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), k.show(), d.focus(), d.select()
        }), f.bind(i, "click", function() {
            e.save()
        }), f.bind(o, "click", function() {
            var t = prompt("Enter a new preset name.");
            t && e.saveAs(t)
        }), f.bind(r, "click", function() {
            e.revert()
        })
    }

    function E(e) {
        function t(t) {
            return t.preventDefault(), o = t.clientX, f.addClass(e.__closeButton, N.CLASS_DRAG), f.bind(window, "mousemove", n), f.bind(window, "mouseup", i), !1
        }

        function n(t) {
            return t.preventDefault(), e.width += o - t.clientX, e.onResize(), o = t.clientX, !1
        }

        function i() {
            f.removeClass(e.__closeButton, N.CLASS_DRAG), f.unbind(window, "mousemove", n), f.unbind(window, "mouseup", i)
        }
        e.__resize_handle = document.createElement("div"), p.extend(e.__resize_handle.style, {
            width: "6px",
            marginLeft: "-3px",
            height: "200px",
            cursor: "ew-resize",
            position: "absolute"
        });
        var o;
        f.bind(e.__resize_handle, "mousedown", t), f.bind(e.__closeButton, "mousedown", t), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
    }

    function x(e, t) {
        e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
    }

    function y(e, t) {
        var n = {};
        return p.each(e.__rememberedObjects, function(i, o) {
            var r = {};
            p.each(e.__rememberedObjectIndecesToControllers[o], function(e, n) {
                r[n] = t ? e.initialValue : e.getValue()
            }), n[o] = r
        }), n
    }

    function w(e, t, n) {
        var i = document.createElement("option");
        i.innerHTML = t, i.value = t, e.__preset_select.appendChild(i), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
    }

    function C(e, t) {
        var n = e.__preset_select[e.__preset_select.selectedIndex];
        n.innerHTML = t ? n.value + "*" : n.value
    }

    function S(e) {
        0 != e.length && u(function() {
            S(e)
        }), p.each(e, function(e) {
            e.updateDisplay()
        })
    }
    e.inject(n);
    var T, A = "Default";
    try {
        T = "localStorage" in window && null !== window.localStorage
    } catch (R) {
        T = !1
    }
    var k, H, D = !0,
        M = !1,
        L = [],
        N = function(e) {
            function t() {
                localStorage.setItem(document.location.href + ".gui", JSON.stringify(i.getSaveObject()))
            }

            function n() {
                var e = i.getRoot();
                e.width += 1, p.defer(function() {
                    e.width -= 1
                })
            }
            var i = this;
            this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), f.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], e = e || {}, e = p.defaults(e, {
                autoPlace: !0,
                width: N.DEFAULT_WIDTH
            }), e = p.defaults(e, {
                resizable: e.autoPlace,
                hideable: e.autoPlace
            }), p.isUndefined(e.load) ? e.load = {
                preset: A
            } : e.preset && (e.load.preset = e.preset), p.isUndefined(e.parent) && e.hideable && L.push(this), e.resizable = p.isUndefined(e.parent) && e.resizable, e.autoPlace && p.isUndefined(e.scrollable) && (e.scrollable = !0);
            var o = T && "true" === localStorage.getItem(document.location.href + ".isLocal");
            if (Object.defineProperties(this, {
                    parent: {
                        get: function() {
                            return e.parent
                        }
                    },
                    scrollable: {
                        get: function() {
                            return e.scrollable
                        }
                    },
                    autoPlace: {
                        get: function() {
                            return e.autoPlace
                        }
                    },
                    preset: {
                        get: function() {
                            return i.parent ? i.getRoot().preset : e.load.preset
                        },
                        set: function(t) {
                            for (i.parent ? i.getRoot().preset = t : e.load.preset = t, t = 0; t < this.__preset_select.length; t++) this.__preset_select[t].value == this.preset && (this.__preset_select.selectedIndex = t);
                            i.revert()
                        }
                    },
                    width: {
                        get: function() {
                            return e.width
                        },
                        set: function(t) {
                            e.width = t, x(i, t)
                        }
                    },
                    name: {
                        get: function() {
                            return e.name
                        },
                        set: function(t) {
                            e.name = t, s && (s.innerHTML = e.name)
                        }
                    },
                    closed: {
                        get: function() {
                            return e.closed
                        },
                        set: function(t) {
                            e.closed = t, e.closed ? f.addClass(i.__ul, N.CLASS_CLOSED) : f.removeClass(i.__ul, N.CLASS_CLOSED), this.onResize(), i.__closeButton && (i.__closeButton.innerHTML = t ? N.TEXT_OPEN : N.TEXT_CLOSED)
                        }
                    },
                    load: {
                        get: function() {
                            return e.load
                        }
                    },
                    useLocalStorage: {
                        get: function() {
                            return o
                        },
                        set: function(e) {
                            T && ((o = e) ? f.bind(window, "unload", t) : f.unbind(window, "unload", t), localStorage.setItem(document.location.href + ".isLocal", e))
                        }
                    }
                }), p.isUndefined(e.parent)) {
                if (e.closed = !1, f.addClass(this.domElement, N.CLASS_MAIN), f.makeSelectable(this.domElement, !1), T && o) {
                    i.useLocalStorage = !0;
                    var r = localStorage.getItem(document.location.href + ".gui");
                    r && (e.load = JSON.parse(r))
                }
                this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = N.TEXT_CLOSED, f.addClass(this.__closeButton, N.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), f.bind(this.__closeButton, "click", function() {
                    i.closed = !i.closed
                })
            } else {
                void 0 === e.closed && (e.closed = !0);
                var s = document.createTextNode(e.name);
                f.addClass(s, "controller-name"), r = _(i, s), f.addClass(this.__ul, N.CLASS_CLOSED), f.addClass(r, "title"), f.bind(r, "click", function(e) {
                    return e.preventDefault(), i.closed = !i.closed, !1
                }), e.closed || (this.closed = !1)
            }
            e.autoPlace && (p.isUndefined(e.parent) && (D && (H = document.createElement("div"), f.addClass(H, "dg"), f.addClass(H, N.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(H), D = !1), H.appendChild(this.domElement), f.addClass(this.domElement, N.CLASS_AUTO_PLACE)), this.parent || x(i, e.width)), f.bind(window, "resize", function() {
                i.onResize()
            }), f.bind(this.__ul, "webkitTransitionEnd", function() {
                i.onResize()
            }), f.bind(this.__ul, "transitionend", function() {
                i.onResize()
            }), f.bind(this.__ul, "oTransitionEnd", function() {
                i.onResize()
            }), this.onResize(), e.resizable && E(this), i.getRoot(), e.parent || n()
        };
    return N.toggleHide = function() {
        M = !M, p.each(L, function(e) {
            e.domElement.style.zIndex = M ? -999 : 999, e.domElement.style.opacity = M ? 0 : 1
        })
    }, N.CLASS_AUTO_PLACE = "a", N.CLASS_AUTO_PLACE_CONTAINER = "ac", N.CLASS_MAIN = "main", N.CLASS_CONTROLLER_ROW = "cr", N.CLASS_TOO_TALL = "taller-than-window", N.CLASS_CLOSED = "closed", N.CLASS_CLOSE_BUTTON = "close-button", N.CLASS_DRAG = "drag", N.DEFAULT_WIDTH = 245, N.TEXT_CLOSED = "Close Controls", N.TEXT_OPEN = "Open Controls", f.bind(window, "keydown", function(e) {
        "text" !== document.activeElement.type && (72 === e.which || 72 == e.keyCode) && N.toggleHide()
    }, !1), p.extend(N.prototype, {
        add: function(e, t) {
            return m(this, e, t, {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
            })
        },
        addColor: function(e, t) {
            return m(this, e, t, {
                color: !0
            })
        },
        remove: function(e) {
            this.__ul.removeChild(e.__li), this.__controllers.slice(this.__controllers.indexOf(e), 1);
            var t = this;
            p.defer(function() {
                t.onResize()
            })
        },
        destroy: function() {
            this.autoPlace && H.removeChild(this.domElement)
        },
        addFolder: function(e) {
            if (void 0 !== this.__folders[e]) throw Error('You already have a folder in this GUI by the name "' + e + '"');
            var t = {
                name: e,
                parent: this
            };
            return t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]), t = new N(t), this.__folders[e] = t, e = _(this, t.domElement), f.addClass(e, "folder"), t
        },
        open: function() {
            this.closed = !1
        },
        close: function() {
            this.closed = !0
        },
        onResize: function() {
            var e = this.getRoot();
            if (e.scrollable) {
                var t = f.getOffset(e.__ul).top,
                    n = 0;
                p.each(e.__ul.childNodes, function(t) {
                    e.autoPlace && t === e.__save_row || (n += f.getHeight(t))
                }), window.innerHeight - t - 20 < n ? (f.addClass(e.domElement, N.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - 20 + "px") : (f.removeClass(e.domElement, N.CLASS_TOO_TALL), e.__ul.style.height = "auto")
            }
            e.__resize_handle && p.defer(function() {
                e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
            }), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
        },
        remember: function() {
            if (p.isUndefined(k) && (k = new h, k.domElement.innerHTML = t), this.parent) throw Error("You can only call remember on a top level GUI.");
            var e = this;
            p.each(Array.prototype.slice.call(arguments), function(t) {
                0 == e.__rememberedObjects.length && b(e), -1 == e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t)
            }), this.autoPlace && x(this, this.width)
        },
        getRoot: function() {
            for (var e = this; e.parent;) e = e.parent;
            return e
        },
        getSaveObject: function() {
            var e = this.load;
            return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = y(this)), e.folders = {}, p.each(this.__folders, function(t, n) {
                e.folders[n] = t.getSaveObject()
            }), e
        },
        save: function() {
            this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = y(this), C(this, !1)
        },
        saveAs: function(e) {
            this.load.remembered || (this.load.remembered = {}, this.load.remembered[A] = y(this, !0)), this.load.remembered[e] = y(this), this.preset = e, w(this, e, !0)
        },
        revert: function(e) {
            p.each(this.__controllers, function(t) {
                this.getRoot().load.remembered ? v(e || this.getRoot(), t) : t.setValue(t.initialValue);
            }, this), p.each(this.__folders, function(e) {
                e.revert(e)
            }), e || C(this.getRoot(), !1)
        },
        listen: function(e) {
            var t = 0 == this.__listening.length;
            this.__listening.push(e), t && S(this.__listening)
        }
    }), N
}(dat.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n", dat.controllers.factory = function(e, t, n, i, o, r, s) {
    return function(a, l, d, c) {
        var u = a[l];
        return s.isArray(d) || s.isObject(d) ? new e(a, l, d) : s.isNumber(u) ? s.isNumber(d) && s.isNumber(c) ? new n(a, l, d, c) : new t(a, l, {
            min: d,
            max: c
        }) : s.isString(u) ? new i(a, l) : s.isFunction(u) ? new o(a, l, "") : s.isBoolean(u) ? new r(a, l) : void 0
    }
}(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = function(e, t, n) {
    var i = function(e, n) {
        function o() {
            r.setValue(r.__input.value)
        }
        i.superclass.call(this, e, n);
        var r = this;
        this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(this.__input, "keyup", o), t.bind(this.__input, "change", o), t.bind(this.__input, "blur", function() {
            r.__onFinishChange && r.__onFinishChange.call(r, r.getValue())
        }), t.bind(this.__input, "keydown", function(e) {
            13 === e.keyCode && this.blur()
        }), this.updateDisplay(), this.domElement.appendChild(this.__input)
    };
    return i.superclass = e, n.extend(i.prototype, e.prototype, {
        updateDisplay: function() {
            return t.isActive(this.__input) || (this.__input.value = this.getValue()), i.superclass.prototype.updateDisplay.call(this)
        }
    }), i
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController, dat.controllers.ColorController = function(e, t, n, i, o) {
    function r(e, t, n, i) {
        e.style.background = "", o.each(l, function(o) {
            e.style.cssText += "background: " + o + "linear-gradient(" + t + ", " + n + " 0%, " + i + " 100%); "
        })
    }

    function s(e) {
        e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
    }
    var a = function(e, l) {
        function d(e) {
            f(e), t.bind(window, "mousemove", f), t.bind(window, "mouseup", c)
        }

        function c() {
            t.unbind(window, "mousemove", f), t.unbind(window, "mouseup", c)
        }

        function u() {
            var e = i(this.value);
            e !== !1 ? (m.__color.__state = e, m.setValue(m.__color.toOriginal())) : this.value = m.__color.toString()
        }

        function h() {
            t.unbind(window, "mousemove", p), t.unbind(window, "mouseup", h)
        }

        function f(e) {
            e.preventDefault();
            var n = t.getWidth(m.__saturation_field),
                i = t.getOffset(m.__saturation_field),
                o = (e.clientX - i.left + document.body.scrollLeft) / n,
                e = 1 - (e.clientY - i.top + document.body.scrollTop) / n;
            return e > 1 ? e = 1 : 0 > e && (e = 0), o > 1 ? o = 1 : 0 > o && (o = 0), m.__color.v = e, m.__color.s = o, m.setValue(m.__color.toOriginal()), !1
        }

        function p(e) {
            e.preventDefault();
            var n = t.getHeight(m.__hue_field),
                i = t.getOffset(m.__hue_field),
                e = 1 - (e.clientY - i.top + document.body.scrollTop) / n;
            return e > 1 ? e = 1 : 0 > e && (e = 0), m.__color.h = 360 * e, m.setValue(m.__color.toOriginal()), !1
        }
        a.superclass.call(this, e, l), this.__color = new n(this.getValue()), this.__temp = new n(0);
        var m = this;
        this.domElement = document.createElement("div"), t.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", t.bind(this.__input, "keydown", function(e) {
            13 === e.keyCode && u.call(this)
        }), t.bind(this.__input, "blur", u), t.bind(this.__selector, "mousedown", function() {
            t.addClass(this, "drag").bind(window, "mouseup", function() {
                t.removeClass(m.__selector, "drag")
            })
        });
        var _ = document.createElement("div");
        o.extend(this.__selector.style, {
            width: "122px",
            height: "102px",
            padding: "3px",
            backgroundColor: "#222",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
        }), o.extend(this.__field_knob.style, {
            position: "absolute",
            width: "12px",
            height: "12px",
            border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
            boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
            borderRadius: "12px",
            zIndex: 1
        }), o.extend(this.__hue_knob.style, {
            position: "absolute",
            width: "15px",
            height: "2px",
            borderRight: "4px solid #fff",
            zIndex: 1
        }), o.extend(this.__saturation_field.style, {
            width: "100px",
            height: "100px",
            border: "1px solid #555",
            marginRight: "3px",
            display: "inline-block",
            cursor: "pointer"
        }), o.extend(_.style, {
            width: "100%",
            height: "100%",
            background: "none"
        }), r(_, "top", "rgba(0,0,0,0)", "#000"), o.extend(this.__hue_field.style, {
            width: "15px",
            height: "100px",
            display: "inline-block",
            border: "1px solid #555",
            cursor: "ns-resize"
        }), s(this.__hue_field), o.extend(this.__input.style, {
            outline: "none",
            textAlign: "center",
            color: "#fff",
            border: 0,
            fontWeight: "bold",
            textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
        }), t.bind(this.__saturation_field, "mousedown", d), t.bind(this.__field_knob, "mousedown", d), t.bind(this.__hue_field, "mousedown", function(e) {
            p(e), t.bind(window, "mousemove", p), t.bind(window, "mouseup", h)
        }), this.__saturation_field.appendChild(_), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
    };
    a.superclass = e, o.extend(a.prototype, e.prototype, {
        updateDisplay: function() {
            var e = i(this.getValue());
            if (e !== !1) {
                var t = !1;
                o.each(n.COMPONENTS, function(n) {
                    return o.isUndefined(e[n]) || o.isUndefined(this.__color.__state[n]) || e[n] === this.__color.__state[n] ? void 0 : (t = !0, {})
                }, this), t && o.extend(this.__color.__state, e)
            }
            o.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
            var s = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                a = 255 - s;
            o.extend(this.__field_knob.style, {
                marginLeft: 100 * this.__color.s - 7 + "px",
                marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                backgroundColor: this.__temp.toString(),
                border: this.__field_knob_border + "rgb(" + s + "," + s + "," + s + ")"
            }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, r(this.__saturation_field, "left", "#fff", this.__temp.toString()), o.extend(this.__input.style, {
                backgroundColor: this.__input.value = this.__color.toString(),
                color: "rgb(" + s + "," + s + "," + s + ")",
                textShadow: this.__input_textShadow + "rgba(" + a + "," + a + "," + a + ",.7)"
            })
        }
    });
    var l = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
    return a
}(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function(e, t, n, i) {
    function o(e, t, n) {
        Object.defineProperty(e, t, {
            get: function() {
                return "RGB" === this.__state.space ? this.__state[t] : (s(this, t, n), this.__state[t])
            },
            set: function(e) {
                "RGB" !== this.__state.space && (s(this, t, n), this.__state.space = "RGB"), this.__state[t] = e
            }
        })
    }

    function r(e, t) {
        Object.defineProperty(e, t, {
            get: function() {
                return "HSV" === this.__state.space ? this.__state[t] : (a(this), this.__state[t])
            },
            set: function(e) {
                "HSV" !== this.__state.space && (a(this), this.__state.space = "HSV"), this.__state[t] = e
            }
        })
    }

    function s(e, n, o) {
        if ("HEX" === e.__state.space) e.__state[n] = t.component_from_hex(e.__state.hex, o);
        else {
            if ("HSV" !== e.__state.space) throw "Corrupted color state";
            i.extend(e.__state, t.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
        }
    }

    function a(e) {
        var n = t.rgb_to_hsv(e.r, e.g, e.b);
        i.extend(e.__state, {
            s: n.s,
            v: n.v
        }), i.isNaN(n.h) ? i.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = n.h
    }
    var l = function() {
        if (this.__state = e.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
        this.__state.a = this.__state.a || 1
    };
    return l.COMPONENTS = "r,g,b,h,s,v,hex,a".split(","), i.extend(l.prototype, {
        toString: function() {
            return n(this)
        },
        toOriginal: function() {
            return this.__state.conversion.write(this)
        }
    }), o(l.prototype, "r", 2), o(l.prototype, "g", 1), o(l.prototype, "b", 0), r(l.prototype, "h"), r(l.prototype, "s"), r(l.prototype, "v"), Object.defineProperty(l.prototype, "a", {
        get: function() {
            return this.__state.a
        },
        set: function(e) {
            this.__state.a = e
        }
    }), Object.defineProperty(l.prototype, "hex", {
        get: function() {
            return "HEX" !== !this.__state.space && (this.__state.hex = t.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
        },
        set: function(e) {
            this.__state.space = "HEX", this.__state.hex = e
        }
    }), l
}(dat.color.interpret, dat.color.math = function() {
    var e;
    return {
        hsv_to_rgb: function(e, t, n) {
            var i = e / 60 - Math.floor(e / 60),
                o = n * (1 - t),
                r = n * (1 - i * t),
                t = n * (1 - (1 - i) * t),
                e = [
                    [n, t, o],
                    [r, n, o],
                    [o, n, t],
                    [o, r, n],
                    [t, o, n],
                    [n, o, r]
                ][Math.floor(e / 60) % 6];
            return {
                r: 255 * e[0],
                g: 255 * e[1],
                b: 255 * e[2]
            }
        },
        rgb_to_hsv: function(e, t, n) {
            var i = Math.min(e, t, n),
                o = Math.max(e, t, n),
                i = o - i;
            return 0 == o ? {
                h: NaN,
                s: 0,
                v: 0
            } : (e = e == o ? (t - n) / i : t == o ? 2 + (n - e) / i : 4 + (e - t) / i, e /= 6, 0 > e && (e += 1), {
                h: 360 * e,
                s: i / o,
                v: o / 255
            })
        },
        rgb_to_hex: function(e, t, n) {
            return e = this.hex_with_component(0, 2, e), e = this.hex_with_component(e, 1, t), e = this.hex_with_component(e, 0, n)
        },
        component_from_hex: function(e, t) {
            return e >> 8 * t & 255
        },
        hex_with_component: function(t, n, i) {
            return i << (e = 8 * n) | t & ~(255 << e)
        }
    }
}(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common), dat.utils.requestAnimationFrame = function() {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }
}(), dat.dom.CenteredDiv = function(e, t) {
    var n = function() {
        this.backgroundElement = document.createElement("div"), t.extend(this.backgroundElement.style, {
            backgroundColor: "rgba(0,0,0,0.8)",
            top: 0,
            left: 0,
            display: "none",
            zIndex: "1000",
            opacity: 0,
            WebkitTransition: "opacity 0.2s linear"
        }), e.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), t.extend(this.domElement.style, {
            position: "fixed",
            display: "none",
            zIndex: "1001",
            opacity: 0,
            WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"
        }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
        var n = this;
        e.bind(this.backgroundElement, "click", function() {
            n.hide()
        })
    };
    return n.prototype.show = function() {
        var e = this;
        this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), t.defer(function() {
            e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)"
        })
    }, n.prototype.hide = function() {
        var t = this,
            n = function() {
                t.domElement.style.display = "none", t.backgroundElement.style.display = "none", e.unbind(t.domElement, "webkitTransitionEnd", n), e.unbind(t.domElement, "transitionend", n), e.unbind(t.domElement, "oTransitionEnd", n)
            };
        e.bind(this.domElement, "webkitTransitionEnd", n), e.bind(this.domElement, "transitionend", n), e.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
    }, n.prototype.layout = function() {
        this.domElement.style.left = window.innerWidth / 2 - e.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - e.getHeight(this.domElement) / 2 + "px"
    }, n
}(dat.dom.dom, dat.utils.common), dat.dom.dom, dat.utils.common);
var Stats = function() {
    var e = Date.now(),
        t = e,
        n = 0,
        i = 1 / 0,
        o = 0,
        r = 0,
        s = 1 / 0,
        a = 0,
        l = 0,
        d = 0,
        c = document.createElement("div");
    c.id = "stats", c.addEventListener("mousedown", function(e) {
        e.preventDefault(), v(++d % 2)
    }, !1), c.style.cssText = "width:80px;opacity:0.9;cursor:pointer";
    var u = document.createElement("div");
    u.id = "fps", u.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#002", c.appendChild(u);
    var h = document.createElement("div");
    h.id = "fpsText", h.style.cssText = "color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px", h.innerHTML = "FPS", u.appendChild(h);
    var f = document.createElement("div");
    for (f.id = "fpsGraph", f.style.cssText = "position:relative;width:74px;height:30px;background-color:#0ff", u.appendChild(f); 74 > f.children.length;) {
        var p = document.createElement("span");
        p.style.cssText = "width:1px;height:30px;float:left;background-color:#113", f.appendChild(p)
    }
    var m = document.createElement("div");
    m.id = "ms", m.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#020;display:none", c.appendChild(m);
    var _ = document.createElement("div");
    _.id = "msText", _.style.cssText = "color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px", _.innerHTML = "MS", m.appendChild(_);
    var g = document.createElement("div");
    for (g.id = "msGraph", g.style.cssText = "position:relative;width:74px;height:30px;background-color:#0f0", m.appendChild(g); 74 > g.children.length;) p = document.createElement("span"), p.style.cssText = "width:1px;height:30px;float:left;background-color:#131", g.appendChild(p);
    var v = function(e) {
        switch (d = e) {
            case 0:
                u.style.display = "block", m.style.display = "none";
                break;
            case 1:
                u.style.display = "none", m.style.display = "block"
        }
    };
    return {
        REVISION: 11,
        domElement: c,
        setMode: v,
        begin: function() {
            e = Date.now()
        },
        end: function() {
            var d = Date.now();
            n = d - e, i = Math.min(i, n), o = Math.max(o, n), _.textContent = n + " MS (" + i + "-" + o + ")";
            var c = Math.min(30, 30 - 30 * (n / 200));
            return g.appendChild(g.firstChild).style.height = c + "px", l++, d > t + 1e3 && (r = Math.round(1e3 * l / (d - t)), s = Math.min(s, r), a = Math.max(a, r), h.textContent = r + " FPS (" + s + "-" + a + ")", c = Math.min(30, 30 - 30 * (r / 100)), f.appendChild(f.firstChild).style.height = c + "px", t = d, l = 0), d
        },
        update: function() {
            e = this.end()
        }
    }
};
THREE.DotScreenPass = function(e, t, n) {
    void 0 === THREE.DotScreenShader && console.error("THREE.DotScreenPass relies on THREE.DotScreenShader");
    var i = THREE.DotScreenShader;
    this.uniforms = THREE.UniformsUtils.clone(i.uniforms), void 0 !== e && this.uniforms.center.value.copy(e), void 0 !== t && (this.uniforms.angle.value = t), void 0 !== n && (this.uniforms.scale.value = n), this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader
    }), this.enabled = !0, this.renderToScreen = !1, this.needsSwap = !0
}, THREE.DotScreenPass.prototype = {
    render: function(e, t, n, i) {
        this.uniforms.tDiffuse.value = n, this.uniforms.tSize.value.set(n.width, n.height), THREE.EffectComposer.quad.material = this.material, this.renderToScreen ? e.render(THREE.EffectComposer.scene, THREE.EffectComposer.camera) : e.render(THREE.EffectComposer.scene, THREE.EffectComposer.camera, t, !1)
    }
}, THREE.EffectComposer = function(e, t) {
    if (this.renderer = e, void 0 === t) {
        var n = window.innerWidth || 1,
            i = window.innerHeight || 1,
            o = {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBFormat,
                stencilBuffer: !1
            };
        t = new THREE.WebGLRenderTarget(n, i, o)
    }
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.passes = [], void 0 === THREE.CopyShader && console.error("THREE.EffectComposer relies on THREE.CopyShader"), this.copyPass = new THREE.ShaderPass(THREE.CopyShader)
}, THREE.EffectComposer.prototype = {
    swapBuffers: function() {
        var e = this.readBuffer;
        this.readBuffer = this.writeBuffer, this.writeBuffer = e
    },
    addPass: function(e) {
        this.passes.push(e)
    },
    insertPass: function(e, t) {
        this.passes.splice(t, 0, e)
    },
    render: function(e) {
        this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
        var t, n, i = !1,
            o = this.passes.length;
        for (n = 0; o > n; n++)
            if (t = this.passes[n], t.enabled) {
                if (t.render(this.renderer, this.writeBuffer, this.readBuffer, e, i), t.needsSwap) {
                    if (i) {
                        var r = this.renderer.context;
                        r.stencilFunc(r.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), r.stencilFunc(r.EQUAL, 1, 4294967295)
                    }
                    this.swapBuffers()
                }
                t instanceof THREE.MaskPass ? i = !0 : t instanceof THREE.ClearMaskPass && (i = !1)
            }
    },
    reset: function(e) {
        void 0 === e && (e = this.renderTarget1.clone(), e.width = window.innerWidth, e.height = window.innerHeight), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2
    },
    setSize: function(e, t) {
        var n = this.renderTarget1.clone();
        n.width = e, n.height = t, this.reset(n)
    }
}, THREE.EffectComposer.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), THREE.EffectComposer.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), null), THREE.EffectComposer.scene = new THREE.Scene, THREE.EffectComposer.scene.add(THREE.EffectComposer.quad), THREE.MaskPass = function(e, t) {
    this.scene = e, this.camera = t, this.enabled = !0, this.clear = !0, this.needsSwap = !1, this.inverse = !1
}, THREE.MaskPass.prototype = {
    render: function(e, t, n, i) {
        var o = e.context;
        o.colorMask(!1, !1, !1, !1), o.depthMask(!1);
        var r, s;
        this.inverse ? (r = 0, s = 1) : (r = 1, s = 0), o.enable(o.STENCIL_TEST), o.stencilOp(o.REPLACE, o.REPLACE, o.REPLACE), o.stencilFunc(o.ALWAYS, r, 4294967295), o.clearStencil(s), e.render(this.scene, this.camera, n, this.clear), e.render(this.scene, this.camera, t, this.clear), o.colorMask(!0, !0, !0, !0), o.depthMask(!0), o.stencilFunc(o.EQUAL, 1, 4294967295), o.stencilOp(o.KEEP, o.KEEP, o.KEEP)
    }
}, THREE.ClearMaskPass = function() {
    this.enabled = !0
}, THREE.ClearMaskPass.prototype = {
    render: function(e, t, n, i) {
        var o = e.context;
        o.disable(o.STENCIL_TEST)
    }
}, THREE.RenderPass = function(e, t, n, i, o) {
    this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = void 0 !== o ? o : 1, this.oldClearColor = new THREE.Color, this.oldClearAlpha = 1, this.enabled = !0, this.clear = !0, this.needsSwap = !1
}, THREE.RenderPass.prototype = {
    render: function(e, t, n, i) {
        this.scene.overrideMaterial = this.overrideMaterial, this.clearColor && (this.oldClearColor.copy(e.getClearColor()), this.oldClearAlpha = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), e.render(this.scene, this.camera, n, this.clear), this.clearColor && e.setClearColor(this.oldClearColor, this.oldClearAlpha), this.scene.overrideMaterial = null
    }
}, THREE.SavePass = function(e) {
    void 0 === THREE.CopyShader && console.error("THREE.SavePass relies on THREE.CopyShader");
    var t = THREE.CopyShader;
    this.textureID = "tDiffuse", this.uniforms = THREE.UniformsUtils.clone(t.uniforms), this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: t.vertexShader,
        fragmentShader: t.fragmentShader
    }), this.renderTarget = e, void 0 === this.renderTarget && (this.renderTargetParameters = {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBFormat,
        stencilBuffer: !1
    }, this.renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, this.renderTargetParameters)), this.enabled = !0, this.needsSwap = !1, this.clear = !1
}, THREE.SavePass.prototype = {
    render: function(e, t, n, i) {
        this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n), THREE.EffectComposer.quad.material = this.material, e.render(THREE.EffectComposer.scene, THREE.EffectComposer.camera, this.renderTarget, this.clear)
    }
}, THREE.ShaderPass = function(e, t) {
    this.textureID = void 0 !== t ? t : "tDiffuse", this.uniforms = THREE.UniformsUtils.clone(e.uniforms), this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: e.vertexShader,
        fragmentShader: e.fragmentShader
    }), this.renderToScreen = !1, this.enabled = !0, this.needsSwap = !0, this.clear = !1
}, THREE.ShaderPass.prototype = {
    render: function(e, t, n, i) {
        this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n), THREE.EffectComposer.quad.material = this.material, this.renderToScreen ? e.render(THREE.EffectComposer.scene, THREE.EffectComposer.camera) : e.render(THREE.EffectComposer.scene, THREE.EffectComposer.camera, t, this.clear)
    }
}, THREE.TexturePass = function(e, t) {
    void 0 === THREE.CopyShader && console.error("THREE.TexturePass relies on THREE.CopyShader");
    var n = THREE.CopyShader;
    this.uniforms = THREE.UniformsUtils.clone(n.uniforms), this.uniforms.opacity.value = void 0 !== t ? t : 1, this.uniforms.tDiffuse.value = e, this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader
    }), this.enabled = !0, this.needsSwap = !1
}, THREE.TexturePass.prototype = {
    render: function(e, t, n, i) {
        THREE.EffectComposer.quad.material = this.material, e.render(THREE.EffectComposer.scene, THREE.EffectComposer.camera, n)
    }
}, THREE.BasicShader = {
    uniforms: {},
    vertexShader: ["void main() {", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["void main() {", "gl_FragColor = vec4( 1.0, 0.0, 0.0, 0.5 );", "}"].join("\n")
}, THREE.BlendShader = {
    uniforms: {
        tDiffuse1: {
            type: "t",
            value: null
        },
        tDiffuse2: {
            type: "t",
            value: null
        },
        mixRatio: {
            type: "f",
            value: .5
        },
        opacity: {
            type: "f",
            value: 1
        }
    },
    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform float opacity;", "uniform float mixRatio;", "uniform sampler2D tDiffuse1;", "uniform sampler2D tDiffuse2;", "varying vec2 vUv;", "void main() {", "vec4 texel1 = texture2D( tDiffuse1, vUv );", "vec4 texel2 = texture2D( tDiffuse2, vUv );", "gl_FragColor = opacity * mix( texel1, texel2, mixRatio );", "}"].join("\n")
}, THREE.BrightnessContrastShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        brightness: {
            type: "f",
            value: 0
        },
        contrast: {
            type: "f",
            value: 0
        }
    },
    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float brightness;", "uniform float contrast;", "varying vec2 vUv;", "void main() {", "gl_FragColor = texture2D( tDiffuse, vUv );", "gl_FragColor.rgb += brightness;", "if (contrast > 0.0) {", "gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) / (1.0 - contrast) + 0.5;", "} else {", "gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) * (1.0 + contrast) + 0.5;", "}", "}"].join("\n")
}, THREE.ColorCorrectionShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        powRGB: {
            type: "v3",
            value: new THREE.Vector3(2, 2, 2)
        },
        mulRGB: {
            type: "v3",
            value: new THREE.Vector3(1, 1, 1)
        }
    },
    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform sampler2D tDiffuse;", "uniform vec3 powRGB;", "uniform vec3 mulRGB;", "varying vec2 vUv;", "void main() {", "gl_FragColor = texture2D( tDiffuse, vUv );", "gl_FragColor.rgb = mulRGB * pow( gl_FragColor.rgb, powRGB );", "}"].join("\n")
}, THREE.ColorifyShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        color: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform vec3 color;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "vec3 luma = vec3( 0.299, 0.587, 0.114 );", "float v = dot( texel.xyz, luma );", "gl_FragColor = vec4( v * color, texel.w );", "}"].join("\n")
}, THREE.ConvolutionShader = {
    defines: {
        KERNEL_SIZE_FLOAT: "25.0",
        KERNEL_SIZE_INT: "25"
    },
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        uImageIncrement: {
            type: "v2",
            value: new THREE.Vector2(.001953125, 0)
        },
        cKernel: {
            type: "fv1",
            value: []
        }
    },
    vertexShader: ["uniform vec2 uImageIncrement;", "varying vec2 vUv;", "void main() {", "vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform float cKernel[ KERNEL_SIZE_INT ];", "uniform sampler2D tDiffuse;", "uniform vec2 uImageIncrement;", "varying vec2 vUv;", "void main() {", "vec2 imageCoord = vUv;", "vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );", "for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {", "sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];", "imageCoord += uImageIncrement;", "}", "gl_FragColor = sum;", "}"].join("\n"),
    buildKernel: function(e) {
        function t(e, t) {
            return Math.exp(-(e * e) / (2 * t * t))
        }
        var n, i, o, r, s = 25,
            a = 2 * Math.ceil(3 * e) + 1;
        for (a > s && (a = s), r = .5 * (a - 1), i = new Array(a), o = 0, n = 0; a > n; ++n) i[n] = t(n - r, e), o += i[n];
        for (n = 0; a > n; ++n) i[n] /= o;
        return i
    }
}, THREE.CopyShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        opacity: {
            type: "f",
            value: 1
        }
    },
    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")
}, THREE.DotScreenShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        tSize: {
            type: "v2",
            value: new THREE.Vector2(256, 256)
        },
        center: {
            type: "v2",
            value: new THREE.Vector2(.5, .5)
        },
        angle: {
            type: "f",
            value: 1.57
        },
        scale: {
            type: "f",
            value: 1
        }
    },
    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform vec2 center;", "uniform float angle;", "uniform float scale;", "uniform vec2 tSize;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "float pattern() {", "float s = sin( angle ), c = cos( angle );", "vec2 tex = vUv * tSize - center;", "vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;", "return ( sin( point.x ) * sin( point.y ) ) * 4.0;", "}", "void main() {", "vec4 color = texture2D( tDiffuse, vUv );", "float average = ( color.r + color.g + color.b ) / 3.0;", "gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );", "}"].join("\n")
}, THREE.HueSaturationShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        hue: {
            type: "f",
            value: 0
        },
        saturation: {
            type: "f",
            value: 0
        }
    },
    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float hue;", "uniform float saturation;", "varying vec2 vUv;", "void main() {", "gl_FragColor = texture2D( tDiffuse, vUv );", "float angle = hue * 3.14159265;", "float s = sin(angle), c = cos(angle);", "vec3 weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;", "float len = length(gl_FragColor.rgb);", "gl_FragColor.rgb = vec3(", "dot(gl_FragColor.rgb, weights.xyz),", "dot(gl_FragColor.rgb, weights.zxy),", "dot(gl_FragColor.rgb, weights.yzx)", ");", "float average = (gl_FragColor.r + gl_FragColor.g + gl_FragColor.b) / 3.0;", "if (saturation > 0.0) {", "gl_FragColor.rgb += (average - gl_FragColor.rgb) * (1.0 - 1.0 / (1.001 - saturation));", "} else {", "gl_FragColor.rgb += (average - gl_FragColor.rgb) * (-saturation);", "}", "}"].join("\n")
}, THREE.RGBShiftShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        amount: {
            type: "f",
            value: .005
        },
        angle: {
            type: "f",
            value: 0
        }
    },
    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float amount;", "uniform float angle;", "varying vec2 vUv;", "void main() {", "vec2 offset = amount * vec2( cos(angle), sin(angle));", "vec4 cr = texture2D(tDiffuse, vUv + offset);", "vec4 cga = texture2D(tDiffuse, vUv);", "vec4 cb = texture2D(tDiffuse, vUv - offset);", "gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);", "}"].join("\n")
}, THREE.VignetteShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        offset: {
            type: "f",
            value: 1
        },
        darkness: {
            type: "f",
            value: 1
        }
    },
    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform float offset;", "uniform float darkness;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );", "gl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );", "}"].join("\n")
};