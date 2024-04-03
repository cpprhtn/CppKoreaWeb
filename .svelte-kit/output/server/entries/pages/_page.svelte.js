import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const css = {
  code: ".heading.svelte-1rj0e2r{max-width:400px;font-size:var(--font-size-4);line-height:1.2;margin-block-start:var(--size-6);color:var(--text-1);@media (width > 800px) {\n			max-width: 800px;\n			font-size: var(--font-size-5);\n		}}.subheading.svelte-1rj0e2r{max-width:800px;margin-block:var(--size-4);font-size:var(--font-size-3);color:var(--text-1);& a {\n			color: var(--text-3);\n			font-weight: 600;\n			text-decoration: underline wavy;\n			text-decoration-color: var(--brand);\n\n			&:hover {\n				color: var(--brand);\n			}\n		};@media (width > 800px) {\n			font-size: var(--font-size-4);\n		}}.water-drop.svelte-1rj0e2r{width:800px;height:800px;background-image:linear-gradient(303deg,#64a1ff,#88fcfe);border-radius:50%;position:absolute;transition:transform 1s ease-in-out}.text-behind.svelte-1rj0e2r{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:18px;color:white;z-index:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let x = -50;
  let y = -20;
  function moveWaterDrop() {
    x = Math.random() * 10;
    y = Math.random() * 10;
  }
  function autoMoveWaterDrop() {
    setInterval(
      () => {
        moveWaterDrop();
      },
      20
    );
  }
  autoMoveWaterDrop();
  $$result.css.add(css);
  return `<div class="water-drop svelte-1rj0e2r" style="${"transform: translate(" + escape(x, true) + "%, " + escape(y, true) + "%);"}"></div> <div style="height: 800px;"></div> <main class="container place-content-center text-behind svelte-1rj0e2r"><h1 class="heading margin-text-center capitalize svelte-1rj0e2r" data-svelte-h="svelte-7q2118">C++ KOREA에 오신것을 환영합니다.</h1> <p class="subheading margin-text-center svelte-1rj0e2r" data-svelte-h="svelte-gcwonf"><a href="https://cppkorea.github.io/CppCoreGuidelines/">C++ Core Guidelines</a> 는 C++ 표준 위원회에서 제작한 C++ 핵심 가이드라인을 한글화하는 프로젝트입니다.</p>   </main>`;
});
export {
  Page as default
};
