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
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/apropos",
				pattern: /^\/apropos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/folium",
				pattern: /^\/folium\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
