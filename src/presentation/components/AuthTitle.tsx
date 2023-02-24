import { HStack } from "native-base";
import { ReactNode } from "react";
import React from "react";

type Props = {
  children: ReactNode
}

export function AuthTitle ({ children }: Props) {
  return (
    <HStack
      alignItems='center'
      justifyContent='center'
      space={2}
      mb={4}
    >
      {children}
    </HStack>
  )
}