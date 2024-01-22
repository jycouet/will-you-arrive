<h2>How to?</h2>

<i>in terminal</i>
<pre
  style="border: solid 0.3px; padding: 5px; background-color: black;">npm i -D vite-plugin-kit-routes</pre>

<i>in vite.config.ts</i>
<pre
  style="border: solid 0.3px; padding: 5px; background-color: black;">{`import { sveltekit } from '@sveltejs/kit/vite'
import { kitRoutes } from 'vite-plugin-kit-routes'
	 
const config = {
  plugins: [
    sveltekit(),
    kitRoutes() // ✅
  ]
}
	 
export default config`}</pre>

<h3>Enjoy 🎉</h3>
<pre
  style="border: solid 0.3px; padding: 5px; background-color: black;">route('/')</pre>
