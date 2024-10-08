<script lang="ts">
	import '../../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { autoModeWatcher } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import shell from 'highlight.js/lib/languages/shell';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/Navigation.svelte';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('shell', shell);
	storeHighlightJs.set(hljs);

	export let data: PageData;

	let title = 'Maplibre/Mapbox GL Export';

	initializeStores();

	const drawerStore = getDrawerStore();

	const drawerOpen = () => {
		drawerStore.open({});
	};

	onMount(() => {
		autoModeWatcher();
	});
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:site_name" content={data.site_name} />
	<meta property="og:type" content="article" />
	<meta name="description" content={data.site_description} />
	<meta property="og:description" content={data.site_description} />
	<meta name="twitter:description" content={data.site_description} />
	<meta property="og:title" content={data.title} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.title} />
</svelte:head>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">{title}</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="hidden md:inline-block">
					<a
						class="btn btn-sm variant-ghost-surface"
						href="https://twitter.com/j_igarashi"
						target="_blank"
						rel="noreferrer"
					>
						Twitter
					</a>
					<a
						class="btn btn-sm variant-ghost-surface"
						href="https://github.com/erictheise/maplibre-gl-export"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<Drawer>
		<h2 class="p-4">{title}</h2>
		<hr />
		<Navigation />
		<hr />
		<p class="px-8">Maintained by JinIgarashi</p>
		<p class="px-8">The source code is licensed MIT</p>
		<p class="px-8">The website content is licensed CC BY NC SA 4.0</p>
	</Drawer>

	<slot />

	<svelte:fragment slot="footer">
		<div class="space-y-2 py-4">
			<div class="flex justify-center item-center">
				<span class="pr-2">Light/Dark mode switch</span>
				<span><LightSwitch /></span>
			</div>
			<p class="flex justify-center space-x-2">Maplibre/Mapbox GL Export by JinIgarashi.</p>
			<p class="flex justify-center space-x-2">The source code is licensed MIT.</p>
			<p class="flex justify-center space-x-2">The website content is licensed CC BY NC SA 4.0.</p>
		</div>
	</svelte:fragment>
</AppShell>
