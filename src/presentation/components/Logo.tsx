import { Image, IImageProps } from "native-base";
import React from 'react';


const LogoImg = require('../../../assets/logo.png');
const LogoImgLg = require('../../../assets/logotipo.png');
const LogoTex = require('../../../assets/logo-text.png');


export function Logo () {
  return (
    <Image source={LogoImg} width={20} height={20} alt='Logotipo Trybu' />
  )
}

export function LogoLG (props: IImageProps) {
  return (
    <Image
      source={LogoImgLg}
      alt='Logotipo Trybu'
      {...props}
    />
  )
}

export function LogoText (props: IImageProps) {
  return (
    <Image
      source={LogoTex}
      alt='Logotipo Trybu'
      {...props}
    />
  )
}