<!-- Usługi -->

<script>
	let modal1 = false;
	let modal2 = false;
	let modal3 = false;

	const openModal1 = () => {
		modal1 = !modal1;
	};

	const openModal2 = () => {
		modal2 = !modal2;
	};

	const openModal3 = () => {
		modal3 = !modal3;
	};

	const closeModal = () => {
		modal1 = false;
		modal2 = false;
		modal3 = false;
	};
</script>

<!-- Pasek nawigacyjny -->

<div class="sep" />

<!-- Baner -->

<div class="baner">
	<img class="baner" src="/baner.png" alt="Baner Strony" />
	<div class="sep margmin" />
</div>

<div class="block" />

<div class="uslugiwraper">
	<h1 class="uslugih">Usługi dźwigowe</h1>
</div>

<div class="columns kontener is-variable is-4">
	<div class="column">
		<div class="card karta">
			<div class="card-image">
				<figure class="image is-4by3">
					<img src="dzwig.jpg" alt="Zdjecie dzwigu" />
				</figure>
			</div>
			<div class="nagcard">
				<h1>WYNAJEM DŹWIGU</h1>
			</div>
			<div class="card-content cardzaw">
				<div class="content" style="min-height: 150px">
					<h1 class="cardheader">Dźwig Liebherr LTM 1030</h1>
					<span
						>Dźwig Liebherr LTM 1030 pozwala na transport ładunków o maksymalnej masie do 30 ton.
						Wysięgnik podstawowy dźwigu samojezdnego mierzy 30 m, a wysięgnik pomocniczy 8 m. Łączna
						maksymalna wysokość podnoszenia 38 m.</span
					>
				</div>
				<!-- <div class="btnwrap"><button class="button is-danger js-modal-trigger" data-target="modal-js-example1">Więcej informacji</button></div> -->
			</div>
			<div class="btnwrap">
				<button class="button is-danger js-modal-trigger" on:click={openModal1}>
					Więcej informacji
				</button>
			</div>
		</div>
	</div>

	<div class="column">
		<div class="card karta">
			<div class="card-image">
				<figure class="image is-4by3">
					<img src="/podnosnik.png" alt="Zdjecie podnosnika" />
				</figure>
			</div>
			<div class="nagcard">
				<h1>WYNAJEM PODNOŚNIKA</h1>
			</div>
			<div class="card-content cardzaw">
				<div class="content" style="min-height: 150px">
					<h1 class="cardheader">Podnośnik przegubowy E450AJ</h1>
					<span
						>Podest przegubowy elektryczny JLG E450AJ. Podnośnik zapewnia 15,72 m wysokości roboczej
						i 7,24 m wysięgu bocznego. Zwyżki o udźwigu 230 kg, przeznaczone do pracy 2 operatorów w
						koszu.
					</span>
				</div>
				<!-- <div class="btnwrap"><button class="button is-danger js-modal-trigger" data-target="modal-js-example2">Więcej informacji</button></div> -->
			</div>
			<div class="btnwrap">
				<button class="button is-danger js-modal-trigger" on:click={openModal2}>
					Więcej informacji
				</button>
			</div>
		</div>
	</div>

	<div class="column">
		<div class="card karta">
			<div class="card-image">
				<figure class="image is-4by3">
					<img src="/ladowarka.jpg" alt="Zdjecie ładowarki" />
				</figure>
			</div>
			<div class="nagcard">
				<h1>WYNAJEM ŁADOWARKI</h1>
			</div>
			<div class="card-content cardzaw">
				<div class="content" style="min-height: 150px">
					<h1 class="cardheader">Ładowarka Teleskopowa Komatsu WH714H</h1>
					<span
						>Maszyna WH714H należy zapewnia 14 metrów wysokości podniesienia, 4.5T udźwigu, 10m
						maksymalnego zasięgu, duży rozstaw osi, blokada tylnej osi
					</span>
				</div>
			</div>
			<div class="btnwrap">
				<button class="button is-danger js-modal-trigger" on:click={openModal3}>
					Więcej informacji
				</button>
			</div>
		</div>
	</div>

	<div class="column">
		<div class="card karta">
			<div class="card-image">
				<figure class="image is-4by3">
					<img src="/stal.png" alt="Obrazek konstrukcji stalowej" />
				</figure>
			</div>
			<div class="nagcard">
				<h1>KONSTRUKCJE STALOWE</h1>
			</div>
			<div class="card-content cardzaw">
				<div class="content">
					<h3>Produkujemy i montujemy:</h3>
					<ul>
						<li>słupy, estakady, podesty, przejścia BHP</li>
						<li>stojaki, stoły, urządzenia przemysłowe</li>
						<li>ogrodzenia</li>
						<li>przesuwne bramy wjazdowe</li>
					</ul>
				</div>
			</div>
			<div class="btnwrap">
				<button class="button is-danger" onclick="location.href='https://stalmaks.pl';">
					Więcej informacji
				</button>
			</div>
		</div>
	</div>
</div>

<!-- Modale -->

