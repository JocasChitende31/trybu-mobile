import { useState } from "react"
import { HStack, Icon, Text, VStack } from "native-base"
import { useNavigation } from '@react-navigation/native'

import faker from 'faker'

import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"
import { SearchBar } from "../../components/SearchBar"
import { TextTitle } from "../../components/TextTitle"
import { ButtonRoundedSmall } from "../../components/Button"
import { CalendarCheck, ChatDots, Clock, PencilLine } from "phosphor-react-native"
import { AuthorBox } from "../../components/AuthorBox"
import { DateUtils } from "../../../utils/date-utils"

const forumnsData = () => {
  return Array.from(Array(50)).map(i => {
    return {
      id: faker.datatype.uuid(),
      title: faker.random.words(3),
      content: faker.random.words(10),
      createdAt: DateUtils.randonDateString(),
      author: {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email()
      }
    }
  })
}

const forums = forumnsData()

export function Forums () {


  const { navigate } = useNavigation()
  const [forumList, setForumList] = useState(forums ?? [])

  const handleSearchChange = (text: string) => {
    const typedText = text
    if (typedText) {
      const filteredForum = forums.filter(
        forum => forum.title.toLowerCase().includes(typedText.toLowerCase())
      )
      setForumList(filteredForum)
    } else {
      setForumList(forums)
    }
  }

  return (
    <Layout>
      <LayoutHeader>
        <SearchBar placeholder="Pesquise forumns"
          onChangeText={handleSearchChange}
        />
        <HStack alignItems='center' space={1}>
          <TextTitle title="Fórum" />
          <Text>({forumList.length})</Text>
          <ButtonRoundedSmall
            text="Publicar"
            icon={<PencilLine />}
            onPress={() => navigate('newforumpost')}
          />
        </HStack>
      </LayoutHeader>
      <LayoutBody>
        <VStack space={4}
        >
          {forumList.map((forum) => {
            const { title, content, author, id } = forum

            return (
              <VStack key={id}
                p={3}
                shadow={2}
                bg='white'>
                <Text fontFamily='medium' fontSize={16}>
                  {title}
                </Text>
                <HStack alignItems='center' space={1}>
                  <Clock size={16} />
                  <Text fontSize={12}>
                    {DateUtils.getDate(new Date(forum.createdAt))}
                  </Text>
                </HStack>

                <Text fontFamily={14}>
                  {content}
                </Text>
                <AuthorBox author={author as any} />
                <HStack>
                  <ChatDots size={16} />
                </HStack>
              </VStack>
            )
          })}
        </VStack>
      </LayoutBody>
    </Layout>
  )
}