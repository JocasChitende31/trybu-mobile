import { Box, FlatList, HStack, Stack, Text, VStack } from "native-base"
import { useRoute } from '@react-navigation/native'
import { IScreens } from "../../../@types/screens"
import { useEvent } from "../../../hooks/useEvent"
import { Button } from "../../components/Button"
import { Event } from "../../components/Event"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { IEvent } from "../../../@types/event"
import { Intersect } from "phosphor-react-native"

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
        p={5}
        space={2}
        bg='white'
      // mt={5}
      >
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
    </VStack>
  )
}