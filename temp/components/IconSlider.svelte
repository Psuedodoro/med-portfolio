<script>
	let iconsArray;

	const cars = [
		"https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
		"https://img.shields.io/badge/Rider-000000.svg?style=for-the-badge&logo=Rider&logoColor=white&color=black&labelColor=crimson",
		"https://img.shields.io/badge/webstorm-143?style=for-the-badge&logo=webstorm&logoColor=white&color=black",
		"https://img.shields.io/badge/pycharm-143?style=for-the-badge&logo=pycharm&logoColor=black&color=black&labelColor=green",
		"https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
		"https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
		"https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
		"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
		"https://img.shields.io/badge/Qt-%23217346.svg?style=for-the-badge&logo=Qt&logoColor=white",
		"https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white",
		"https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
		"https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white",
		"https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white",
		"https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white",
		"https://camo.githubusercontent.com/e922b45bfb79029cf4436e255b0d17b00b651e13b24f1751a9f87b14055fb4b1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a7570797465722d2532334641304630302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a757079746572266c6f676f436f6c6f723d7768697465",
		"https://img.shields.io/badge/perl-%2339457E.svg?style=for-the-badge&logo=perl&logoColor=white",
		"https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
		"https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white",
		"https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
		"https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
		"https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
		"https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
		"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
		"https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
		"https://img.shields.io/badge/oracle-%23F00000.svg?style=for-the-badge&logo=oracle&logoColor=white",
	];
</script>

<section class="slide-option">
	<div id="infinite" class="highway-slider">
		<div class="container highway-barrier">
			<ul class="highway-lane">
				{#each cars as car}
					<li class="highway-car">
						<img src={car} alt="technology icon" />
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-flow: column;
		align-items: center;
	}
	section div.container {
		transition: all 0.3s ease;
	}
	@media (max-width: 992px) {
		section {
			padding: 0 20px 0 20px;
		}
	}
	section.slide-option {
		margin: 0 0 50px 0;
	}
	div.highway-slider {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 150px;
	}
	div.highway-slider div.highway-barrier {
		overflow: hidden;
		position: relative;
	}
	div.highway-slider ul.highway-lane {
		display: flex;
		height: 100%;
	}
	div.highway-slider ul.highway-lane li.highway-car {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff;
		color: #343434;
	}

	@keyframes translatestf {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(-500%);
		}
	}

	@keyframes translateinfinite {
		100% {
			transform: translateX(-1000%);
		}
	}

	#infinite div.highway-barrier {
		background: #fff;
		box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.3);
	}
	#infinite div.highway-barrier::after,
	#infinite div.highway-barrier::before {
		content: " ";
		position: absolute;
		z-index: 9;
		width: 180px;
		height: 100%;
	}
	#infinite div.highway-barrier::before {
		top: 0;
		left: 0;
		background: linear-gradient(to right, #fff 0, rgba(255, 255, 255, 0) 100%);
	}
	#infinite div.highway-barrier::after {
		top: 0;
		right: 0;
		background: linear-gradient(to left, #fff 0, rgba(255, 255, 255, 0) 100%);
	}
	#infinite div.highway-barrier ul.highway-lane {
		width: calc(4320px);
	}
	#infinite div.highway-barrier ul.highway-lane li.highway-car {
		width: 180px;
		animation: translateinfinite 25s linear infinite;
	}
</style>
