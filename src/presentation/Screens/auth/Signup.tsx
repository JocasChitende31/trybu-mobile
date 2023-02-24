import { Box, HStack, Pressable, Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { LogoLG } from '../../components/Logo';
import { useAuth } from '../../../hooks/useAuth';
import { LayoutAuth, LayoutBody } from '../../components/Layout';
import { AuthTitle } from '../../components/AuthTitle';
import { Note, NotePencil } from 'phosphor-react-native';
import React from 'react';


export function Signup () {
  const { navigate } = useNavigation()
  const { signUp, userIsLoading, formDataSignup, setFormDataSignup } = useAuth()

  const handleChangeInput = (name: string, text: string) => {
    setFormDataSignup({ ...formDataSignup, [name]: text })
  }

  const handleSignup = async () => {
    const signedUp = await signUp()
    if (signedUp) {
      setInterval(() => {
        navigate('signin')
      }, 1000)
    }
  }

  return (
    <LayoutAuth>
      <Box alignItems='center' mt={7}>
        <LogoLG />
      </Box>
      <LayoutBody>
        <AuthTitle>
          <NotePencil />
          <Text
            color="orange.900"
            textAlign="center"
            fontSize={'2xl'}
          >
            Regista-se
          </Text>
        </AuthTitle>

        <VStack alignItems={'center'} space={4}>
          <Input
            mode='dark'
            nolabel
            w={'full'}
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
            mode='dark'
            nolabel
            w={'full'}
            type='text'
            placeholder='E-mail'
            onChangeText={
              (text: string) => {
                handleChangeInput('email', text)
              }
            }
            value={formDataSignup.email || ''}
          />
          <HStack
            w='full'
            space={3}
          >
            <Input
              mode='dark'
              nolabel
              w={'48%'}
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
              mode='dark'
              nolabel
              w={'48%'}
              type='text'
              placeholder='WhatsApp'
              onChangeText={
                (text: string) => {
                  handleChangeInput('whatsapp', text)
                }
              }
              value={formDataSignup.whatsapp || ''}
            />
          </HStack>

          <HStack
            w='full'
            space={3}
          >
            <Input
              mode='dark'
              nolabel
              w={'48%'}
              type='password'
              placeholder='Senha'
              onChangeText={
                (text: string) => {
                  handleChangeInput('password', text)
                }
              }
              value={formDataSignup.password || ''}
            />
            <Input
              mode='dark'
              nolabel
              w={'48%'}
              type='password'
              placeholder='Confirme a senha'
              onChangeText={
                (text: string) => {
                  handleChangeInput('password_confirmation', text)
                }
              }
              value={formDataSignup.password_confirmation || ''}
            />
          </HStack>
        </VStack>

        <HStack
          space={2}
          alignItems='center'
          justifyContent='center'
          borderTopColor='yellow.500'
          borderTopWidth={0.5}
          mt={3}
          py={2}
        >
          <Text color={'white'}>
            Já possui uma conta?
          </Text>
          <Pressable onPress={() => navigate('signin')}>
            <Text color={'yellow.300'} fontSize={18} fontFamily='heading'>
              Inicie sessão
            </Text>
          </Pressable>
        </HStack>
        <Button
          title='CADASTRAR'
          type='PRIMARY'
          onPress={handleSignup}
          isLoading={userIsLoading}
          _loading={{ _spinner: { color: 'white' } }}
        />
      </LayoutBody>
    </LayoutAuth>
  )
}