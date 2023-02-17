import { Box, FlatList, HStack, Stack, VStack, Button } from "native-base"
import { useNavigation } from '@react-navigation/native'

import { useEvent } from "../../../hooks/useEvent"
import { Event } from "../../components/Event"
import { Header } from "../../components/Header"

export function Events () {
  const { events } = useEvent()
  const { navigate } = useNavigation()

  return (
    <VStack flex={1} >
      <Header
        title={'Eventos'}
        showBackButton
      />

      <Box
        w={'full'}
        p={3}
      >
        <Button
          mt={4}
          w={20}
          onPress={() => navigate('newevent')}
        >
          Criar
        </Button>

        <HStack
          w={'full'}
          mt={3}
          bg={'white'}
          space={2}
          direction={'column'}
        // height={[100, 100]}
        >
          {events.map(event => (
            <Event key={event.id} event={event} />
          ))}
        </HStack>
      </Box>
    </VStack>
  )
}