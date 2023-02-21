import {
  Input as InptupNativeBase,
  IInputProps,
  Box,
  FormControl,
  TextArea as TextAreaNativeBase,
  ITextAreaProps
} from "native-base"

interface Props extends IInputProps {
  label?: string
  required?: boolean
}

export function Input ({ label, required, width, ...rest }: Props) {
  return (
    <Box alignItems="center" w={width}>
      <FormControl isRequired={required} >
        <FormControl.Label>{label ?? rest.placeholder}</FormControl.Label>
        <InptupNativeBase
          fontSize='md'
          color={'gray.500'}
          {...rest}
        />
      </FormControl>
    </Box>
  )
}


interface TextAreaProps extends ITextAreaProps {
  label?: string
  required?: boolean
}

export function TextArea ({ label, required, width, ...rest }: TextAreaProps) {
  return (
    <Box alignItems="center" w={width}>
      <FormControl isRequired={required} >
        <FormControl.Label>{label ?? rest.placeholder}</FormControl.Label>
        <TextAreaNativeBase
          h={20}
          fontSize='md'
          color={'gray.500'}
          {...rest}
        />
      </FormControl>
    </Box>

  )
}