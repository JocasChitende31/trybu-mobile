import { Center, HStack, Spinner, Text, VStack } from 'native-base';
import { ImageBackground } from 'react-native';
import React from 'react';
export const LoadingLg = () => {
  return (
    <Center flex={1}>
      <ImageBackground
        style={{
          width: '100%',
          flex: 1,
          justifyContent: 'center',
        }}

        source={require('../../../assets/splash.png')}>
        <Spinner size={48} color="yellow.500" />
      </ImageBackground>
    </Center>
  )
}

export const Loading = ({ text }: { text?: string }) => {
  return (
    <HStack space={2} flex={1} alignItems='center' justifyContent='center' py={5}>
      <Spinner size={32} color="yellow.500" />
      {text && <Text fontFamily='medium'>{text}</Text>}
    </HStack>
  )
}