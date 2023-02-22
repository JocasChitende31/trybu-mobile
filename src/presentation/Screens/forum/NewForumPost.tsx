import { HStack, VStack } from "native-base"
import { PencilLine } from "phosphor-react-native"
import { useNavigation } from '@react-navigation/native'

import { Button } from "../../components/Button"
import { Input, TextArea } from "../../components/Input"
import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"
import { TextTitle } from "../../components/TextTitle"
import { UploadContainer } from "../../components/UploadContainer"

export function NewForumPost () {
  const { navigate } = useNavigation()

  return (
    <Layout backTo="forums">
      <LayoutHeader>
        <HStack alignItems='center' space={1}>
          <PencilLine />
          <TextTitle title="Publicar no forum" />
        </HStack>
      </LayoutHeader>
      <LayoutBody>
        <VStack space={3}>
          <Input
            type="text"
            placeholder="Título da publicação"
          />

          <TextArea placeholder="Conteúdo" />

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
              onPress={() => navigate('forums')}
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