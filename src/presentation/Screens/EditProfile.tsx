import { Text, useTheme, VStack } from "native-base"
import { useState } from "react"
import { IScreens } from "../../@types/screens"
import { IUser } from "../../@types/user"
import { useAuth } from "../../hooks/useAuth"
import { StringUtils } from "../../utils/string-utils"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { Layout, LayoutBody, LayoutHeader } from "../components/Layout"

export function EditProfile () {
  const {
    colors
  } = useTheme()
  const { user } = useAuth()
  const [formData, setFormData] = useState<IUser>(user)

  return (
    <Layout>
      <LayoutHeader>
        <Header
          title={`Editar perfil - ${StringUtils.getFirstWord(user.name)}`}
          showBackButton
          goTo={IScreens.profile}
        />
      </LayoutHeader>
      <LayoutBody>
        <VStack>
          <Text fontSize={16}>Nome</Text>
          <Input
            type="text"
            placeholder="Digite o seu nome"
            defaultValue={formData.name}
          />
        </VStack>

        <VStack>
          <Text fontSize={16}>Username</Text>
          <Input
            type="text"
            placeholder="Digite o seu username"
            defaultValue={formData.username}
          />
        </VStack>

        <VStack>
          <Text fontSize={16}>Username</Text>
          <Input
            type="text"
            placeholder="Digite o seu username"
            defaultValue={formData.username}
          />
        </VStack>

        <VStack>
          <Text fontSize={16}>Username</Text>
          <Input
            type="text"
            placeholder="Digite o seu username"
            defaultValue={formData.username}
          />
        </VStack>

        <VStack>
          <Text fontSize={16}>E-mail</Text>
          <Input
            type="text"
            placeholder="Digite o seu e-mail"
            defaultValue={formData.email}
          />
        </VStack>

        <VStack>
          <Text fontSize={16}>Telefone</Text>
          <Input
            type="text"
            placeholder="Digite o seu telefone"
            defaultValue={formData.phone}
          />
        </VStack>

        <VStack>
          <Text fontSize={16}>WhatsApp</Text>
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