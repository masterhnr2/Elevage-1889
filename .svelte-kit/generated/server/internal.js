
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\r\n\r\n\t\t    <meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\" />\r\n    <script src=\"https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.js\"></script>\r\n    <script src=\"https://code.jquery.com/jquery-3.7.1.min.js\"></script>\r\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js\"></script>\r\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.css\"/>\r\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css\"/>\r\n    <link rel=\"stylesheet\" href=\"https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css\"/>\r\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/all.min.css\"/>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css\"/>\r\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/python-visualization/folium/folium/templates/leaflet.awesome.rotate.min.css\"/>\r\n    \r\n            <meta name=\"viewport\" content=\"width=device-width,\r\n                initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\r\n            <style>\r\n                #map_f8e71b8a1d842be02ac30c1839b12e94 {\r\n                    position: relative;\r\n                    width: 100.0%;\r\n                    height: 100.0%;\r\n                    left: 0.0%;\r\n                    top: 0.0%;\r\n                }\r\n                .leaflet-container { font-size: 1rem; }\r\n            </style>\r\n\r\n            <style>html, body {\r\n                width: 100%;\r\n                height: 100%;\r\n                margin: 0;\r\n                padding: 0;\r\n            }\r\n            </style>\r\n\r\n            <style>#map {\r\n                position:absolute;\r\n                top:0;\r\n                bottom:0;\r\n                right:0;\r\n                left:0;\r\n                }\r\n            </style>\r\n\r\n            <script>\r\n                L_NO_TOUCH = false;\r\n                L_DISABLE_3D = false;\r\n            </script>\r\n\r\n        \r\n    \r\n                    <style>\r\n                        .foliumpopup {\r\n                            margin: auto;\r\n                        }\r\n                       .foliumpopup table{\r\n                            margin: auto;\r\n                        }\r\n                        .foliumpopup tr{\r\n                            text-align: left;\r\n                        }\r\n                        .foliumpopup th{\r\n                            padding: 2px; padding-right: 8px;\r\n                        }\r\n                    </style>\r\n            \r\n    \r\n            \r\n                <style>\r\n                    .leaflet-image-layer {\r\n                        /* old android/safari*/\r\n                        image-rendering: -webkit-optimize-contrast;\r\n                        image-rendering: crisp-edges; /* safari */\r\n                        image-rendering: pixelated; /* chrome */\r\n                        image-rendering: -moz-crisp-edges; /* firefox */\r\n                        image-rendering: -o-crisp-edges; /* opera */\r\n                        -ms-interpolation-mode: nearest-neighbor; /* ie */\r\n                    }\r\n                </style>\r\n\r\n\r\n\r\n\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body data-sveltekit-preload-data=\"hover\">\r\n\t\t<div style=\"display: contents\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "4g3yq8"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
