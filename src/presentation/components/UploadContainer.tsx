import { useState } from "react";
import { Box, Image, Pressable, Text } from "native-base";
import * as ImagePicker from 'expo-image-picker';
import { X } from "phosphor-react-native";
import React from "react";

export type UploadFileProps = {
  uri: string
  type: string
  name: string
}

type Props = {
  onSelectFile: (file: UploadFileProps) => void
  label?: string
  placeholder?: string
  height?: number
}

export function UploadContainer ({ onSelectFile, label, placeholder, height = 32 }: Props) {
  const [photo, setPhoto] = useState<{ uri: string, type: string, name: string }>(null)

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    })

    // console.log(result)

    if (!result.canceled) {
      const { uri, type, fileName } = result.assets[0]

      const splitName = uri.split('/')
      const name = fileName ?? splitName[splitName.length - 1]

      const exSplit = name.split('.')
      const ext = exSplit[exSplit.length - 1]

      const typeSplit = type.split('/')
      let newType: string = type
      if (typeSplit.length == 1) {
        newType = `${type}/${ext}`
      }

      const selectedFile = { uri, type: newType, name }

      setPhoto(selectedFile)
      onSelectFile(selectedFile)
    }
  }

  const handleRemoveFile = () => {
    onSelectFile(null)
    setPhoto(null)
  }

  return (
    <Box position='relative'>
      {
        photo && <Pressable
          onPress={handleRemoveFile}
          position='absolute'
          right={0}
          p={1}
          zIndex={100}
        >
          <X size={15} color='red' />
        </Pressable>
      }

      <Text color={'gray.500'} mb={1}>
        {label ?? 'Arquivo'}
      </Text>
      <Pressable
        h={height}
        p={2}
        alignItems='center'
        justifyContent='center'
        borderWidth={"1"}
        borderStyle='dashed'
        onPress={handleChoosePhoto}
      >
        {photo ?
          <Image source={{ uri: photo.uri }} alt='Foto'
            width={'full'}
            height={'full'}
          />
          :
          <Text color={'gray.500'}>{placeholder ?? 'Clique para adicionar a arquivo'}</Text>
        }
      </Pressable>
    </Box>
  )
}