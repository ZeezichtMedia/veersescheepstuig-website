import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Bestuur","heroImage":"/images/bestuur-header.webp","board":[{"role":"Voorzitter","name":"Rob van Keulen","phone":"06 10 01 81 96"},{"role":"Secretaris","name":"Chris de Groot","email":"scheepstuig@zeelandnet.nl","phone":"06 83 35 05 36","info":"Hier kunt u ook de gratis nieuwsbrief aanvragen"},{"role":"Penningmeester","name":"Luc van Puymbroeck"},{"role":"Concertcoördinatie (boekingen)","name":"Henk de Jonge","email":"hjdejonge@zeelandnet.nl","info":"Algemeen bestuurslid"},{"role":"Dirigent","name":"Moritz Benschop","email":"dirigent@veersescheepstuig.nl","info":"Muzikale leiding sinds 2024"}],"general":{"address":"p/a Vernovenhoekstraat 45","zipcode":"4443 AR","city":"Nisse","phone":"06 40 70 89 02","email":"info@veersescheepstuig.nl","iban":"NL51RABO0365241385","bic":"RABONL2U","kvk":"2205.6536"}};
				const file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/content/pages/bestuur.md";
				const url = "/bestuur";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
