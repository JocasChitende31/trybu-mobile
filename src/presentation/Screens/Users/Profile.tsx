import { HStack, Text, VStack } from "native-base"
import { UserCircle, NotePencil, Envelope, Phone, WhatsappLogo } from "phosphor-react-native"
import { Pressable } from "react-native"
import { useNavigation } from '@react-navigation/native'

import { useAuth } from "../../../hooks/useAuth"
import { StringUtils } from "../../../utils/string-utils"
import { Layout, LayoutBody } from "../../components/Layout"
import { DateUtils } from "../../../utils/date-utils"

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
            space={2}
          >
            <Envelope />
            <Text fontSize={16} fontFamily='medium' color='gray.600'>Email: {user.email}</Text>
          </HStack>
          <HStack
            space={2}
          >
            <Phone />
            <Text fontSize={16} fontFamily='medium' color='gray.600'>Telefone: {user.phone ?? 'Adicionar'}</Text>
          </HStack>
          <HStack
            space={2}
          >
            <WhatsappLogo />
            <Text fontSize={16} fontFamily='medium' color='gray.600'>WhatsApp: {user.whatsapp ?? 'Não atribuido'}</Text>
          </HStack>

          <HStack>
            <Text fontFamily='medium' color='gray.600'>Membro desde {DateUtils.getDate(new Date(user.createdAt))}</Text>
          </HStack>
        </VStack>
      </LayoutBody>
    </Layout>
  )
}