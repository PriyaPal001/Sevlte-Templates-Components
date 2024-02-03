
<script>
    let cardList=[
        {
            img : "https://i.pinimg.com/564x/84/b1/cf/84b1cfe57b0618d58c5d35ea3ae6c225.jpg",
            name : "Style",
            title : "Cool"
        },
        {
            img : "https://i.pinimg.com/236x/c9/9b/ab/c99bab74137ee15871a36bcdd637c0d3.jpg",
            name : "Fashionable",
            title : "Dresses"
        },
        {
            img : "https://i.pinimg.com/236x/92/7f/09/927f09b72cc06ef9891b5b099cd71733.jpg",
            name : "Stylish",
            title : "forver"
        },
        {
            img : "https://i.pinimg.com/236x/a7/87/e2/a787e24af6f598882670fae58e12e216.jpg",
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
          <div class="bg-gray-900 rounded-lg overflow-hidden">
            <img
              class="w-full h-64 object-cover object-center"
              src={i.img}
              alt=""
            />
            <div class="p-6">
              <h3 class="text-lg font-semibold text-white">{i.name}</h3>
              <p class="mt-2 text-sm text-gray-400">{i.title}</p>
            </div>
          </div>
        {/each}
        
      </div>
    </div>
  </div>