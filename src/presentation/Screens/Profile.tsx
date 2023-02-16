import { VStack } from "native-base"
import { Header } from "../components/Header"

export function Profile () {

  return (
    <VStack flex={1} >
      <Header
        title={'Perfil'}
        showBackButton
      />

    </VStack>
  )
}