import { ImageBackground } from "react-native";
import { Layout } from "../components/Layout";
import React from "react";

const image = require('../../../assets/home.jpg')

export function Home () {
  return (
    <Layout>
      <ImageBackground
        source={image}
        style={{ flex: 1 }}
      ></ImageBackground>
    </Layout>
  )
}