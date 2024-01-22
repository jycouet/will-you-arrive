<script>
  import { page } from "$app/stores";

  $: repeat = parseInt($page.url.searchParams.get("nb") ?? "0");
</script>

{#each { length: repeat } as _, i}
  <h2>Bravooo 🥳</h2>
{/each}
