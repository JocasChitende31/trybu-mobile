import { Box, Pressable, Text, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { LogoLG } from '../../components/Logo'
import { useAuth } from '../../../hooks/useAuth'
import { LayoutAuth, LayoutBody } from '../../components/Layout'
import { ArrowLeft, Lock } from 'phosphor-react-native'
import { AuthTitle } from '../../components/AuthTitle'

export function PasswordRecover () {
  const { navigate } = useNavigation()
  const { signIn, userIsLoading, formDataSignin, setFormDataSignin } = useAuth()

  const handleChangeInput = (name: string, text: string) => {
    setFormDataSignin({ ...formDataSignin, [name]: text })
  }

  return (
    <LayoutAuth>
      <Box alignItems='center' mt={10}>
        <LogoLG />
      </Box>
      <LayoutBody>
        <AuthTitle>
          <Lock />
          <Text
            color="orange.900"
            textAlign="center"
            fontSize={'2xl'}
          >
            Recuperar a senha
          </Text>
        </AuthTitle>

        <VStack
          w='full'
          space={4}
          justifyContent='center'
        >
          <Text
            textAlign='center'
            color='gray.600'
            fontFamily='medium'
            fontSize={16}
          >Digite o seu email para recuperar a sua conta.</Text>
          <Input
            mode='dark'
            nolabel
            type='text'
            placeholder='E-mail ou telefone'
            onChangeText={
              (text: string) => {
                handleChangeInput('email', text)
              }
            }
            value={formDataSignin.email || ''}
          />
          <Button
            title='Recuperar'
            type='PRIMARY'
            onPress={signIn}
            isLoading={userIsLoading}
            _loading={{ _spinner: { color: 'white' } }}
          />
        </VStack>

        <VStack
          space={3}
          mt={1}
        >
          <Pressable
            w='full'
            mt={2}
            py={2}
            alignItems='center'
            borderTopColor='yellow.500'
            borderTopWidth={0.5}
            borderBottomColor='yellow.500'
            borderBottomWidth={0.5}
            onPress={() => navigate('signin')}
            flexDir='row'
            justifyContent='center'
          >
            <ArrowLeft color='#ECB44A' />
            <Text
              ml={2}
              color={'yellow.300'}
              textTransform='uppercase'
              fontFamily='medium'
            >
              Voltar
            </Text>
          </Pressable>
        </VStack>
      </LayoutBody>
    </LayoutAuth>

  )
}