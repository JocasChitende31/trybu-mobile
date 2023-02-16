import { Center, HStack, Pressable, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { LogoLG } from '../../components/Logo'
import { useAuth } from '../../../hooks/useAuth'


export function RecoverPassword () {
  const { signIn, userIsLoading, formDataSignin, setFormDataSignin } = useAuth()

  const { navigate } = useNavigation()

  const handleChangeInput = (name: string, text: string) => {
    setFormDataSignin({ ...formDataSignin, [name]: text })
  }


  return (
    <Center flex={1} p={5} alignItems="center">
      <LogoLG />
      <Text
        color="white"
        textAlign="center"
        fontSize={'md'}
        my={4}
      >
        Digite as sua credenciais para aceder o sistema
      </Text>

      <Input
        type='text'
        placeholder='E-mail ou telefone'
        onChangeText={
          (text: string) => {
            handleChangeInput('email', text)
          }
        }
        value={formDataSignin.email || ''}
      />
      <Pressable>
        <Text color={'white'} textTransform='uppercase' mt={2}>
          Recuperar a palavra passe
        </Text>
      </Pressable>

      <HStack space={2} alignItems='center'>
        <Text color={'white'} textTransform='uppercase' mt={2}>
          Ainda não possui uma conta?
        </Text>
        <Pressable onPress={() => navigate('signup')}>
          <Text color={'yellow.200'}>Regista-te</Text>
        </Pressable>
      </HStack>
      <Button
        title='ENTRAR'
        mt={5}
        onPress={signIn}
        isLoading={userIsLoading}
        _loading={{ _spinner: { color: 'white' } }}
      />
    </Center>
  )
}