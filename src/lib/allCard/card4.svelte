<script>
      let poppy=[
          {   
              icon:"",
              title:"Hello",
              description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
              link:""
          },
          {
              icon:"",
              title:"User",
              description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
              link:""
          },
          {
              icon:"",
              title:"Hello",
              description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ." ,
              link:""
          }
      ]
  </script>
  
  <section class="bg-gray-900 text-white " id="projects">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    
        <div class="mt-4 grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3 " >
          {#each poppy as i}
          <a
          class="block rounded-xl border bg-black border-gray-800 p-8 shadow-xl transition hover:border-white/10 hover:shadow-white/10"
          href="{i.link}"
          >
          <!-- <span class="h-10 w-10 text-white logo">{i.icon}</span> -->
          <lord-icon
						src="https://cdn.lordicon.com/edbxxrcj.json"
						trigger="loop"
						state="in-reveal"
						delay="2000"
						style="height:40px;width:40px;"
					>
					</lord-icon>
  
          <h2 class="mt-4 text-xl font-bold text-white">{i.title}</h2>
  
          <p class="mt-1 text-sm text-gray-300">
           {i.description}
          </p>
        </a>
          {/each}
    
        </div>
  
      </div>
    </section>