<div class="modal" class:is-active={modal1}>
	<div class="modal-background" />
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">Dźwig Liebherr LTM 1030</p>
			<button class="delete" aria-label="close" on:click={closeModal} />
		</header>
		<section class="modal-card-body">
			<div class="tile is-ancestor">
				<div class="tile is-6 is-vertical is-parent">
					<div class="tile is-child box">
						<img src="/dzwig/wymiary1.png" alt="Wymiary dzwigu" />
					</div>
					<div class="tile is-child box">
						<img src="/dzwig/wymiary3.png" alt="Wymiary dzwigu" />
					</div>
				</div>
				<div class="tile is-parent">
					<div class="tile is-child box zawartosc">
						<span style="margin-bottom: 3rem">
							Dźwig Liebherr LTM 1030 pozwala na transport ładunków o maksymalnej masie do 30 ton.
							Wysięgnik podstawowy dźwigu samojezdnego mierzy 30 m, a wysięgnik pomocniczy 8 m.
							Łączna maksymalna wysokość podnoszenia zapewniana przez dźwig Liebherr LTM 1030 wynosi
							38 m.
						</span>
					</div>
				</div>
			</div>
		</section>
		<footer class="modal-card-foot">
			<button
				class="button is-danger"
				style="justify-self: flex-end"
				onclick="window.open('/download/Liebherr-LTM_1030-2.1.pdf')"
			>
				Specyfikacja Techniczna
			</button>
			<button
				class="button is-danger"
				style="justify-self: flex-end"
				onclick="window.open('/download/Formularz_zamowienia_Stalmaks.pdf')"
			>
				Formularz zamówienia
			</button>
		</footer>
	</div>
</div>

<div class="modal" class:is-active={modal2}>
	<div class="modal-background" />
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">Podnośnik przegubowy E450AJ</p>
			<button class="delete" aria-label="close" on:click={closeModal} />
		</header>
		<section class="modal-card-body">
			<div class="tile is-ancestor">
				<div class="tile is-6 is-vertical is-parent">
					<div class="tile is-child box">
						<img src="/podnosnik/wymiary3.png" alt="Wymiary dzwigu" />
					</div>
					<div class="tile is-child box">
						<img src="/podnosnik/wymiary2.png" alt="Wymiary dzwigu" />
					</div>
				</div>
				<div class="tile is-parent">
					<div class="tile is-child box zawartosc">
						<span>
							<ul>
								<li>Wysokość robocza: 15.72 m / 51.6 ft</li>
								<li>Wysięg roboczy: 7.89 m / 25.9 ft</li>
								<li>Udźwig platformy: 230 kg / 507.1 lb</li>
							</ul>
							Możliwość doboru z czterech modeli z wysokością roboczą do 15,50 m i różnych opcji zwiększa
							uniwersalność Automatyczna kontrola trakcji w standardzie zwiększa wydajność w terenie
							i możliwości manewrowania Wysoko wydajny, bezpośredni napęd elektryczny z dłuższymi cyklami
							pracy zwiększa produktywność Zerowa emisja zanieczyszczeń do środowiska sprawia, że podnośniki
							są przyjazne dla środowiska
						</span>
					</div>
				</div>
			</div>
		</section>
		<footer class="modal-card-foot">
			<button class="button is-danger" onclick="location.href='html/kontakt.php'"> Kontakt </button>
			<button
				class="button is-danger"
				style="justify-self: flex-end"
				onclick="window.open('/download/E450AJ_EN pdf.pdf')"
			>
				Specyfikacja Techniczna
			</button>
		</footer>
	</div>
</div>

<div class="modal" class:is-active={modal3}>
	<div class="modal-background" />
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">Ładowarka Teleskopowa Komatsu WH714H</p>
			<button class="delete" aria-label="close" on:click={closeModal} />
		</header>
		<section class="modal-card-body">
			<div class="tile is-ancestor">
				<div class="tile is-6 is-vertical is-parent">
					<div class="tile is-child box">
						<img src="/ladowarka/wymiary.png" alt="Wymiary ładowarki" />
					</div>
					<div class="tile is-child box">
						<img src="/ladowarka/wymiary2.png" alt="Wymiary ładowarki" />
					</div>
				</div>
				<div class="tile is-parent">
					<div class="tile is-child box zawartosc">
						<ul style="list-style: inside">
							<li>WYSOKOŚĆ PODNOSZENIA: 14.100 mm</li>
							<li>
								UDŹWIG: <br />
								4.500 kg
							</li>
							<li>MASA W STANIE GOTOWYM DO PRACY: 11.180 kg</li>
						</ul>
						<span
							>Specjalny kształt ramy pozwolił umieścić przegub wysięgnika najniżej wśród maszyn
							dostępnych na rynku. Niskoprofilowy wysięgnik Super Low Boom Profile zapewnia
							wyjątkową stabilność i widoczność. W przypadku ładowarek teleskopowych te dwie cechy
							są najważniejsze.</span
						>
					</div>
				</div>
			</div>
		</section>
		<footer class="modal-card-foot">
			<button class="button is-danger" onclick="location.href='html/kontakt.php'"> Kontakt </button>
			<button
				class="button is-danger"
				style="justify-self: flex-end"
				onclick="window.open('/download/wh714h_pl(708).pdf')"
			>
				Specyfikacja Techniczna
			</button>
		</footer>
	</div>
</div>

<!-- Stopka -->

<div class="sep sepbot" />

<footer class="footer">
	<div
		class="content has-text-centered"
		style="
					display: flex;
					justify-content: center;
					flex-direction: row;
					flex-wrap: nowrap;
					color: white;
				"
	>
		<ul
			style="
						text-align: left;
						list-style: none;
						margin-top: 0;
						margin-left: 0;
						margin-right: 0rem;
					"
		>
			<img
				src="/logo.png"
				alt="Logo Stalmaks"
				style="width: 20rem; margin-left: -80px; margin-bottom: -23px"
			/>
			<li>StalMaks Krzysztof Gilewicz</li>
			<li>74-320 Barlinek</li>
			<li>tel: 509 841 663</li>
			<li>tel: 665 562 572</li>
			<li style="font-size: 0.9rem">mail: biuro@dzwigbarlinek.pl</li>
		</ul>
	</div>
</footer>
<div class="stpasek">
	<img src="/logo3.png" alt="Logo Stalmaksu" />
	<span style="align-self: center; color: white"
		>© 2017 by StalMaks Krzysztof Gilewicz. Wszystkie prawa zastrzeżone</span
	>
</div>
