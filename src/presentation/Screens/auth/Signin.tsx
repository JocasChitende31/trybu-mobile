import { Box, HStack, Icon, Pressable, Text, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { LogoLG } from '../../components/Logo'
import { useAuth } from '../../../hooks/useAuth'
import { LayoutAuth, LayoutBody } from '../../components/Layout'
import { Key, SignIn } from 'phosphor-react-native'
import { AuthTitle } from '../../components/AuthTitle'

export function Signin () {
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
          <SignIn />
          <Text
            color="orange.900"
            textAlign="center"
            fontSize={'2xl'}
          >
            Login
          </Text>
        </AuthTitle>

        <VStack
          w='full'
          space={4}
        >
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
          <Input
            mode='dark'
            nolabel
            type='password'
            placeholder='Palavra passe'
            onChangeText={
              (text: string) => {
                handleChangeInput('password', text)
              }
            }
            value={formDataSignin.password || ''}
          />
          <Button
            title='ENTRAR'
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
            onPress={() => navigate('passwordrecover')}
            flexDir='row'
            justifyContent='center'
          >
            <Key color='#ECB44A' size={15} />
            <Text color={'yellow.400'} ml={2} textTransform='uppercase'
              fontFamily='medium'
            >
              Recuperar a palavra passe
            </Text>
          </Pressable>

          <HStack space={2} alignItems='center' justifyContent='center'>
            <Text color={'white'} textTransform='uppercase'>
              Entre com uma rede social
            </Text>
          </HStack>

          <HStack
            space={2}
            justifyContent='space-between'
            px={10}
          >
            <Pressable>
              <Icon
                as={MaterialIcons}
                name='facebook'
                color={'gray.200'}
                size={'3xl'}
              />
            </Pressable>
            <Pressable>
              <Icon
                as={FontAwesome}
                name='google'
                color={'gray.200'}
                size={'3xl'}
              />
            </Pressable>
            <Pressable>
              <Icon
                as={FontAwesome}
                name='apple'
                color={'gray.200'}
                size={'3xl'}
              />
            </Pressable>
          </HStack>

          <HStack space={2} alignItems='center' justifyContent='center'>
            <Text color={'white'}
              fontFamily='medium'
            >
              Deseja criar uma conta trybu? Clique
            </Text>
            <Pressable
              onPress={() => {
                navigate('signup')
              }}>
              <Text color={'yellow.400'} fontSize={18}
                fontFamily='heading'
              >
                aqui
              </Text>
            </Pressable>
          </HStack>
        </VStack>
      </LayoutBody>
    </LayoutAuth>

  )
}