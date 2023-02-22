import { useState } from "react"
import { HStack, Text, VStack } from "native-base"
import { useNavigation } from '@react-navigation/native'

import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"
import { SearchBar } from "../../components/SearchBar"
import { TextTitle } from "../../components/TextTitle"
import { ButtonRoundedSmall } from "../../components/Button"
import { PencilLine } from "phosphor-react-native"
import { DateUtils } from "../../../utils/date-utils"
import { ForumCard } from "../../components/ForumCard"
import { IForumPost } from "../../../@types/forumpost"
import { ForumListData } from "../../../utils/data/forum"



const forums = ForumListData

export function Forums () {
  const { navigate } = useNavigation()
  const [forumList, setForumList] = useState<IForumPost[]>(forums ?? [])

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
          {forumList.map((forum) => (
            <ForumCard key={forum.id} forum={forum} />
          ))}
        </VStack>
      </LayoutBody>
    </Layout>
  )
}