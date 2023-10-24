import { promises as fs } from 'node:fs'
import process from 'node:process'
import getTheme from './theme'

const fileList = [
  {
    file: './themes/vitesse-dark-custom.json',
    theme: {
      style: 'dark',
      name: 'Vitesse Dark Custom',
    },
  },
]

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all(fileList.map(({ file, theme }) => fs.writeFile(
    file,
    `${JSON.stringify(getTheme(theme), null, 2)}\n`,
  ))))
  .catch(() => process.exit(1))
