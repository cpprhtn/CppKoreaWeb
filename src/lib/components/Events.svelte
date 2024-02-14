<script lang='ts'>

</script>
<style>
	main {
	  max-width: 800px;
	  margin: 0 auto;
	  padding: 20px;
	  text-align: center;
	}
  
	h1 {
	  font-size: 2.5em;
	  margin-bottom: 20px;
	}
  
	h2 {
	  font-size: 1.5em;
	  margin-bottom: 10px;
	}
  
	.LinkButton {
	  margin-top: 20px;
	  color: var(--text-3);
	  height: 400px;
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
	  width: auto;
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
  
	.button_Description {
	  margin-top: 5px;
	  font-size: 0.9em;
	  color: #777;
	}
  
	svg {
	  margin-bottom: 10px;
	}
  </style>
  
  <main>
	<h2>"다양한 분야에서 전문 개발자를 위해<br>정기적으로 밋업과 기술 세미나를 운영합니다."</h2>

	<div class="LinkButton">
		<a href="https://festa.io/events/4635" target="_blank" class="col-sm shadow-button">
		  <!-- 이미지 외부경로 불러오기 -->
		  <div class="button-container" style="height: 380px; background-image: url('/cppstudy1.png'); background-size: cover; background-position: center;">
		  </div>
		</a>
		<p>리눅스 환경(WSL 포함)에서 C++ 실습하기</p>
	</div>

	<div class="LinkButton">
		<a href="https://festa.io/events/4635" target="_blank" class="col-sm shadow-button">
		  <!-- 이미지 외부경로 불러오기 -->
		  <div class="button-container" style="height: 380px; background-image: url('/coreguidelines.png'); background-size: cover; background-position: center;">
			
		  </div>
		</a>
		<p>2024년 C++ 핵심 가이드라인 스터디 첫 모임</p>
	</div>
  </main>