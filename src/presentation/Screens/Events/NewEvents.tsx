import { VStack } from "native-base"
import { IScreens } from "../../../@types/screens"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"

export function NewEvents () {
  return (
    <Layout>
      <LayoutHeader>
        <Header
          title={'Criar Evento'}
          showBackButton
          goTo={IScreens.events}
        />
      </LayoutHeader>

      <LayoutBody
      >
        <VStack space={3}>
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
          />
        </VStack>
      </LayoutBody>
    </Layout>
  )
}