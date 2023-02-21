import { Center, HStack, Pressable, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { LogoLG } from '../../components/Logo'
import { useAuth } from '../../../hooks/useAuth'
import { LayoutAuth } from '../../components/Layout'


export function PasswordRecover () {
  const { navigate } = useNavigation()
  const { signIn, userIsLoading, formDataSignin, setFormDataSignin } = useAuth()

  const handleChangeInput = (name: string, text: string) => {
    setFormDataSignin({ ...formDataSignin, [name]: text })
  }

  return (
    <LayoutAuth>
      <Center flex={1} p={5} alignItems="center">
        <LogoLG />
        <Text
          color="white"
          textAlign="center"
          fontSize={'2xl'}
          my={4}
        >
          Iniciar sessão
        </Text>

        <Input
          mode='dark'
          nolabel
          w={'full'}
          type='text'
          placeholder='E-mail ou telefone'
          onChangeText={
            (text: string) => {
              handleChangeInput('email', text)
            }
          }
          value={formDataSignin.email || ''}
        />
        <HStack space={2} alignItems='center'>
          <Text color={'white'} textTransform='uppercase' mt={2}>
            Ainda não possui uma conta?
          </Text>
          <Pressable onPress={() => {
            navigate('signin')
          }}>
            <Text color={'red.200'}>Regista-te</Text>
          </Pressable>
        </HStack>
        <Button
          title='ENTRAR'
          type='PRIMARY'
          mt={5}
          onPress={signIn}
          isLoading={userIsLoading}
          _loading={{ _spinner: { color: 'white' } }}
        />
      </Center>
    </LayoutAuth>

  )
}