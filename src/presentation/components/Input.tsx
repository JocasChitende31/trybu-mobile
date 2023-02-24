import React from "react";
import {
  Input as InptupNativeBase,
  IInputProps,
  Box,
  FormControl,
  TextArea as TextAreaNativeBase,
  ITextAreaProps
} from "native-base";

interface Props extends IInputProps {
  label?: string
  nolabel?: boolean
  required?: boolean
  mode?: 'dark' | 'light'
}

export function Input ({ label, required, width, w, mode = 'dark', nolabel, ...rest }: Props) {
  return (
    <Box alignItems="center" w={w ?? width}>
      <FormControl isRequired={required} >
        {!nolabel && <FormControl.Label>{label ?? rest.placeholder}</FormControl.Label>}
        <InptupNativeBase
          fontSize='md'
          bg={mode == 'dark' ? 'white' : 'gray.500'}
          _focus={{
            bg: mode == 'dark' ? 'white' : 'gray.500'
          }}
          fontFamily='medium'
          color='gray.500'
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
          fontFamily='medium'
          {...rest}
        />
      </FormControl>
    </Box>

  )
}