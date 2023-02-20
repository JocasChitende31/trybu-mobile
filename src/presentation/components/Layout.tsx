import { Box, ScrollView, VStack } from "native-base"
import { ReactNode } from "react"
import { ImageBackground } from "react-native"

type LayoutPros = {
  children: ReactNode,
  backgroundWithLogo?: boolean
}

export function Layout ({ children }: LayoutPros) {
  return (
    <VStack flex={1} bg={'white'}>
      {children}
    </VStack>
  )
}


export function LayoutHeader ({ children }: LayoutPros) {
  return (
    <VStack>
      {children}
    </VStack>
  )
}

export function LayoutBody ({ children }: LayoutPros) {
  return (
    <ScrollView
      flex={1}
    >
      <Box p={5}>
        {children}
      </Box>
    </ScrollView>
  )
}


export function LayoutAuth ({ children, backgroundWithLogo = false }: LayoutPros) {
  let image
  if (backgroundWithLogo) {
    image = require(`../../../assets/splash.jpg`)
  } else {
    image = require(`../../../assets/fundo.jpg`)
  }
  return (
    <ImageBackground
      style={{
        width: '100%',
        flex: 1,
        justifyContent: 'center'
      }}
      source={image}
    >
      {children}
    </ImageBackground>
  )
}