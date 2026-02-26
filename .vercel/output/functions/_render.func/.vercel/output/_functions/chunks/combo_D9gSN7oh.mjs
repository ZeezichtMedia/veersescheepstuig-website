import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Het Veerse Scheepstuig heeft sinds de oprichting een combo dat in de huidige vorm bestaat uit <strong>5 vaste enthousiaste muzikanten</strong>. Zij begeleiden de zangers bij bijna alle nummers en vormen de muzikale ruggengraat van ons koor.</p>\n<p>Het combo is bij alle optredens en uitvoeringen van het koor natuurlijk gewoon aanwezig. Er zit slechts af en toe een a capella nummer tussen door (d.w.z. alleen zang).</p>";

				const frontmatter = {"title":"Het Combo","heroImage":"/images/concerten-header.webp","numberOfMusicians":5,"intro":"","instruments":[{"name":"Gitaar","description":"Zorgt voor de ritmische basis en harmonische ondersteuning"},{"name":"Viool","description":"Voegt melodische lijnen en emotie toe aan de muziek"},{"name":"Accordeon","description":"Geeft de typische maritieme folk sfeer"},{"name":"Contrabas","description":"Fundeert het geluid met diepe bastonen"}],"members":[{"name":"Gerard Kramer","instrument":"Gitaar en Banjo","image":"/images/gerard-kramer.webp"},{"name":"Johan Brakeboer","instrument":"Contrabas","image":"/images/johan-brakeboer.webp"},{"name":"John Brinkhaus","instrument":"Accordeon","image":"/images/john-brinkhaus.webp"},{"name":"Kevin van Blerkum","instrument":"Accordeon","image":"/images/kevin-van-blerkum.webp"},{"name":"Renée van Brakel","instrument":"Viool","image":"/images/renee-van-brakel.webp"}],"rehearsalInfo":"Het combo repeteert iedere woensdag mee met het koor. Af en toe worden de puntjes op de i gezet met een extra repetitie.\n\n**Repetities:** Elke woensdag 19:45 - 21:45 uur\n"};
				const file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/content/pages/combo.md";
				const url = "/combo";
				function rawContent() {
					return "\r\nHet Veerse Scheepstuig heeft sinds de oprichting een combo dat in de huidige vorm bestaat uit **5 vaste enthousiaste muzikanten**. Zij begeleiden de zangers bij bijna alle nummers en vormen de muzikale ruggengraat van ons koor.\r\n\r\nHet combo is bij alle optredens en uitvoeringen van het koor natuurlijk gewoon aanwezig. Er zit slechts af en toe een a capella nummer tussen door (d.w.z. alleen zang).\r\n";
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
