import { Text, VStack } from "native-base"
import { useRoute } from '@react-navigation/native'
import { Button } from "../../components/Button"
import { IEvent } from "../../../@types/event"
import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"

interface RouteParams {
  event: IEvent
}

export function EventDetail () {
  const route = useRoute()
  const { event } = route.params as RouteParams

  return (
    <Layout backTo="events">
      <LayoutBody>
        <VStack space={2}>
          <Text
            fontSize={20}
            mb={2}
            pb={2}
            borderBottomColor='yellow.300'
            borderBottomWidth={1}
          >
            {event.description}
          </Text>
          <Text fontSize={16}>
            Contactos: {event.contacts}
          </Text>
          <Text fontSize={16}>
            Realização: {event.owner}
          </Text>
          <Text fontSize={16}>
            Preço: {event.price}
          </Text>
          <Text fontSize={16}>
            Data de início: {event.startAt}
          </Text>
          <Text fontSize={16}>
            Data de fim: {event.endAt}
          </Text>
          <Text fontSize={16}>
            Endereço: {event.address}
          </Text>
          <Button title="Quero participar">

          </Button>
        </VStack>
      </LayoutBody>
    </Layout>
  )
}