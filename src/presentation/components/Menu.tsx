import { useState } from 'react';
import { Pressable, Text, Menu, Box, NativeBaseProvider, Center } from "native-base";
import { SignOut, UserCircle } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { useAuth } from '../../hooks/useAuth';
import { InterfacePressableProps } from 'native-base/lib/typescript/components/primitives/Pressable/types';

import { ModalAlert } from './Modal';
import { StringUtils } from '../../utils/string-utils';

export function MenuBar () {
  const { user, signOut } = useAuth()
  const [openModal, setOpenModal] = useState(false)
  const { navigate } = useNavigation()

  const menuTrigger = (triggerProps: InterfacePressableProps) => {
    return (
      <Pressable
        accessibilityLabel="More options menu" {...triggerProps}
      // pr={2}
      >
        {/* <Text
          color={'gray.600'}
          borderColor='gray.500'
          borderWidth={1}
          borderRadius={100}
          justifyContent='center'
          textAlign={'center'}
          h={6}
          w={6}
        >
          {StringUtils.getAvatarName(user.name)}
        </Text> */}
        <UserCircle size={32} />
      </Pressable >
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
        onConfirme={() => signOut('Sessão terminada.')}
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
              <Menu.Item onPress={() => navigate('profile')}>
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