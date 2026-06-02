export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Elevage-1889/_app",
	assets: new Set([".nojekyll","Fonts/Fond.jpg","Fonts/open_dyslexic/OpenDyslexic-Bold.otf","Fonts/open_dyslexic/OpenDyslexic-BoldItalic.otf","Fonts/open_dyslexic/OpenDyslexic-Italic.otf","Fonts/open_dyslexic/OpenDyslexic-Regular.otf","Fonts/open_dyslexic/OpenDyslexicAlta-Bold.otf","Fonts/open_dyslexic/OpenDyslexicAlta-BoldItalic.otf","Fonts/open_dyslexic/OpenDyslexicAlta-Italic.otf","Fonts/open_dyslexic/OpenDyslexicAlta-Regular.otf","Fonts/open_dyslexic/OpenDyslexicMono-Regular.otf","Fonts/open_dyslexic/README.txt","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".otf":"font/otf",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DVDpOrlO.js",app:"_app/immutable/entry/app.CWuK6gkr.js",imports:["_app/immutable/entry/start.DVDpOrlO.js","_app/immutable/chunks/BwXzFp8m.js","_app/immutable/chunks/DoiNmOAs.js","_app/immutable/chunks/BNRrBNS3.js","_app/immutable/chunks/3bASLz40.js","_app/immutable/entry/app.CWuK6gkr.js","_app/immutable/chunks/DoiNmOAs.js","_app/immutable/chunks/11N8thD5.js","_app/immutable/chunks/Uzf8I0sM.js","_app/immutable/chunks/BNRrBNS3.js","_app/immutable/chunks/YhjufpQq.js","_app/immutable/chunks/nQrjMojE.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
