<script>
	import { goto } from '$app/navigation';

	let welder_hover = false;
	let crane_hover = false;
</script>

<div class="text-header">
	<strong>Stal</strong>
	<p style="color: white">Maks</p>
</div>

<main class="main-site">
	<div
		class="main-site-image"
		on:mouseenter={() => {
			crane_hover = true;
		}}
		on:mouseleave={() => {
			crane_hover = false;
		}}
	>
		<img src="/crane.png" alt="" class:img-container-blackout={welder_hover} />
		<div class="img-container">
			<h1>Usługi dźwigowe</h1>
			<p>Wynajem dźwigu, podnośnika oraz ładowarki <br /> wraz z operatorem</p>
			<button
				class="main-btn"
				on:click={() => {
					goto('/main');
				}}>Przejdź</button
			>
		</div>
	</div>
	<div
		class="main-site-image"
		on:mouseenter={() => {
			welder_hover = true;
		}}
		on:mouseleave={() => {
			welder_hover = false;
		}}
	>
		<img src="/spawacz.png" alt="" class:img-container-blackout={crane_hover} />
		<div class="img-container">
			<h1>Konstrukcje stalowe</h1>
			<p>Montaż ogrodzeń, słupów, bram, podestów, estakad oraz urządzeń przemysłowych</p>
			<button
				class="main-btn"
				on:click={() => {
					goto('https://stalmaks.pl');
				}}>Przejdź</button
			>
		</div>
	</div>
</main>

<style>
	main {
		overflow: hidden;
	}

	img {
		height: 100vh;
		width: 50vw;
		opacity: 0.7;
	}

	.text-header {
		position: absolute;
		display: flex;
		justify-content: center;
		padding: 2rem;
		width: 100%;
		z-index: 10;
		top: 0;
		left: 0;
		font-family: 'Exo';
		font-weight: 800;
		font-size: 6.5rem;
		text-align: center;
	}

	.text-header strong {
		color: var(--main);
	}

	.main-site {
		height: 100vh;
		display: flex;
		flex-direction: row;
		width: 100%;
		background-color: black;
	}

	.main-site-image {
		overflow: hidden;
		position: relative;
	}
	.img-container {
		z-index: 20;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 100%;
		align-items: center;
	}

	.img-container-blackout {
		transition: all;
		transition-duration: 400ms;
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
	}

	.img-container h1 {
		font-weight: 700;
		color: white;
		z-index: 30;
		font-size: 3rem;
		text-align: center;
	}
	.img-container p {
		color: white;
		z-index: 30;
		font-size: 2rem;
		text-align: center;
	}
	.main-btn {
		border-radius: 10px;
		background-color: var(--main);
		font-size: 1rem;
		color: white;
		border: solid 1px var(--main);
		padding: 1rem 2.75rem 1rem 2.75rem;
		cursor: pointer;
		margin-top: 1rem;
	}

	@media (max-width: 768px) {
		.main-site {
			flex-direction: column;
		}

		img {
			width: 100vw;
		}

		.text-header {
			display: none;
		}
	}
</style>
