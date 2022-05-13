<script>
	/* https://www.swyx.io/svelte_tailwind_setup#optional-dark-mode */

	import "virtual:windi.css";
	import Navbar from "../components/Navbar.svelte";
</script>

<div class="cont bg-[#323345] w-screen h-screen">
	<div class="text-white dark:bg-red-600">
		<Navbar />

		<div class="px-auto">
			<slot />
		</div>
	</div>
</div>

<style>
	/* Global CSS Stuff */

	* {
		font-family: "Signika", sans-serif;
	}
</style>
