# TypeScript Wine Data Statistics

A TypeScript React dashboard that groups wine records by class and compares class-wise Flavanoids and derived Gamma statistics.

![TypeScript Wine Data Statistics preview](screenshot.png)

## Features

- Typed wine records grouped by the dataset's class label
- Mean, median and mode calculations for two measures
- Gamma is calculated per record as `(Ash × Hue) ÷ Magnesium`
- Responsive comparison tables with dataset summary cards
- Fixed responsive header, mobile navigation and go-to-top control
- Local branding, accessible links and simple border and shadow interactions

## Tech stack

React, TypeScript, Create React App, Sass modules and React Icons.

## Data and calculations

The bundled 178 wine records follow the [UCI Wine recognition dataset](https://archive.ics.uci.edu/dataset/109/wine). The data file is normalized to the dataset's field names before calculations; the class label is kept separately from the Alcohol measurement. Proline is omitted because the dashboard does not use it. The tables show the mean, median and mode of Flavanoids and per-record Gamma for each class.

## Run locally

    npm ci
    npm start

Create a production build with npm run build.

## Deployment

Live demo: [a2rp.github.io/manufac-typescript-react-winedata-stats](https://a2rp.github.io/manufac-typescript-react-winedata-stats/)

## Future improvements

The dashboard can be extended with filters, charts and downloadable summary data.

## Links

- Portfolio: [https://www.ashishranjan.net](https://www.ashishranjan.net)
- GitHub: [https://github.com/a2rp](https://github.com/a2rp)
- CodePen: [https://codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [https://www.linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [https://www.facebook.com/theash.ashish/](https://www.facebook.com/theash.ashish/)
- YouTube: [https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- Support: [https://a2rp-donation-page.netlify.app/](https://a2rp-donation-page.netlify.app/)
- Buy Me a Coffee: [https://buymeacoffee.com/a2rp](https://buymeacoffee.com/a2rp)
- Patreon: [https://patreon.com/a2rp](https://patreon.com/a2rp)
