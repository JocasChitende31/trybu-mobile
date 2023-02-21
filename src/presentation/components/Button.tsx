import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base"

interface Props extends IButtonProps {
  title: string
  type?: 'PRIMARY' | 'SECONDARY'
}

export function Button ({ title, type = 'SECONDARY', ...rest }: Props) {
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
        color={type === 'PRIMARY' ? 'black' : 'white'}
        textTransform="uppercase"
      >
        {title}
      </Text>
    </ButtonNativeBase >
  )
}