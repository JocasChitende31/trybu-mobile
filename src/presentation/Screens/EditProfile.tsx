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
        p={2}
        bg='white'
      >
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
          placeholder="Digite o seu email"
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
        <Button
          title="Salvar"
          type="PRIMARY"
          mt={4}
        />
      </VStack>
    </VStack>
  )
}