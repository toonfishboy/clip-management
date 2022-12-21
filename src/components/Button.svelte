<script lang="ts">
    export let disabled = false;
</script>

<button disabled={disabled} on:click class="px-4 py-2 text-white bg-rose-700">
    <slot></slot>
</button>