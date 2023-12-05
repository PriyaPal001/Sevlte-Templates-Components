<script>
	import { slide } from 'svelte/transition';
	import callimg from '$lib/call.gif';
	import watchimg from '$lib/watch.gif';
	import productimg from '$lib/product.gif';

	let open = false;
	let isProductMobile = false;
	let isMobileMenu = false;
	let allData = {
		navs: [
			{
				name: 'Features',
				link: '/'
			},
			{
				name: 'Components',
				link: '/components'
			},
			{
				name: 'Company',
				link: '/'
			}
		],
		products: [
			{
			    name: 'Security',
			    link: '/',
			    desc: 'Your customers’ data will be safe and secure',
			    icon:` <lord-icon
                    src="https://cdn.lordicon.com/edbxxrcj.json"
                    trigger="loop"
                    state="in-reveal"
                    delay="2000"
                    style="height:40px;width:40px;"
                >`
			},
			{
			    name: 'Integrations',
			    link: '/',
			    desc: 'Connect with third-party tools that you’re already using.',
			    icon: `<lord-icon
                    src="https://cdn.lordicon.com/edbxxrcj.json"
                    trigger="loop"
                    state="in-reveal"
                    delay="2000"
                    style="height:40px;width:40px;"
                >`
			}
		]
	};
</script>

<div class="bg-gray-800">
	<!-- Header -->

	<header class="relative isolate">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<lord-icon
						src="https://cdn.lordicon.com/edbxxrcj.json"
						trigger="loop"
						state="in-reveal"
						delay="2000"
						style="height:40px;width:40px;"
					>
					</lord-icon></a
				>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					on:click={() => (isMobileMenu = true)}
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<div>
					<button
						type="button"
						class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white border-none outline-none"
						aria-expanded="false"
						on:click={() => (open = !open)}
					>
						Templates
						<svg
							class="{open
								? 'rotate-180 transition-all duration-200'
								: 'transition-all duration-200 '} h-5 w-5 flex-none text-white"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>

					<div
						class=" {open
							? 'opacity-100 visible translate-y-0 transition ease-out duration-200'
							: 'opacity-0 hidden -translate-y-1 transition ease-out duration-200'} absolute inset-x-0 top-0 -z-10 bg-gray-900 pt-14 shadow-lg ring-1 ring-gray-900/5"
					>
						<div class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
							{#each allData.products as item}
								<div
									class="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-900 bg-gradient-to-r from-indigo-600/20 to-indigo-900/20"
								>
									<div class="flex h-11 w-11 items-center justify-center rounded-lg">
										<!-- {@html item.icon} -->
										<img src={item.icon} alt="" />
									</div>
									<a
										href={item.link}
										class="mt-6 block font-semibold text-gray-400 hover:text-white"
									>
										{item.name}
										<span class="absolute inset-0" />
									</a>
									<p class="mt-1 text-white group-hover:text-sky-500">
										{item.desc}
									</p>
								</div>
							{/each}
						</div>
						
					</div>
				</div>

				{#each allData.navs as item}
					<a href={item.link} class="text-sm font-semibold leading-6 text-white">{item.name}</a>
				{/each}
			</div>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<a href="/" class="text-sm font-semibold leading-6 text-white"
					>Log in <span aria-hidden="true">&rarr;</span></a
				>
			</div>
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class="{isMobileMenu ? 'visible' : 'hidden'} lg:hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="{isMobileMenu ? 'visible' : 'hidden'} fixed inset-0 z-50" />
			<div
				class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<lord-icon
							src="https://cdn.lordicon.com/edbxxrcj.json"
							trigger="loop"
							state="in-reveal"
							delay="2000"
							style="height:40px;width:40px;"
						>
						</lord-icon></a
					>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						on:click={() => (isMobileMenu = false)}
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<div class="-mx-3">
								<button
									type="button"
									class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									aria-controls="disclosure-1"
									aria-expanded="false"
									on:click={() => (isProductMobile = !isProductMobile)}
								>
									Templates
									<!--
                            Expand/collapse icon, toggle classes based on menu open state.
          
                            Open: "rotate-180", Closed: ""
                          -->
									<svg
										class="{isProductMobile
											? ' rotate-180 transition-all duration-300 '
											: 'transition-all duration-300 '} h-5 w-5 flex-none"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
								<!-- 'Product' sub-menu, show/hide based on menu state. -->
								{#key isProductMobile}
									<div
										transition:slide={{ duration: 300 }}
										class="{isProductMobile ? 'visible' : 'hidden'} mt-2 space-y-2"
										id="disclosure-1"
									>
										{#each allData.products as item}
											<a
												href={item.link}
												class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
												>{item.name}</a
											>
										{/each}
									</div>
								{/key}
							</div>
							{#each allData.navs as item}
								<a
									href={item.link}
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>{item.name}</a
								>
							{/each}
						</div>
						<div class="py-6">
							<a
								href="/"
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Log in</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

	<!-- Mobile menu, show/hide based on menu open state. -->
</div>
