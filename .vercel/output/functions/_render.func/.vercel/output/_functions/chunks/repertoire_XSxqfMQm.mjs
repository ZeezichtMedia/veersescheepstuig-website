import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Repertoire","heroImage":"/images/concerten-header.webp","intro":"Of het nu gaat om hedendaagse liedjes met de zee als thema, oude ballads van angstaanjagende piraten of shanties, de traditionele werkliederen die aan boord van de grote schepen worden gezongen om de arbeid van de bemanning te organiseren, waardoor kleine groepen mensen manen om enorme krachtprestaties te leveren.\n\nDie bemanningen waren Engelsen, Ieren, Welsh, Duitsers, Fransen, uit West-Indië, de Verenigde Staten en andere zeegaande landen, maar de muziek zelf is geïnspireerd door de oceanen die al deze plaatsen met elkaar verbinden en tweederde van onze kostbare planeet bestrijken.\n\nWe nemen dit allemaal als inspiratiebron voor onze muziek en geven er onze eigen draai aan met **gitaar, contrabas, accordeon en viool**. Uiteraard zingen wij daarnaast ook diverse nummers in het Nederlands.\n","styles":[{"name":"Traditionele Shanties","description":"Authentieke werkliederen van de grote zeilschepen, gezongen door internationale bemanningen."},{"name":"Maritieme Folk","description":"Folksongs en ballads over het leven op zee, piraten en maritieme avonturen."},{"name":"Moderne Folksongs","description":"Hedendaagse liedjes met maritieme thema's en eigen composities."}],"languages":[{"language":"Nederlands"},{"language":"Engels"},{"language":"Frans"},{"language":"Russisch"},{"language":"Spaans"},{"language":"Zweeds"}]};
				const file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/content/pages/repertoire.md";
				const url = "/repertoire";
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
