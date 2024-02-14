<script>
	import { onMount } from "svelte";
  
	let linkButtons = [];
  
	onMount(() => {
	  // event.txt 파일 읽기
	  fetch('event.txt')
		.then(response => response.text())
		.then(data => {
		  // 개행 문자를 기준으로 데이터 분리
		  const lines = data.split('\n');
  
		  // 각 라인의 데이터 처리
		  linkButtons = lines.map(line => {
			// 데이터를 콤마로 분리
			const [url, image, description] = line.split(',');
  
			return {
			  url,
			  image,
			  description
			};
		  });
		})
		.catch(error => console.error('Error reading event.txt:', error));
	});
  </script>
  
  <style>
	main {
	  max-width: 800px;
	  margin: 0 auto;
	  padding: 20px;
	  text-align: center;
	}
  
	h2 {
	  font-size: 1.5em;
	  margin-bottom: 10px;
	}
  
	.LinkButton {
	  margin-top: 40px;
	  color: var(--text-3);
	  height: 400px;
	  align-items: center;
	}
  
	.button-container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  background-color: #f9f9f9;
	  padding: 20px;
	  border-radius: 8px;
	  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	  transition: box-shadow 0.3s ease;
	}
  
	p {
	  color: var(--text-1);
	}
  
	a {
	  text-decoration: none;
	  color: #333;
	}
  
	.shadow-button:hover {
	  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
	}
  </style>
  
  <main>
	<h2>"다양한 분야에서 전문 개발자를 위해<br>정기적으로 밋업과 기술 세미나를 운영합니다."</h2>
  
	{#each linkButtons as {url, image, description}}
	  <div class="LinkButton">
		<a href={url} target="_blank" class="col-sm shadow-button">
		  <div class="button-container" style="height: 380px; background-image: url('{image}'); background-size: cover; background-position: center;">
		  </div>
		</a>
		<p>{description}</p>
	  </div>
	{/each}
  </main>
  