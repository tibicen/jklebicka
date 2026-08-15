<script lang="ts">
	let menuOpen = $state(false);

	const services = [
		{
			title: 'Tłumaczenia konferencyjne i ustne',
			text: 'Wsparcie językowe podczas konferencji, spotkań zarządów, negocjacji, wizyt technicznych i wydarzeń międzynarodowych.',
			items: [
				'symultaniczne, konsekutywne, szeptane i liaison',
				'konferencje, szkolenia, seminaria i misje gospodarcze',
				'przygotowanie terminologii i praca z mówcami'
			]
		},
		{
			title: 'Tłumaczenia pisemne i techniczne',
			text: 'Dokumentacja, która musi być precyzyjna, spójna i gotowa do użycia w realnym procesie biznesowym lub produkcyjnym.',
			items: [
				'dokumentacja techniczna, produkcyjna i BHP',
				'umowy, oferty i komunikacja biznesowa',
				'instrukcje, procedury i dokumentacja projektowa'
			]
		}
	];

	const projects = [
		{
			number: '01',
			title: 'Gala KGHM Metraco',
			detail: 'Tłumaczenie konsekutywne · EN / PL · Legnica',
			image: '/images/kghm-metraco-gala.jpg',
			alt: 'Sala podczas gali KGHM Metraco'
		},
		{
			number: '02',
			title: '150 lat BASF',
			detail: 'Tłumaczenie symultaniczne · EN / PL · Wrocław',
			image: '/images/basf-anniversary.jpg',
			alt: 'Uczestnicy wydarzenia jubileuszowego BASF'
		},
		{
			number: '03',
			title: 'Google Think',
			detail: 'Konferencja · EN / PL · Warszawa',
			image: '/images/google-think.jpg',
			alt: 'Scena konferencji Google Think'
		}
	];

	const closeMenu = () => {
		menuOpen = false;
	};
</script>

<svelte:head>
	<title>Tłumaczenia konferencyjne i pisemne | Contexto — Joanna Kłębicka</title>
	<meta
		name="description"
		content="Joanna Kłębicka — tłumaczenia konferencyjne, ustne i pisemne w językach polskim, angielskim i hiszpańskim. Precyzyjne wsparcie dla wydarzeń, firm i projektów międzynarodowych."
	/>
	<link rel="canonical" href="https://contexto.com.pl/" />
	<meta property="og:title" content="Tłumaczenia konferencyjne i pisemne | Contexto" />
	<meta
		property="og:description"
		content="Język, terminologia i kontekst — profesjonalne tłumaczenia ustne i pisemne Joanny Kłębickiej."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://contexto.com.pl/" />
	<meta property="og:locale" content="pl_PL" />
	<meta property="og:site_name" content="Contexto — Joanna Kłębicka" />
	<meta property="og:image" content="https://contexto.com.pl/images/meetingpoint-messiaen.jpg" />
	<meta property="og:image:alt" content="Tłumaczenia konferencyjne Contexto podczas wydarzenia" />
	<meta property="og:image:width" content="800" />
	<meta property="og:image:height" content="450" />
	<meta name="author" content="Joanna Kłębicka" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Tłumaczenia konferencyjne i pisemne | Contexto" />
	<meta
		name="twitter:description"
		content="Profesjonalne tłumaczenia ustne i pisemne PL / EN / ES dla wydarzeń, firm i projektów międzynarodowych."
	/>
	<meta name="twitter:image" content="https://contexto.com.pl/images/meetingpoint-messiaen.jpg" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "Person",
					"@id": "https://contexto.com.pl/#joanna-klebicka",
					"name": "Joanna Kłębicka",
					"url": "https://contexto.com.pl/",
					"jobTitle": "Tłumaczka konferencyjna i pisemna",
					"knowsLanguage": ["pl", "en", "es"],
					"affiliation": { "@type": "Organization", "name": "Uniwersytet Jagielloński" },
					"memberOf": {
						"@type": "Organization",
						"name": "Polskie Stowarzyszenie Tłumaczy Konferencyjnych"
					},
					"sameAs": [
						"https://www.linkedin.com/in/joannaklebicka/",
						"https://www.proz.com/interpreter/645130",
						"https://pstk.org.pl/tlumacz/joanna-klebicka/"
					]
				},
				{
					"@type": "Organization",
					"@id": "https://contexto.com.pl/#organization",
					"name": "Contexto",
					"url": "https://contexto.com.pl/",
					"logo": "https://contexto.com.pl/images/logo.png",
					"founder": { "@id": "https://contexto.com.pl/#joanna-klebicka" },
					"contactPoint": {
						"@type": "ContactPoint",
						"contactType": "customer service",
						"telephone": "+48 660 443 471",
						"email": "joanna.klebicka@contexto.com.pl",
						"availableLanguage": ["Polish", "English", "Spanish"]
					}
				},
				{
					"@type": "WebSite",
					"@id": "https://contexto.com.pl/#website",
					"url": "https://contexto.com.pl/",
					"name": "Contexto — Joanna Kłębicka",
					"inLanguage": "pl-PL",
					"publisher": { "@id": "https://contexto.com.pl/#organization" }
				}
			]
		}
	</script>
