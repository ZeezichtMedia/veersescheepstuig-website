import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Concerten","heroImage":"/images/concerten-header.webp","intro":"Bekijk onze aankomende optredens en kom luisteren naar Het Veerse Scheepstuig op diverse locaties in Zeeland.","concerts":[{"date":"2025-10-21T00:00:00.000Z","dayOfWeek":"Zaterdag","title":"Zomermarkt","location":"Veerweg Kamperland","performances":[{"time":"14:00 - 14:35"},{"time":"15:30 - 16:05"}]},{"date":"2025-07-30T00:00:00.000Z","dayOfWeek":"Woensdag","title":"Braderie","location":"Valkenburgstraat 3, Meliskerke","performances":[{"time":"15:00 - 15:35"},{"time":"15:50 - 16:25"}]},{"date":"2025-08-07T00:00:00.000Z","dayOfWeek":"Donderdag","title":"Kerkje Zoutelande","location":"Willibrordusplein 3","performances":[{"time":"19:15 - 19:40"},{"time":"19:55 - 20:30"}]},{"date":"2025-08-20T00:00:00.000Z","dayOfWeek":"Woensdag","title":"Polderhuis","location":"Zuidstraat 154-156, Westkapelle","performances":[{"time":"14:15 - 15:00"},{"time":"15:30 - 16:15"}]}]};
				const file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/content/pages/concerten.md";
				const url = "/concerten";
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
