import { useCallback, useState } from 'react'
import { Box, HStack, Text, VStack } from "native-base"
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Event } from "../../components/Event"
import { Button } from "../../components/Button"
import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"
import { TextTitle } from "../../components/TextTitle"
import { IEvent } from '../../../@types/event'
import { makeAxiosHttpClient } from '../../../main/factory/axios-http-client-factory'
import { Loading } from '../../components/Loading'
import { HttpStatusCode } from '../../../data/protocol/http'
import { Alert } from 'react-native'
import { useAuth } from '../../../hooks/useAuth'
import { SearchBar } from '../../components/SearchBar'

export function Events () {
  const { navigate } = useNavigation()
  const { signOut } = useAuth()

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [events, setEvents] = useState<IEvent[]>([])
  const [filteredEvents, setFilteredEvents] = useState<IEvent[]>([])

  useFocusEffect(useCallback(() => {
    fetchEvents()
  }, []))

  async function fetchEvents () {
    setIsLoading(true)
    const { statusCode, body } = await makeAxiosHttpClient().get({ url: '/events' })

    if (statusCode === HttpStatusCode.unauthorized) {
      Alert.alert('Sessão expirada', 'A sua sessão expirou, inicie novamente para continuar.')
      signOut()
    } else {
      setEvents(body.events)
      setFilteredEvents(body.events)
    }
    setIsLoading(false)
  }

  const filterEvents = (text: string) => {
    const typedText = text.trim()
    console.log('typedText', typedText)

    if (typedText) {
      const filterdEvents = events.filter(event => {
        return event.title.toLowerCase().includes(typedText.toLowerCase())
      })
      console.log('filterdEvents', filterdEvents.map(e => e.title))

      setFilteredEvents(filterdEvents)
      return
    }

    setFilteredEvents(events)
  }

  if (isLoading) return <Loading />

  return (
    <Layout>
      <LayoutHeader>
        <SearchBar initialValue='Olá' onChangeText={filterEvents} />
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
        </Box>

        <VStack mt={5} space={5}>
          {filteredEvents.length < 1 ?
            <Box alignItems={'center'}>
              <Text>Nenhum evento de momento.</Text>
            </Box>
            :
            events.map((event) => (
              <Event key={event.id} event={event} />
            ))
          }
        </VStack>
      </LayoutBody>
    </Layout>
  )
}