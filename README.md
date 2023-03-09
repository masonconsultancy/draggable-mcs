<h1 align="center">draggable-mcs</h1>

<p align="center">
	<strong>The jQuery plugin that makes a div into a draggable object.</strong>
</p>

<p align="center">
	<a href="https://github.com/masonconsultancy/draggable-mcs/releases/latest" target="_blank">
		<img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/masonconsultancy/draggable-mcs?style=for-the-badge">
	</a>
	<a href="https://www.npmjs.com/package/draggable-mcs" target="_blank">
		<img alt="npm" src="https://img.shields.io/npm/v/draggable-mcs?style=for-the-badge">
	</a>
	<br>
	<a href="https://github.com/masonconsultancy/draggable-mcs/blob/main/LICENSE" target="_blank">
		<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=for-the-badge">
	</a>
</p>

## Quick start

draggable-mcs requires jQuery v1.9.1+.

Several quick start options are available:

### Download
[Download the latest release.](https://github.com/masonconsultancy/draggable-mcs/releases/latest)

### Clone the Repository
Clone the repo: `git clone git@github.com:masonconsultancy/draggable-mcs.git`

### Npmjs
Install with [npm](https://www.npmjs.com/package/draggable-mcs): `npm install draggable-mcs`

### Libman Library Manager

Add this to the libman.json file to include draggable-mcs in your root folder

```js
{
  "provider": "jsdelivr",
  "library": "draggable-mcs@1.0.14",
  "destination": "wwwroot/lib/draggable-mcs/",
  "files": [
    "dist/css/draggable-mcs.css",
    "dist/css/draggable-mcs.css.map",
    "dist/css/draggable-mcs.min.css",
    "dist/js/draggable-mcs.js",
    "dist/js/draggable-mcs.js.map",
    "dist/js/draggable-mcs.min.js",
    "dist/js/draggable-mcs.min.js.map"
  ]
}
```

You can replace the version number with latest, to get the latest version.

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

### Information

<p>It's important that the main div contains a class draggable and whatever you are using for the draggable handle is assigned a class draggable-header</p>

### Bootstrap 4.6 Example
```html
<div class="card text-center draggable">
    <div class="card-header draggable-header">Featured</div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
	  <a href="#" class="btn btn-primary">Go somewhere</a>
	</div>
  <div class="card-footer text-muted">2 days ago</div>
</div>
```
##Options

### Dock top left of the target element

```js
{
  .draggable({ position: { dock: '#jQuerytarget' } });
}
```
### Dock top left of the target element and move down 50

```js
{
  .draggable({ position: { dock: '#jQuerytarget', top: 50, left: 0 } });
}
```

### Dock relative to viewport (x=150, y=50)

```js
{
  .draggable({ position: { top: 50, left: 150 } });
}
```

### Change header target identifier

<p>Please note that this does not set the header with the css styles for the default target identifer '.draggable-header'</p>
<p>You will need to set your own css for this new header target.</p>

```js
{
  .draggable({ headerIdentifier: '#headerid' });
}
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
