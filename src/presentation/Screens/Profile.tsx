import { HStack, Text, VStack } from "native-base"
import { UserCircle, NotePencil, Envelope, Phone, WhatsappLogo } from "phosphor-react-native"
import { Pressable } from "react-native"
import { useNavigation } from '@react-navigation/native'

import { useAuth } from "../../hooks/useAuth"
import { StringUtils } from "../../utils/string-utils"
import { Layout, LayoutBody, LayoutHeader } from "../components/Layout"

export function Profile () {
  const { navigate } = useNavigation()
  const { user } = useAuth()
  return (
    <Layout >
      <LayoutBody>
        <HStack
          alignItems={'center'}
          justifyContent='center'
          borderBottomWidth={2}
          borderBottomColor='yellow.400'
          space={2}
        >
          <UserCircle size={60} />

          <Text fontSize={32}>{StringUtils.getFirstAndLastWord(user.name)}</Text>

          <Pressable onPress={() => navigate('editprofile')}>
            <NotePencil />
          </Pressable>
        </HStack>
        <VStack
          flex={1}
          space={2}
          pt={5}
          bg='white'
        >
          <HStack
            flexDir={'row'}
            space={2}
          >
            <Envelope />
            <Text fontSize={16}>Email: {user.email}</Text>
          </HStack>
          <HStack
            flexDir={'row'}
            space={2}
          >
            <Phone />
            <Text fontSize={16}>Telefone: {user.phone ?? 'Adicionar'}</Text>
          </HStack>
          <HStack
            flexDir={'row'}
            space={2}
          >
            <WhatsappLogo />
            <Text fontSize={16}>WhatsApp: {user.whatsapp ?? 'Não atribuido'}</Text>
          </HStack>
        </VStack>
      </LayoutBody>
    </Layout>
  )
}