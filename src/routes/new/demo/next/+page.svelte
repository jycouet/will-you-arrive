<script lang="ts">
  import { route } from "$lib/ROUTES";

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
<pre> &lt;a href="/new/HowManyWinners?{nb}"&gt; Will you arrive ? &lt;/a&gt;</pre>
<a href={route("/new/HowManyWinnersAreHere", { nb: 5 })}>Will you arrive ?</a>

<ul>
  <li>YES: Hands up</li>
  <li>NO: Hands down</li>
</ul>
