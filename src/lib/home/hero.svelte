<script>
	import svelteimg from '$lib/icon/svelte.svg';
	import supaimg from '$lib/icon/supa.svg';
	import tailimg from '$lib/icon/tailwind.svg';
</script>

<main class="bg-gray-900 z-10">
	<!-- Hero section -->
	<div class="relative isolate overflow-hidden bg-gray-900 pb-16 pt-36 sm:pb-20">
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
				<!-- <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div
                        class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
                    >
                        Announcing our next round of funding. <a href="#" class="font-semibold text-white"
                            ><span class="absolute inset-0" aria-hidden="true"></span>Read more
                            <span aria-hidden="true">&rarr;</span></a
                        >
                    </div>
                </div> -->
				<div class="text-center">
					<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
						Components Hub: Explore, Create, Innovate
					</h1>
					<p class="mt-6 text-lg leading-8 text-gray-300">
						Svelte Templates and Components for developers with Amazing UI and functionalities
					</p>
					<div class="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="/components"
							class="rounded-md bg-purple-900 px-8 py-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
							>Explore</a
						>
						<!-- <a href="#" class="text-sm font-semibold leading-6 text-white"
                            >Live demo <span aria-hidden="true">→</span></a
                        > -->
					</div>
				</div>
			</div>

			<!-- Logo cloud -->
			<div
				class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
			>
            <div class="flex justify-center inline-block">
                <img
                    class="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
                    src={svelteimg}
                    alt="Tuple"
                    width="100"
                    height="48"
                />
                <h1 class=" text-white font-bold text-2xl ">Svelte</h1>
            </div>
            <div class="flex justify-center inline-block">
                <img
                    class="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
                    src={supaimg}
                    alt="Tuple"
                    width="100"
                    height="48"
                />
                <h1 class=" text-white font-bold text-2xl">Supabase</h1>
            </div>
				<div class="flex justify-center inline-block">
					<img
						class="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
						src={tailimg}
						alt="Tuple"
						width="100"
						height="48"
					/>
					<h1 class=" text-white font-bold text-2xl">Tailwind</h1>
				</div>
				<img
					class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
					src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
					alt="SavvyCal"
					width="100"
					height="40"
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
        <div class="hidden sm:mb-8 sm:flex sm:justify-center mt-6">
                    <div
                        class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
                    >
                        Made with all new technologics <a href="#" class="font-semibold text-white"
                            ><span class="absolute inset-0" aria-hidden="true"></a
                        >
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
										“Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut
										officia rem nulla blanditiis.”
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
										“Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae.
										Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.”
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
