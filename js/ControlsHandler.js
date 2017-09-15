//UberViz ControlsHandler
//Handles side menu controls



var ControlsHandler = function() {
	function e() {
		a = new dat.GUI({
			autoPlace: !1
		}), $("#controls").append(a.domElement), a.add(s, "autoMode").name("AUTOMATIC");
		var e = a.addFolder("AUDIO =============");
		e.add(ConfigHandler.getConfig(), "useMic").listen().onChange(AudioHandler.onUseMic).name("Use Mic"), e.add(AudioHandler.audioParams, "gain", 0, 6).step(.1).listen().name("Gain"), e.add(AudioHandler.audioParams, "beatHoldTime", 0, 100).listen().step(1).name("Beat Hold"), e.add(AudioHandler.audioParams, "beatThreshold", 0, 1).listen().step(.01).name("Beat Threshold"), e.add(AudioHandler.audioParams, "beatDecayRate", .9, 1).step(.01).name("Beat Decay"), e.add(AudioHandler.audioParams, "smoothing", 0, 1).step(.01).name("Smoothing").onChange(AudioHandler.setSmoothing), r = a.addFolder("VIZ ==============="), l = a.addFolder("FX ================"), $("#controls-holder").toggle(ConfigHandler.getConfig().showControls), $(document).on("drop", t), $(document).on("dragover", n), $(window).on("keydown", o)
	}

	function n(e) {
		return $("#sound-options").hide(), $("#prompt").show(), $("#prompt").html("Drop MP3 here"), e.stopPropagation(), e.preventDefault(), !1
	}

	function t(e) {
		ImageRipple.limitImages(), e.stopPropagation(), e.preventDefault(), AudioHandler.onMP3Drop(e.originalEvent)
	}

	function o(e) {
		switch (e.keyCode) {
			case 87:
				BPMHandler.onBPMTap();
				break;
			case 81:
				ControlsHandler.toggleControls();
				break;
			case 70:
		}
	}

	function i() {
		ConfigHandler.getConfig().showControls = !ConfigHandler.getConfig().showControls, $("#controls-holder").toggle(), VizHandler.onResize()
	}
	var a, r, l, s = {
		autoMode: !0
	};
	return {
		init: e,
		toggleControls: i,
		getGui: function() {
			return a
		},
		getVizFolder: function() {
			return r
		},
		getFXFolder: function() {
			return l
		},
		getControlParams: function() {
			return s
		},
		audioParams: {
			gain: .9,
			beatHoldTime: 50,
			beatThreshold: .05,
			beatDecayRate: .97,
			smoothing: .5,
			drawAudio: !0,
			useAudioElement: !1,
			sampleURL: "../res/mp3/title-song.mp3",
			useSample: true
		},
		vizParams: {
			fullSize: true
		}
	}
}();