import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const css = {
  code: ".heading.svelte-lpnhcr{max-width:250px;font-size:var(--font-size-4);line-height:1.2;margin-block-start:var(--size-5);color:var(--text-1);@media (width > 1200px) {\n			max-width: 800px;\n			font-size: var(--font-size-5);\n		};@media (width > 800px) {\n			max-width: 800px;\n			font-size: 4.4rem;\n		}}.subheading.svelte-lpnhcr{max-width:800px;margin-block:var(--size-4);font-size:var(--font-size-3);color:var(--text-1);& a {\n			color: var(--text-3);\n			font-weight: 600;\n			text-decoration: underline wavy;\n			text-decoration-color: var(--brand);\n\n			&:hover {\n				color: var(--brand);\n			}\n		};@media (width > 800px) {\n			font-size: var(--font-size-4);\n		};@media (width < 500px) {\n			font-size: var(--font-size-2);\n		}}.water-drop.svelte-lpnhcr{width:600px;height:600px;background-image:linear-gradient(303deg,#64a1ff,#88fcfe);border-radius:50%;position:absolute;transition:transform 2s ease-in-out;@media (width > 800px) {\n			width: 800px;\n            height: 800px;\n		};@media (width < 400px) {\n			width: 300px;\n            height: 300px;\n		}}.text-behind.svelte-lpnhcr{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:18px;color:white;z-index:1}",
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
  return `<div class="water-drop svelte-lpnhcr" style="${"transform: translate(" + escape(x, true) + "%, " + escape(y, true) + "%);"}"></div> <div style="height: 800px;"></div> <main class="container place-content-center text-behind svelte-lpnhcr" style="width: 80%;"><h1 class="heading margin-text-center capitalize svelte-lpnhcr" data-svelte-h="svelte-7q2118">C++ KOREA에 오신것을 환영합니다.</h1> <p class="subheading margin-text-center svelte-lpnhcr" data-svelte-h="svelte-pabfx">
        C++ Korea는 C++의 저변확대를 위한 보급에 힘쓰는 단체입니다.</p>   </main>`;
});
export {
  Page as default
};
