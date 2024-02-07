<script>
	import { slide, fade } from 'svelte/transition';
	let images = [
		'https://img.freepik.com/free-photo/young-beautiful-stylish-woman-wedding-dress_285396-7822.jpg?w=826&t=st=1677540031~exp=1677540631~hmac=6a2361f0648494b80a130461b397d2df05561817ff6d745a6c0b65904be69149',
		'https://img.freepik.com/free-photo/beautiful-model-girl-white-dress-man-suit_1328-1779.jpg?w=826&t=st=1677540225~exp=1677540825~hmac=918ca7b63749fd56b72a275a568892aaa0da7a611e612f2edd9a34793c5e51b4',
		'https://img.freepik.com/premium-photo/beautiful-young-brunette-woman-choosing-wedding-dress-bridal-salon_633611-4120.jpg?w=826',
		'https://img.freepik.com/free-photo/elegant-bride-puts-wedding-gown-her-room_146671-19765.jpg?w=826&t=st=1677540176~exp=1677540776~hmac=60262550c6d59c7039d271ca6c53ca04bbe76f2556f1bfb522d6e9799901b5e1',
		// "https://img.freepik.com/free-photo/young-woman-celebrating-her-quinceanera_23-2149449182.jpg?w=826&t=st=1677541511~exp=1677542111~hmac=b9cf8f633aaaf46c3a0d76d5a0804fe1cc1200bfa98f2a2746ba21b61179e6b1",
		'https://img.freepik.com/free-photo/young-beautiful-stylish-woman-wedding-dress_285396-7876.jpg?w=826&t=st=1677540075~exp=1677540675~hmac=61bfe705f701e43138aae1e0a00eb3db24ba76da2d693de909b350bbda60beff',
		'https://img.freepik.com/free-photo/beautiful-bride-portrait-beach_23-2149044012.jpg?w=826&t=st=1677541563~exp=1677542163~hmac=2175416175fe5c25b48f4fa669af29d84be8dcdf22257c031f4deb99b9f1b6fc'
	];
	let i = 0;

	let interval = setInterval(() => {
		i++;
		if (i == images.length) {
			i = 0;
		}
	}, 4000);
</script>

<section
	class="relative bg-cover bg-center bg-no-repeat bg-gray-900 h-[600px] w-full"
	style="background-image: url('{images[i]}');"
>
	<!-- <div
		class="absolute inset-0 bg-white/5 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray-900 sm:to-white/25"
	>
		<div
			class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
		>
			<div class="max-w-xl text-center sm:text-left">
				<h1 class="text-3xl font-extrabold sm:text-5xl text-sky-500">
					Let us find your

					<strong class="block font-extrabold text-rose-700"> Dream Dress. </strong>
				</h1>

				<p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
					We have a wide range of dresses that you can <span class="font-bold text-sky-500 logo"
						>R</span
					><span class="text-sky-500 font-bold">ent</span> it for all occasions. We have dresses for
					weddings, proms, quinceaneras, and more. We also have dresses for all sizes. We have dresses
					for petite, plus size, and everything in between.
				</p>

				<div class="mt-8 flex flex-wrap gap-4 text-center">
					<a
						href="/Gowns"
						class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
					>
						Products
					</a>

					<a
						href="/Lahenga/2"
						class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
					>
						Specials
					</a>
				</div>
			</div>
		</div>
	</div> -->

</section>
