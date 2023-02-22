import { Box, HStack, ScrollView, VStack } from "native-base"
import { CaretLeft, DotsThreeOutline } from "phosphor-react-native"
import { ReactNode } from "react"
import { useNavigation } from '@react-navigation/native'

import { ImageBackground } from "react-native"
import { ButtonIcon } from "./ButtonIcon"
import { LogoLG } from "./Logo"
import { IScreens } from "../../@types/screens"
import { MenuBar } from "./Menu"

type LayoutPros = {
  children: ReactNode,
  backgroundWithLogo?: boolean
  backTo?: IScreens
}

export function Layout ({ children, backTo }: LayoutPros) {
  const { navigate } = useNavigation()

  return (
    <VStack flex={1} bg={'white'} position='relative'>
      <VStack
        position={'relative'}
        justifyContent={'center'}
        alignItems={'center'}
        borderBottomColor='orange.100'
        borderBottomWidth={1}
        bg={'#E7DED7'}
        pt={10}
        pb={5}
      >
        {backTo &&
          <Box position={'absolute'} left={"3"} top={"12"}>
            <ButtonIcon icon={CaretLeft} onPress={() => navigate(backTo ?? 'home')} />
          </Box>
        }
        <Box
          position={'absolute'}
          right={4}
          bottom={0}
        >
          <DotsThreeOutline size={26} />
          <MenuBar />
        </Box>
        <LogoLG
          w={32}
          h={10}
        />
      </VStack>
      {children}


    </VStack>
  )
}


export function LayoutHeader ({ children }: LayoutPros) {
  return (
    <VStack px={5} py={2} shadow={"2"} bg={'white'}>
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
    image = require(`../../../assets/splash.png`)
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