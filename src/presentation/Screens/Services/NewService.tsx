import { Box, HStack, Text, VStack } from "native-base"
import { PencilLine } from "phosphor-react-native"
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"
import { TextTitle } from "../../components/TextTitle"
import { UploadContainer } from "../../components/UploadContainer"
import { Picker } from "@react-native-picker/picker"

export function NewService () {
  const { navigate } = useNavigation()
  const [selectedLanguage, setSelectedLanguage] = useState()

  return (
    <Layout backTo="services">
      <LayoutHeader>
        <HStack alignItems='center' space={1}>
          <PencilLine />
          <TextTitle title="Criar novo serviço" />
        </HStack>
      </LayoutHeader>
      <LayoutBody>
        <VStack space={3}>
          <Input
            type="text"
            placeholder="Nome do serviço"
          />


          <VStack
            space={1}
          >
            <Text color='gray.500'>Tipo de serviço</Text>
            <Box
              borderColor='gray.200'
              borderWidth={1}
              borderRadius={5}
            >
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
                mode='dropdown'
              >
                <Picker.Item label="Free" value="free" />
                <Picker.Item label="Pago" value="premium" />
              </Picker>
            </Box>
          </VStack>

          <UploadContainer
            onSelectFile={() => { }}
            label='Imagem'
          />

          <HStack
            flexDir='row-reverse'
            alignItems='center'
            space={3}
          >
            <Button
              title="Publicar"
              w={100}
              p={2}
              type="PRIMARY"
            />
            <Button
              onPress={() => navigate('services')}
              title="Cancelar"
              w={100}
              p={2}
              bg='gray.100'
              _pressed={{
                bg: 'gray.200',
              }}
              textColor='yellow.600'
              shadow={1}
            />
          </HStack>
        </VStack>
      </LayoutBody>
    </Layout>
  )
}