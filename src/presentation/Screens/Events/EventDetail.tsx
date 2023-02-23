import { Box, HStack, Image, Text, VStack } from "native-base"
import { ReactElement } from 'react'
import { useRoute } from '@react-navigation/native'
import { Button } from "../../components/Button"
import { IEvent } from "../../../@types/event"
import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"
import { UrlUtils } from "../../../utils/url-utils"
import { DateUtils } from "../../../utils/date-utils"
import { MapPinLine, Money, Phone, Timer } from "phosphor-react-native"
import { TextTitle } from "../../components/TextTitle"

interface RouteParams {
  event: IEvent
}

export function EventDetail () {
  // const [event, setEvent] = useS
  const route = useRoute()
  const { event } = route.params as RouteParams

  // useEffect(() => { }, [])

  return (
    <Layout backTo="events" key={event.id}>
      <LayoutHeader>
        <TextTitle title="Evento" />
      </LayoutHeader>
      <LayoutBody>
        <VStack space={2}>
          {event.picture &&
            <Box >
              <Image
                source={{ uri: `${UrlUtils.uploadUrl()}/${event.picture}` }}
                alt='Imagem'
                height={250}
              />
              {/* <TextArea value={`${UrlUtils.uploadUrl()}/${event.picture}`} /> */}
            </Box>
          }
          <Text
            fontSize={20}
            mb={2}
            pb={2}
            borderBottomColor='yellow.300'
            borderBottomWidth={1}
          >
            {event.title}
          </Text>

          <Text fontSize={16} mb={2}>
            {event.description}
          </Text>

          <Box
            bg={'white'}
            shadow={2}
            p={2}
            mb={2}
          >
            <BoxInfo
              text={DateUtils.getDateTimeMinute(new Date(event.startsAt))}
              icon={<Timer size={18} />}
              label='Início'
            />
            <BoxInfo
              text={DateUtils.getDateTimeMinute(new Date(event.endsAt))}
              icon={<Timer size={18} />}
              label='Fim'
            />
            <BoxInfo
              text={`${event.price} kz`}
              icon={<Money size={18} />}
              label='Preço'
            />
            <BoxInfo
              text={event.address}
              icon={<MapPinLine size={18} />}
            />
            {
              event.owner &&
              <BoxInfo
                text={event.owner}
                label='Realizador'
              />
            }
            <BoxInfo
              text={event.contact}
              icon={<Phone size={18} />}
            />
          </Box>
          <Button title="Quero participar">

          </Button>
        </VStack>
      </LayoutBody>
    </Layout>
  )
}

type Props = {
  text: string
  label?: string
  icon?: ReactElement
}
function BoxInfo ({ text, label, icon }: Props) {
  return (
    <HStack space={1} alignItems='center'>
      {icon}
      {label && <Text textTransform={'uppercase'}>{label}: </Text>}
      <Text fontSize={16} fontWeight='medium'>
        {text}
      </Text>
    </HStack>
  )
}