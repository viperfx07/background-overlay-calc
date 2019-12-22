import tinycolor from 'tinycolor2'
export function getEndColorWithOverlay(bgColorString, overlayString) {
	const bgColor = tinycolor(bgColorString)
	const overlayColor = tinycolor(overlayString)

	const overlayOpacity = overlayColor.getAlpha()
	const overlayRgb = overlayColor.toRgb()
	const bgColorRgb = bgColor.toRgb()

	// target = opacity X overlay + (1 - opacity) x background

	const [overlayR, overlayG, overlayB] = Object.keys(overlayRgb).map(
		(k) => overlayRgb[k] * overlayOpacity
	)

	const [bgColorR, bgColorG, bgColorB] = Object.keys(bgColorRgb).map(
		(k) => bgColorRgb[k] * (1 - overlayOpacity)
	)

	return tinycolor({
		r: overlayR + bgColorR,
		g: overlayG + bgColorG,
		b: overlayB + bgColorB
	})
}
