import { Box, HStack, Text, VStack } from "native-base"
import { useEffect, useState } from "react"
import { IScreens } from "../../@types/screens"
import { IUser } from "../../@types/user"
import { useAuth } from "../../hooks/useAuth"
import { StringUtils } from "../../utils/string-utils"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Input } from "../components/Input"

export function EditProfile () {
  const { user } = useAuth()
  const [formData, setFormData] = useState<IUser>(user)

  return (
    <VStack flex={1} >
      <Header
        title={`Editar perfil - ${StringUtils.getFirstWord(user.name)}`}
        showBackButton
        goTo={IScreens.profile}
      />
      <VStack
        flex={1}
        space={2}
        mt={2}
        p={5}
        bg='white'
      >
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
      </VStack>
    </VStack>
  )
}