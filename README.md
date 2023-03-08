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

-[Download the latest release.](https://github.com/masonconsultancy/draggable-mcs/releases/latest)
- Clone the repo: `git clone git@github.com:masonconsultancy/draggable-mcs.git`
- Install with [npm](https://www.npmjs.com/package/draggable-mcs): `npm install draggable-mcs`

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
### Non Bootstrap Example

```html
<div style="border:1px solid; width: 400px; height:400px;" class="draggable">
  <div style=" border: 1px solid; background-color:aliceblue; padding:10px" class="draggable-header">Featured</div>
  <div style="min-width:auto">
	<h2>Special title treatment</h2>
    <p>With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
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
