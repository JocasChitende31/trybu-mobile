import { HStack, Text, VStack, Pressable } from "native-base";
import { useRoute } from '@react-navigation/native';
import { UserCircle, NotePencil, Envelope, Phone, WhatsappLogo } from "phosphor-react-native";
import { useNavigation } from '@react-navigation/native';

import { useAuth } from "../../../hooks/useAuth";
import { StringUtils } from "../../../utils/string-utils";
import { Layout, LayoutBody } from "../../components/Layout";
import { DateUtils } from "../../../utils/date-utils";
import { IUser } from "../../../@types/user";
import React from "react";

interface RouteParams {
  user: IUser
}

export function Profile () {
  const { navigate } = useNavigation()
  const { user: logeedUser } = useAuth()

  const route = useRoute()

  let user = (route.params as RouteParams)?.user

  if (!user) { user = logeedUser }

  return (
    <Layout >
      <LayoutBody>
        <HStack
          alignItems={'center'}
          // justifyContent='center'
          borderBottomWidth={2}
          borderBottomColor='yellow.400'
          space={2}
        >
          <UserCircle size={60} />

          <Text fontSize={32}>{StringUtils.getFirstAndLastWord(user.name)}</Text>
          {
            user.id === logeedUser.id &&
            <Pressable onPress={() => navigate('editprofile')}
              ml='auto'>
              <NotePencil />
            </Pressable>
          }
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