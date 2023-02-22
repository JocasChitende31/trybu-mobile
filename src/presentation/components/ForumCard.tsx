import { HStack, Text, VStack } from "native-base"
import { ChatDots, Clock } from "phosphor-react-native"
import { IForumPost } from "../../@types/forumpost"
import { DateUtils } from "../../utils/date-utils"
import { AuthorBox } from "./AuthorBox"

export function ForumCard ({ forum }: { forum: IForumPost }) {
  return (
    <VStack
      p={3}
      shadow={2}
      bg='white'>
      <Text fontFamily='medium' fontSize={16}>
        {forum.title}
      </Text>
      <HStack alignItems='center' space={1}>
        <Clock size={16} />
        <Text fontSize={12}>
          {DateUtils.getDate(new Date(forum.createdAt))}
        </Text>
      </HStack>

      <Text fontSize={14}>
        {forum.content}
      </Text>
      <AuthorBox author={forum.author} />
      <HStack>
        <ChatDots size={16} />
      </HStack>
    </VStack>
  )
}