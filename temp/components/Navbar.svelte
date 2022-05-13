<script>
	import DarkModeToggle from "../components/toplevel/DarkModeToggle.svelte";
</script>

<nav
	class="fixed w-full top-0 flex flex-row py-6 px-8 bg-[#323345] drop-shadow-2xl border-b-1 border-[#cbd5e11a]"
>
	<div class="flex items-center">
		<!-- Logo/Other thing -->
		<h1><a href="/">Henry Sargeant</a></h1>
	</div>

	<div class="flex ml-auto items-center">
		<!-- Navbar -->
		<ul class="flex gap-9 uppercase">
			<li class="">
				<a href="/">Home</a>
			</li>

			<li class="">
				<a href="about">About</a>
			</li>

			<li class="">
				<a href="#">Previous Work</a>
			</li>

			<li class="">
				<a href="#">Services</a>
			</li>

			<!-- <li class="">
				<a href="#">Skillset</a>
			</li> -->
		</ul>

		<!-- PUT DARK MODE TOGGLE HERE! -->
		<DarkModeToggle />
	</div>
</nav>




