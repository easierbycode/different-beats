//UberViz AudioHandler
//Handles Audio loading and Playback
//Handles Audio Analysis + publishes audio data
//Handles Tap BPM



var AudioHandler = function() {
	function e() {
		UberVizMain.getIsMobile() && (I.useAudioElement = !1), events.on("update", v), events.on("midi", T);
		try {
			window.AudioContext = window.AudioContext || window.webkitAudioContext, V = new window.AudioContext
		} catch (e) {
			return $("#play-btn").hide(), $("#warning").show(), void $("#warning").html("Sorry!<br>This browser does not support the Web Audio API. <br>Please use Chrome, Safari or Firefox.")
		}
		D = V.createGain(), D.connect(V.destination), U = V.createAnalyser(), U.smoothingTimeConstant = .3, U.fftSize = 1024, b = U.frequencyBinCount, S = Math.floor(b / L), y = new Uint8Array(b), z = new Uint8Array(b);
		for (var t = 0; G > t; t++) _.push(0), X.push(0);
		R = new Uint8Array(3 * L), E = new THREE.DataTexture(R, L, 1, THREE.RGBFormat);
		var o = document.getElementById("audio-debug");
		w = o.getContext("2d"), w.width = J, w.height = K, w.fillStyle = "rgb(40, 40, 40)", w.lineWidth = 2, w.strokeStyle = "rgb(255, 255, 255)", $("#audiodisplayCtx").hide(), C = w.createLinearGradient(0, 0, 0, K), C.addColorStop(1, "#330000"), C.addColorStop(.85, "#aa0000"), C.addColorStop(.5, "#aaaa00"), C.addColorStop(0, "#aaaaaa"), ConfigHandler.getConfig().useMic ? c() : ConfigHandler.getConfig().autoPlayAudio && n()
	}

	function n() {
		I.useAudioElement ? i() : a()
	}

	function t() {
		A.play()
	}

	function o() {
		events.emit("seeked")
	}

	function i() {
		A = new Audio, A.setAttribute("src", ConfigHandler.getConfig().audioURL), A.setAttribute("controls", "controls"), A.setAttribute("preload", "auto"), A.addEventListener("seeked", o, !0), A.loop = !0, $(A).addClass("audio-elem"), $(A).insertAfter("#controls-header"), $("#preloader").hide(), P = V.createMediaElementSource(A), P.connect(U), P.connect(D), Q = !0, A.play(), BPMHandler.onBPMBeat(), l()
	}

	function a() {
		var e = new XMLHttpRequest;
		e.open("GET", ConfigHandler.getConfig().audioURL, !0), e.responseType = "arraybuffer", e.onload = function() {
			V.decodeAudioData(e.response, function(e) {
				M = e, r()
			}, function(e) {
				console.log(e)
			})
		}, e.send()
	}

	function r() {
		ConfigHandler.getConfig().useMic = !1, P = V.createBufferSource(), P.connect(U), P.connect(D), P.buffer = M, P.loop = !0, Q = !0, $("#preloader").hide(), ConfigHandler.getConfig().doLoop ? (P.loopStart = ConfigHandler.getConfig().loopStart, P.loopEnd = ConfigHandler.getConfig().loopEnd, P.start(0, ConfigHandler.getConfig().loopStart)) : (P.start(0), B = Date.now()), BPMHandler.onBPMBeat(), l()
	}

	function l() {
		D.gain.value = ConfigHandler.getConfig().mute ? 0 : 1
	}

	function s() {
		if (P) {
			try {
				P.stop(0)
			} catch (e) {}
			P.disconnect()
		}
		Q = !1, w.clearRect(0, 0, J, K), $(A).hide()
	}

	function d(e) {
		s();
		var n = e.dataTransfer.files,
			t = new FileReader;
		t.onload = function(e) {
			var n = e.target.result;
			u(n)
		}, t.readAsArrayBuffer(n[0])
	}

	function u(e) {
		events.emit("sound-selected"), V.decodeAudioData ? V.decodeAudioData(e, function(e) {
			M = e, r()
		}, function(e) {
			console.log(e)
		}) : (M = V.createBuffer(e, !1), r())
	}

	function c() {
		s(), navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, navigator.getUserMedia ? navigator.getUserMedia({
			audio: !0
		}, function(e) {
			F = V.createMediaStreamSource(e), F.connect(U), Q = !0, events.emit("sound-selected")
		}, function(e) {
			console.log("getMicInput error occured: " + e)
		}) : console.log("getMicInput. Could not getUserMedia")
	}

	function m() {
		events.emit("beat")
	}

	function v() {
		if (Q) {
			var e, n, t;
			for (U.getByteFrequencyData(y), U.getByteTimeDomainData(z), e = 0; b > e; e++) N[e] = (z[e] - 128) / 128 * I.gain;
			for (e = 0; L > e; e++) {
				for (t = 0, n = 0; S > n; n++) t += y[e * S + n];
				k[e] = t / S / 256 * I.gain, k[e] *= 1 + e / (4 * L), k[e] = ATUtil.clamp(k[e], 0, 1), R[3 * e] = 255 * k[e]
			}
			for (E.needsUpdate = !0, t = 0, n = 0; L > n; n++) t += k[n];
			j = t / L, O += (j - O) / 5, _.unshift(j), _.pop(), X.unshift(O), X.pop(), j > Y && j > I.beatThreshold ? (m(), Y = 1.1 * j, ee = 0) : ee <= I.beatHoldTime ? ee++ : (Y *= I.beatDecayRate, Y = Math.max(Y, I.beatThreshold)), I.drawAudio && f()
		}
	}

	function f() {
		w.clearRect(0, 0, J, K), 1 > ee && (w.fillStyle = "#FFF", w.fillRect(0, 0, J, K));
		var e = W / L;
		w.fillStyle = C;
		for (var n = 0; L > n; n++) w.fillRect(n * e, K, e - Z, -k[n] * K);
		for (w.fillStyle = C, w.fillRect(W, K, q, -j * K), w.beginPath(), w.moveTo(W, K - Y * K), w.lineTo(W + q, K - Y * K), w.stroke(), w.beginPath(), n = 0; b > n; n++) w.lineTo(n / b * W, N[n] * K / 2 + K / 2);
		w.stroke()
	}

	function g(e) {
		U.smoothingTimeConstant = e
	}

	function p() {
		var e = A.currentTime / A.duration;
		return isNaN(e) ? 0 : e
	}

	function h(e) {
		I.useAudioElement ? A.playbackRate = e : P.playbackRate.value = e
	}

	function H() {
		ConfigHandler.getConfig().useMic ? c() : (F.disconnect(U), s())
	}

	function T(e) {
		switch (e.id) {
			case 41:
				AudioHandler.audioParams.gain = ATUtil.lerp(e.val, 0, 10)
		}
	}

	function x() {
		return I.useAudioElement ? A.currentTime : (Date.now() - B) / 1e3 % SequenceHandler.getDuration()
	}
	var E, y, z, b, S, R, w, C, P, M, V, U, D, A, F, B, I = {
			gain: .9,
			beatHoldTime: 50,
			beatThreshold: .05,
			beatDecayRate: .97,
			smoothing: .5,
			drawAudio: !0,
			useAudioElement: !1
		},
		N = [],
		k = [],
		j = 0,
		O = 0,
		_ = [],
		X = [],
		G = 256,
		L = 64,
		W = 220,
		q = 30,
		K = 100,
		J = W + q,
		Z = 2,
		Q = !1,
		Y = 0,
		ee = 0;
	return {
		update: v,
		init: e,
		getLevelsData: function() {
			return k
		},
		getLevelsTexture: function() {
			return E
		},
		levelsCount: L,
		getVolumeHistory: function() {
			return _
		},
		getSmoothedVolumeHistory: function() {
			return X
		},
		getWaveData: function() {
			return N
		},
		getVolume: function() {
			return j
		},
		getSmoothedVolume: function() {
			return O
		},
		setSmoothing: g,
		mute: l,
		getAudioTime: x,
		audioParams: I,
		setPlaybackRate: h,
		getProgress: p,
		loadAudioElement: i,
		onMP3Drop: d,
		play: t,
		onUseMic: H,
		getMicInput: c,
		doAutoPlay: n
	}
}();