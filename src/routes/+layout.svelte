<script lang="ts">
	// import { page } from '$app/stores'
	import Header from './header.svelte'
	import '../app.postcss'
  	import Footer from '$lib/components/Footer.svelte';

	// $: ({ title } = $page.data)
</script>



<Header />

<div>
	<div>
		<slot />
	</div>
	<!-- <Footer /> -->
</div>
