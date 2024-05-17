import process from 'node:process'
import fs from 'fs-extra'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(
    fs.writeJSON(
      './themes/vitesse-dark.json',
      getTheme(),
      { spaces: 2 },
    ),
  ).catch(() => process.exit(1))
