import { r as root } from "./root.js";
import "./environment.js";
import "./server.js";
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
let read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function set_manifest(_) {
}
const options = {
  app_template_contains_nonce: false,
  async: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  csrf_trusted_origins: [],
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  service_worker_options: void 0,
  server_error_boundaries: false,
  templates: {
    app: ({ head, body, assets, nonce, env }) => '<!doctype html>\r\n<html lang="en">\r\n	<head>\r\n		<meta charset="utf-8" />\r\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\r\n\r\n\r\n		    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />\r\n    <script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.js"><\/script>\r\n    <script src="https://code.jquery.com/jquery-3.7.1.min.js"><\/script>\r\n    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"><\/script>\r\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js"><\/script>\r\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/leaflet.css"/>\r\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"/>\r\n    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css"/>\r\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/all.min.css"/>\r\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css"/>\r\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/python-visualization/folium/folium/templates/leaflet.awesome.rotate.min.css"/>\r\n    \r\n            <meta name="viewport" content="width=device-width,\r\n                initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />\r\n            <style>\r\n                #map_f8e71b8a1d842be02ac30c1839b12e94 {\r\n                    position: relative;\r\n                    width: 100.0%;\r\n                    height: 100.0%;\r\n                    left: 0.0%;\r\n                    top: 0.0%;\r\n                }\r\n                .leaflet-container { font-size: 1rem; }\r\n            </style>\r\n\r\n            <style>html, body {\r\n                width: 100%;\r\n                height: 100%;\r\n                margin: 0;\r\n                padding: 0;\r\n            }\r\n            </style>\r\n\r\n            <style>#map {\r\n                position:absolute;\r\n                top:0;\r\n                bottom:0;\r\n                right:0;\r\n                left:0;\r\n                }\r\n            </style>\r\n\r\n            <script>\r\n                L_NO_TOUCH = false;\r\n                L_DISABLE_3D = false;\r\n            <\/script>\r\n\r\n        \r\n    \r\n                    <style>\r\n                        .foliumpopup {\r\n                            margin: auto;\r\n                        }\r\n                       .foliumpopup table{\r\n                            margin: auto;\r\n                        }\r\n                        .foliumpopup tr{\r\n                            text-align: left;\r\n                        }\r\n                        .foliumpopup th{\r\n                            padding: 2px; padding-right: 8px;\r\n                        }\r\n                    </style>\r\n            \r\n    \r\n            \r\n                <style>\r\n                    .leaflet-image-layer {\r\n                        /* old android/safari*/\r\n                        image-rendering: -webkit-optimize-contrast;\r\n                        image-rendering: crisp-edges; /* safari */\r\n                        image-rendering: pixelated; /* chrome */\r\n                        image-rendering: -moz-crisp-edges; /* firefox */\r\n                        image-rendering: -o-crisp-edges; /* opera */\r\n                        -ms-interpolation-mode: nearest-neighbor; /* ie */\r\n                    }\r\n                </style>\r\n\r\n\r\n\r\n\r\n		' + head + '\r\n	</head>\r\n	<body data-sveltekit-preload-data="hover">\r\n		<div style="display: contents">' + body + "</div>\r\n	</body>\r\n</html>\r\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1p1xe6z"
};
async function get_hooks() {
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
export {
  set_public_env as a,
  set_read_implementation as b,
  set_manifest as c,
  get_hooks as g,
  options as o,
  public_env as p,
  read_implementation as r,
  set_private_env as s
};
