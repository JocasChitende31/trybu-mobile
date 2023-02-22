import { HStack, useTheme, VStack } from "native-base"
import { NotePencil } from "phosphor-react-native"
import { useRoute } from '@react-navigation/native'
import { useState } from "react"
import { IUser } from "../../../@types/user"
import { useAuth } from "../../../hooks/useAuth"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"
import { TextTitle } from "../../components/TextTitle"


interface RouteParams {
  user: IUser
}


export function EditProfile () {
  const route = useRoute()

  const { user: logeedUser } = useAuth()

  let user = (route.params as RouteParams)?.user

  if (!user) { user = logeedUser }

  const [formData, setFormData] = useState<IUser>(user)

  return (
    <Layout backTo="profile">
      <LayoutHeader>
        <HStack alignItems='center' space={2}>
          <NotePencil />
          <TextTitle title="Editar perfil" />
        </HStack>
      </LayoutHeader>
      <LayoutBody>
        <VStack space={2}>
          <Input
            type="text"
            placeholder="Digite o seu nome"
            defaultValue={formData.name}
          />

          <Input
            type="text"
            placeholder="Digite o seu username"
            defaultValue={formData.username}
          />

          <Input
            type="text"
            placeholder="Digite o seu e-mail"
            defaultValue={formData.email}
          />

          <Input
            type="text"
            placeholder="Digite o seu telefone"
            defaultValue={formData.phone}
          />

          <Input
            type="text"
            placeholder="Digite o seu whatsapp"
            defaultValue={formData.whatsapp}
          />
        </VStack>

        <Button
          title="Salvar"
          type="PRIMARY"
          mt={4}
        />
      </LayoutBody>
    </Layout>
  )
}