import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Het Koor","heroImage":"https://res.cloudinary.com/dgf7hospk/image/upload/q_auto,f_auto,w_1920,c_limit,fl_progressive/veersescheepstuig/koor-foto_1762936244480.webp","heroTitle":"Het Koor","heroSubtitle":"Vierstemmig koor met passie voor maritieme muziek","geschiedenis":{"intro1":"De geschiedenis van Het Veerse Scheepstuig is die van muzikanten en hun muziek. Van shanties en folksongs tot het herontdekken van oude én het verkennen van nieuwe maritieme melodieën. Het gaat om ontmoetingen met nieuwe mensen, het bezoeken van onbekende plekken, en vooral om muzikale groei.","oprichting1":"In 1999 besloten twee leden van de kaartclub spontaan een shantykoor op te richten. Ze kregen al snel bijval van andere stadsgenoten. Een net gearriveerde Russische dirigente nam enthousiast de muzikale leiding op zich, met de ambitie om een meerstemmig 'goed' koor op te bouwen.","intro2":"Sinds onze oprichting hebben we een lange reis afgelegd: van een fascinatie voor hedendaagse zeemansliederen via traditionele maritieme folk — waaronder shanties — naar een breed scala aan folkmuziek.","oprichting2":"Zo startte het koor met vier stemgroepen. Een groep muzikanten completeerde het geheel. De naam was snel gevonden: Het Veerse Scheepstuig — een naam met een knipoog en dubbele betekenis.","groei1":"In de jaren daarna groeide het koor uit tot een gezelschap van veertig leden, met een repertoire van ruim honderd shanty's en zeemansliederen. Zangers uit heel Zeeland vonden hun plek in de groep. Het Veerse Scheepstuig heeft al verschillende dirigenten gehad.","groei2":"Via onze nieuwsbrief, website en op Facebook houden we leden en belangstellenden op de hoogte van ons reilen en zeilen.","koor1":"Ons vierstemmig koor is goed op elkaar afgestemd, zowel vocaal als instrumentaal. Met een rijk akoestisch instrumentarium, eigen composities en arrangementen brengen we een levendig en sfeervol repertoire in diverse talen: Engels, Frans, Russisch, Spaans en Zweeds.","koor2":"Door de jaren heen hebben we een eigen, herkenbare stijl ontwikkeld die we met trots presenteren op podia in binnen- en buitenland én op onze vier Cd's.","oprichtingTitle":"De oprichting in 1999","dirigentInfo":"Sinds 2024 staat het koor onder de muzikale leiding van dirigent Moritz Benschop","groeiTitle":"Groei en ontwikkeling","koorTitle":"Ons vierstemmig koor","title":"Stukje geschiedenis"}};
				const file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/content/pages/koor.md";
				const url = "/koor";
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
