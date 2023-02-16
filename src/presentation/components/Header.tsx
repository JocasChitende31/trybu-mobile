import { Text, HStack, Box } from 'native-base'
import { CaretLeft, Export } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import { ButtonIcon } from './ButtonIcon'
import { useAuth } from '../../hooks/useAuth'
import { MenuBar } from './Menu'

interface Props {
  title: string
  showBackButton?: boolean
}

export function Header ({ title, showBackButton = false }: Props) {
  const { navigate } = useNavigation()
  const { signOut } = useAuth()
  const EmptyBoxSpace = () => (<Box w={6} h={6} />)

  return (
    <HStack w="full" h={24} bgColor="gray.800" alignItems="flex-end" pb={5} px={5} position='relative'>
      <HStack w="full" alignItems="center" justifyContent="space-between">
        {
          showBackButton
            ? <ButtonIcon icon={CaretLeft} onPress={() => navigate('home')} />
            : <EmptyBoxSpace />
        }
        <Text color="white" fontFamily="medium" fontSize="md" textAlign="center">
          {title}
        </Text>

        {

          <EmptyBoxSpace />
        }
      </HStack>
      <MenuBar />
    </HStack >
  )
}