import { Box, FlatList, HStack, Stack, VStack, Text } from "native-base"
import { useNavigation } from '@react-navigation/native'

import { useEvent } from "../../../hooks/useEvent"
import { Event } from "../../components/Event"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

export function Events () {
  const { events } = useEvent()
  const { navigate } = useNavigation()

  return (
    <VStack flex={1}
      bg='white'
    >
      <Header
        title={'Eventos'}
        showBackButton
      />

      <HStack
        p={5}
        mt={5}
        mx={5}
        bg={'gray.100'}
        shadow={2}
      >
        <Text
          flex={1}
          textAlign={'center'}
          fontSize={20}
        >
          Calendário de eventos
        </Text>
      </HStack>

      <Box
        w={'full'}
        p={5}
      >
        <Button
          title="Criar novo evento"
          type="PRIMARY"
          onPress={() => navigate('newevent')}
        />

        <HStack
          w={'full'}
          mt={3}
          bg={'white'}
          space={4}
          direction={'column'}
        // height={[100, 100]}
        >
          <Box
            mt={3}
          >
            <Text
              fontSize={20}
            >
              Lista de eventos ({events.length})
            </Text>
          </Box>
          {events.map(event => (
            <Event key={event.id} event={event} />
          ))}
        </HStack>
      </Box>
    </VStack>
  )
}