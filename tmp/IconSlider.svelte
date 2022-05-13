<script>
	let iconsArray;

	
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
