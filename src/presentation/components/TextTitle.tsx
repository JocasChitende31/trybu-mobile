import { Text } from "native-base";
import React from "react";

type TextTitlePros = {
  title: string,
}
export function TextTitle ({ title }: TextTitlePros) {
  return (
    <Text fontSize={'lg'} textTransform='uppercase' fontFamily='medium'>{title}</Text>
  )
}