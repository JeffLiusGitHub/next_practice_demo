benefits
1. no more third part librarys
2. framework on react
3. Fullstack server side rendering (good for SEO) react client side rendering
4. Blending client-side and server-side
5. fire-based routing (no extra code setting) define pages and routes with files and folders
6. Easy to add node js code
7. No index page because single page is dynamically rerender

useRouter run first without render page, get url data then

react 18 (strict mode) mount unmount mount again, so there will have some value console twice

get status props can provide SSG (statically site generation) automatically generate HTML+JSON

page pre rendering
good for seo
hydrate with react code (do react feature, like spa just in the browser not server)
some route do not have data

pre rendering [static generation, server-side rendering]

static generation: when you build, after it deployed it will not change

getstaticprops can set revalidate value
pre generate page and save in the cdn, loaded faster
server-side rendering: 

getserverside props have context {req,res}
good: render page based on incoming request
bad: time consuming

	//fallback true: can render page beyond path data/ false:only render path data otherwise 404