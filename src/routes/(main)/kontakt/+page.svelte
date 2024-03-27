<script>
	let email = '';
	let message = '';

	const sendMail = async () => {
		const request = await fetch('/kontakt/test', {
			method: 'POST',
			body: JSON.stringify({ email, message }),
			headers: {
				'content-type': 'application/json'
			}
		});

		const response = await request.json();

		console.log(response);
	};
</script>

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
							<span> stalmaks@op.pl </span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="column">
		<div class="card">
			<div class="card-content">
				<form method="POST" action="" class="formularz">
					<input
						class="input is-medium"
						type="email"
						name="email"
						placeholder="Adres Email"
						bind:value={email}
					/>

					<textarea
						class="textarea"
						style="resize:none; width:70%; height: 170px; margin-top:1rem;"
						rows="10"
						name="message"
						id="message"
						cols="30"
						placeholder="Wiadomość"
						bind:value={message}
					/>
					<input
						style="margin-top:1rem;"
						class="button is-danger"
						type="submit"
						name="submit"
						value="Wyślij"
						on:click|preventDefault={sendMail}
					/>
					<!-- {#if form?.success}
						<p style="color: hsl(141, 71%, 48%); font-size: 2rem;">Wiadomość wysłana!</p>
					{/if} -->
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
