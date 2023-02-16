import { Image, Text } from "native-base"

const LogoImg = require('../../../assets/logo.png')
const LogoImgLg = require('../../../assets/logotipo.png')

export function Logo () {
  return (
    <Image source={LogoImg} width={20} height={20} alt='Logotipo RCS' />
  )
}

export function LogoLG () {
  return (
    <Image source={LogoImgLg} alt='Logotipo RCS' />
  )
}