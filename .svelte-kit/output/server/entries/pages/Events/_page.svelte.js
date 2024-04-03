import { c as create_ssr_component, f as each, h as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
const css = {
  code: "main.svelte-1ino6jq{max-width:800px;margin:0 auto;padding:20px;text-align:center}h2.svelte-1ino6jq{font-size:1.5em;margin-bottom:10px}.LinkButton.svelte-1ino6jq{margin-top:40px;color:var(--text-3);height:400px;align-items:center}.button-container.svelte-1ino6jq{display:flex;flex-direction:column;align-items:center;background-color:#f9f9f9;padding:20px;border-radius:8px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);transition:box-shadow 0.3s ease}p.svelte-1ino6jq{color:var(--text-1)}a.svelte-1ino6jq{text-decoration:none;color:#333}.shadow-button.svelte-1ino6jq:hover{box-shadow:0 8px 12px rgba(0, 0, 0, 0.2)}",
  map: null
};
const Events = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkButtons = [];
  $$result.css.add(css);
  return `<main class="svelte-1ino6jq"><h2 class="svelte-1ino6jq" data-svelte-h="svelte-12rqhit">&quot;다양한 분야에서 전문 개발자를 위해<br>정기적으로 밋업과 기술 세미나를 운영합니다.&quot;</h2> ${each(linkButtons, ({ url, image, description }) => {
    return `<div class="LinkButton svelte-1ino6jq"><a${add_attribute("href", url, 0)} target="_blank" class="col-sm shadow-button svelte-1ino6jq"><div class="button-container svelte-1ino6jq" style="${"height: 380px; background-image: url('" + escape(image, true) + "'); background-size: cover; background-position: center;"}"></div></a> <p class="svelte-1ino6jq">${escape(description)}</p> </div>`;
  })}</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Events, "Events").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
