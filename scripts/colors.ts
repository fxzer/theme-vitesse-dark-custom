import c from 'chroma-js'

function generateByBase(base) {
  const darkens = Array.from({ length: 5 }).map((_, i) => c(base).darken(i + 1).hex())
  const lightens = Array.from({ length: 4 }).map((_, i) => c(base).brighten(4 - i).hex())
  // 从亮到暗
  return [...lightens, base, ...darkens]
}
export function opacity(color: string, alpha: number) {
  return c(color).alpha(alpha).hex()
}

const baseColors = {
  white: '#fff',
  gray: '#959da5',
  blue: '#2188ff',
  green: '#34d058',
  yellow: '#ffdf5d',
  orange: '#fb8532',
  red: '#ea4a5a',
  purple: '#8a63d2',
  pink: '#ec6cb9',
}

export const VitesseDarkThemes = {
  primary: '#4d9375',
  foreground: '#dbd7caee',
  activeForeground: '#bfbaaa',
  secondaryForeground: '#dedcd590',
  ignored: '#dedcd550',
  faded: '#dedcd510',
  border: '#1e1e1e',
  background: '#121212',
  activeBackground: '#181818',
  lowBackground: '#222',
  lowActiveBackground: '#292929',
  lowBorder: '#252525',
  comment: '#758575dd',
  string: '#c98a7de3',
  variable: '#bd976a',
  keyword: '#4d9375',
  number: '#4C9A91',
  boolean: '#4d9375',
  operator: '#cb7676',
  function: '#80a665',
  constant: '#c99076',
  class: '#7f8ac7',
  interface: '#5d99a9',
  type: '#5DA994',
  builtin: '#cb7676',
  property: '#b8a965',
  namespace: '#db889a',
  punctuation: '#666666',
  decorator: '#bd8f8f',
  regex: '#c4704f',
  green: '#4d9375',
  cyan: '#5eaab5',
  blue: '#6394bf',
  red: '#cb7676',
  orange: '#d4976c',
  yellow: '#e6cc77',
  magenta: '#d9739f',
}

export const colors = Object.entries(baseColors).reduce((acc, [key, value]) => {
  acc[key] = generateByBase(value)
  return acc
}, {}) as Record<keyof typeof baseColors, string[]>

export function pick(key: keyof typeof VitesseDarkThemes) {
  return VitesseDarkThemes[key]
}
