import { HStack, Pressable, Text, VStack } from "native-base"
import { useNavigation } from '@react-navigation/native'

import { IEvent } from "../../@types/event"

export function Event ({ event }: { event: IEvent }) {
  const { navigate } = useNavigation()
  return (
    <VStack
      bg={'gray.100'}
      p={3}
      shadow={2}
    >
      <Text
      >{event.title}
      </Text>
      <Pressable
        onPress={() => navigate('eventdetail', { event: event })}
      >
        <Text
          color={'yellow.700'}
        >
          Ver mais
        </Text>
      </Pressable>

    </VStack>
  )
}