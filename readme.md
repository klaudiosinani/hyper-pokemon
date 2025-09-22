<div align="center">
  <img src="media/logo.png" width="28%">
</div>

<h4 align="center">
  Hyper Pokemon
</h4>

<h4 align="center">
  Tailor-made Pokémon themes for your Hyper terminal
</h4>

<div align="center">
  <img src="media/screen.png" alt="Hyper Pokemon" width="99%">
</div>

<div align="center">
  <br>
  <sup><b>Sponsored by:</b></sup>
  <br>
  <a href="https://betterstack.com">
    <div>
      <img src="https://github.com/Seldaek/monolog/assets/183678/7de58ce0-2fa2-45c0-b3e8-e60cebb3c4cf" width="200" alt="Better Stack">
    </div>
    <sup>
      Spot, Resolve, and Prevent Downtime.
    </sup>
  </a>
</div>

## Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Options](#options)
- [Available Themes](#available-themes)
- [Related](#related)
- [Team](#team)
- [Sponsors](#sponsors)
- [License](#license)

## Description

Made for Pokémon enthusiasts by Pokémon enthusiasts.

All of the wonderful Pokémon backgrounds were created by the amazing [Teej/TopHat](https://pldh.net/gallery/the493), [MapleRose](https://twitter.com/PokeWalls) & [Ferretdayo](http://ferretdayo.github.io).

Visit the [contributing guidelines](https://github.com/klaudiosinani/hyper-pokemon/blob/master/contributing.md#translating-documentation) to learn more on how to translate this document into more languages.

## Install

### Hyper Store

Get the theme on the official [Hyper Store](https://hyper.is/store/hyper-pokemon).

### Using the plugin manager - `hyper`

Firstly, ensure you have [Hyper](https://github.com/zeit/hyper/releases) installed in your system.

Once done with that, install the `hyper-pokemon` theme.

```bash
# fire up a terminal and type 
$ hyper i hyper-pokemon
```

### Manually through `.hyper.js`

Add `hyper-pokemon` to the plugins list in your `~/.hyper.js` config file and restart Hyper.

```js
plugins: ['hyper-pokemon']
```

## Usage

Once you have installed `hyper-pokemon`, it's time to set your favorite theme.

Go to your `~/.hyper.js` and add the `pokemon` option below the `colors` object, and define your theme of choice.

Here is a quick example, where we choose the `gengar` ![](pokecursors/gengar.gif) theme, with a `unibody` color for the window header & dark terminal tabs.

```js
config: {
    //...
    colors: {
    //...
    },
    pokemon: 'gengar', // Choose your favorite pokemon theme
    unibody: 'true', // Choose the color of the window header
    poketab: 'false', // Deactivate your theme's poketab
    //...
}
```

![Gengar Example](media/example.png)

To get the exact same look, install Google's [`Roboto Mono`](https://fonts.google.com/specimen/Roboto+Mono) font as well as [`oh-my-zsh`](http://ohmyz.sh/) and choose [`pure`](https://github.com/sindresorhus/pure) as your zsh prompt.

## Options

### `pokemon`

Using this option you can choose your pokémon background along with it's tailor-made syntax color.

The assignable values are:

- `pokemon name` - choose any of the [available Pokémon themes](#available-themes) by defining the Pokémon name.<br/><br/>**i.e.** `pokemon: 'charizard'`, `pokemon: 'pikachu'`, `pokemon: 'blastoise'` **etc**<br/><br/>

- `random` - randomly selects a Pokémon theme from the **whole list** of available Pokémons, each time you fire up a new Hyper terminal session.<br/><br/>
**i.e.** `pokemon: 'random'`<br/><br/>

- `pokemon type` - randomly selects a Pokémon theme from only a **specific Pokémon type**, each time you fire up a new Hyper terminal session. You can view all available Pokémon types [here](#available-themes).<br/><br/>
**i.e.** `pokemon: 'fire'`, `pokemon: 'water'`, `pokemon: 'grass'` **etc**<br/><br/>

- `pokemon trainer` - randomly selects a Pokémon theme from only a **specific Pokémon Trainer's party**, each time you fire up a new Hyper terminal session. You can view all available Pokémon Trainer [here](#available-themes).<br/><br/>
**i.e.** `pokemon: 'ash'`, `pokemon: 'jessie'`, `pokemon: 'gary'`, `pokemon: 'erika'` **etc**<br/><br/>

- `pokemon party` - randomly selects a Pokémon theme/theme option from a **defined array** holding **custom multiple themes/theme options**, each time you fire up a new Hyper terminal session. Any from the available Pokémon **themes**, **types** & **trainers** can be chosen.<br/><br/>
**i.e.**
	- `pokemon: ['articuno', 'zapdos', 'moltres', 'mewtwo', 'mew']`
	- `pokemon: ['random', 'fire', 'water', 'grass', 'ash', 'pikachu']`
	- `pokemon: ['lance', 'brock', 'bruno', 'gary', 'legendary', 'dragonite']` **etc**<br/><br/>

### `unibody`

Choose whether or not you want the Hyper windows header color to be the same as the background pokémon theme.

The assignable values are:

- `unibody: 'true'` - choose it for a unibody color theme
- `unibody: 'false'` - go for it if you like your terminal more colorful

In addition, completely omitting the `unibody` option from your `.hyper.js` will have the same effect as defining it and setting it to `true`. (**Default value**)

![Unibody](media/unibody.png)

### `poketab`

Choose whether or not you want an animated `.gif` that matches your current pokemon theme, to accompany your active Hyper terminal tab.

The assignable values are:

- `poketab: 'true'` - enable your theme's poketab
- `poketab: 'false'` - disable your theme's poketab

Also, completely omitting the `poketab` option from your `.hyper.js` will have the same effect as defining it and setting it to `false`. (**Default value**)

<div align="center">
		<br/>
			<a href="">
				<img src="https://github.com/champloohq/hyper-pokemon/blob/master/media/poketab.gif" alt="Hyper Pokemon - Poketab" width="80%">
			</a>
		<br/>
		<br/>
</div>

## Available Themes

You can preview in detail all of the available themes [here](https://klaudiosinani.com/hyper-pokemon).

#### Pokémon Types

<details>
<summary>List of all available Pokémon Types.</summary>

<br/>

* `Legendary`
* `Starter`
* `Fire`
* `Water`
* `Grass`
* `Poison`
* `Flying`
* `Bug`
* `Electric`
* `Ground`
* `Fairy`
* `Normal`
* `Psychic`
* `Ghost`
* `Rock`
* `Ice`
* `Dragon`
* `Fighting`
* `Steel`

<br/>

</details><br/>

#### Pokémon Trainers

<details>
<summary>List of all available Pokémon Trainers.</summary>

<br/>

* `Ash`
* `Agatha`
* `Blaine`
* `Brock`
* `Bruno`
* `Erika`
* `Gary`
* `Giovanni`
* `James`
* `Jessie`
* `Koga`
* `Lance`
* `Lorelei`
* `Surge`
* `Misty`
* `Sabrina`

<br/>

</details><br/>

## Related

- [Hyperocean](https://github.com/klaudiosinani/hyperocean) - Deep oceanic blue Hyper theme. 
- [Hyper Star Wars](https://github.com/klaudiosinani/hyper-star-wars) - Star Wars themes for your Hyper terminal.
- [Pikachu Syntax](https://atom.io/packages/pikachu-syntax) - Pikachu Atom theme.
- [Itermocean](https://github.com/klaudiosinani/itermocean) - Deep oceanic blue iTerm theme.

## Team

- Klaudio Sinani [(@klaudiosinani)](https://github.com/klaudiosinani)
- Mario Sinani [(@mariosinani)](https://github.com/mariosinani)
- Gabriel Tibúrcio [(@tibuurcio)](https://github.com/tibuurcio)

## Sponsors

A big thank you to all the people and companies supporting our Open Source work:

- [Better Stack: Spot, Resolve, and Prevent Downtime.](https://betterstack.com/)

## License

[MIT](https://github.com/klaudiosinani/hyper-pokemon/blob/master/license.md)
