import { Box, FlatList, HStack, Stack, Text, VStack } from "native-base"
import { useRoute } from '@react-navigation/native'
import { IScreens } from "../../../@types/screens"
import { useEvent } from "../../../hooks/useEvent"
import { Button } from "../../components/Button"
import { Event } from "../../components/Event"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { IEvent } from "../../../@types/event"

interface RouteParams {
  event: IEvent
}

export function EventDetail () {
  const route = useRoute()
  const { event } = route.params as RouteParams

  return (
    <VStack flex={1} >
      <Header
        title={event.title}
        showBackButton
        goTo={IScreens.events}
      />

      <VStack
        p={3}
        space={2}
      >
        <Text>
          {event.description}
        </Text>
        <Text>
          Contactos: {event.contacts}
        </Text>
        <Text>
          Realização: {event.owner}
        </Text>
        <Text>
          Preço: {event.price}
        </Text>
        <Text>
          Data de início: {event.startAt}
        </Text>
        <Text>
          Data de fim: {event.endAt}
        </Text>
        <Text>
          Endereço: {event.address}
        </Text>
      </VStack>
    </VStack>
  )
}