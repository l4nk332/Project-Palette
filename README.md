![Project-Palette Logo](/screenshots/Project-Palette-Logo.png?raw=true "Project-Palette")

---

Project-Palette is [here](https://project-palette.com/)!

## About

Project Palette is an open-source tool that allows you to easily audit the
colors used in a Github project.

This tool is meant to provide transparency for designers and developers to
help unify the color palette used across a product.

## Getting Started

Getting started is as simple as finding your project and clicking `Analyze`.

> If you can't find the project you're looking for you can also just paste
in a direct link from Github.

## Palette View

The palette view provides a visual overview of all the colors Project-Palette
was able to find across the project.

You can **search**, **filter**, and **sort** these colors as necessary and
click on a swatch when you would like to see details of where it is being used.

## Palette Report

The report view provides some additional information about the group of colors
matched against.

The colors are also listed below with the aggregated usage count attached to them.

## Color Usage

When a color is selected in either the palette or report views you will be a
list of line locations where that color is being used.

Each link will open a new tab, showing you the exact line of code where
that color value is applied.

> You can either use the arrow icons or the arrow keys on your keyboard to
quickly jump between the next / previous colors in line. Clicking the `X`
or hitting the `ESC` key will close the detail view.

## Exporting

You can export the parsed palette for your project in one of two formats:

- JSON
- SVG

The `SVG` format can prove useful when needing to pull the colors into
design software like Sketch or Figma.

## Built With

This project was built with the following:

* [Firebase](https://firebase.google.com/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [TinyColor](https://github.com/bgrins/TinyColor)
