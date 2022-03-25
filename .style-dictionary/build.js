const StyleDictionary = require('style-dictionary').extend('.style-dictionary/config.json')
const tinycolor = require('tinycolor2')

const colors = { ...StyleDictionary.properties.color }
const colorsAsArray = Object.entries(colors)

/*
 * Add a R G B variant for each color.
 * For example for --color-primary: #fff;
 * --color-primary-rgb: 255 255 255; will be added.
 * So it can be used with rgb(var(--color-primary-rgb) / 50%) to add opacity.
 */
colorsAsArray.forEach(([key, prop]) => {
  const rgb = tinycolor(prop.value).toRgb()

  colors[`${key}-rgb`] = {
    ...prop,
    value: `${rgb.r} ${rgb.g} ${rgb.b}`,
    type: 'size'
  }
})

/* replace the original color properties with the added variants. */
StyleDictionary.properties.color = colors

/*
 * build our dictionary for all platforms as specified in the config
 * this is the equivalent of: style-dictionary build
 * when using the CLI
 */
StyleDictionary.buildAllPlatforms()
