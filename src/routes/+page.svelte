<script lang="ts">
	import { fade } from '$lib/fade'
    import { onMount } from 'svelte';
    // import init, { compile_cpp } from '../../../wasm_cpp_compiler/pkg/wasm_cpp_compiler';

    let videoEl: HTMLVideoElement


	let x = -50;
	let y = -20;

	function moveWaterDrop() {
	x = Math.random() * 10;
	y = Math.random() * 10;
	}

	function autoMoveWaterDrop() {
	setInterval(() => {
		moveWaterDrop();
	}, 20);
	}

	autoMoveWaterDrop(); 
    

    // let codeLines = [
    //     '#include <iostream>',
    //     'ㅤ',
    //     'int main() {',
    //     '    std::cout << "Hello, C++ Korea!";',
    //     '    return 0;',
    //     '}'
    // ];

    // let visibleLines: string[] = [];
    // let animationSpeed = 700;

    // onMount(() => {
    //     animateCode();
    // });

    // function animateCode() {
    //     codeLines.forEach((line, index) => {
    //     setTimeout(() => {
    //         visibleLines = codeLines.slice(0, index + 1);
    //     }, index * animationSpeed);
    //     });
    // }

    // let cppCode = '#include <iostream>\n\nint main() {\n    std::cout << "Hello, C++ Korea!";\n    return 0;\n}';
    // let result = 'hello';

    // onMount(async () => {
    //     await init(); // WASM 모듈 초기화
    // });

    // const compileCPlusPlus = async () => {
    //     result = compile_cpp(cppCode);
    // };
</script>
<div class="water-drop" style="transform: translate({x}%, {y}%);" on:click={moveWaterDrop}></div>
<div style="height: 800px;"></div>
<main class="container place-content-center text-behind">
	<h1 
        use:fade={{ duration: 0.3, delay: 0.8 }}
        class="heading margin-text-center capitalize">
		C++ KOREA에 오신것을 환영합니다.
	</h1>

	<p
		use:fade={{ duration: 0.3, delay: 0.8 }}
		on:finish={() => videoEl.play()}
		class="subheading margin-text-center"
	>
		<!-- <a href="https://cppkorea.github.io/CppCoreGuidelines/">C++ Core Guidelines</a> 는 C++ 표준 위원회에서 제작한 C++ 핵심 가이드라인을 한글화하는 프로젝트입니다. -->
        C++ Korea는 C++의 저변확대를 위한 보급에 힘쓰는 단체입니다.
	</p>
    <!-- <div style="height: 1000px"></div> -->

    <!-- <div class="code-container"></div><div class="code-container">
        {#each visibleLines as line (line)}
          <p class="code-line">{line}</p>
        {/each}
      </div> -->

</main>

<style lang="postcss">
	.heading {
		max-width: 400px;
		font-size: var(--font-size-3);
		line-height: 1.2;
		margin-block-start: var(--size-5);
        color: var(--text-1);

		@media (width > 800px) {
			max-width: 800px;
			font-size: var(--font-size-5);
		}
	}

	.subheading {
		max-width: 800px;
		margin-block: var(--size-4);
		font-size: var(--font-size-3);
		color: var(--text-1);

		& a {
			color: var(--text-3);
			font-weight: 600;
			text-decoration: underline wavy;
			text-decoration-color: var(--brand);

			&:hover {
				color: var(--brand);
			}
		}

		@media (width > 800px) {
			font-size: var(--font-size-4);
		}
	}

    .water-drop {
        width: 600px;
        height: 600px;
        background-image: linear-gradient(303deg,#64a1ff,#88fcfe);
        border-radius: 50%;
        position: absolute;
        transition: transform 2s ease-in-out;

        @media (width > 800px) {
			width: 800px;
            height: 800px;
		}

        @media (width < 400px) {
			width: 300px;
            height: 300px;
		}
    }

    .text-behind {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
        color: white;
        z-index: 1;
    }

</style>
