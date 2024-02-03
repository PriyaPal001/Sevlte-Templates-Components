<script>
    let cardList=[
        {
            img : "https://i.pinimg.com/236x/65/1f/6a/651f6a5534aaf432bacf75f325ada2b6.jpg",
            name : "Style",
            title : "Cool"
        },
        {
            img : "https://i.pinimg.com/236x/2f/7a/39/2f7a39b600adff9a38ccd7942f33153b.jpg",
            name : "Fashionable",
            title : "Dresses"
        },
        {
            img : "https://i.pinimg.com/236x/44/ef/34/44ef34e67387d037c85adb2427c62b8b.jpg",
            name : "Stylish",
            title : "forver"
        },
        {
            img : "https://i.pinimg.com/236x/de/78/99/de78993b79e57dd880796f8cec35e4d1.jpg",
            name : "Trendy",
            title : "Wears"

        }
    ]
</script>

<div class="bg-gray-800 py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div
        class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
      >
        {#each cardList as i}
        <div>
            <a
              href="#"
              class="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4 hover:shadow-2xl "
            >
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img
                src={i.img}
                loading="lazy"
                alt="Photo by Austin Wade"
                class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />
        
              <div
                class="w-full flex flex-col bg-gray-900 text-center rounded-lg relative p-4"
              >
                <span class="text-white ">{i.name}</span>
                <span class="text-gray-400 text-lg lg:text-2xl font-bold"
                  >{i.title}</span
                >
              </div>
            </a>
          </div>
        {/each}
        
      </div>
    </div>
  </div>


  