<h1 align="center">
			<a href="https://github.com/klauscfhq/hyper-pokemon">
				<img src="https://cdn.rawgit.com/klauscfhq/hyper-pokemon/d45bcb77/media/screen.png" alt="Hyper Pokemon" width="95%">
			</a>
</h1>

> 🌈🐱Wondrous, tailor-made Pokémon themes for your Hyper terminal

 [![Build Status](https://travis-ci.org/klauscfhq/hyper-pokemon.svg?branch=master)](https://travis-ci.org/klauscfhq/hyper-pokemon) [![Dependency Status](https://dependencyci.com/github/klauscfhq/hyper-pokemon/badge)](https://dependencyci.com/github/klauscfhq/hyper-pokemon) [![Trello Board](https://img.shields.io/badge/trello-board-blue.svg)](https://trello.com/b/pg3NWkan) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/klauscfhq/hyper-pokemon) [![Latest version](https://badge.fury.io/gh/klauscfhq%2Fhyper-pokemon.svg)](https://github.com/klauscfhq/hyper-pokemon/releases) [![Repo Size](https://reposs.herokuapp.com/?path=klauscfhq/hyper-pokemon&color=orange)](https://raw.githubusercontent.com/klauscfhq/hyper-pokemon) [![npm](https://img.shields.io/npm/dm/hyper-pokemon.svg?label=DL)]() [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/klauscfhq/hyper-pokemon/master/license.md)

## Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Available Themes](#available-themes)
- [Showcase](#showcase)
- [Download](#download)
- [Related](#related)
- [Team](#team)
- [License](#license)

## Description

Made for Pokémon enthusiasts by Pokémon enthusiasts ❤

All of the wonderful Pokémon backgrounds were created by the amazing [Teej/TopHat](https://pldh.net/gallery/the493).

Inspired by the original [Pokemon-Terminal](https://github.com/LazoCoder/Pokemon-Terminal) project.

## Install

### Using the plugin manager - `hpm-cli`

Firstly, ensure you have [Hyper](https://github.com/zeit/hyper/releases) and [Node.js](https://nodejs.org) installed in your system.<br/>
Then simply do the `npm` dance to get `hpm-cli`

```bash
# fire up a terminal and type
$ npm install -g hpm-cli
```

Once done with that, it's time to install the `hyper-pokemon` theme!

```bash
# run the hyper plugin manager
$ hpm install hyper-pokemon
```

### Manually throught `.hyper.js`

Add `hyper-pokemon` to the plugins list in your `~/.hyper.js` config file and restart Hyper.
That's it!

```js
plugins: ['hyper-pokemon']
```

[:arrow_up:Back to top!](#contents)

## Usage

Once you have installed `hyper-pokemon`, it's time to set your favorite theme!

Go to your `~/.hyper.js` and add the `pokemon` and `pokemonSyntax` options below the `colors` object, and define your theme of choice!

Here is a quick example, where we choose the `pikachu` theme!

```js
config: {
    //...
    colors {
    //...
    },
    pokemon: 'pikachu', // Define your favorite pokemon theme!
    pokemonSyntax: 'light',
    // pokemonSyntax defines the color of the terminal tabs.
    // Choose `light` if your pokemon theme is of a more light color
    // or `dark` if you are going with a darker pokemon theme
    // We plan to completely automate this option, so it's just temporary :)
    //...
}
```

[:arrow_up:Back to top!](#contents)

## Available Themes

Here is a list of all the available Pokémon themes up to now!

- Pikachu ⚡
- Raichu ⚡
- Gengar 👻
- Vulpix 🔥

You can track the creation/progress of all themes on our [Trello board](https://trello.com/b/pg3NWkan)!<br/>
Come over and say hi!

[:arrow_up:Back to top!](#contents)

## Showcase

All available themes can be previewed on the project's [homepage](https://hyper-pokemon.github.io)! <br/>
Go on and take a peek 👀

<p align="center">
			<a href="https://github.com/klauscfhq/hyper-pokemon">
				<img src="https://cdn.rawgit.com/klauscfhq/hyper-pokemon/cb43900d/media/screens.png" alt="Hyper Pokemon" width="100%">
			</a>
</p>

[:arrow_up:Back to top!](#contents)

## Download

### Fork the project

```bash
# clone the repository
$ git clone https://github.com/klauscfhq/hyper-pokemon.git
# navigate to the project directory
$ cd hyper-pokemon
```

### Using `npm`

```bash
# get the package & set it as a dependency
$ npm install hyper-pokemon --save
# or set it as a devDependency
$ npm install hyper-pokemon --save-dev
# or even save it globaly
$ npm install hyper-pokemon --g
```

[:arrow_up:Back to top!](#contents)

## Related

Here is an awesome list where you can find other awesome Hyper themes & plugins!

- [Awesome-Hyper](https://github.com/bnb/awesome-hyper)

[:arrow_up:Back to top!](#contents)

## Team

Meet the Hyper Pokémon massive.<br/>
All of us are senior undergraduate students @ **ECE NTUA** studying all sorts of Software and Computer engineering.

[![Klaus Sinani](https://avatars.githubusercontent.com/u/12670537?s=130)](https://github.com/klauscfhq) | [![Leonidas Avdelas](https://avatars.githubusercontent.com/u/15968096?s=130)](https://github.com/LoniasGR) | [![George Baxopoulos](https://avatars.githubusercontent.com/u/19195396?s=130)](https://github.com/georgebax) | [![Konstantinos Mitropoulos](https://avatars.githubusercontent.com/u/24499401?s=130)](https://github.com/tsikos7) | [![Konstantinos Skouras](https://avatars.githubusercontent.com/u/15022446?s=130)](https://github.com/KonSkouras) | [![Panagiotis Bakos](https://avatars.githubusercontent.com/u/23611809?s=130)](https://github.com/pmpakos)
--- | --- | --- | --- | --- | ---
[Klaus Sinani](https://github.com/klauscfhq) [:mailbox:](mailto:klauscfhq@protonmail.com) | [Leonidas Avdelas](http://github.com/LoniasGR) [:mailbox:](mailto:avdelasleonidas@gmail.com) | [George Baxopoulos](http://github.com/georgebax) [:mailbox:](mailto:baxopoulos.george@gmail.com) | [Konstantinos Mitropoulos](https://github.com/tsikos7) [:mailbox:](mailto:konsmitr@gmail.com) | [Konstantinos Skouras](https://github.com/KonSkouras) [:mailbox:](mailto:konst.skouras@gmail.com) | [Panagiotis Bakos](https://github.com/pmpakos) [:mailbox:](mailto:pmpakos@hotmail.com)

[:arrow_up:Back to top!](#contents)

## License

[MIT](https://github.com/klauscfhq/hyper-pokemon/blob/master/license.md)

<div align="center">
	<br>
			<a href="https://github.com/klauscfhq/hyper-pokemon">
				<img src="https://cdn.rawgit.com/klauscfhq/hyper-pokemon/b589d665/media/logo.png" alt="Hyper Pokemon" width="45%">
			</a>
		<br>
	 <p><b> <> with ❤ by the Hyper Pokémon team </b></p>
	<br>
</div>
