<div class="sep" />

<section class="columns is-half">
	<div class="column">
		<div class="card">
			<div class="card-content">
				<div class="content contentes">
					<div class="sekcjakon" style="margin-bottom: 4rem;">
						<img src="/tel.png" alt="Obrazek Telefonu" />
						<div class="kontakttxt" style="margin-top: 0.6rem;">
							<span> Krzysztof: 509 841 663 </span>
							<span> Rafał: 665 562 572 </span>
						</div>
					</div>
					<div class="sekcjakon" style="margin-bottom: 4rem;">
						<img src="/poczta.png" alt="Obrazek Email" />
						<div class="kontakttxt2">
							<span> biuro@dzwigbarlinek.pl </span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="column">
		<div class="card">
			<div class="card-content">
				<form action="" method="post" class="formularz">
					<input class="input is-medium" type="email" name="email" placeholder="Adres Email" />

					<textarea
						class="textarea"
						style="resize:none; width:70%; height: 170px; margin-top:1rem;"
						rows="10"
						name="message"
						cols="30"
						placeholder="Wiadomość"
					/>
					<input
						style="margin-top:1rem;"
						class="button is-danger"
						type="submit"
						name="submit"
						value="Wyślij"
					/>
				</form>
			</div>
		</div>
	</div>
</section>

<footer class="footer">
	<div
		class="content has-text-centered"
		style="display: flex; justify-content: center; flex-direction: row; flex-wrap: nowrap; color: white;"
	>
		<ul
			style="text-align: left; list-style: none; margin-top: 0; margin-left: 0; margin-right: 0rem;"
		>
			<img
				src="/logo.png"
				alt="Logo Stalmaks"
				style="width: 20rem; margin-left: -80px; margin-bottom: -23px;"
			/>
			<li>StalMaks Krzysztof Gilewicz</li>
			<li>74-320 Barlinek</li>
			<li>tel: 509 841 663</li>
			<li>tel: 665 562 572</li>
			<li style="font-size:0.9rem;">mail: biuro@dzwigbarlinek.pl</li>
		</ul>
	</div>
</footer>
<div class="stpasek">
	<img src="/logo3.png" alt="Logo Stalmaksu" />
	<span style="align-self:center; color: white;"
		>© 2017 by StalMaks Krzysztof Gilewicz. Wszystkie prawa zastrzeżone</span
	>
</div>

<style>
	.card {
		height: 400px;
		background-color: white;
	}
	.card-content {
		height: 100%;
	}
	.contentes {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.content span {
		font-size: 1.3rem;
	}
	.sekcjakon {
		display: flex;
		width: 70%;
	}
	.kontakttxt {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;
	}
	.kontakttxt2 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 1rem;
	}
	@media (max-width: 1103px) {
		.content span {
			font-size: 0.8rem;
		}
	}
	.formularz {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
