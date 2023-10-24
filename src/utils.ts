// 辅助函数：将颜色值转换为 [r, g, b] 数组形式
export function hexToRgb(color: string) {
  const matchedValues = color.match(/[A-Za-z0-9]{2}/g)
  return matchedValues!.map(value => Number.parseInt(value, 16))
}

// 辅助函数：将 [r, g, b] 数组形式的颜色值转换为 16 进制表示形式
export function rgbToHex(rgb: number[]) {
  return `#${rgb.map(value => value.toString(16).padStart(2, '0')).join('')}`
}

/**
 * @description 加深颜色值
 * @param {string} color 颜色值字符串
 * @param {number} level 加深的程度，限0-1之间
 * @returns {string} 返回处理后的颜色值
 */
export function darken(color: string, level: number) {
  const rgb = hexToRgb(color)
  for (let i = 0; i < 3; i++) rgb[i] = Math.round(20.5 * level + rgb[i] * (1 - level))
  return rgbToHex(rgb)
}

/**
 * @description 变浅颜色值
 * @param {string} color 颜色值字符串
 * @param {number} level 加深的程度，限0-1之间
 * @returns {string} 返回处理后的颜色值
 */
export function lighten(color: string, level: number) {
  const rgb = hexToRgb(color)
  for (let i = 0; i < 3; i++) rgb[i] = Math.round(255 * level + rgb[i] * (1 - level))
  return rgbToHex(rgb)
}
