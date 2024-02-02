<!-- Dark Side bar with Profile icon on right -->
<script>
    import { page } from '$app/stores';
    import { CalendarCheck2, Files, FolderClosed, Home, PieChart, Users, } from 'lucide-svelte';
    import headIcon from '$lib/headerIcon.png';

    let isMobileMenu = false;
    $: console.log(isMobileMenu);
    let layoutNavs = [
        {
            name: 'Navbar',
            link: '/components/navbar',
            icon: Home
        },
        {
            name: 'Hero',
            link: '/components/hero',
            icon: FolderClosed
        },
        {
            name: 'Buttons',
            link: '',
            icon: Users
        },
        {
            name: 'Card',
            link: '',
            icon: Files
        },
        {
            name: 'Collapse',
            link: '',
            icon: PieChart
        },
        {
            name: 'Forms',
            link: '',
            icon: CalendarCheck2
        },
        {
            name: 'Footer',
            link: '',
            icon: Users
        },
        {
            name: 'Mockup',
            link: '',
            //https://daisyui.com/components/mockup-code/
            icon: Files
        },
        {
            name: 'Table',
            link: '',
            icon: PieChart
        },
        {
            name: 'Modal',
            link: '',
            icon: CalendarCheck2
        },
        // {
        //     name: 'Nav',
        //     link: '',
        //     icon: Users
        // },
        // {
        //     name: 'Pagination',
        //     link: '',
        //     icon: Files
        // },
        // {
        //     name: 'Sidebar',
        //     link: '',
        //     icon: PieChart
        // },
        // {
        //     name: 'Table',
        //     link: '',
        //     icon: CalendarCheck2
        // },
        // {
        //     name: 'Tabs',
        //     link: '',
        //     icon: Users
        // },
        // {
        //     name: 'Tooltip',
        //     link: '',
        //     icon: Files
        // }

    ];
    // let teams = [
    //     {
    //         name: 'Frontend Team',
    //         link: '#',
    //         icon: 'F'
    //     },
    //     {
    //         name: 'UI Designers',
    //         link: '#',
    //         icon: 'U'
    //     },
    //     {
    //         name: 'System Designers',
    //         link: '#',
    //         icon: 'S'
    //     }
    // ];
    let webdata = {
        img: headIcon ,
        profileName: 'Code WareHouse',
        email: 'Tom Cook',
        profileImg: 'https://i.pinimg.com/564x/f5/6b/84/f56b848634acf5313132a33ee0f1bd8a.jpg',
        profileLink: '#',
        topic:'Dashboard'
    };
    $: routeID = $page.route.id;
</script>

<div class="">
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div
        class="{isMobileMenu
            ? 'opacity-100  transition-opacity ease-linear duration-300'
            : 'opacity-0  transition-opacity ease-linear duration-300'} relative z-50 lg:hidden"
        role="dialog"
        aria-modal="true"
    >
        <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <div
            class="{isMobileMenu
                ? 'translate-x-0 transition ease-in-out duration-300 transform '
                : '-translate-x-full transition ease-in-out duration-300 transform'} fixed inset-0 bg-gray-900/80"
        />

        <div
            class="{isMobileMenu
                ? 'translate-x-0 transition ease-in-out duration-300 transform '
                : '-translate-x-full transition ease-in-out duration-300 transform'} fixed inset-0 flex"
        >
            <!--
          Off-canvas menu, show/hide based on off-canvas menu state.
  
          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        -->
            <div
                class="{isMobileMenu
                    ? 'opacity-100 ease-in-out duration-300 '
                    : 'opacity-0 ease-in-out duration-300 '} relative mr-16 flex w-full max-w-xs flex-1"
            >
                <!--
            Close button, show/hide based on off-canvas menu state.
  
            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
                <div class=" absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" class="-m-2.5 p-2.5" on:click={() => (isMobileMenu = false)}>
                        <span class="sr-only">Close sidebar</span>
                        <svg
                            class="h-6 w-6 text-white"
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

                <!-- Sidebar component, swap this element with another sidebar if you like -->
                <div
                    class="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-2 ring-1 ring-white/10"
                >
                    <div class="flex h-16 shrink-0 items-center">
                        <a href="/"><img class="h-8 w-auto" src={webdata.img} alt="Your Company"></a>
                    </div>
                    <nav class="flex flex-1 flex-col">
                        <ul role="list" class="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" class="-mx-2 space-y-1">
                                    {#each layoutNavs as item}
                                        <li>
                                            <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                                            <a
                                                href={item.link}
                                                class="{routeID === item.link
                                                    ? 'bg-gray-800 text-white'
                                                    : 'text-gray-400 hover:text-white hover:bg-gray-800'}  group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                            >
                                                <svelte:component this={item.icon} strokeWidth="1.3" size="22" />
                                                {item.name}
                                            </a>
                                        </li>
                                    {/each}
                                </ul>
                            </li>
                            <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                            <!-- <li>
                                <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                                <ul role="list" class="-mx-2 mt-2 space-y-1">
                                    {#each teams as item}
                                        <li>
                                            <a
                                                href={item.link}
                                                class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                            >
                                                <span
                                                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                                                    >{item.icon}</span
                                                >
                                                <span class="truncate">{item.name}</span>
                                            </a>
                                        </li>
                                    {/each}
                                </ul>
                            </li> -->
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col border-r-4">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div class="flex h-16 shrink-0 items-center">
                <a href="/">
                    <img class="h-12 w-auto" src={webdata.img} alt="Your Company" />

                </a>
            </div>
            <nav class="flex flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" class="-mx-2 space-y-1">
                            {#each layoutNavs as item}
                                <li class="group">
                                    <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                                    <a
                                        href={item.link}
                                        class="{routeID === item.link
                                            ? 'bg-gray-800 text-white transition-all duration-150'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-150'}  group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                    >
                                        <svelte:component this={item.icon} strokeWidth="1.34" />
                                        {item.name}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </li>
                    <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                    <!-- <li>
                        <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                        <ul role="list" class="-mx-2 mt-2 space-y-1">
                            {#each teams as item}
                                <li>
                                    <a
                                        href={item.link}
                                        class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-150"
                                    >
                                        <span
                                            class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"
                                            >{item.icon}</span
                                        >
                                        <span class="truncate">{item.name}</span>
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </li> -->
                    <li class="-mx-6 mt-auto">
                        <a
                            href={webdata.profileLink}
                            class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                        >
                            <img class="h-8 w-8 rounded-full bg-gray-800" src={webdata.profileImg} alt="" />
                            <span class="sr-only">Your profile</span>
                            <span aria-hidden="true">{webdata.profileName}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <div
        class="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden"
    >
        <button
            type="button"
            class="-m-2.5 p-2.5 text-gray-400 lg:hidden"
            on:click={() => (isMobileMenu = true)}
        >
            <span class="sr-only">Open sidebar</span>
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
        <div class="flex-1 text-sm font-semibold leading-6 text-white">{webdata.topic}</div>
        <a href={webdata.profileLink}>
            <span class="sr-only">Your profile</span>
            <img class="h-8 w-8 rounded-full bg-gray-800" src={webdata.profileImg} alt="" />
        </a>
    </div>

    <main class="py-10 lg:pl-72 bg-gray-900 h-auto ">
        <div class="px-4 sm:px-6 lg:px-8">
            <!-- Your content -->
            <slot/>
            <!-- Your Content -->
        </div>
    </main>
</div>
