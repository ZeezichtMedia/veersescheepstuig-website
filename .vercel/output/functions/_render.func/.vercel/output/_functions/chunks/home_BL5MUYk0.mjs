import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_XcAptiy-.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Home","hero":{"title":"Het Veerse Scheepstuig","subtitle":"Shantykoor met passie voor maritieme muziek","videoUrl":"/videos/hero.webm","image":"https://res.cloudinary.com/dgf7hospk/image/upload/q_auto,f_auto,w_1920,c_limit,fl_progressive/veersescheepstuig/koor-foto_1762936244480.webp","ctaText":"Boek ons voor een optreden","ctaLink":"/contact"},"intro":{"title":"Maritieme muziek met hart en ziel","body":"Sinds 1999 brengt Het Veerse Scheepstuig maritieme muziek tot leven. Ons vierstemmig koor en combo combineren traditionele shanties met moderne folksongs in diverse talen. Met een rijk akoestisch instrumentarium en eigen arrangementen zorgen we voor sfeervolle optredens in binnen- en buitenland."},"usps":[{"name":"Vierstemmig koor","icon":"users","description":"Goed op elkaar afgestemd koor met rijke vocale harmonie"},{"name":"Eigen combo","icon":"music","description":"Akoestisch instrumentarium met gitaar, contrabas, accordeon en viool"},{"name":"Breed repertoire","icon":"star","description":"Van traditionele shanties tot moderne folksongs in diverse talen"}]};
				const file = "C:/Users/joria/CascadeProjects/veerse_scheepstuig_v2/src/content/pages/home.md";
				const url = "/home";
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
