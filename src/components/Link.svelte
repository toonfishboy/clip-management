<script lang="ts">
	export let link: string = '';
</script>

<a href={link} class="rounded px-4 py-2 text-white bg-gradient-to-br from-sky-400 to-sky-800">
	<slot />
</a>
