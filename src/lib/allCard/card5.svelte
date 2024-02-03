<script>
    let data = [
      {
        name: "HOLDEN CAULFIELD",
        des: "Senior Product Designer",
        img: "https://i.pinimg.com/236x/e6/15/26/e61526e4ae6bc15392473886993d00aa.jpg",
        text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      },
      {
        name: "ALPER KAMU",
        des: "UI Develeoper",
        img: "https://i.pinimg.com/236x/90/2b/84/902b841f3567ff8282b5db97c257aef1.jpg",
        text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      },
      {
        name: "HENRY LETHAM",
        des: "CTO",
        img: "https://i.pinimg.com/564x/40/98/2a/40982a8167f0a53dedce3731178f2ef5.jpg",
        text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      },
    ];
  </script>
  
  <section class="text-blue-900 body-font ">
    <div class="container px-5 py-5 md:py-24 mx-auto ">
      <div
        class="flex flex-wrap -m-4"
      >
        {#each data as item}
          <div class="p-4 md:w-1/3 ">
            <div
              class="h-full bg-gray-800 bg-opacity-75 py-4  md:px-10 md:py-10 overflow-hidden text-center relative border-gray-900 border-2 rounded-2xl"
            >
              <img
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-200"
                src={item.img}
              />
              <p class="leading-relaxed text-white">{item.text}</p>
              <span
                class="inline-block h-1 w-10 rounded bg-black mt-6 mb-4"
              />
              <h2
                class="text-gray-400 font-medium title-font tracking-wider text-sm"
              >
                {item.name}
              </h2>
              <p class="text-gray-500">{item.des}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>