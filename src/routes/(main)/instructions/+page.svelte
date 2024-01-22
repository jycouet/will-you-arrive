<script lang="ts">
  import { page } from "$app/stores";

  $: repeat = parseInt($page.url.searchParams.get("repeat") ?? "1");
</script>

{#each { length: repeat } as _, i}
  <h2>Everyone needs to stand UP</h2>
{/each}

{#if repeat > 1}
  <a href="instructions?repeat={repeat - 1}">Previous</a> |
{/if}
<a href="instructions?repeat={repeat + 1}">Next</a>
{#if repeat > 2}
  | <a href="/Q00">First Question</a>
{/if}
