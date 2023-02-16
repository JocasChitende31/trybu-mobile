import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base"

interface Props extends IButtonProps {
  title: string
}

export function Button ({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg={'yellow.600'}
      _pressed={{
        bg: 'yellow.600'
      }}
      _loading={{
        _spinner: { color: 'black' }
      }}
      {...rest}
    >
      <Text
        fontSize='sm'
        fontFamily='heading'
        color={'black'}
      >
        {title}
      </Text>
    </ButtonNativeBase >
  )
}