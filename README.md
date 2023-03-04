<h1 align="center">draggable-mcs</h1>

<p align="center">
	<strong>The jQuery plugin that makes a div into a draggable object.</strong>
</p>

<p align="center">
	<a href="https://github.com/masonconsultancy/draggable-mcs/releases/latest" target="_blank">
		<img src="https://img.shields.io/github/release/masonconsultancy/draggable-mcs.svg" alt="Latest release">
	</a>
	<a href="https://www.npmjs.com/package/draggable-mcs" target="_blank">
		<img src="https://img.shields.io/npm/v/draggable-mcs.svg" alt="npm">
	</a>
	<br>
	<a href="https://github.com/masonconsultancy/draggable-mcs/blob/main/LICENSE" target="_blank">
		<img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License">
	</a>
</p>

## Demo

You can view a live demo and some examples of how to use the various options [here](https://mason-consultancy.com).

## Quick start

draggable-mcs requires jQuery v1.9.1+.

Several quick start options are available:

- Clone the repo: `git clone git@github.com:masonconsultancy/draggable-mcs.git`

```html

<!-- Latest compiled and minified JavaScript -->
Under contstruction!
```

## Usage

### Via JavaScript
```js
// To style only selected with the draggable class
$('.draggable').draggable();
```
or
```js
// To style all divs. Only divs with the class 'draggable' will be styled
$('div').draggable();
```

If calling draggable via JavaScript, you will need to wrap your code in a [`.ready()`](https://api.jquery.com/ready/) block or place it at the bottom of the page (after the last instance of draggable).

```js
$(function () {
	$('div.draggable').draggable();
});
```

## Bugs and feature requests

Anyone and everyone is welcome to contribute. **Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md)**. Make sure you're using the latest version of draggable before submitting an issue.

* [Bug reports](CONTRIBUTING.md#bug-reports)
* [Feature requests](CONTRIBUTING.md#feature-requests)

## Documentation

Draggable's documentation, included in this repo is still being completed.

## Copyright and license

Copyright (C) 2023 [Mason Consultancy Ltd](https://mason-consultancy.com)

Licensed under [the MIT license](LICENSE).
