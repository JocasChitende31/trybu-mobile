import { Box, HStack, Text } from "native-base"
import { useNavigation } from '@react-navigation/native'

import { useEvent } from "../../../hooks/useEvent"
import { Event } from "../../components/Event"
import { Button } from "../../components/Button"
import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"
import { TextTitle } from "../../components/TextTitle"

export function Events () {
  const { events } = useEvent()
  const { navigate } = useNavigation()

  return (
    <Layout>
      <LayoutHeader>
        <TextTitle title="Eventos" />
      </LayoutHeader>

      <LayoutBody>
        <HStack
          p={5}
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

        <Box mt={5}>
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
          >
            <Box mt={3} >
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
      </LayoutBody>
    </Layout>
  )
}