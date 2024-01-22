<pre>
  /src
    /routes
      /QXX
        /[id]
          /next
            +page.svelte      // We are here
      /QYY
        /[[id]]
          +page.svelte
	</pre>

<pre> &lt;a href="/QYY"&gt; Will you arrive ? &lt;/a&gt;</pre>
<a href="/QYY">Will you arrive ?</a>

<ul>
  <li>YES: Hands up</li>
  <li>NO: Hands down</li>
</ul>
