import { Box, FlatList, HStack, Stack, VStack } from "native-base"
import { IScreens } from "../../../@types/screens"
import { useEvent } from "../../../hooks/useEvent"
import { Button } from "../../components/Button"
import { Event } from "../../components/Event"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

export function NewEvents () {
  const { events } = useEvent()
  return (
    <VStack flex={1} >
      <Header
        title={'Criar Evento'}
        showBackButton
        goTo={IScreens.events}
      />

      <VStack
        p={5}
        space={2}
        bg='white'
      >
        <Input
          type="text"
          placeholder="Título do evento"
        />
        <Input
          type="text"
          placeholder="Descrição"
        />
        <Input
          type="text"
          placeholder="Realizador"
        />
        <Input
          type="text"
          placeholder="Endereço"
        />
        <Input
          type="text"
          placeholder="Preço"
        />
        <Input
          type="text"
          placeholder="Contactos"
        />
        <Input
          type="text"
          placeholder="Data de início"
        />
        <Input
          type="text"
          placeholder="Data de fim"
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