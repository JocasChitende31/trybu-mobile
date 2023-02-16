import { VStack } from "native-base"
import { Header } from "../components/Header"

export function Services () {

  return (
    <VStack flex={1} >
      <Header
        title={'Serviços'}
        showBackButton
      />

    </VStack>
  )
}