<pre>
  /src
    /routes
      /(main)
        +layout.svelte
        /QYY
          /[[id]]
            /next
              +page.svelte    // we are here
      /new
        +layout.svelte
        /demo
          +layout.svelte
          +page@new.svelte
	</pre>

<pre> &lt;a href="/new"&gt; Will I arrive ? &lt;/a&gt;</pre>
<a href="/new">Will I arrive ?</a>

<ul>
  <li>YES: Hands up</li>
  <li>NO: Hands down</li>
</ul>
