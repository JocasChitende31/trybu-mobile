import { VStack } from "native-base"
import { Header } from "../components/Header"

export function Events () {

  return (
    <VStack flex={1} >
      <Header
        title={'Eventos'}
        showBackButton
      />

    </VStack>
  )
}