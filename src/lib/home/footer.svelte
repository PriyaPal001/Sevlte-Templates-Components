<!-- <script>
    import headIcon from '$lib/headerIcon.png';

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
</footer> -->



<footer class="bg-gray-900">
    <div class="px-4 py-24 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <nav class="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
        <div class="px-5 py-2">
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
            Next.js
          </a>
        </div>
  
        <div class="px-5 py-2">
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
            Remix
          </a>
        </div>
  
        <div class="px-5 py-2">
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
            Svelte
          </a>
        </div>
  
        <div class="px-5 py-2">
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
            Alpine.js
          </a>
        </div>
  
        <div class="px-5 py-2">
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
            Tailwind
          </a>
        </div>
  
        <div class="px-5 py-2">
          <a href="#" class="text-sm text-gray-500 hover:text-blue-600">
            Partners
          </a>
        </div>
      </nav>
      <div class="flex justify-center mt-8 space-x-6">
        <span class="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
          <a class="w-6 h-6 transition fill-black hover:text-blue-500">
            <span class="sr-only">
              github
            </span>
            <ion-icon class="w-5 h-5 md hydrated" name="logo-github" role="img" aria-label="logo github"></ion-icon>
          </a>
          <a class="w-6 h-6 transition fill-black hover:text-blue-500">
            <span class="sr-only">
              twitter
            </span>
            <ion-icon class="w-5 h-5 md hydrated" name="logo-twitter" role="img" aria-label="logo twitter"></ion-icon>
          </a>
          <a class="w-6 h-6 transition fill-black hover:text-blue-500">
            <span class="sr-only">
              Instagram
            </span>
            <ion-icon class="w-5 h-5 md hydrated" name="logo-instagram" role="img" aria-label="logo instagram"></ion-icon>
          </a>
          <a class="w-6 h-6 transition fill-black hover:text-blue-500">
            <span class="sr-only">
              Linkedin
            </span>
            <ion-icon class="w-5 h-5 md hydrated" name="logo-linkedin" role="img" aria-label="logo linkedin"></ion-icon>
          </a>
        </span>
      </div>
      <p class=" text-center">
        <span class="mx-auto mt-2 text-sm text-gray-500">
          Copyright © 2020 - 2021
          <a href="https://unwrapped.design" class="mx-2 text-blue-500 hover:text-gray-500" rel="noopener noreferrer">
            @unwrappedHQ
          </a>
          .Since 2020
        </span>
      </p>
    </div>
  </footer>            