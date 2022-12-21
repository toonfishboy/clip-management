<script lang="ts">
	import Input from '../../components/Input.svelte';
	import Button from '../../components/Button.svelte';

	let username = '';
	let password = '';

	async function login() {
		const data = await fetch('api/login', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password
			})
		});
		console.log({ data });
	}
</script>

<div class="grid place-items-center h-screen">
	<div class="w-1/3 flex flex-col gap-2">
		<Input bind:value={username} />
		<Input bind:value={password} />
		<Button on:click={login}>Test</Button>
	</div>
</div>
