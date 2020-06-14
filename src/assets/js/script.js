var revapi109,
		tpj=jQuery;
		tpj(document).ready(function() {
			if(tpj("#welcome").revolution == undefined){
				revslider_showDoubleJqueryError("#welcome");
			}else{
				revapi109 = tpj("#welcome").show().revolution({
					sliderType:"standard",
					jsFileLocation:"/include/rs-plugin/js/",
					sliderLayout:"fullscreen",
					dottedOverlay:"none",
					delay:9000,
					particles: {startSlide: "first", endSlide: "last", zIndex: "1",
						particles: {
							number: {value: 25}, color: {value: "#ffffff"},
							shape: {
								type: "circle", stroke: {width: 0, color: "#ffffff", opacity: 1},
								image: {src: ""}
							},
							opacity: {value: 1, random: true, min: 0.25, anim: {enable: true, speed: 3, opacity_min: 0, sync: false}},
							size: {value: 2, random: true, min: 0.5, anim: {enable: true, speed: 5, size_min: 1, sync: false}},
							line_linked: {enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
							move: {enable: true, speed: 2, direction: "none", random: true, min_speed: 1, straight: false, out_mode: "out"}},
						interactivity: {
							events: {onhover: {enable: false, mode: "bubble"}, onclick: {enable: false, mode: "repulse"}},
							modes: {grab: {distance: 400, line_linked: {opacity: 0.5}}, bubble: {distance: 400, size: 40, opacity: 0.5}, repulse: {distance: 200}}
						}
					},
					revealer: {
						direction: "open_horizontal",
						color: "#ffffff",
						duration: "1500",
						delay: "0",
						easing: "Power2.easeInOut",
						overlay_enabled: true,
						overlay_color: "#000000",
						overlay_duration: "1500",
						overlay_delay: "0",
						overlay_easing: "Power2.easeInOut",
						spinner: "1",
						spinnerColor: "#006dd2",
					},
					viewPort: {
						enable:true,
						outof:"wait",
						visible_area:"80%",
						presize:true
					},
					responsiveLevels:[1240,1024,778,480],
					visibilityLevels:[1240,1024,778,480],
					gridwidth:[1240,1024,778,480],
					gridheight:[868,768,960,720],
					lazyType:"single",
					parallax: {
						type:"scroll",
						origo:"slidercenter",
						speed:400,
					  speedbg:0,
					  speedls:0,
						levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
					},
					shadow:0,
					spinner:"spinner2",
					stopLoop:"on",
					stopAfterLoops:0,
					stopAtSlide:1,
					shuffle:"off",
					autoHeight:"off",
					fullScreenAutoWidth:"off",
					fullScreenAlignForce:"off",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "",
					disableProgressBar:"on",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					debugMode:false,
					fallbacks: {
						simplifyAll:"off",
						nextSlideOnWindowFocus:"off",
						disableFocusListener:false,
					}
				});
			window.RsAddonRevealerCustom = {
				itm_2: {
					direction: "open_vertical",
					color: "#006dd2",
					duration: "1500",
					delay: "0",
					easing: "Power2.easeInOut",
					overlay_enabled: true,
					overlay_color: "#000000",
					overlay_duration: "1500",
					overlay_delay: "0",
					overlay_easing: "Power3.easeInOut",
					spinner: "2",
					spinnerColor: "rgba(255,255,255,",
					spinnerHTML: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-2'><div class='rsaddon-revealer-2' style='border-top-color: {{color}}0.65); border-bottom-color: {{color}}0.15); border-left-color: {{color}}0.65); border-right-color: {{color}}0.15)'><\/div><\/div>"
				},
				itm_3: {
					direction: "split_left_corner",
					color: "#5b11b8",
					duration: "1500",
					delay: "0",
					easing: "Power2.easeInOut",
					overlay_enabled: true,
					overlay_color: "#000000",
					overlay_duration: "1500",
					overlay_delay: "0",
					overlay_easing: "Power2.easeInOut",
					spinner: "3",
					spinnerColor: "#ffffff",
					spinnerHTML: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-3'><div class='rsaddon-revealer-3'><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><\/div><\/div>"
				},
				itm_4: {
					direction: "split_right_corner",
					color: "#ffffff",
					duration: "1500",
					delay: "0",
					easing: "Power2.easeInOut",
					overlay_enabled: true,
					overlay_color: "#006dd2",
					overlay_duration: "1500",
					overlay_delay: "0",
					overlay_easing: "Power2.easeInOut",
					spinner: "4",
					spinnerColor: "#006dd2",
					spinnerHTML: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-4'><div class='rsaddon-revealer-4'><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><\/div><\/div>"
				},
				itm_5: {
					direction: "shrink_circle",
					color: "#ffffff",
					duration: "1500",
					delay: "0",
					easing: "Power2.easeOut",
					overlay_enabled: true,
					overlay_color: "#000000",
					overlay_duration: "1500",
					overlay_delay: "0",
					overlay_easing: "Power2.easeInOut",
					spinner: "5",
					spinnerColor: "#000000",
					spinnerHTML: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-5'><div class='rsaddon-revealer-5'><span style='background:{{color}}'><\/span> <span style='background:{{color}}'><\/span> <span style='background:{{color}}'><\/span> <span style='background:{{color}}'><\/span> <span style='background:{{color}}'><\/span><\/div><\/div>"
				},
				itm_6: {
					direction: "expand_circle",
					color: "#000000",
					duration: "1500",
					delay: "0",
					easing: "Power2.easeInOut",
					overlay_enabled: true,
					overlay_color: "#5b11b8",
					overlay_duration: "1500",
					overlay_delay: "0",
					overlay_easing: "Power2.easeInOut",
					spinner: "6",
					spinnerColor: "#ffffff",
					spinnerHTML: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-6'><div class='rsaddon-revealer-6'><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><\/div><\/div>"
				},
				itm_7: {
					direction: "left_to_right",
					color: "#ffffff",
					duration: "1500",
					delay: "0",
					easing: "Power2.easeInOut",
					overlay_enabled: true,
					overlay_color: "#000000",
					overlay_duration: "2500",
					overlay_delay: "0",
					overlay_easing: "Power2.easeInOut",
					spinner: "7",
					spinnerColor: "#006dd2",
					spinnerHTML: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-7'><div class='rsaddon-revealer-7' style='background:{{color}}'><\/div><\/div>"
				},
				itm_8: {
					direction: "right_to_left",
					color: "#ffffff",
					duration: "1500",
					delay: "0",
					easing: "Power2.easeInOut",
					overlay_enabled: true,
					overlay_color: "#006dd2",
					overlay_duration: "2500",
					overlay_delay: "0",
					overlay_easing: "Power2.easeInOut",
					spinner: "8",
					spinnerColor: "#006dd2",
					spinnerHTML: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-8'><div class='rsaddon-revealer-8'><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><\/div><\/div>"
				},
				itm_9: {
					direction: "top_to_bottom",
					color: "#ffffff",
					duration: "1500",
					delay: "0",
					easing: "Power2.easeInOut",
					overlay_enabled: true,
					overlay_color: "#5b11b8",
					overlay_duration: "2500",
					overlay_delay: "0",
					overlay_easing: "Power2.easeInOut",
					spinner: "9",
					spinnerColor: "#006dd2",
					spinnerHTML: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-9'><div class='rsaddon-revealer-9'><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><\/div><\/div>"
				},
				itm_10: {
					direction: "bottom_to_top",
					color: "#000000",
					duration: "1500",
					delay: "0",
					easing: "Power2.easeInOut",
					overlay_enabled: true,
					overlay_color: "#ffffff",
					overlay_duration: "2500",
					overlay_delay: "0",
					overlay_easing: "Power2.easeInOut",
					spinner: "10",
					spinnerColor: "#ffffff",
					spinnerHTML: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-10'><div class='rsaddon-revealer-10'><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><\/div><\/div>"
				},
				itm_11: {
					direction: "tlbr_skew",
					color: "#000000",
					duration: "1500",
					delay: "0",
					easing: "Power2.easeInOut",
					overlay_enabled: true,
					overlay_color: "#006dd2",
					overlay_duration: "1500",
					overlay_delay: "0",
					overlay_easing: "Power2.easeInOut",
					spinner: "1",
					spinnerColor: "#006dd2",
					spinnerHTML: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-1'><div class='rsaddon-revealer-1'><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><\/div><\/div \/>"
				},
				itm_12: {
					direction: "trbl_skew",
					color: "#000000",
					duration: "1500",
					delay: "0",
					easing: "Power2.easeInOut",
					overlay_enabled: true,
					overlay_color: "#5b11b8",
					overlay_duration: "1500",
					overlay_delay: "0",
					overlay_easing: "Power2.easeInOut",
					spinner: "2",
					spinnerColor: "rgba(255,255,255,",
					spinnerHTML: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-2'><div class='rsaddon-revealer-2' style='border-top-color: {{color}}0.65); border-bottom-color: {{color}}0.15); border-left-color: {{color}}0.65); border-right-color: {{color}}0.15)'><\/div><\/div>"
				},
				itm_13: {
					direction: "bltr_skew",
					color: "#ffffff",
					duration: "1500",
					delay: "0",
					easing: "Power2.easeInOut",
					overlay_enabled: true,
					overlay_color: "#000000",
					overlay_duration: "1500",
					overlay_delay: "0",
					overlay_easing: "Power2.easeInOut",
					spinner: "3",
					spinnerColor: "#006dd2",
					spinnerHTML: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-3'><div class='rsaddon-revealer-3'><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><\/div><\/div>"
				},
				itm_14: {
					direction: "brtl_skew",
					color: "#000000",
					duration: "1500",
					delay: "0",
					easing: "Power2.easeInOut",
					overlay_enabled: true,
					overlay_color: "#5b11b8",
					overlay_duration: "1500",
					overlay_delay: "0",
					overlay_easing: "Power2.easeInOut",
					spinner: "4",
					spinnerColor: "#5b11b8",
					spinnerHTML: "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-4'><div class='rsaddon-revealer-4'><span style='background:{{color}}'><\/span><span style='background:{{color}}'><\/span><\/div><\/div>"
				}
			};

			jQuery('body').on('click','.itm', function() {
				window.location.hash = '?' + this.id;
				return false;
			});
			window.addEventListener('hashchange', function() {
				window.location.reload();
			});
		}

			RsParticlesAddOn(revapi109);

			RsRevealerAddOn(tpj, revapi109, "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-1'><div class='rsaddon-revealer-1'><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><span style='background: {{color}}'><\/span><\/div><\/div \/>");
		});	/*ready*/