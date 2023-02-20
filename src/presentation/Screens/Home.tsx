import { ImageBackground } from "react-native"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout"

const image = require('../../../assets/home.jpg')

export function Home () {
  return (
    <Layout>
      <Header title={`Home`} />
      <ImageBackground
        source={image}
        style={{ flex: 1 }}
      ></ImageBackground>
    </Layout>
  )
}