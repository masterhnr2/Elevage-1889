
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/apropos" | "/folium";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/apropos": Record<string, never>;
			"/folium": Record<string, never>
		};
		Pathname(): "/" | "/apropos/" | "/folium/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/Fonts/open_dyslexic/OpenDyslexic-Bold.otf" | "/Fonts/open_dyslexic/OpenDyslexic-BoldItalic.otf" | "/Fonts/open_dyslexic/OpenDyslexic-Italic.otf" | "/Fonts/open_dyslexic/OpenDyslexic-Regular.otf" | "/Fonts/open_dyslexic/OpenDyslexicAlta-Bold.otf" | "/Fonts/open_dyslexic/OpenDyslexicAlta-BoldItalic.otf" | "/Fonts/open_dyslexic/OpenDyslexicAlta-Italic.otf" | "/Fonts/open_dyslexic/OpenDyslexicAlta-Regular.otf" | "/Fonts/open_dyslexic/OpenDyslexicMono-Regular.otf" | "/Fonts/open_dyslexic/README.txt" | "/robots.txt" | string & {};
	}
}