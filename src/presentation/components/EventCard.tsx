import { HStack, Image, Pressable, Text, VStack } from "native-base";
import { useNavigation } from '@react-navigation/native';

import { IEvent } from "../../@types/event";
import { DateUtils } from "../../utils/date-utils";
import { Calendar } from "phosphor-react-native";
import { UrlUtils } from "../../utils/url-utils";
import { AuthorBox } from "./AuthorBox";
import React from "react";

export function EventCard ({ event }: { event: IEvent }) {
  const { navigate } = useNavigation()
  return (
    <VStack
      bg={'white'}
      shadow={2}
    >
      {event.picture &&
        <Image
          source={{ uri: `${UrlUtils.uploadUrl()}/${event.picture}` }}
          alt='Imagem'
          height={200}
        />
      }
      <VStack
        p={3}
      >
        <Text
          fontSize={18}
        >
          {event.title}
        </Text>

        {event.author && <AuthorBox author={event.author} />}

        <HStack
          alignItems={'center'}
          space={2}
        >
          <Calendar size={18} />
          <HStack
            bg={'gray.100'}
            px={2}
            py={1}
          >
            <Text>{DateUtils.getDateTimeMinute(new Date(event.startsAt))}</Text>

            {event.endsAt &&
              <Text> | {DateUtils.getDateTimeMinute(new Date(event.endsAt))}</Text>
            }
          </HStack>
        </HStack>

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
    </VStack>
  )
}