import Nav1 from "./allNav/nav1.svelte";
import Nav2 from "./allNav/nav2.svelte";
import Nav3 from "./allNav/nav3.svelte";
import Nav4 from "./allNav/nav4.svelte";
import Nav5 from "./allNav/nav5.svelte";
import Nav6 from "./allNav/nav6.svelte";

// place files you want to import through the `$lib` alias in this folder.
export let allnavs=[
    {
        name:'simplenav',
        comp:Nav1,
        code:`<script>
        let navs = [
            {
                name: 'Dashboard',
                link: '#'
            },
            {
                name: 'Projects',
                link: '#'
            },
            {
                name: 'About Us',
                link: '#'
            },
            {
                name: 'Settings',
                link: '#'
            }
        ];
    </script>
    
    <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button
                        type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>
                        <!--
                  Icon when menu is closed.
      
                  Menu open: "hidden", Menu closed: "block"
                -->
                        <svg
                            class="block h-6 w-6"
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
                        <!--
                  Icon when menu is open.
      
                  Menu open: "block", Menu closed: "hidden"
                -->
                        <svg
                            class="hidden h-6 w-6"
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
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <lord-icon
                            src="https://cdn.lordicon.com/edbxxrcj.json"
                            trigger="loop"
                            state="in-reveal"
                            delay="2000"
                            style="height:40px;width:40px;"
                        >
                        </lord-icon>
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            {#each navs as item}
                                <a
                                    href={item.link}
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                    >{item.name}</a
                                >
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
                {#each navs as item}
                    <a
                        href={item.link}
                        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                        >{item.name}</a
                    >
                {/each}
            </div>
        </div>
    </nav>
    `
    },
    {
        name:'simplenav2',
        comp:Nav2,
        code:`<script>
        import tempIcon from '$lib/temp-icon.gif';
          let navs = [
              {
                  name: 'Dashboard',
                  link: '#'
              },
              {
                  name: 'Projects',
                  link: '#'
              },
              {
                  name: 'About Us',
                  link: '#'
              },
              {
                  name: 'Settings',
                  link: '#'
              }
          ];
          </script>
      
      <nav class="bg-gray-800">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div class="relative flex h-16 items-center justify-between">
                  <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      <!-- Mobile menu button-->
                      <button
                          type="button"
                          class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          aria-controls="mobile-menu"
                          aria-expanded="false"
                      >
                          <span class="absolute -inset-0.5"></span>
                          <span class="sr-only">Open main menu</span>
                          <!--
                    Icon when menu is closed.
        
                    Menu open: "hidden", Menu closed: "block"
                  -->
                          <svg
                              class="block h-6 w-6"
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
                          <!--
                    Icon when menu is open.
        
                    Menu open: "block", Menu closed: "hidden"
                  -->
                          <svg
                              class="hidden h-6 w-6"
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
                  <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <div class="flex flex-shrink-0 items-center">
                        <lord-icon
                        src="https://cdn.lordicon.com/edbxxrcj.json"
                        trigger="loop"
                        state="in-reveal"
                        delay="2000"
                        style="height:40px;width:40px;"
                    >
                      </div>
                      <div class="hidden sm:ml-6 sm:block">
                          <div class="flex space-x-4">
                              {#each navs as item}
                                  <a
                                      href={item.link}
                                      class="text-gray-300  hover:underline-offset-8 hover:underline hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                      >{item.name}</a
                                  >
                              {/each}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      
          <!-- Mobile menu, show/hide based on menu state. -->
          <div class="sm:hidden" id="mobile-menu">
              <div class="space-y-1 px-2 pb-3 pt-2">
              {#each navs as item}
            
          <a
            href={item.link}
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >{item.name}</a
          >
          {/each}
                  
              </div>
          </div>
      </nav>
      `
    },
    {
        name:'simplenav3',
        comp:Nav3,
        code:'timmyyyyyy'
    },
    {
        name:'simplenav4',
        comp:Nav4,
        code:'timmyyyyyy'
    },
    {
        name:'simplenav5',
        comp:Nav5,
        code:'timmyyyyyy'
    },
    {
        name:'simplenav6',
        comp:Nav6,
        code:'timmyyyyyy'
    }
]