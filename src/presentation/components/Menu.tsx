import { useState } from 'react'
import { Pressable, Text, Menu, Box, NativeBaseProvider, Center, Avatar, Tooltip } from "native-base"
import { SignOut } from 'phosphor-react-native'
import { useAuth } from '../../hooks/useAuth'
import { InterfacePressableProps } from 'native-base/lib/typescript/components/primitives/Pressable/types'

import { ModalAlert } from './Modal'

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
          {user.name.split(' ')[0]}
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
                {/* <Avatar
                  _text={user.name}
                  w={8}
                  h={8}
                  rounded="full"
                  borderWidth={2}
                  borderColor="gray.800"
                >
                </Avatar> */}
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