'use strict';
const fs = require('fs');
const path = require('path');
const color = require('color');
const yaml = require('js-yaml');

const filepaths = {
  backgrounds: path.resolve(__dirname, 'backgrounds'),
  gifs: path.resolve(__dirname, 'pokecursors')
};

const colorSchemes = {
  types: path.resolve(__dirname, 'themes', 'types.yml'),
  pokemon: path.resolve(__dirname, 'themes', 'pokemon.yml'),
  trainers: path.resolve(__dirname, 'themes', 'trainers.yml')
};

function getUserOptions(configObject) {
  return Object.assign({}, {
    get pokemon() {
      if (Array.isArray(configObject.pokemon)) {
        return configObject.pokemon[Math.floor(Math.random() * configObject.pokemon.length)];
      }

      return configObject.pokemon || 'pikachu';
    },
    get exclude() {
      const {exclude} = configObject;

      if (!exclude) {
        return [];
      }

      if (Array.isArray(exclude)) {
        return exclude;
      }

      return [exclude];
    },
    get poketab() {
      return (configObject.poketab || 'false') === 'true';
    },
    get unibody() {
      return (configObject.unibody || 'true') !== 'false';
    }
  });
}

function getRandomTheme(category, exclude) {
  const keys = Object.keys(category).filter(key => !exclude.includes(key));

  if (keys.length > 0) {
    const index = Math.floor(Math.random() * (keys.length));
    const name = keys[index];
    return [name, category[name]];
  }

  const themes = getThemes();
  // All themes filtered out thus resolve to default
  return ['pikachu', themes.pokemon.pikachu];
}

function getThemes() {
  const themes = {};
  Object.keys(colorSchemes).forEach(category => {
    Object.assign(themes, yaml.safeLoad(fs.readFileSync(colorSchemes[category], 'utf8')));
  });
  return themes;
}

function getThemeColors(theme, exclude) {
  const themes = getThemes();
  const name = theme.trim().toLowerCase();
  const excludedThemes = [...new Set(exclude)].map(x => x.trim().toLowerCase());
  if (name === 'random') {
    return getRandomTheme(themes.pokemon, excludedThemes);
  }

  if (Object.prototype.hasOwnProperty.call(themes, name)) {
    // Choose a random theme from the given category -- i.e. `fire`
    return getRandomTheme(themes[name], excludedThemes);
  }

  if (Object.prototype.hasOwnProperty.call(themes.pokemon, name)) {
    // Return the requested pokemon theme -- i.e. `lapras`
    return [name, themes.pokemon[name]];
  }
  // Got non-existent theme name thus resolve to default

  return ['pikachu', themes.pokemon.pikachu];
}

function getMediaPaths(theme) {
  const [imagePath, gifPath] = [[], []];

  imagePath.push(...[path.join(filepaths.backgrounds, theme), '.png']);
  gifPath.push(...[path.join(filepaths.gifs, theme), '.gif']);
  if (process.platform === 'win32') {
    return [imagePath, gifPath].map(item => item.join('').replace(/\\/g, '/'));
  }

  return [imagePath.join(''), gifPath.join('')];
}

exports.decorateConfig = config => {
  // Get user options
  const options = getUserOptions(config);
  const [themeName, colors] = getThemeColors(options.pokemon, options.exclude);
  const [imagePath, gifPath] = getMediaPaths(themeName);

  // Set theme colors
  const {primary, secondary, tertiary, unibody} = colors;
  const background = options.unibody ? unibody : primary;
  const selection = color(primary).alpha(0.3).string();
  const transparent = color(secondary).alpha(0).string();
  const header = color(background).isDark() ? '#FAFAFA' : '#010101';
  const isSecondaryDark = color(secondary).isDark();
  const activeTab = isSecondaryDark ? '#FAFAFA' : '#383A42';
  const highlight = isSecondaryDark ? '#FFFFFF' : '#000000';
  const secondHighlight = isSecondaryDark ? '#C7C7C7' : '#686868';
  const tab = color(activeTab).darken(0.1);

  // Set poketab
  const tabContent = options.poketab ? gifPath : '';

  const syntax = {
    backgroundColor: transparent,
    borderColor: background,
    cursorColor: secondary,
    foregroundColor: secondary,
    selectionColor: selection,
    colors: {
      black: tertiary,
      red: secondary,
      green: tertiary,
      yellow: secondary,
      blue: secondary,
      magenta: secondary,
      cyan: secondary,
      white: secondHighlight,
      lightBlack: tertiary,
      lightRed: secondary,
      lightGreen: secondary,
      lightYellow: secondary,
      lightBlue: secondary,
      lightMagenta: secondary,
      lightCyan: secondary,
      lightWhite: highlight
    }
  };

  return Object.assign({}, config, syntax, {
    termCSS: config.termCSS || '',
    css: `
      ${config.css || ''}
      .terms_terms {
        background: url("file://${imagePath}") center;
        background-size: cover;
      }
      .header_shape, .header_appTitle {
        color: ${header};
      }
      .header_header, .header_windowHeader {
        background-color: ${background} !important;
      }
      .hyper_main {
        background-color: ${background};
      }
      .tab_textActive .tab_textInner::before {
        content: url("file://${tabContent}");
        position: absolute;
        right: 0;
        top: -4px;
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
        color: ${background};
        width: 15px;
        height: 15px;
      }
      .tab_icon:hover {
        background-color: ${background};
      }
      .tab_shape {
        color: ${secondary};
        width: 7px;
        height: 7px;
      }
      .tab_shape:hover {
        color: ${secondary};
      }
      .tab_active {
        background-color: ${activeTab};
      }
      .tabs_nav .tabs_list .tab_tab:not(.tab_active) {
        background-color: ${tab};
      }
      .tabs_nav .tabs_list {
        color: ${background};
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
  });
};
