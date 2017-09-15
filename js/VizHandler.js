//UberViz VizHandler
//Handle 3D world
//Camera movement
//handle sub vizs

//RENDER AREA DIMS:
//SCREEN DIMS: 800 x 600
//CAM Z: 1000
//FAR CLIP Z: 3000
//TO FILL SCREEN AT Z 0: WIDTH 1840, HEIGHT: 1380


var VizHandler = function() {
	function e() {
		if (f = [ColorWheel, Crystal, ImageRipple, ImageTunnel, Eclipse, Ripples, StarBars, Stars, LightLeak], events.on("update", n), events.on("beat", t), events.on("viz-start", i), d = new THREE.WebGLRenderer({
				maxLights: 0
			}), d.setSize(800, 600), d.setClearColor(0), d.sortObjects = !1, $("#webgl").append(d.domElement), l = new THREE.PerspectiveCamera(70, ConfigHandler.getConfig().displayWidth / ConfigHandler.getConfig().displayHeight, 1, 4e3), l.position.z = 1e3, s = new THREE.Scene, s.add(l), s.fog = new THREE.Fog(0, 0, 2e3), u = new THREE.Object3D, s.add(u), u.sortObjects = !1, c = new THREE.Object3D, u.add(c), c.sortObjects = !1, ConfigHandler.getConfig().showDebug) {
			var e = new THREE.Object3D;
			u.add(e);
			var o = new THREE.BoxGeometry(1e3, 1e3, 1e3),
				a = new THREE.MeshBasicMaterial({
					color: 16711680,
					wireframe: !0
				}),
				m = new THREE.Mesh(o, a);
			e.add(m), m = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshBasicMaterial({
				color: 16711680,
				wireframe: !0
			})), e.add(m), m = new THREE.Mesh(new THREE.PlaneGeometry(800 * 2.3, 1380, 5, 5), new THREE.MeshBasicMaterial({
				color: 65280,
				wireframe: !0
			})), e.add(m), m = new THREE.Mesh(new THREE.PlaneGeometry(800 * 2.3, 1380, 5, 5), new THREE.MeshBasicMaterial({
				color: 255,
				wireframe: !0
			})), m.rotation.x = Math.PI / 2, e.add(m)
		}
		r();
		for (var v = f.length, p = 0; v > p; p++) f[p].init();
		g = 100 * Math.random()
	}

	function n() {
		g += .01, ControlsHandler.getControlParams().autoMode && (FXHandler.fxParams.tiltAmount = (simplexNoise.noise(g / 20, 99, 0) + 1) / 2 * .25, FXHandler.fxParams.tiltSpeed = (simplexNoise.noise(g / 20, 9999, 0) + 1) / 2 * .25);
		var e = Math.PI * FXHandler.fxParams.tiltAmount;
		p += .01 * FXHandler.fxParams.tiltSpeed, c.rotation.x = simplexNoise.noise(p, 0) * e / 4, c.rotation.y = simplexNoise.noise(p, 100) * e, c.rotation.z = simplexNoise.noise(p, 200) * e
	}

	function t() {
		FXHandler.fxParams.jumpOnBeat && Math.random() < .3 && a(), Math.random() < .8 && o()
	}

	function o() {
		if (ControlsHandler.getControlParams().autoMode && !ConfigHandler.getConfig().useSequence) {
			var e = f.slice(0, 6);
			e = ATUtil.shuffle(e);
			for (var n = 0; 6 > n; n++) {
				var t = 2 > n;
				e[n].getVizParams().on = t, e[n].onToggleViz()
			}
		}
	}

	function i() {
		f[8].getVizParams().on = !1, f[8].onToggleViz(), o()
	}

	function a() {
		p = 20 * Math.random()
	}

	function r() {
		ConfigHandler.getConfig().fullSize ? (m = window.innerWidth, v = window.innerHeight, ConfigHandler.getConfig().showControls && (m -= 262), $("#viz").css({
			top: 0
		}), $("#viz").css({
			left: 0
		})) : (m = ConfigHandler.getConfig().displayWidth, v = ConfigHandler.getConfig().displayHeight), $("#viz").css({
			width: m + "px"
		}), $("#viz").css({
			height: v + "px"
		}), l.aspect = m / v, l.updateProjectionMatrix(), d.setSize(m, v), FXHandler.resize()
	}
	var l, s, d, u, c, m, v, f, g = 0,
		p = 0;
	return {
		init: e,
		update: n,
		onBeat: t,
		doJump: a,
		getVizHolder: function() {
			return u
		},
		getVizTumbler: function() {
			return c
		},
		getCamera: function() {
			return l
		},
		getScene: function() {
			return s
		},
		getRenderer: function() {
			return d
		},
		onResize: r,
		getNoiseTime: function() {
			return g
		},
		getVizWidth: function() {
			return m
		},
		getVizHeight: function() {
			return v
		},
		getActiveViz: function() {
			return f
		},
		randomizeViz: o
	}
}();