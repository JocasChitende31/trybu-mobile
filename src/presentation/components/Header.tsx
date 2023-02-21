import { Text, HStack, Box, VStack } from 'native-base'
import { CaretLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import { ButtonIcon } from './ButtonIcon'
import { MenuBar } from './Menu'
import { IScreens } from '../../@types/screens'

interface Props {
  title?: string
  goTo?: IScreens
}

export function Header ({ title, goTo }: Props) {
  const { navigate } = useNavigation()

  return (
    <VStack
    >
      <HStack
        w="full"
        alignItems="center"
        space={2}
        // justifyContent="space-between"
        mb={1}
      >
        <ButtonIcon icon={CaretLeft} onPress={() => navigate(goTo ?? 'home')} />
        {
          title &&
          <Text color="gray.500" fontFamily="medium" fontSize="md" textAlign="center">
            {title}
          </Text>}
      </HStack>
      {/* <MenuBar /> */}
    </VStack >
  )
}