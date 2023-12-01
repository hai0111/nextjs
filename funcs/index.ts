export const limitInRange = (
	min: number,
	value: number,
	max: number
): number => {
	return Math.min(max, Math.max(min, value))
}

export const getActiveChild = (
	el: HTMLElement,
	amountChilds?: number
): number => {
	const { clientHeight, childNodes } = el
	amountChilds = amountChilds || childNodes.length
	const halfH = window.innerHeight / 2
	const { y: posY } = el.getBoundingClientRect()
	const percentY = (-posY + halfH) / clientHeight
	const activeTitle = limitInRange(
		0,
		Math.floor(percentY * amountChilds),
		amountChilds - 1
	)
	return activeTitle
}

export const getActiveChildAndMore = <T>(
	el: HTMLElement,
	fn: (percentY: number) => T,
	amountChilds?: number
) => {
	const { clientHeight, childNodes } = el
	amountChilds = amountChilds || childNodes.length
	const halfH = window.innerHeight / 2
	const { y: posY } = el.getBoundingClientRect()
	const percentY = (-posY + halfH) / clientHeight
	const activeTitle = limitInRange(
		0,
		Math.floor(percentY * amountChilds),
		amountChilds - 1
	)
	return { active: activeTitle, additional: fn(percentY) }
}
