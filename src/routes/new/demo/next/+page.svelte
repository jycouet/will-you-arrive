<script lang="ts">
  // import { route } from "$lib/ROUTES";

  let nb = 100;
</script>

<pre>
  /src
    /routes
      /new
        /demo
          /next
            +page@new.svelte   // we are here
      /HowManyWinners
        +page.svelte
	</pre>

<input type="number" bind:value={nb} />
<pre> &lt;a href="/new/howManyWinners?{nb}"&gt; Will I arrive ? &lt;/a&gt;</pre>
<a href="/new/howManyWinners?nb={nb}">Will I arrive ?</a>
<!-- <a href={route("/new/howManyWinners", { nb })}>Yes of course for {nb}</a> -->
<ul>
  <li>YES: Hands up</li>
  <li>NO: Hands down</li>
</ul>
