import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#fcfcfc', 'black')(props)
    },
  })
}

const components = {
    // ...
}

const fonts = {
    global : '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto'
};

const colors = {
    light: '#fcfcfc',
    dark: '#232323'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme
