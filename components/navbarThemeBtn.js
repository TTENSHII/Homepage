import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const Navbarbutton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}>
        <IconButton variant='outline' colorScheme={useColorModeValue(undefined, undefined)}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)} color={useColorModeValue('grey', 'grey')}
          onClick={toggleColorMode} _hover={{ color: useColorModeValue('black', 'white') }} />
      </motion.div>
    </AnimatePresence>
  )
}

export default Navbarbutton
