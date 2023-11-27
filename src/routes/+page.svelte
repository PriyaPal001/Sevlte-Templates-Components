<script>
	import { slide } from 'svelte/transition';
	import Proimg from '$lib/man.gif';
	import Basimg from '$lib/basket.gif';
	import callimg from '$lib/call.gif';
	import watchimg from '$lib/watch.gif';
	import productimg from '$lib/product.gif';
	import svelteimg from '$lib/svelte-horizontal.svg';
	import supaimg from '$lib/supabase-logo.png';
	import headIcon from '$lib/headerIcon.png';

	let open = false;
	let isProductMobile = false;
	let isMobileMenu = false;
	let allData = {
		img: headIcon,
		navs: [
			{
				name: 'Features',
				link: '/'
			},
			{
				name: 'Components',
				link: '/'
			},
			{
				name: 'Company',
				link: '/'
			}
		],
		products: [
			{
				name: 'Profiles',
				link: '/',
				desc: 'Get a better understanding where your traffic is coming from',
				icon: Proimg
			},
			{
				name: 'E-Commerce',
				link: '/',
				desc: 'Speak directly to your customers with our engagement tool',
				icon: Basimg
			}
			// {
			//     name: 'Security',
			//     link: '/',
			//     desc: 'Your customers’ data will be safe and secure',
			//     icon:` <svg
			//                         class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
			//                         fill="none"
			//                         viewBox="0 0 24 24"
			//                         stroke-width="1.5"
			//                         stroke="currentColor"
			//                         aria-hidden="true"
			//                     >
			//                         <path
			//                             stroke-linecap="round"
			//                             stroke-linejoin="round"
			//                             d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
			//                         />
			//                     </svg>`
			// },
			// {
			//     name: 'Integrations',
			//     link: '/',
			//     desc: 'Connect with third-party tools that you’re already using.',
			//     icon: `<svg
			//                         class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
			//                         fill="none"
			//                         viewBox="0 0 24 24"
			//                         stroke-width="1.5"
			//                         stroke="currentColor"
			//                         aria-hidden="true"
			//                     >
			//                         <path
			//                             stroke-linecap="round"
			//                             stroke-linejoin="round"
			//                             d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
			//                         />
			//                     </svg>`
			// }
		]
	};

	let footeritems = [
		{
			name: 'Solutions',
			link: '/',
			sub: [
				{
					name: 'Marketing',
					link: '/'
				},
				{
					name: 'Analytics',
					link: '/'
				},
				{
					name: 'Commerce',
					link: '/'
				},
				{
					name: 'Insights',
					link: '/'
				}
			]
		},
		{
			name: 'Support',
			link: '/',
			sub: [
				{
					name: 'Pricing',
					link: '/'
				},
				{
					name: 'Documentation',
					link: '/'
				},
				{
					name: 'Guides',
					link: '/'
				},
				{
					name: 'API Status',
					link: '/'
				}
			]
		},
		{
			name: 'Company',
			link: '/',
			sub: [
				{
					name: 'About',
					link: '/'
				},
				{
					name: 'Blog',
					link: '/'
				},
				{
					name: 'Jobs',
					link: '/'
				},
				{
					name: 'Press',
					link: '/'
				},
				{
					name: 'Partners',
					link: '/'
				}
			]
		},
		{
			name: 'Legal',
			link: '/',
			sub: [
				{
					name: 'Claim',
					link: '/'
				},
				{
					name: 'Privacy',
					link: '/'
				},
				{
					name: 'Terms',
					link: '/'
				}
			]
		}
	];
</script>

