import { useState, useEffect } from "react"
import { HStack, Text, useToast, VStack } from "native-base"
import { useRoute } from '@react-navigation/native'

import { Header } from "../components/Header"

export function Detail () {

  return (
    <VStack flex={1} >
      <Header
        title={'Detalhe de posts'}
        showBackButton
      />

    </VStack>
  )
}