import { useState } from 'react'
import { Pressable, Text, Menu, Box, NativeBaseProvider, Center, Avatar, Tooltip } from "native-base"
import { SignOut } from 'phosphor-react-native'
import { useAuth } from '../../hooks/useAuth'
import { InterfacePressableProps } from 'native-base/lib/typescript/components/primitives/Pressable/types'

import { ModalAlert } from './Modal'
import { StringUtils } from '../../utils/string-utils'

export function MenuBar () {
  const { user, signOut } = useAuth()
  const [openModal, setOpenModal] = useState(false)

  const menuTrigger = (triggerProps: InterfacePressableProps) => {
    return (
      <Pressable
        accessibilityLabel="More options menu" {...triggerProps}
        w={5}
        h={5}
      >
        <Text color={'yellow.400'}>
          {StringUtils.getAvatarName(user.name)}
        </Text>
      </Pressable>
    )
  }

  const handleConfirmSignout = () => {
    setOpenModal(true)
  }

  return (
    <>
      <ModalAlert
        title='Terminar sessão'
        text='Deseja realmente terminar a sessão?'
        onConfirme={signOut}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      <NativeBaseProvider>
        <Center flex={1} px="3"
          position='absolute'
          bottom={2}
          right={-5}
        >
          <Box w="90%" alignItems="center">
            <Menu
              w="190"
              trigger={menuTrigger}
            >
              <Menu.Item>
                <Text>{user.name}</Text>
              </Menu.Item>
              <Menu.Item onPress={handleConfirmSignout}>
                <SignOut />
                <Text>Sair</Text>
              </Menu.Item>
            </Menu>
          </Box>

        </Center>
      </NativeBaseProvider>
    </>
  )
}