import { HStack, Pressable, Text, VStack } from "native-base"
import { useNavigation } from '@react-navigation/native'

import { IPost } from "../../@types/post"

type PostProps = {
  data: IPost
}
export function Post ({ data }: PostProps) {
  const { navigate } = useNavigation()
  const { id, title, body, userId } = data
  return (
    <Pressable
      w="full"
      bgColor="gray.800"
      rounded="sm"
      alignItems="center"
      borderBottomWidth={3}
      borderBottomColor="blue.500"
      mb={3}
      p={4}
      onPress={() => { navigate('detail', { id }) }}
      _pressed={{
        bg: 'gray.500'
      }}
    >
      {/* <Pressable
        flex={1}
        onPress={() => { navigate('detail', { id }) }}
        _pressed={{
          bg: 'gray.500'
        }}
      > */}
      <HStack flex={1} flexDir='column' space={3}>
        <Text color={'white'}>{title}</Text>
      </HStack>
      {/* </Pressable> */}
    </Pressable >
  )
}