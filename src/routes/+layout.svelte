<script lang="ts">
  import { route } from "$lib/ROUTES";
</script>

<svelte:head>
  <title>Will you arrive?</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"
  />
</svelte:head>

<slot />

<br />
<br />
<br />
<br />
<br />

<hr />
<a href={route("/about")}>About</a> |
<a href={route("/about2")}>About2</a> |
<a target="_blank" href={route("gh")}>GitHub</a>