</svelte:head>

<header class="site-header">
	<div class="header-inner">
		<a class="wordmark" href="#top" aria-label="Contexto — początek strony" onclick={closeMenu}>
			<span class="wordmark-name">Contexto</span>
			<span class="wordmark-byline">Joanna Kłębicka</span>
		</a>

		<!-- \t\t -->
		<nav id="main-navigation" class:nav-open={menuOpen} aria-label="Główna nawigacja">
			<a href="#uslugi" onclick={closeMenu}>Usługi</a>
			<a href="#realizacje" onclick={closeMenu}>Realizacje</a>
			<a href="#o-joannie" onclick={closeMenu}>O Joannie</a>
			<a class="nav-contact" href="#kontakt" onclick={closeMenu}
				>Porozmawiajmy <span aria-hidden="true">↗</span></a
			>
		</nav>

		<button
			class="menu-toggle"
			type="button"
			aria-expanded={menuOpen}
			aria-controls="main-navigation"
			aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span></span><span></span>
		</button>
	</div>
</header>

<main id="top">
	<section class="hero page-shell" aria-labelledby="hero-title">
		<div class="hero-copy">
			<p class="eyebrow">Tłumaczenia konferencyjne · PL / EN / ES</p>
			<h1 id="hero-title">Tłumaczenia, które rozumieją <span>kontekst.</span></h1>
			<p class="hero-lede">
				Profesjonalne tłumaczenia konferencyjne, ustne i pisemne dla firm, wydarzeń i projektów
				międzynarodowych.
			</p>
			<a class="action action-primary" href="#kontakt"
				>Zapytaj o wycenę <span aria-hidden="true">↗</span></a
			>
		</div>

		<div class="hero-proof">
			<figure class="hero-image">
				<img
					src="/images/meetingpoint-messiaen.jpg"
					srcset="/images/meetingpoint-messiaen.jpg 800w"
					sizes="(min-width: 60rem) 45vw, 100vw"
					width="800"
					height="450"
					alt="Publiczność podczas otwarcia centrum Meetingpoint Music Messiaen"
					fetchpriority="high"
				/>
				<figcaption>Wybrane wydarzenie · Zgorzelec</figcaption>
			</figure>
			<div class="language-note" aria-label="Obsługiwane języki">
				<span>PL</span><i aria-hidden="true">↔</i><span>EN</span><i aria-hidden="true">↔</i><span
					>ES</span
				>
			</div>
		</div>
	</section>

	<section class="intro section-shell" aria-labelledby="intro-title">
		<div class="section-heading">
			<p class="eyebrow">Contexto / 2026</p>
			<h2 id="intro-title">Tłumaczenie jest świadomym procesem podejmowania decyzji.</h2>
		</div>
		<div class="intro-copy">
			<p>
				Nie chodzi tylko o słowa. Chodzi o właściwą terminologię, intencję mówcy, tempo rozmowy i
				kontekst, który pozwala drugiej stronie naprawdę uczestniczyć.
			</p>
			<p class="small-copy">
				Pracuję w językach polskim, angielskim i hiszpańskim — podczas konferencji, spotkań,
				delegacji oraz projektów technicznych i biznesowych wymagających przygotowania.
			</p>
		</div>
	</section>

	<section id="uslugi" class="services section-shell" aria-labelledby="services-title">
		<div class="section-heading section-heading-wide">
			<p class="eyebrow">Zakres współpracy</p>
			<h2 id="services-title">Dwa tryby pracy.<br />Jeden standard precyzji.</h2>
		</div>
		<div class="service-list">
			{#each services as service, index (service.title)}
				<article class="service-row">
					<div class="service-index">0{index + 1}</div>
					<div class="service-body">
						<h3>{service.title}</h3>
						<p>{service.text}</p>
						<ul>
							{#each service.items as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
					<a class="text-link" href="#kontakt">Poznaj zakres <span aria-hidden="true">↗</span></a>
				</article>
			{/each}
		</div>
	</section>

	<section class="language-band" aria-labelledby="language-title">
		<div class="language-band-inner page-shell">
			<div>
				<p class="eyebrow eyebrow-light">Kombinacje językowe</p>
				<h2 id="language-title">
					<img
						src="/images/PL-EN-ES.svg"
						alt="Kombinacje językowe: polski, angielski i hiszpański"
					/>
				</h2>
			</div>
			<p class="language-band-copy">
				Bez języka pośredniego tam, gdzie projekt wymaga bezpośredniej pracy angielsko–hiszpańskiej.
			</p>
		</div>
	</section>

	<section id="realizacje" class="work section-shell" aria-labelledby="work-title">
		<div class="section-heading section-heading-wide">
			<p class="eyebrow">Wybrane realizacje</p>
			<h2 id="work-title">Doświadczenie<br />w działaniu.</h2>
		</div>
		<div class="work-list">
			{#each projects as project (project.number)}
				<article class="work-row">
					<div class="work-meta">
						<span class="work-number">{project.number}</span>
						<h3>{project.title}</h3>
						<p>{project.detail}</p>
					</div>
					<figure class="work-image">
						<img
							src={project.image}
							srcset={`${project.image} 800w`}
							sizes="(min-width: 60rem) 42vw, 100vw"
							width="800"
							height="450"
							loading="lazy"
							alt={project.alt}
						/>
					</figure>
				</article>
			{/each}
		</div>
		<p class="work-note">
			Materiały archiwalne Contexto. Zakres publicznego wykorzystania zdjęć i nazw realizacji wymaga
			potwierdzenia przed publikacją.
		</p>
	</section>

	<section id="o-joannie" class="about section-shell" aria-labelledby="about-title">
		<div class="about-image-wrap">
			<figure class="about-image">
				<img
					src="/images/contact.jpg"
					srcset="/images/contact.jpg 400w"
					sizes="(min-width: 60rem) 32vw, 100vw"
					width="400"
					height="300"
					loading="lazy"
					alt="Joanna Kłębicka podczas pracy"
				/>
			</figure>
			<p class="image-caption">Joanna Kłębicka · Contexto</p>
		</div>
		<div class="about-copy">
			<p class="eyebrow">O Joannie</p>
			<h2 id="about-title">Profesjonalizm, który zaczyna się przed spotkaniem.</h2>
			<p>
				Jestem tłumaczką konferencyjną i pisemną języków polskiego, angielskiego i hiszpańskiego.
				Przygotowanie do pracy obejmuje poznanie tematu, terminologii, uczestników i celu spotkania.
			</p>
			<p>
				Mam doświadczenie w środowisku konferencyjnym, technicznym i produkcyjnym. Prowadzę także
				zajęcia z tłumaczenia konsekutywnego i symultanicznego na Uniwersytecie Jagiellońskim.
			</p>
			<div class="credentials" aria-label="Wybrane informacje zawodowe">
				<span>PL · EN · ES</span>
				<span>Uniwersytet Jagielloński</span>
				<span>PSTK</span>
			</div>
		</div>
	</section>

	<section id="kontakt" class="contact section-shell" aria-labelledby="contact-title">
		<div class="contact-heading">
			<p class="eyebrow">Kontakt</p>
			<h2 id="contact-title">Opowiedz mi o swoim projekcie.</h2>
		</div>
		<div class="contact-details">
			<p>Data, miejsce, języki, format spotkania — od tych informacji zaczyna się dobra wycena.</p>
			<a class="contact-email" href="mailto:joanna.klebicka@contexto.com.pl"
				>joanna.klebicka@contexto.com.pl <span aria-hidden="true">↗</span></a
			>
			<a class="contact-phone" href="tel:+48660443471">+48 660 443 471</a>
		</div>
	</section>
</main>

<footer class="site-footer">
	<div class="footer-primary page-shell">
		<div>
			<a class="wordmark wordmark-footer" href="#top">
				<span class="wordmark-name">Contexto</span>
				<span class="wordmark-byline">Joanna Kłębicka</span>
			</a>
			<p class="footer-tagline">Język, terminologia, kontekst.</p>
		</div>
		<a class="footer-arrow" href="#top" aria-label="Wróć na początek strony">↑</a>
	</div>
	<div class="footer-meta page-shell">
		<span>© {new Date().getFullYear()} Contexto</span>
		<a href="https://www.linkedin.com/in/joannaklebicka/" target="_blank" rel="noreferrer"
			>LinkedIn <span aria-hidden="true">↗</span></a
		>
		<a href="https://www.proz.com/interpreter/645130" target="_blank" rel="noreferrer"
			>ProZ <span aria-hidden="true">↗</span></a
		>
		<span>Polska · zagranica</span>
	</div>
</footer>

<style>
	/* Hallmark · macrostructure: Split Studio · H2 split diptych ratio=7/5, right-side=photo, divider=negative-space
	 * theme: custom · vibe: "quiet authority, editorial precision, human warmth" · paper: oklch(97% 0.012 78) · accent: oklch(57% 0.145 45)
	 * display: Newsreader · body: IBM Plex Sans · axes: light / roman-serif / chromatic-terracotta
	 * polish: none · enrichment: none (typography-led) · nav: N9 edge-aligned minimal · footer: Ft1 mast-headed
	 * studied: no · context: inferred · pre-emit critique: P5 H5 E4 S5 R5 V5 · contrast: pass (40–41) · nav: N9 · footer: Ft1
	 * honest: pass (46) · chrome: pass (47) · tokens: pass (48) · responsive: pass (49, 50–57) · icons: pass (30)
	 */
	@import '../../tokens.css';

	:global(*) {
		box-sizing: border-box;
	}

	:global(html),
	:global(body) {
		overflow-x: clip;
	}

	:global(html) {
		scroll-behavior: smooth;
		background: var(--color-paper);
	}

	:global(body) {
		margin: 0;
		background: var(--color-paper);
		color: var(--color-ink);
		font-family: var(--font-body);
		font-size: var(--text-base);
		line-height: 1.6;
		-webkit-font-smoothing: antialiased;
	}

	:global(a) {
		color: inherit;
	}

	:global(button),
	:global(a) {
		-webkit-tap-highlight-color: var(--color-clear);
	}

	:global(:focus-visible) {
		outline: 2px solid var(--color-focus);
		outline-offset: 4px;
	}

	:global(img) {
		display: block;
		max-width: 100%;
	}

	.page-shell {
		width: min(100%, 90rem);
		margin-inline: auto;
		padding-inline: var(--page-gutter);
	}

	.section-shell {
		width: min(100%, 90rem);
		margin-inline: auto;
		padding: var(--space-4xl) var(--page-gutter);
	}

	.site-header {
		position: sticky;
		top: 0;
		z-index: 300;
		background: color-mix(in oklch, var(--color-paper) 94%, transparent);
		backdrop-filter: blur(1rem);
		border-bottom: var(--rule-hair) solid var(--color-rule-2);
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
		width: min(100%, 90rem);
		min-height: 4.5rem;
		margin-inline: auto;
		padding-inline: var(--page-gutter);
	}

	.wordmark {
		display: inline-flex;
		align-items: baseline;
		gap: var(--space-xs);
		text-decoration: none;
		white-space: nowrap;
	}

	.wordmark-name {
		font-family: var(--font-display);
		font-size: var(--text-xl);
		font-weight: 600;
		letter-spacing: -0.04em;
		line-height: 1;
	}

	.wordmark-byline {
		color: var(--color-muted);
		font-size: var(--text-xs);
		letter-spacing: 0.06em;
		line-height: 1;
		text-transform: uppercase;
	}

	nav {
		display: flex;
		align-items: center;
		gap: clamp(var(--space-md), 3vw, var(--space-xl));
		font-size: var(--text-sm);
	}

	nav a,
	.nav-contact {
		position: relative;
		text-decoration: none;
		white-space: nowrap;
	}

	nav a::after {
		position: absolute;
		right: 0;
		bottom: -0.35rem;
		left: 0;
		height: 1px;
		background: var(--color-accent);
		content: '';
		transform: scaleX(0);
		transform-origin: right;
		transition: transform var(--dur-base) var(--ease-out);
	}

	nav a:hover::after,
	nav a:focus-visible::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	.nav-contact {
		padding: var(--space-xs) var(--space-md);
		border: var(--rule-hair) solid var(--color-ink);
		border-radius: var(--radius-pill);
	}

	.nav-contact::after {
		display: none;
	}

	.menu-toggle {
		display: none;
		place-items: center;
		gap: 0.35rem;
		width: 2.75rem;
		height: 2.75rem;
		padding: var(--space-xs);
		border: var(--rule-hair) solid var(--color-rule);
		border-radius: var(--radius-pill);
		background: var(--color-paper);
		color: var(--color-ink);
		cursor: pointer;
	}

	.menu-toggle span {
		display: block;
		width: 1rem;
		height: 1px;
		background: currentColor;
		transition: transform var(--dur-base) var(--ease-out);
	}

	.menu-toggle[aria-expanded='true'] span:first-child {
		transform: translateY(0.2rem) rotate(45deg);
	}

	.menu-toggle[aria-expanded='true'] span:last-child {
		transform: translateY(-0.2rem) rotate(-45deg);
	}

	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
		align-items: end;
		gap: clamp(var(--space-xl), 8vw, var(--space-4xl));
		min-height: clamp(38rem, 76dvh, 52rem);
		padding-block: clamp(var(--space-3xl), 10vh, var(--space-5xl))
			clamp(var(--space-4xl), 14vh, var(--space-5xl));
	}

	.hero-copy {
		max-width: 42rem;
		padding-block-end: var(--space-xl);
		animation: hero-in var(--dur-slow) var(--ease-out) both;
	}

	.eyebrow {
		margin: 0 0 var(--space-md);
		color: var(--color-accent);
		font-size: var(--text-xs);
		font-weight: 600;
		letter-spacing: 0.14em;
		line-height: 1.2;
		text-transform: uppercase;
	}

	h1,
	h2,
	h3,
	p {
		margin-block-start: 0;
	}

	h1,
	h2,
	h3 {
		font-family: var(--font-display);
		font-style: normal;
		font-weight: 500;
		letter-spacing: -0.045em;
	}

	h1,
	h2,
	h3,
	.section-heading,
	.contact-heading,
	.about-copy {
		min-width: 0;
		overflow-wrap: anywhere;
	}

	h1 {
		max-width: 10ch;
		margin-block-end: var(--space-lg);
		font-size: var(--text-display);
		line-height: 0.98;
	}

	h1 span {
		color: var(--color-accent);
	}

	.hero-lede {
		max-width: 48ch;
		margin-block-end: var(--space-xl);
		font-size: var(--text-md);
		line-height: 1.45;
	}

	.action {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-xs);
		min-height: 2.75rem;
		padding: var(--space-xs) var(--space-md);
		border: var(--rule-hair) solid var(--color-ink);
		border-radius: var(--radius-pill);
		font-size: var(--text-sm);
		font-weight: 600;
		line-height: 1;
		text-decoration: none;
		white-space: nowrap;
		transition:
			background-color var(--dur-base) var(--ease-out),
			color var(--dur-base) var(--ease-out),
			transform var(--dur-base) var(--ease-out);
	}

	.action-primary {
		background: var(--color-ink);
		color: var(--color-paper);
	}

	.action:hover,
	.nav-contact:hover {
		transform: translateY(-2px);
	}

	.action:active,
	.nav-contact:active,
	.menu-toggle:active {
		transform: translateY(1px);
	}

	.action:focus-visible,
	.nav-contact:focus-visible,
	.menu-toggle:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 4px;
	}

	.action:disabled,
	:global(.action[aria-disabled='true']),
	.menu-toggle:disabled,
	:global(.menu-toggle[aria-disabled='true']) {
		cursor: not-allowed;
		opacity: 0.55;
	}

	:global(.action[data-state='loading'])::after {
		width: 0.8rem;
		height: 0.8rem;
		border: 2px solid currentColor;
		border-right-color: var(--color-clear);
		border-radius: 50%;
		content: '';
		animation: spin 700ms linear infinite;
	}

	:global(.action[data-state='error']) {
		border-color: var(--color-error);
		color: var(--color-error);
	}

	:global(.action[data-state='success']) {
		border-color: var(--color-success);
		color: var(--color-success);
	}

	.hero-proof {
		position: relative;
		padding-inline-end: clamp(0rem, 3vw, var(--space-xl));
		animation: hero-in var(--dur-slow) var(--ease-out) 100ms both;
	}

	.hero-image {
		position: relative;
		margin: 0;
	}

	.hero-image::before {
		position: absolute;
		top: -1rem;
		left: -1rem;
		width: 4.5rem;
		height: 4.5rem;
		border-top: var(--rule-strong) solid var(--color-accent);
		border-left: var(--rule-strong) solid var(--color-accent);
		content: '';
	}

	.hero-image img {
		width: 100%;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		filter: saturate(0.72) contrast(1.04);
	}

	figcaption,
	.image-caption {
		color: var(--color-muted);
		font-size: var(--text-xs);
	}

	figcaption {
		margin-block-start: var(--space-xs);
	}

	.language-note {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		position: absolute;
		right: -1.5rem;
		bottom: -1.75rem;
		padding: var(--space-sm) var(--space-md);
		background: var(--color-accent);
		color: var(--color-accent-ink);
		font-size: var(--text-sm);
		font-weight: 600;
		letter-spacing: 0.08em;
	}

	.language-note i {
		font-style: normal;
		font-weight: 400;
		opacity: 0.8;
	}

	.intro,
	.about,
	.contact {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: clamp(var(--space-xl), 8vw, var(--space-4xl));
		border-top: var(--rule-hair) solid var(--color-rule);
	}

	.section-heading {
		max-width: 34rem;
	}

	.section-heading h2,
	.about-copy h2,
	.contact-heading h2 {
		margin-block-end: 0;
		font-size: clamp(var(--text-2xl), 4vw, var(--text-3xl));
		line-height: 1.02;
	}

	.intro-copy {
		max-width: 58ch;
		padding-block-start: var(--space-2xl);
	}

	.intro-copy p:first-child {
		margin-block-end: var(--space-lg);
		font-family: var(--font-display);
		font-size: var(--text-lg);
		line-height: 1.3;
	}

	.small-copy {
		max-width: 45ch;
		color: var(--color-ink-2);
	}

	.services,
	.work {
		padding-block-start: var(--space-xl);
	}

	.section-heading-wide {
		max-width: 50rem;
		margin-block-end: var(--space-3xl);
	}

	.service-list,
	.work-list {
		border-top: var(--rule-hair) solid var(--color-rule);
	}

	.service-row {
		display: grid;
		grid-template-columns: 3rem minmax(0, 1fr) auto;
		align-items: start;
		gap: var(--space-lg);
		padding-block: var(--space-xl);
		border-bottom: var(--rule-hair) solid var(--color-rule);
	}

	.service-index,
	.work-number {
		color: var(--color-accent);
		font-size: var(--text-sm);
		font-variant-numeric: tabular-nums;
		font-weight: 600;
		letter-spacing: 0.08em;
	}

	.service-body {
		max-width: 52rem;
	}

	.service-body h3,
	.work-meta h3 {
		margin-block-end: var(--space-xs);
		font-size: var(--text-xl);
		line-height: 1.05;
	}

	.service-body p {
		max-width: 55ch;
		margin-block-end: var(--space-md);
		color: var(--color-ink-2);
	}

	.service-body ul {
		display: grid;
		gap: var(--space-2xs);
		margin: 0;
		padding: 0;
		color: var(--color-neutral);
		font-size: var(--text-sm);
		list-style: none;
	}

	.service-body li::before {
		margin-inline-end: var(--space-xs);
		color: var(--color-accent);
		content: '—';
	}

	.text-link {
		align-self: center;
		padding-block: var(--space-xs);
		font-size: var(--text-sm);
		font-weight: 600;
		text-decoration: none;
		white-space: nowrap;
	}

	.text-link span,
	.contact-email span,
	.footer-meta span {
		color: var(--color-accent);
	}

	.language-band {
		background: var(--color-ink);
		color: var(--color-paper);
	}

	.language-band-inner {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(20rem, 0.9fr);
		align-items: center;
		gap: clamp(var(--space-xl), 7vw, var(--space-4xl));
		padding-block: clamp(var(--space-2xl), 5vw, var(--space-3xl));
	}

	.eyebrow-light {
		color: var(--color-accent);
	}

	.language-band h2 {
		margin: 0;
		line-height: 0;
	}

	.language-band h2 img {
		display: block;
		width: min(100%, 20rem);
		height: auto;
		filter: brightness(0) invert(1);
	}

	.language-band-copy {
		max-width: 38ch;
		margin: 0;
		color: var(--color-paper-2);
		font-family: var(--font-display);
		font-size: var(--text-lg);
		line-height: 1.25;
	}

	.work-row {
		display: grid;
		grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
		align-items: center;
		gap: clamp(var(--space-xl), 7vw, var(--space-4xl));
		padding-block: var(--space-xl);
		border-bottom: var(--rule-hair) solid var(--color-rule);
	}

	.work-row:nth-child(even) {
		grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.7fr);
	}

	.work-row:nth-child(even) .work-meta {
		grid-column: 2;
		grid-row: 1;
	}

	.work-row:nth-child(even) .work-image {
		grid-column: 1;
		grid-row: 1;
	}

	.work-meta {
		max-width: 25rem;
	}

	.work-number {
		display: block;
		margin-block-end: var(--space-xl);
	}

	.work-meta p {
		margin: 0;
		color: var(--color-ink-2);
		font-size: var(--text-sm);
	}

	.work-image {
		margin: 0;
		background: var(--color-paper-2);
		overflow: clip;
	}

	.work-image img {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		filter: saturate(0.72) contrast(1.04);
		transition:
			transform var(--dur-slow) var(--ease-out),
			filter var(--dur-slow) var(--ease-out);
	}

	@media (hover: hover) and (pointer: fine) {
		.work-row:hover .work-image img {
			transform: scale(1.025);
			filter: saturate(0.95) contrast(1.04);
		}
	}

	.work-note {
		max-width: 62ch;
		margin-block: var(--space-lg) 0;
		color: var(--color-muted);
		font-size: var(--text-xs);
	}

	.about {
		align-items: center;
		padding-block-start: var(--space-4xl);
	}

	.about-image-wrap {
		max-width: 28rem;
	}

	.about-image {
		margin: 0;
		background: var(--color-paper-2);
	}

	.about-image img {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		filter: saturate(0.6) contrast(1.04);
	}

	.image-caption {
		margin-block: var(--space-xs) 0;
	}

	.about-copy {
		max-width: 48rem;
	}

	.about-copy h2 {
		max-width: 14ch;
		margin-block-end: var(--space-lg);
	}

	.about-copy > p:not(.eyebrow) {
		max-width: 58ch;
		color: var(--color-ink-2);
	}

	.credentials {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-xs) var(--space-md);
		margin-block-start: var(--space-xl);
		padding-block-start: var(--space-md);
		border-top: var(--rule-hair) solid var(--color-rule);
		color: var(--color-neutral);
		font-size: var(--text-xs);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.credentials span + span::before {
		margin-inline-end: var(--space-md);
		color: var(--color-rule);
		content: '·';
	}

	.contact {
		grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
		align-items: end;
		padding-block: var(--space-4xl);
		background: var(--color-paper-2);
	}

	.contact-heading h2 {
		max-width: 12ch;
	}

	.contact-details {
		max-width: 44rem;
	}

	.contact-details > p {
		max-width: 42ch;
		margin-block-end: var(--space-xl);
		color: var(--color-ink-2);
	}

	.contact-email,
	.contact-phone {
		display: block;
		width: fit-content;
		max-width: 100%;
		font-family: var(--font-display);
		font-size: clamp(var(--text-lg), 3vw, var(--text-2xl));
		line-height: 1.1;
		text-decoration: none;
		overflow-wrap: anywhere;
	}

	.contact-email {
		color: var(--color-ink);
	}

	.contact-phone {
		margin-block-start: var(--space-sm);
		color: var(--color-ink-2);
	}

	.contact-email:hover,
	.contact-phone:hover {
		color: var(--color-accent);
	}

	.site-footer {
		background: var(--color-ink);
		color: var(--color-paper);
	}

	.footer-primary {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: var(--space-xl);
		padding-block: var(--space-3xl);
	}

	.wordmark-footer .wordmark-name {
		font-size: var(--text-2xl);
	}

	.wordmark-footer .wordmark-byline {
		color: var(--color-paper-3);
	}

	.footer-tagline {
		margin: var(--space-sm) 0 0;
		color: var(--color-paper-2);
		font-family: var(--font-display);
		font-size: var(--text-md);
	}

	.footer-arrow {
		display: grid;
		place-items: center;
		width: 2.75rem;
		height: 2.75rem;
		border: var(--rule-hair) solid var(--color-paper-3);
		border-radius: 50%;
		font-size: var(--text-lg);
		line-height: 1;
		text-decoration: none;
		transition:
			background-color var(--dur-base) var(--ease-out),
			color var(--dur-base) var(--ease-out),
			transform var(--dur-base) var(--ease-out);
	}

	.footer-arrow:hover {
		background: var(--color-accent);
		color: var(--color-accent-ink);
		transform: translateY(-2px);
	}

	.footer-arrow:active {
		transform: translateY(1px);
	}

	.footer-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
		padding-block: var(--space-md);
		border-top: var(--rule-hair) solid var(--color-neutral);
		color: var(--color-paper-3);
		font-size: var(--text-xs);
	}

	.footer-meta a {
		text-decoration: none;
		white-space: nowrap;
	}

	.footer-meta a:hover {
		color: var(--color-accent-ink);
	}

	@keyframes hero-in {
		from {
			opacity: 0;
			transform: translateY(1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	@media (max-width: 60rem) {
		nav {
			gap: var(--space-md);
		}

		.hero,
		.intro,
		.about,
		.contact {
			grid-template-columns: 1fr;
		}

		.hero {
			align-items: start;
			min-height: auto;
			padding-block-end: var(--space-4xl);
		}

		.hero-proof {
			max-width: 44rem;
			padding-inline-end: var(--space-md);
		}
		.language-band-inner {
			grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.72fr);
			align-items: center;
			gap: var(--space-2xl);
		}

		.about-image-wrap {
			max-width: 36rem;
		}

		.contact-heading h2 {
			max-width: 16ch;
		}
	}

	@media (max-width: 40rem) {
		.site-header {
			background: var(--color-paper);
		}

		.header-inner {
			min-height: 4rem;
		}

		.wordmark {
			gap: var(--space-2xs);
		}

		.wordmark-name {
			font-size: var(--text-lg);
		}

		.wordmark-byline {
			font-size: 0.625rem;
		}

		nav {
			display: none;
			position: absolute;
			top: 4rem;
			right: 0;
			left: 0;
			flex-direction: column;
			align-items: stretch;
			gap: 0;
			padding: var(--space-sm) var(--page-gutter) var(--space-lg);
			border-bottom: var(--rule-hair) solid var(--color-rule);
			background: var(--color-paper);
		}

		nav.nav-open {
			display: flex;
		}

		nav a {
			padding-block: var(--space-sm);
		}

		nav a::after {
			display: none;
		}

		.nav-contact {
			align-self: flex-start;
			margin-block-start: var(--space-xs);
		}

		.menu-toggle {
			display: grid;
			flex: 0 0 auto;
		}

		.section-shell {
			padding-block: var(--space-3xl);
		}

		.hero {
			gap: var(--space-3xl);
			padding-block-start: var(--space-3xl);
			padding-block-end: var(--space-4xl);
		}

		h1 {
			max-width: 9ch;
			font-size: var(--text-display-s);
		}

		.hero-lede {
			font-size: var(--text-base);
		}

		.hero-proof {
			padding-inline-end: var(--space-sm);
		}

		.hero-image::before {
			top: -0.5rem;
			left: -0.5rem;
			width: 2.75rem;
			height: 2.75rem;
		}

		.language-note {
			right: -0.5rem;
			bottom: -1.25rem;
			padding: var(--space-xs) var(--space-sm);
			font-size: var(--text-xs);
		}

		.section-heading h2,
		.about-copy h2,
		.contact-heading h2 {
			font-size: var(--text-2xl);
		}

		.service-row {
			grid-template-columns: 2rem minmax(0, 1fr);
			gap: var(--space-sm);
		}

		.service-row .text-link {
			grid-column: 2;
			justify-self: start;
			margin-block-start: var(--space-xs);
		}

		.language-band-inner {
			padding-block: var(--space-3xl);
		}

		.language-band h2 img {
			width: min(100%, 15rem);
		}

		.work-row,
		.work-row:nth-child(even) {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			gap: var(--space-lg);
		}

		.work-row:nth-child(even) .work-meta,
		.work-row:nth-child(even) .work-image {
			order: initial;
		}

		.work-number {
			margin-block-end: var(--space-md);
		}

		.about-copy h2 {
			max-width: 15ch;
		}

		.credentials {
			align-items: flex-start;
			flex-direction: column;
			gap: var(--space-xs);
		}

		.credentials span + span::before {
			display: none;
		}

		.contact {
			gap: var(--space-xl);
		}

		.contact-email,
		.contact-phone {
			font-size: var(--text-base);
			white-space: nowrap;
		}

		.contact-email {
			font-family: var(--font-body);
			font-size: var(--text-sm);
			letter-spacing: -0.02em;
		}

		.footer-primary {
			align-items: start;
		}

		.footer-meta {
			align-items: flex-start;
			flex-wrap: wrap;
			justify-content: flex-start;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(html) {
			scroll-behavior: auto;
		}

		.hero-copy,
		.hero-proof {
			animation: none;
		}

		.action,
		.nav-contact,
		.menu-toggle,
		.footer-arrow,
		.work-image img,
		nav a::after {
			transition-duration: var(--dur-fast);
		}

		:global(.action[data-state='loading'])::after {
			animation: none;
		}
	}
</style>
