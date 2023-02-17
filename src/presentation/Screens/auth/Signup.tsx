import { Center, HStack, Pressable, Text, VStack } from 'native-base'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { LogoLG } from '../../components/Logo'
import { useAuth } from '../../../hooks/useAuth'
import { useAuthPage } from '../../../hooks/useAuthPage'


export function Signup () {
  const { setPage } = useAuthPage()
  const { signUp, userIsLoading, formDataSignup, setFormDataSignup } = useAuth()

  const handleChangeInput = (name: string, text: string) => {
    setFormDataSignup({ ...formDataSignup, [name]: text })
  }

  const handleSignup = async () => {
    const signedUp = await signUp()
    if (signedUp) {
      setInterval(() => {
        setPage('signin')
      }, 1000)
    }
  }

  return (
    <Center flex={1} p={5} alignItems="center">
      <LogoLG />
      <Text
        color="white"
        textAlign="center"
        fontSize={'2xl'}
        my={4}
      >
        Regista-se
      </Text>

      <VStack alignItems={'center'} space={2}>
        <Input
          type='text'
          placeholder='Nome completo'
          onChangeText={
            (text: string) => {
              handleChangeInput('name', text)
            }
          }
          value={formDataSignup.name || ''}
        />
        <Input
          type='text'
          placeholder='Telefone'
          onChangeText={
            (text: string) => {
              handleChangeInput('phone', text)
            }
          }
          value={formDataSignup.phone || ''}
        />
        <Input
          type='text'
          placeholder='E-mail ou telefone'
          onChangeText={
            (text: string) => {
              handleChangeInput('email', text)
            }
          }
          value={formDataSignup.email || ''}
        />
        <Input
          type='password'
          placeholder='Palavra passe'
          onChangeText={
            (text: string) => {
              handleChangeInput('password', text)
            }
          }
          value={formDataSignup.password || ''}
        />
      </VStack>

      <HStack space={2} alignItems='center'>
        <Text color={'white'} textTransform='uppercase' mt={2}>
          Já possui uma conta?
        </Text>
        <Pressable onPress={() => setPage('signin')}>
          <Text color={'yellow.200'}>Inicie sessão</Text>
        </Pressable>
      </HStack>
      <Button
        title='CADASTRAR'
        type='PRIMARY'
        mt={5}
        onPress={handleSignup}
        isLoading={userIsLoading}
        _loading={{ _spinner: { color: 'white' } }}
      />
    </Center>
  )
}