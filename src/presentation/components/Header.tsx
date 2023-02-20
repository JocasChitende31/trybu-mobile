import { Text, HStack, Box, VStack } from 'native-base'
import { CaretLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import { ButtonIcon } from './ButtonIcon'
import { useAuth } from '../../hooks/useAuth'
import { MenuBar } from './Menu'
import { IScreens } from '../../@types/screens'
import { LogoLG } from './Logo'

interface Props {
  title: string
  showBackButton?: boolean
  goTo?: IScreens
}

export function Header ({ title, showBackButton = false, goTo }: Props) {
  const { navigate } = useNavigation()
  const { signOut } = useAuth()
  const EmptyBoxSpace = () => (<Box w={6} h={6} />)

  return (
    <VStack w="full"
      bgColor="orange.50"
      alignItems="flex-end"
      position='relative'
      pt={4}
    >
      <HStack
        justifyContent={'center'}
        w={'full'}
        alignItems={'center'}
        borderBottomColor='orange.100'
        borderBottomWidth={1}
        p={2}
      >
        <LogoLG
          w={32}
          h={10}
        />
      </HStack>
      <HStack
        w="full"
        alignItems="center"
        justifyContent="space-between"
        p={2}
        bg='gray.100'
        mb={1}
      >
        {
          showBackButton
            ? <ButtonIcon icon={CaretLeft} onPress={() => navigate(goTo ?? 'home')} />
            : <EmptyBoxSpace />
        }
        <Text color="gray.500" fontFamily="medium" fontSize="md" textAlign="center">
          {title}
        </Text>

        {

          <EmptyBoxSpace />
        }
      </HStack>
      <MenuBar />
    </VStack >
  )
}