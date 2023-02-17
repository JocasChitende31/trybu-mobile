import { HStack, Pressable, Text, VStack } from "native-base"
import { useNavigation } from '@react-navigation/native'

import { IEvent } from "../../@types/event"

export function Event ({ event }: { event: IEvent }) {
  const { navigate } = useNavigation()
  return (
    <VStack
      bg={'gray.200'}
      p={3}
    >
      <Text
      // flex={1}
      // textAlign={'center'}
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