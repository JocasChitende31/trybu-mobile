import { Input as InptupNativeBase, IInputProps, VStack } from "native-base"



interface Props extends IInputProps {
}

export function Input (props: Props) {
  return (
    <InptupNativeBase shadow={2}
      bg="coolGray.100"
      _focus={
        { bg: "coolGray.200" }
      }
      color='gray.500'
      fontSize='lg'
      {...props}
    />)
}