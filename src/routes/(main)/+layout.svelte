<script>
	import '../../mystyles.css';
	import '../../style.css';
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/0adb7c2a19.js" crossorigin="anonymous"></script>
</svelte:head>

<nav class="navbar is-black" aria-label="main navigation" style="justify-content: center">
	<!-- svelte-ignore a11y-missing-attribute -->
	<img src="/logo.png" width="200" height="28" style="padding: 1rem 0 1rem 1rem" />
	<div class="navbar-brand">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start" />

		<div class="navbar-end">
			<a class="navbar-item przedmiot navbartekst" href="/"> Strona główna </a>

			<a class="navbar-item przedmiot navbartekst" href="kontakt"> Kontakt </a>
			<a class="navbar-item" href="https://onet.pl">
				<span class="icon">
					<i class="fas fa-envelope" />
				</span>
			</a>
		</div>
	</div>
</nav>
<slot />
