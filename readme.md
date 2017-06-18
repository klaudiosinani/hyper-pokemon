<h1 align="center">
			<a href="https://github.com/klauscfhq/hyper-pokemon">
				<img src="https://cdn.rawgit.com/klauscfhq/hyper-pokemon/d45bcb77/media/screen.png" alt="Hyper Pokemon" width="95%">
			</a>
</h1>

> 🌈🐱Wondrous, tailor-made Pokémon themes for your Hyper terminal

 [![Build Status](https://travis-ci.org/hyper-pokemon/hyper-pokemon.svg?branch=master)](https://travis-ci.org/hyper-pokemon/hyper-pokemon) [![Dependency Status](https://dependencyci.com/github/hyper-pokemon/hyper-pokemon/badge)](https://dependencyci.com/github/hyper-pokemon/hyper-pokemon) [![Trello Board](https://img.shields.io/badge/trello-board-blue.svg)](https://trello.com/b/pg3NWkan) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/hyper-pokemon/Lobby) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/hyper-pokemon/hyper-pokemon) [![Latest version](https://badge.fury.io/gh/hyper-pokemon%2Fhyper-pokemon.svg)](https://github.com/hyper-pokemon/hyper-pokemon/releases) [![Repo Size](https://reposs.herokuapp.com/?path=hyper-pokemon/hyper-pokemon&color=orange)](https://raw.githubusercontent.com/hyper-pokemon/hyper-pokemon) [![npm](https://img.shields.io/npm/dm/hyper-pokemon.svg?label=DL)](https://github.com/hyper-pokemon/hyper-pokemon)

## Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Options](#options)
- [Available Themes](#available-themes)
- [Showcase](#showcase)
- [Download](#download)
- [Related](#related)
- [Team](#team)
- [License](#license)

## Description

Made for Pokémon enthusiasts by Pokémon enthusiasts ❤

Come over to our [Gitter](https://gitter.im/hyper-pokemon/Lobby) to share your thoughts on the project or to just say hi!

Track the creation/progress of all themes on our [Trello board](https://trello.com/b/pg3NWkan)!

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

### Manually through `.hyper.js`

Add `hyper-pokemon` to the plugins list in your `~/.hyper.js` config file and restart Hyper.
That's it!

```js
plugins: ['hyper-pokemon']
```

[:arrow_up:Back to top!](#contents)

## Usage

Once you have installed `hyper-pokemon`, it's time to set your favorite theme!

Go to your `~/.hyper.js` and add the `pokemon` and `pokemonSyntax` options below the `colors` object, and define your theme of choice!

Here is a quick example, where we choose the `gengar` theme, with a `unibody` color for the window header & dark terminal tabs! 👻

```js
config: {
    //...
    colors {
    //...
    },
    pokemon: 'gengar', // Define your favorite pokemon theme!
    pokemonSyntax: 'dark', // Define the color of the terminal tabs.
    unibody: 'true', // Define the color of the Hyper window header
}
```

![Gengar Example](media/example.png)

To get the exact same look as in this image, install [`oh-my-zsh`](http://ohmyz.sh/) and choose [`pure`](https://github.com/sindresorhus/pure) as your zsh prompt 🐱

[:arrow_up:Back to top!](#contents)

## Options

### `pokemon`

Using this option you can choose your pokémon background along with it's tailor-made syntax color.

### `pokemonSyntax`

Here you can define the color of the terminal tabs.

The assignable values are:

- `light` - choose it if your pokémon theme is of a more light color
- `dark` - go for it if you are going with a darker pokémon theme

![Pokemon Syntax](media/pokemon-syntax.png)

### `unibody`

Choose whether or not you want the Hyper windows header color to be the same as the background pokémon theme.

The assignable values are:

- `true` - choose it for a unibody color theme
- `false` - go for it if you like you window header colorful

In addition, completely omitting the `unibody` option from your `.hyper.js` will have the same effect as defining it and setting it to `true`.

![Unibody](media/unibody.png)

[:arrow_up:Back to top!](#contents)

## Available Themes

Here is a list, grouped by Pokémon regions, of all the available Pokémon themes up to now!

<details>
<summary>Kanto Region</summary>
List of Kanto region Pokémon themes :tada:

* Bulbasaur 🌱
* Ivysaur 🌱
* Venusaur 🌱
* Charmander 🔥
* Charmeleon 🔥
* Charizard 🔥
* Squirtle 🌊
* Wartortle 🌊
* Blastoise 🌊
* Metapod 🐛
* Kakuna 🐛
* Ekans 🐍
* Pikachu ⚡
* Raichu ⚡
* Sandshrew 🐭
* Clefable 🌟
* Vulpix 🔥
* Jigglypuff 🎤
* Alakazam 🍴
* Slowpoke 🌊
* Gengar 👻
* Ditto 🌟
* Kabutops ✂

</details>

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
- [Pure](https://github.com/sindresorhus/pure)

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
