import { HStack, VStack } from "native-base"
import { ImageBackground } from "react-native"
import { Header } from "../components/Header"

const image = require('../../../assets/home.jpg')

export function Home () {
  return (
    <VStack flex={1}>
      <Header title={`Home`} />
      <ImageBackground
        source={image}
        style={{ flex: 1 }}
      ></ImageBackground>
    </VStack>
  )
}