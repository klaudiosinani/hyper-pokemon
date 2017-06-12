const homeDir = require('home-dir');

const path = homeDir('/.hyper_plugins/node_modules/hyper-pokemon/backgrounds/');
const extension = '.png';

exports.decorateConfig = config => {
	let primary;
	let secondary;
	let tertiary;
	const pokemonTheme = config.pokemon.toLowerCase();

	switch (pokemonTheme) {
		case 'pikachu':
			primary = '#F6BD20';
			secondary = '#623108';
			tertiary = '#C98600';
			break;

		case 'raichu':
			primary = '#F2BD4B';
			secondary = '#623108';
			tertiary = '#C16200';
			break;

		case 'gengar':
			primary = '#EF735B';
			secondary = '#77BC3E';
			tertiary = '#FFFFFF';
			break;

		default:
			if (config.pokemonSyntax === 'light') {
				primary = '#383A42';
				secondary = '#383A42';
				tertiary = '#383A42';
			} else {
				primary = '#FAFAFA';
				secondary = '#FAFAFA';
				tertiary = '#FAFAFA';
			}

	}

	const syntax = {
		dark: {
			borderColor: primary,
			cursorColor: secondary,
			foregroundColor: secondary,
			backgroundColor: '#383A42',
			colors: {
				black: tertiary,
				red: secondary,
				green: tertiary,
				yellow: secondary,
				blue: secondary,
				magenta: secondary,
				cyan: secondary,
				white: secondary,
				lightBlack: tertiary,
				lightRed: secondary,
				lightGreen: tertiary,
				lightYellow: secondary,
				lightBlue: secondary,
				lightMagenta: secondary,
				lightCyan: secondary,
				lightWhite: secondary
			}
		},

		light: {
			borderColor: primary,
			cursorColor: secondary,
			foregroundColor: secondary,
			backgroundColor: '#FAFAFA',
			colors: {
				black: tertiary,
				red: secondary,
				green: tertiary,
				yellow: secondary,
				blue: secondary,
				magenta: secondary,
				cyan: secondary,
				white: secondary,
				lightBlack: tertiary,
				lightRed: secondary,
				lightGreen: tertiary,
				lightYellow: secondary,
				lightBlue: secondary,
				lightMagenta: secondary,
				lightCyan: secondary,
				lightWhite: secondary
			}
		}
	};

	let pathToTheme;
	const assemblePath = path + pokemonTheme + extension;

	if (process.platform === 'win32') {
		pathToTheme = assemblePath.replace(/\\/g, '/');
	} else {
		pathToTheme = assemblePath;
	}

	return Object.assign({}, config,
		(config.pokemonSyntax === 'light') ?
		syntax.light :
		syntax.dark, {
			termCSS: `
          ${config.termCSS || ''}
          ::selection {
            background: ${primary} !important;
          }
          x-screen {
            background: transparent !important;
          }
        `,
			css: `
        ${config.css || ''}
        .terms_terms {
          background: url(${pathToTheme}) center;
          background-size: cover;
        }
        .header_header, .header_windowHeader {
          background-color: ${primary} !important;
        }
        .tabs_nav .tabs_list {
          border-bottom: 0;
        }
        .tabs_nav .tabs_title,
        .tabs_nav .tabs_list .tab_tab {
          color: ${secondary};
          border: 0;
        }
        .tabs_nav .tabs_list .tab_tab:not(.tab_active) {
          background-color: rgba(0,0,0,0.1);
        }
        .tabs_nav .tabs_list .tab_tab:not(.tab_active):hover {
          color: ${primary};
        }
        .tabs_nav .tabs_list .tab_active .tab_text {
          border-bottom: 3px solid ${secondary};
        }
        .terms_terms .terms_termGroup .splitpane_panes .splitpane_divider {
          background-color: ${secondary} !important;
        }
      `
		}
	);
};
