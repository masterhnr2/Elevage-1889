export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Elevage-1889/_app",
	assets: new Set([".nojekyll","Fonts/open_dyslexic/OpenDyslexic-Bold.otf","Fonts/open_dyslexic/OpenDyslexic-BoldItalic.otf","Fonts/open_dyslexic/OpenDyslexic-Italic.otf","Fonts/open_dyslexic/OpenDyslexic-Regular.otf","Fonts/open_dyslexic/OpenDyslexicAlta-Bold.otf","Fonts/open_dyslexic/OpenDyslexicAlta-BoldItalic.otf","Fonts/open_dyslexic/OpenDyslexicAlta-Italic.otf","Fonts/open_dyslexic/OpenDyslexicAlta-Regular.otf","Fonts/open_dyslexic/OpenDyslexicMono-Regular.otf","Fonts/open_dyslexic/README.txt","robots.txt"]),
	mimeTypes: {".otf":"font/otf",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.T9C7_m5e.js",app:"_app/immutable/entry/app.BqrbDwop.js",imports:["_app/immutable/entry/start.T9C7_m5e.js","_app/immutable/chunks/CcD_WUBn.js","_app/immutable/chunks/51RuFlK9.js","_app/immutable/chunks/CoXX6Fni.js","_app/immutable/chunks/DhUw68Ip.js","_app/immutable/entry/app.BqrbDwop.js","_app/immutable/chunks/51RuFlK9.js","_app/immutable/chunks/D6fkD4d_.js","_app/immutable/chunks/7bYFGcZI.js","_app/immutable/chunks/CoXX6Fni.js","_app/immutable/chunks/vN7LVBTN.js","_app/immutable/chunks/CQGBZTu-.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/Elevage-1889/","/Elevage-1889/apropos/","/Elevage-1889/folium/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