<div class="bg-gray-900">
	<!-- Header -->

	<header class="relative isolate z-10 bg-gray-900">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<img class="h-10 w-auto" src={allData.img} alt="" />
				</a>
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
						<div class="bg-gradient-to-r from-indigo-600/20 to-indigo-900/20">
							<div class="mx-auto max-w-7xl px-6 lg:px-8">
								<div class="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
									<a
										href="/"
										class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-white hover:bg-gray-900/20"
									>
										<img src={watchimg} class="h-11 w-11 flex-none" alt="" />
										Watch demo
									</a>
									<a
										href="/"
										class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-white hover:bg-gray-900/20"
									>
										<img src={callimg} class="h-11 w-11 flex-none" alt="" />
										Contact sales
									</a>
									<a
										href="/"
										class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-white hover:bg-gray-900/20"
									>
										<img src={productimg} class="h-11 w-11 flex-none" alt="" />
										View all products
									</a>
								</div>
							</div>
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
			<div class="{isMobileMenu ? 'visible' : 'hidden'} fixed inset-0 z-10" />
			<div
				class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<img class="h-8 w-auto" src={allData.img} alt="" />
					</a>
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

	<main>
		<!-- Hero section -->
		<div class="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
			<!-- <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover"> -->
			<div
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div>
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20">
					<div class="hidden sm:mb-8 sm:flex sm:justify-center">
						<div
							class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
						>
							Announcing our next round of funding. <a href="#" class="font-semibold text-white"
								><span class="absolute inset-0" aria-hidden="true"></span>Read more
								<span aria-hidden="true">&rarr;</span></a
							>
						</div>
					</div>
					<div class="text-center">
						<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Deploy to the cloud with confidence
						</h1>
						<p class="mt-6 text-lg leading-8 text-gray-300">
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
							commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
						</p>
						<div class="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#"
								class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
								>Get started</a
							>
							<a href="#" class="text-sm font-semibold leading-6 text-white"
								>Live demo <span aria-hidden="true">→</span></a
							>
						</div>
					</div>
				</div>

				<!-- Logo cloud -->
				<div
					class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
				>
					<img
						class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src={svelteimg}
						alt="Transistor"
						width="158"
						height="48"
					/>
					<img
						class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src={supaimg}
						alt="Reform"
						width="158"
						height="48"
					/>
					<img
						class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
						alt="Tuple"
						width="158"
						height="48"
					/>
					<img
						class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
						alt="SavvyCal"
						width="158"
						height="48"
					/>
					<img
						class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
						alt="Statamic"
						width="158"
						height="48"
					/>
				</div>
			</div>
			<div
				class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div>
		</div>

		<!-- Feature section -->

		<!-- Testimonial section -->
		<div class="relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
			<div class="absolute inset-0 overflow-hidden" aria-hidden="true">
				<div class="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
					<div
						class="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
						style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
					></div>
				</div>
			</div>
			<div
				class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch"
			>
				<div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
					<div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
						<img
							class="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
							src="https://i.pinimg.com/236x/ec/ab/0f/ecab0ff22a763ab7e108130912cfb34c.jpg"
							alt=""
						/>
					</div>
				</div>
				<div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
					<figure class="relative isolate pt-6 sm:pt-12">
						<svg
							viewBox="0 0 162 128"
							fill="none"
							aria-hidden="true"
							class="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
						>
							<path
								id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
								d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
							/>
							<use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
						</svg>
						<blockquote class="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
							<p>
								Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc
								suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum
								eget tellus non nibh scelerisque bibendum.
							</p>
						</blockquote>
						<figcaption class="mt-8 text-base">
							<div class="font-semibold text-white">Judith Black</div>
							<div class="mt-1 text-gray-400">CEO of Tuple</div>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>

		<!-- Pricing section -->

		<!-- FAQ section -->

		<div class="relative isolate mt-32 sm:mt-56 sm:pt-32">
			<svg
				class="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
				aria-hidden="true"
			>
				<defs>
					<pattern
						id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
						width="200"
						height="200"
						x="50%"
						y="0"
						patternUnits="userSpaceOnUse"
					>
						<path d="M.5 200V.5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y="0" class="overflow-visible fill-gray-800">
					<path
						d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
						stroke-width="0"
					/>
				</svg>
				<rect
					width="100%"
					height="100%"
					stroke-width="0"
					fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
				/>
			</svg>
			<div class="relative">
				<div
					class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
					aria-hidden="true"
				>
					<div
						class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
						style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
					></div>
				</div>
				<div
					class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
					aria-hidden="true"
				>
					<div
						class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
						style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
					></div>
				</div>
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-xl sm:text-center">
						<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
							We have worked with thousands of amazing people
						</p>
					</div>
					<div
						class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
					>
						<figure
							class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1"
						>
							<blockquote class="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
								<p>
									“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae
									auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi
									venenatis blandit vel et proin. Non hendrerit in vel ac diam.”
								</p>
							</blockquote>
							<figcaption class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
								<img
									class="h-10 w-10 flex-none rounded-full bg-gray-50"
									src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
									alt=""
								/>
								<div class="flex-auto">
									<div class="font-semibold">Brenna Goyette</div>
									<div class="text-gray-600">@brennagoyette</div>
								</div>
								<img
									class="h-10 w-auto flex-none"
									src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
									alt=""
								/>
							</figcaption>
						</figure>
						<div class="space-y-8 xl:contents xl:space-y-0">
							<div class="space-y-8 xl:row-span-2">
								<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
									<blockquote class="text-gray-900">
										<p>
											“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil.
											Aut enim doloremque et ipsam.”
										</p>
									</blockquote>
									<figcaption class="mt-6 flex items-center gap-x-4">
										<img
											class="h-10 w-10 rounded-full bg-gray-50"
											src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
										<div>
											<div class="font-semibold">Leslie Alexander</div>
											<div class="text-gray-600">@lesliealexander</div>
										</div>
									</figcaption>
								</figure>

								<!-- More testimonials... -->
							</div>
							<div class="space-y-8 xl:row-start-1">
								<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
									<blockquote class="text-gray-900">
										<p>
											“Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam
											ut officia rem nulla blanditiis.”
										</p>
									</blockquote>
									<figcaption class="mt-6 flex items-center gap-x-4">
										<img
											class="h-10 w-10 rounded-full bg-gray-50"
											src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
										<div>
											<div class="font-semibold">Lindsay Walton</div>
											<div class="text-gray-600">@lindsaywalton</div>
										</div>
									</figcaption>
								</figure>

								<!-- More testimonials... -->
							</div>
						</div>
						<div class="space-y-8 xl:contents xl:space-y-0">
							<div class="space-y-8 xl:row-start-1">
								<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
									<blockquote class="text-gray-900">
										<p>
											“Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis
											repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe
											corrupti.”
										</p>
									</blockquote>
									<figcaption class="mt-6 flex items-center gap-x-4">
										<img
											class="h-10 w-10 rounded-full bg-gray-50"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
										<div>
											<div class="font-semibold">Tom Cook</div>
											<div class="text-gray-600">@tomcook</div>
										</div>
									</figcaption>
								</figure>

								<!-- More testimonials... -->
							</div>
							<div class="space-y-8 xl:row-span-2">
								<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
									<blockquote class="text-gray-900">
										<p>
											“Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit
											incidunt excepturi rerum voluptatem minus harum.”
										</p>
									</blockquote>
									<figcaption class="mt-6 flex items-center gap-x-4">
										<img
											class="h-10 w-10 rounded-full bg-gray-50"
											src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt=""
										/>
										<div>
											<div class="font-semibold">Leonard Krasner</div>
											<div class="text-gray-600">@leonardkrasner</div>
										</div>
									</figcaption>
								</figure>

								<!-- More testimonials... -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>

	<!-- Footer -->
	<footer class="mt-32 bg-gray-900 sm:mt-56" aria-labelledby="footer-heading">
		<h2 id="footer-heading" class="sr-only">Footer</h2>
		<div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
			<div class="xl:grid xl:grid-cols-3 xl:gap-8">
				<img
					class="h-28"
					src={headIcon}
					alt="Company name"
				/>
				<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
					<div class="grid-cols-2 gap-40 grid  md:grid-cols-4 md:gap-52">
						{#each footeritems as item}
            <div>
							<h3 class="text-xl font-bold leading-6 text-white">{item.name}</h3>
							{#each item.sub as subitem}
								<ul role="list" class="mt-6 space-y-4">
									<li>
										<a href={subitem.link} class="text-sm leading-6 text-gray-300 hover:text-white"
											>{subitem.name}</a
										>
									</li>
								</ul>
							{/each}
						</div>
            {/each}
						
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>

