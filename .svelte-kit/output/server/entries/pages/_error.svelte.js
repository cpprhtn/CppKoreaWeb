import { g as getContext, c as create_ssr_component, d as subscribe, e as escape } from "../../chunks/ssr.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css = {
  code: ".container.svelte-hbk617{margin-block-start:var(--size-6);text-align:center}p.svelte-hbk617{color:var(--text-2)}",
  map: null
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="container svelte-hbk617"><h1>${escape($page.status)}: ${escape($page.error?.message)}</h1> <p class="svelte-hbk617" data-svelte-h="svelte-9njgbw">The route is in another castle.</p> </div>`;
});
export {
  Error$1 as default
};
