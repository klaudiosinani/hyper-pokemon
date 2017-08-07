const fs = require('fs');
const yaml = require('js-yaml');
const homeDir = require('home-dir');

const path = homeDir('/.hyper_plugins/node_modules/hyper-pokemon/backgrounds/');
const pokecursorDir = homeDir('/.hyper_plugins/node_modules/hyper-pokemon/pokecursors/');
const extension = '.png';
const pokecursorExtension = '.gif';

exports.decorateConfig = config => {
	let theme;
	let keys;
	let index;
	const getTheme = Array.isArray(config.pokemon) ? config.pokemon[Math.floor(Math.random() * config.pokemon.length)] : config.pokemon;
	let pokemonTheme = getTheme.toLowerCase();
	const unibody = config.unibody;
	const unibodyFlag = unibody !== 'false';
	const pokecursor = config.pokecursor;
	const pokecursorFlag = pokecursor === 'true';

	// Load color palettes from yaml files
	const pokemonYml = yaml.safeLoad(
		fs.readFileSync(
			homeDir('/.hyper_plugins/node_modules/hyper-pokemon/pokemon.yml'),
			'utf8'
		)
	);

	const typesYml = yaml.safeLoad(
		fs.readFileSync(
			homeDir('/.hyper_plugins/node_modules/hyper-pokemon/types.yml'),
			'utf8'
		)
	);

	const trainersYml = yaml.safeLoad(
		fs.readFileSync(
			homeDir('/.hyper_plugins/node_modules/hyper-pokemon/trainers.yml'),
			'utf8'
		)
	);

	// Determine theme color palette
	if (pokemonTheme === 'random') {
		keys = Object.keys(pokemonYml.pokemon);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'fire') {
		keys = Object.keys(typesYml.fire);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'water') {
		keys = Object.keys(typesYml.water);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'grass') {
		keys = Object.keys(typesYml.grass);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'poison') {
		keys = Object.keys(typesYml.poison);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'flying') {
		keys = Object.keys(typesYml.flying);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'bug') {
		keys = Object.keys(typesYml.bug);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'electric') {
		keys = Object.keys(typesYml.electric);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'ground') {
		keys = Object.keys(typesYml.ground);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'fairy') {
		keys = Object.keys(typesYml.fairy);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'normal') {
		keys = Object.keys(typesYml.normal);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'psychic') {
		keys = Object.keys(typesYml.psychic);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'ghost') {
		keys = Object.keys(typesYml.ghost);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'rock') {
		keys = Object.keys(typesYml.rock);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'ice') {
		keys = Object.keys(typesYml.ice);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'dragon') {
		keys = Object.keys(typesYml.dragon);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'fighting') {
		keys = Object.keys(typesYml.fighting);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'steel') {
		keys = Object.keys(typesYml.steel);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'legendary') {
		keys = Object.keys(typesYml.legendary);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'starter') {
		keys = Object.keys(typesYml.starter);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'ash') {
		keys = Object.keys(trainersYml.ash);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'brock') {
		keys = Object.keys(trainersYml.brock);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'misty') {
		keys = Object.keys(trainersYml.misty);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'surge') {
		keys = Object.keys(trainersYml.surge);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'erika') {
		keys = Object.keys(trainersYml.erika);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'koga') {
		keys = Object.keys(trainersYml.koga);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'sabrina') {
		keys = Object.keys(trainersYml.sabrina);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'blaine') {
		keys = Object.keys(trainersYml.blaine);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'giovanni') {
		keys = Object.keys(trainersYml.giovanni);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'lorelei') {
		keys = Object.keys(trainersYml.lorelei);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'bruno') {
		keys = Object.keys(trainersYml.bruno);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'agatha') {
		keys = Object.keys(trainersYml.agatha);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'lance') {
		keys = Object.keys(trainersYml.lance);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'gary') {
		keys = Object.keys(trainersYml.gary);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'jessie') {
		keys = Object.keys(trainersYml.jessie);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	} else if (pokemonTheme === 'james') {
		keys = Object.keys(trainersYml.james);
		index = Math.floor(Math.random() * (keys.length));
		pokemonTheme = keys[index];
	}

	if (Object.prototype.hasOwnProperty.call(pokemonYml.pokemon, pokemonTheme)) {
		theme = pokemonYml.pokemon[pokemonTheme];
	} else {
		theme = pokemonYml.default[config.pokemonSyntax];
	}

	// Set theme colors
	const primary = (unibodyFlag === true) ? theme.unibody : theme.primary;
	const secondary = theme.secondary;
	const tertiary = theme.tertiary;
	const selectedColor = theme.primary;

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
				lightGreen: secondary,
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
				lightGreen: secondary,
				lightYellow: secondary,
				lightBlue: secondary,
				lightMagenta: secondary,
				lightCyan: secondary,
				lightWhite: secondary
			}
		}
	};

	let pathToTheme;
	let pathToPokecursor;
	const assemblePath = path + pokemonTheme + extension;
	const assemblePokecursorPath = pokecursorDir + pokemonTheme + pokecursorExtension;

	if (process.platform === 'win32') {
		pathToTheme = assemblePath.replace(/\\/g, '/');
		pathToPokecursor = assemblePokecursorPath.replace(/\\/g, '/');
	} else {
		pathToTheme = assemblePath;
		pathToPokecursor = assemblePokecursorPath;
	}

	// Set theme pokecursor
	const cursorVisibility = (pokecursorFlag === true) ? 'transparent' : secondary;
	const cursorContent = (pokecursorFlag === true) ? pathToPokecursor : '';

	return Object.assign({}, config,
		(config.pokemonSyntax === 'light') ?
		syntax.light :
		syntax.dark, {
			cursorColor: cursorVisibility,
			termCSS: `
          ${config.termCSS || ''}
          .cursor-node::after {
          	content: url("file://${cursorContent}");
          	position: absolute;
          	left: 0;
          	right: 0;
          	bottom: 0;
          }
          ::selection {
            background: ${selectedColor} !important;
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${secondary};
            -webkit-box-shadow: none;
					}
          x-screen {
            background: transparent !important;
          }
        `,
			css: `
        ${config.css || ''}
        .terms_terms {
          background: url("file://${pathToTheme}") center;
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
        .tab_icon {
          color: ${secondary};
        }
        .tab_icon:hover {
          background-color: ${secondary};
        }
        .tabs_nav .tabs_list .tab_tab:not(.tab_active) {
          background-color: rgba(0,0,0,0.1);
        }
        .tabs_nav .tabs_list {
          color: ${primary};
        }
		.tab_tab::before {
		  content: '';
		  position: absolute;
		  bottom: 0;
		  left: 0;
		  right: 0;
		  height: 4px;
		  background-color: ${secondary};
		  transform: scaleX(0);
		  transition: none;
		}
		.tab_tab.tab_active::before {
		  transform: scaleX(1);
		  transition: all 400ms cubic-bezier(0.0, 0.0, 0.2, 1)
		}
        .terms_terms .terms_termGroup .splitpane_panes .splitpane_divider {
          background-color: ${secondary} !important;
        }
      `
		}
	);
};
