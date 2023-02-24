import { ReactElement } from 'react';
import { Button as ButtonNativeBase, Text, IButtonProps, Pressable, IPressableProps } from "native-base";
import { PlusCircle } from "phosphor-react-native";
import React from 'react';

interface Props extends IButtonProps {
  title: string
  type?: 'PRIMARY' | 'SECONDARY'
  textColor?: string
}

export function Button ({ title, type = 'SECONDARY', textColor, ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      p={3}
      rounded="sm"
      fontSize="md"
      bg={type === 'PRIMARY' ? '#ECB44A' : 'orange.900'}
      _pressed={{
        bg: type === "PRIMARY" ? 'yellow.600' : 'orange.800'
      }}
      _spinner={{
        color: type === 'PRIMARY' ? 'black' : 'white',
      }}
      {...rest}
    >
      <Text
        fontSize='sm'
        fontFamily='heading'
        color={textColor ?? (type === 'PRIMARY' ? 'black' : 'white')}
        textTransform="uppercase"
      >
        {title}
      </Text>
    </ButtonNativeBase >
  )
}

interface ButtonRoundedSmallProps extends IPressableProps {
  text: string
  icon?: ReactElement
}
export const ButtonRoundedSmall = ({ text, icon = <PlusCircle />, ...props }: ButtonRoundedSmallProps) => {
  return (
    <Pressable
      flexDir='row'
      ml='auto'
      bg='yellow.400'
      px={3}
      py={1}
      borderRadius={'full'}
      _pressed={{
        bg: 'yellow.500'
      }}
      shadow={1}
      {...props}
    >
      <Text fontFamily='medium' mr={1}>{text}</Text>
      {icon}
    </Pressable>
  )
}