<h1 align="center">
			<a href="https://github.com/klauscfhq/hyper-pokemon">
				<img src="https://cdn.rawgit.com/klauscfhq/hyper-pokemon/d45bcb77/media/screen.png" alt="Hyper Pokemon" width="95%">
			</a>
</h1>

> 🌈👾Wondrous, tailor-made Pokémon themes for your Hyper terminal

 [![Build Status](https://travis-ci.org/hyper-pokemon/hyper-pokemon.svg?branch=master)](https://travis-ci.org/hyper-pokemon/hyper-pokemon) [![Dependency Status](https://dependencyci.com/github/hyper-pokemon/hyper-pokemon/badge)](https://dependencyci.com/github/hyper-pokemon/hyper-pokemon) [![Trello Board](https://img.shields.io/badge/trello-board-blue.svg)](https://trello.com/b/pg3NWkan) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/hyper-pokemon/Lobby) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/hyper-pokemon/hyper-pokemon) [![Latest version](https://badge.fury.io/gh/hyper-pokemon%2Fhyper-pokemon.svg)](https://github.com/hyper-pokemon/hyper-pokemon/releases) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![npm](https://img.shields.io/npm/dm/hyper-pokemon.svg?label=DL)](https://github.com/hyper-pokemon/hyper-pokemon)

## Contents

- [Description](#description)
- [Poll - Choose the next Pokémon Region!](#poll---choose-the-next-pokémon-region)
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

All of the wonderful Pokémon backgrounds were created by the amazing [Teej/TopHat](https://pldh.net/gallery/the493)!

Come over to our [Gitter](https://gitter.im/hyper-pokemon/Lobby) chat or [Twitter](https://twitter.com/hyper_pokemon) account to share your thoughts on the project or to just say hi!

Track the creation/progress of all themes on our [Trello board](https://trello.com/b/pg3NWkan)!

Inspired by the original [Pokemon-Terminal](https://github.com/LazoCoder/Pokemon-Terminal) project.

## Poll - Choose the next Pokémon Region!

**Vote for the Pokémon Region you want to see themes from next!**<br/>
In essence, this poll will determine the creation order of all Pokémon Regions!<br/>
The poll will be kept alive until the project's completion, when all **600+** themes will be available! :tada:

Trainers make your choice!

[![](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BMH8W2ETBFXQ9H6PSS0X9VZ8/Johto)](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BMH8W2ETBFXQ9H6PSS0X9VZ8/Johto/vote)
[![](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BMH8W2ETBFXQ9H6PSS0X9VZ8/Hoenn)](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BMH8W2ETBFXQ9H6PSS0X9VZ8/Hoenn/vote)
[![](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BMH8W2ETBFXQ9H6PSS0X9VZ8/Sinnoh)](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BMH8W2ETBFXQ9H6PSS0X9VZ8/Sinnoh/vote)
[![](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BMH8W2ETBFXQ9H6PSS0X9VZ8/Unova)](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BMH8W2ETBFXQ9H6PSS0X9VZ8/Unova/vote)
[![](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BMH8W2ETBFXQ9H6PSS0X9VZ8/Kalos)](https://m131jyck4m.execute-api.us-west-2.amazonaws.com/prod/poll/01BMH8W2ETBFXQ9H6PSS0X9VZ8/Kalos/vote)

Poll powered by [tj/gh-polls](https://github.com/tj/gh-polls) ❤

[:arrow_up:Back to top!](#contents)

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

Here is a quick example, where we choose the `gengar` ![](media/pokecons/094.gif) theme, with a `unibody` color for the window header & dark terminal tabs!

```js
config: {
    //...
    colors: {
    //...
    },
    pokemon: 'gengar', // Define your favorite pokemon theme!
    pokemonSyntax: 'dark', // Define the color of the terminal tabs!
    unibody: 'true', // Define the color of the Hyper window header!
}
```

![Gengar Example](media/example.png)

To get the exact same look, install Google's [`Roboto Mono`](https://fonts.google.com/specimen/Roboto+Mono) font as well as [`oh-my-zsh`](http://ohmyz.sh/) and choose [`pure`](https://github.com/sindresorhus/pure) as your zsh prompt 🐱

[:arrow_up:Back to top!](#contents)

## Options

### `pokemon`

Using this option you can choose your pokémon background along with it's tailor-made syntax color.

The assignable values are:

- `pokemon name` - choose any of the [available Pokémon themes](#available-themes) by defining the Pokémon name.<br/><br/>**i.e.** `pokemon: 'charizard'`, `pokemon: 'pikachu'`, `pokemon: 'blastoise'` **etc**

- `random` - randomly selects a Pokémon theme from the **whole list** of available Pokémons, each time you fire up a new Hyper terminal session.<br/><br/>
**i.e.** `pokemon: 'random'`

- `pokemon type` - randomly selects a Pokémon theme from only a **specific Pokémon type**, each time you fire up a new Hyper terminal session.<br/><br/>
**i.e.** `pokemon: 'fire'`, `pokemon: 'water'`, `pokemon: 'grass'` **etc**<br/><br/>
The available choices up to this moment (*all types will be supported really soon*) are the following:

	- `fire`
	- `water`
	- `grass`
	- `poison`

### `pokemonSyntax`

Here you can define the color of the terminal tabs.

The assignable values are:

- `light` - choose it if your pokémon theme is of a more light color
- `dark` - go for it if you are using a darker pokémon theme

![Pokemon Syntax](media/pokemon-syntax.png)

### `unibody`

Choose whether or not you want the Hyper windows header color to be the same as the background pokémon theme.

The assignable values are:

- `true` - choose it for a unibody color theme
- `false` - go for it if you like your terminal more colorful

In addition, completely omitting the `unibody` option from your `.hyper.js` will have the same effect as defining it and setting it to `true`.

![Unibody](media/unibody.png)

[:arrow_up:Back to top!](#contents)

## Available Themes

Here is a list, grouped by Pokémon regions, of all the available Pokémon themes up to now!

<details>
<summary>Kanto Region</summary>

<br/>

> List of all Kanto region Pokémon themes :tada:

![](media/sprites/missingno.png) | ![](media/sprites/bulbasaur.png) | ![](media/sprites/ivysaur.png) | ![](media/sprites/venusaur.png) | ![](media/sprites/charmander.png) | ![](media/sprites/charmeleon.png) | ![](media/sprites/charizard.png) | ![](media/sprites/squirtle.png)
--- | --- | --- | --- | --- | --- | --
Missingno ![](media/pokecons/000.gif) | Bulbasaur ![](media/pokecons/001.gif) | Ivysaur ![](media/pokecons/002.gif) | Venusaur ![](media/pokecons/003.gif) | Charmander ![](media/pokecons/004.gif) | Charmeleon ![](media/pokecons/005.gif) | Charizard ![](media/pokecons/006.gif) | Squirtle ![](media/pokecons/007.gif)

![](media/sprites/wartortle.png) | ![](media/sprites/blastoise.png) | ![](media/sprites/caterpie.png) | ![](media/sprites/metapod.png) | ![](media/sprites/butterfree.png) | ![](media/sprites/weedle.png) | ![](media/sprites/kakuna.png) | ![](media/sprites/beedrill.png)
--- | --- | --- | --- | --- | --- | --
Wartortle ![](media/pokecons/008.gif) | Blastoise ![](media/pokecons/009.gif) | Caterpie ![](media/pokecons/010.gif) | Metapod ![](media/pokecons/011.gif) | Butterfree ![](media/pokecons/012.gif) | Weedle ![](media/pokecons/013.gif) | Kakuna ![](media/pokecons/014.gif) | Beedrill ![](media/pokecons/015.gif)

![](media/sprites/pidgey.png) | ![](media/sprites/pidgeotto.png) | ![](media/sprites/pidgeot.png) | ![](media/sprites/rattata.png) | ![](media/sprites/raticate.png) | ![](media/sprites/spearow.png) | ![](media/sprites/fearow.png) | ![](media/sprites/ekans.png)
--- | --- | --- | --- | --- | --- | --
Pidgey ![](media/pokecons/016.gif) | Pidgeotto ![](media/pokecons/017.gif) | Pidgeot ![](media/pokecons/018.gif) | Rattata ![](media/pokecons/019.gif) | Raticate ![](media/pokecons/020.gif) | Spearow ![](media/pokecons/021.gif) | Fearow ![](media/pokecons/022.gif) | Ekans ![](media/pokecons/023.gif)

![](media/sprites/arbok.png) | ![](media/sprites/pikachu.png) | ![](media/sprites/raichu.png) | ![](media/sprites/sandshrew.png) | ![](media/sprites/sandslash.png) | ![](media/sprites/nidoranf.png) | ![](media/sprites/nidorina.png) | ![](media/sprites/nidoqueen.png)
--- | --- | --- | --- | --- | --- | --
Arbok ![](media/pokecons/024.gif) | Pikachu ![](media/pokecons/025.gif) | Raichu ![](media/pokecons/026.gif) | Sandshrew ![](media/pokecons/027.gif) | Sandslash ![](media/pokecons/028.gif) | Nidoran-female ![](media/pokecons/029.gif) | Nidorina ![](media/pokecons/030.gif) | Nidoqueen ![](media/pokecons/031.gif)

![](media/sprites/nidoranm.png) | ![](media/sprites/nidorino.png) | ![](media/sprites/nidoking.png) | ![](media/sprites/clefairy.png) | ![](media/sprites/clefable.png) | ![](media/sprites/vulpix.png) | ![](media/sprites/ninetales.png) | ![](media/sprites/jigglypuff.png)
--- | --- | --- | --- | --- | --- | --
Nidoran-male ![](media/pokecons/032.gif) | Nidorino ![](media/pokecons/033.gif) | Nidoking ![](media/pokecons/034.gif) | Clefairy ![](media/pokecons/035.gif) | Clefable ![](media/pokecons/036.gif) | Vulpix ![](media/pokecons/037.gif) | Ninetales ![](media/pokecons/038.gif) | Jigglypuff ![](media/pokecons/039.gif)

![](media/sprites/wigglytuff.png) | ![](media/sprites/zubat.png) | ![](media/sprites/golbat.png) | ![](media/sprites/oddish.png) | ![](media/sprites/gloom.png) | ![](media/sprites/vileplume.png) | ![](media/sprites/paras.png) | ![](media/sprites/parasect.png)
--- | --- | --- | --- | --- | --- | --
Wigglytuff ![](media/pokecons/040.gif) | Zubat ![](media/pokecons/041.gif) | Golbat ![](media/pokecons/042.gif) | Oddish ![](media/pokecons/043.gif) | Gloom ![](media/pokecons/044.gif) | Vileplume ![](media/pokecons/045.gif) | Paras ![](media/pokecons/046.gif) | Parasect ![](media/pokecons/047.gif)

![](media/sprites/venonat.png) | ![](media/sprites/venomoth.png) | ![](media/sprites/diglett.png) | ![](media/sprites/dugtrio.png) | ![](media/sprites/meowth.png) | ![](media/sprites/persian.png) | ![](media/sprites/psyduck.png) | ![](media/sprites/golduck.png)
--- | --- | --- | --- | --- | --- | --
Venonat ![](media/pokecons/048.gif) | Venomoth ![](media/pokecons/049.gif) | Diglett ![](media/pokecons/050.gif) | Dugtrio ![](media/pokecons/051.gif) | Meowth ![](media/pokecons/052.gif) | Persian ![](media/pokecons/053.gif) | Psyduck ![](media/pokecons/054.gif) | olduck ![](media/pokecons/055.gif)

![](media/sprites/mankey.png) | ![](media/sprites/primeape.png) | ![](media/sprites/growlithe.png) | ![](media/sprites/arcanine.png) | ![](media/sprites/poliwag.png) | ![](media/sprites/poliwhirl.png) | ![](media/sprites/poliwrath.png) | ![](media/sprites/abra.png)
--- | --- | --- | --- | --- | --- | --
Mankey ![](media/pokecons/056.gif) | Primeape ![](media/pokecons/057.gif) | Growlithe ![](media/pokecons/058.gif) | Arcanine ![](media/pokecons/059.gif) | Poliwag ![](media/pokecons/060.gif) | Poliwhirl ![](media/pokecons/061.gif) | Poliwrath ![](media/pokecons/062.gif) | Abra ![](media/pokecons/063.gif)

![](media/sprites/kadabra.png) | ![](media/sprites/alakazam.png) | ![](media/sprites/machop.png) | ![](media/sprites/machoke.png) | ![](media/sprites/machamp.png) | ![](media/sprites/bellsprout.png) | ![](media/sprites/weepinbell.png) | ![](media/sprites/victreebel.png)
--- | --- | --- | --- | --- | --- | --
Kadabra ![](media/pokecons/064.gif) | Alakazam ![](media/pokecons/065.gif) | Machop ![](media/pokecons/066.gif) | Machoke ![](media/pokecons/067.gif) | Machamp ![](media/pokecons/068.gif) | Bellsprout ![](media/pokecons/069.gif) | Weepinbell ![](media/pokecons/070.gif) | Victreebel ![](media/pokecons/071.gif)

![](media/sprites/tentacool.png) | ![](media/sprites/tentacruel.png) | ![](media/sprites/geodude.png) | ![](media/sprites/graveler.png) | ![](media/sprites/golem.png) | ![](media/sprites/ponyta.png) | ![](media/sprites/rapidash.png) | ![](media/sprites/slowpoke.png)
--- | --- | --- | --- | --- | --- | --
Tentacool ![](media/pokecons/072.gif) | Tentacruel ![](media/pokecons/073.gif) | Geodude ![](media/pokecons/074.gif) | Graveler ![](media/pokecons/075.gif) | Golem ![](media/pokecons/076.gif) | Ponyta ![](media/pokecons/077.gif) | Rapidash ![](media/pokecons/078.gif) | Slowpoke ![](media/pokecons/079.gif)

![](media/sprites/slowbro.png) | ![](media/sprites/magnemite.png) | ![](media/sprites/magneton.png) | ![](media/sprites/farfetchd.png) | ![](media/sprites/doduo.png) | ![](media/sprites/dodrio.png) | ![](media/sprites/seel.png) | ![](media/sprites/dewgong.png)
--- | --- | --- | --- | --- | --- | --
Slowbro ![](media/pokecons/080.gif) | Magnemite ![](media/pokecons/081.gif) | Magneton ![](media/pokecons/082.gif) | Farfetchd ![](media/pokecons/083.gif) | Doduo ![](media/pokecons/084.gif) | Dodrio ![](media/pokecons/085.gif) | Seel ![](media/pokecons/086.gif) | Dewgong ![](media/pokecons/087.gif)

![](media/sprites/grimer.png) | ![](media/sprites/muk.png) | ![](media/sprites/shellder.png) | ![](media/sprites/cloyster.png) | ![](media/sprites/gastly.png) | ![](media/sprites/haunter.png) | ![](media/sprites/gengar.png) | ![](media/sprites/onix.png)
--- | --- | --- | --- | --- | --- | --
Grimer ![](media/pokecons/088.gif) | Muk ![](media/pokecons/089.gif) | Shellder ![](media/pokecons/090.gif) | Cloyster ![](media/pokecons/091.gif) | Gastly ![](media/pokecons/092.gif) | Haunter ![](media/pokecons/093.gif) | Gengar ![](media/pokecons/094.gif) | Onix ![](media/pokecons/095.gif)

![](media/sprites/drowzee.png) | ![](media/sprites/hypno.png) | ![](media/sprites/krabby.png) | ![](media/sprites/kingler.png) | ![](media/sprites/voltorb.png) | ![](media/sprites/electrode.png) | ![](media/sprites/exeggcute.png) | ![](media/sprites/exeggutor.png)
--- | --- | --- | --- | --- | --- | --
Drowzee ![](media/pokecons/096.gif) | Hypno ![](media/pokecons/097.gif) | Krabby ![](media/pokecons/098.gif) | Kingler ![](media/pokecons/099.gif) | Voltorb ![](media/pokecons/100.gif) | Electrode ![](media/pokecons/101.gif) | Exeggcute ![](media/pokecons/102.gif) | Exeggutor ![](media/pokecons/103.gif)

![](media/sprites/cubone.png) | ![](media/sprites/marowak.png) | ![](media/sprites/hitmonlee.png) | ![](media/sprites/hitmonchan.png) | ![](media/sprites/lickitung.png) | ![](media/sprites/koffing.png) | ![](media/sprites/weezing.png) | ![](media/sprites/rhyhorn.png)
--- | --- | --- | --- | --- | --- | --
Cubone ![](media/pokecons/104.gif) | Marowak ![](media/pokecons/105.gif) | Hitmonlee ![](media/pokecons/106.gif) | Hitmonchan ![](media/pokecons/107.gif) | Lickitung ![](media/pokecons/108.gif) | Koffing ![](media/pokecons/109.gif) | Weezing ![](media/pokecons/110.gif) | Rhyhorn ![](media/pokecons/111.gif)

![](media/sprites/rhydon.png) | ![](media/sprites/chansey.png) | ![](media/sprites/tangela.png) | ![](media/sprites/kangaskhan.png) | ![](media/sprites/horsea.png) | ![](media/sprites/seadra.png) | ![](media/sprites/goldeen.png) | ![](media/sprites/seaking.png)
--- | --- | --- | --- | --- | --- | --
Rhydon ![](media/pokecons/112.gif) | Chansey ![](media/pokecons/113.gif) | Tangela ![](media/pokecons/114.gif) | Kangaskhan ![](media/pokecons/115.gif) | Horsea ![](media/pokecons/116.gif) | Seadra ![](media/pokecons/117.gif) | Goldeen ![](media/pokecons/118.gif) | Seaking ![](media/pokecons/119.gif)

![](media/sprites/staryu.png) | ![](media/sprites/starmie.png) | ![](media/sprites/mrmime.png) | ![](media/sprites/scyther.png) | ![](media/sprites/jynx.png) | ![](media/sprites/electabuzz.png) | ![](media/sprites/magmar.png) | ![](media/sprites/pinsir.png)
--- | --- | --- | --- | --- | --- | --
Staryu ![](media/pokecons/120.gif) | Starmie ![](media/pokecons/121.gif) | Mr.Mime ![](media/pokecons/122.gif) | Scyther ![](media/pokecons/123.gif) | Jynx ![](media/pokecons/124.gif) | Electabuzz ![](media/pokecons/125.gif) | Magmar ![](media/pokecons/126.gif) | Pinsir ![](media/pokecons/127.gif)

![](media/sprites/tauros.png) | ![](media/sprites/magikarp.png) | ![](media/sprites/gyarados.png) | ![](media/sprites/lapras.png) | ![](media/sprites/ditto.png) | ![](media/sprites/eevee.png) | ![](media/sprites/vaporeon.png) | ![](media/sprites/jolteon.png)
--- | --- | --- | --- | --- | --- | --
Tauros ![](media/pokecons/128.gif) | Magikarp ![](media/pokecons/129.gif) | Gyarados ![](media/pokecons/130.gif) | Lapras ![](media/pokecons/131.gif) | Ditto ![](media/pokecons/132.gif) | Eevee ![](media/pokecons/133.gif) | Vaporeon ![](media/pokecons/134.gif) | Jolteon ![](media/pokecons/135.gif)

![](media/sprites/flareon.png) | ![](media/sprites/porygon.png) | ![](media/sprites/omanyte.png) | ![](media/sprites/omastar.png) | ![](media/sprites/kabuto.png) | ![](media/sprites/kabutops.png) | ![](media/sprites/aerodactyl.png) | ![](media/sprites/snorlax.png)
--- | --- | --- | --- | --- | --- | --
Flareon ![](media/pokecons/136.gif) | Porygon ![](media/pokecons/137.gif) | Omanyte ![](media/pokecons/138.gif) | Omastar ![](media/pokecons/139.gif) | Kabuto ![](media/pokecons/140.gif) | Kabutops ![](media/pokecons/141.gif) | Aerodactyl ![](media/pokecons/142.gif) | Snorlax ![](media/pokecons/143.gif)

![](media/sprites/articuno.png) | ![](media/sprites/zapdos.png) | ![](media/sprites/moltres.png) | ![](media/sprites/dratini.png) | ![](media/sprites/dragonair.png) | ![](media/sprites/dragonite.png) | ![](media/sprites/mewtwo.png) | ![](media/sprites/mew.png)
--- | --- | --- | --- | --- | --- | --
Articuno ![](media/pokecons/144.gif) | Zapdos ![](media/pokecons/145.gif) | Moltres ![](media/pokecons/146.gif) | Dratini ![](media/pokecons/147.gif) | Dragonair ![](media/pokecons/148.gif) | Dragonite ![](media/pokecons/149.gif) | Mewtwo ![](media/pokecons/150.gif) | Mew ![](media/pokecons/151.gif)

</details><br/>

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
# or even save it globally
$ npm install hyper-pokemon -g
```

[:arrow_up:Back to top!](#contents)

## Related

Here is an awesome list where you can find other awesome Hyper themes & plugins!

- [Awesome-Hyper](https://github.com/bnb/awesome-hyper)
- [Pure](https://github.com/sindresorhus/pure)

[:arrow_up:Back to top!](#contents)

## Team

Big up the Athens and London massive.<br/>

[![Leonidas Avdelas](https://avatars.githubusercontent.com/u/15968096?s=130)](https://github.com/LoniasGR) | [![Panagiotis Bakos](https://avatars.githubusercontent.com/u/23611809?s=130)](https://github.com/pmpakos) | [![George Baxopoulos](https://avatars.githubusercontent.com/u/19195396?s=130)](https://github.com/georgebax) | [![Thanasis Gkanos](https://avatars.githubusercontent.com/u/18072542?s=130)](https://github.com/ThanasisGkanos) | [![Konstantinos Mitropoulos](https://avatars.githubusercontent.com/u/24499401?s=130)](https://github.com/tsikos7) | [![Klaus Sinani](https://avatars.githubusercontent.com/u/12670537?s=130)](https://github.com/klauscfhq) | [![Mario Sinani](https://avatars.githubusercontent.com/u/29512262?s=130)](https://github.com/snowmancfhq) | [![Konstantinos Skouras](https://avatars.githubusercontent.com/u/15022446?s=130)](https://github.com/SkourasKonst)
--- | --- | --- | --- | --- | --- | --- | ---
[Leonidas Avdelas](https://github.com/LoniasGR) [:mailbox:](mailto:avdelasleonidas@gmail.com) | [Panagiotis Bakos](https://github.com/pmpakos) [:mailbox:](mailto:pmpakos@hotmail.com) | [George Baxopoulos](https://github.com/georgebax) [:mailbox:](mailto:baxopoulos.george@gmail.com) | [Thanasis Gkanos](https://github.com/ThanasisGkanos) [:mailbox:](mailto:athanasiosgkanos@hotmail.com) | [Konstantinos Mitropoulos](https://github.com/tsikos7) [:mailbox:](mailto:konsmitr@gmail.com) | [Klaus Sinani](https://github.com/klauscfhq) [:mailbox:](mailto:klauscfhq@protonmail.com) | [Mario Sinani](https://github.com/snowmancfhq) [:mailbox:](mailto:mariosinani@protonmail.ch) | [Konstantinos Skouras](https://github.com/SkourasKonst) [:mailbox:](mailto:konst.skouras@gmail.com)

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
