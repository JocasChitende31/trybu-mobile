import { Box, HStack, Pressable, Text, VStack } from "native-base"
import { Gear, GraduationCap, Lightbulb, PlusCircle, Users, UsersThree } from "phosphor-react-native"
import { useNavigation } from '@react-navigation/native'

import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"
import { TextTitle } from "../../components/TextTitle"
import { SearchBar } from "../../components/SearchBar"

export function Services () {
  const { navigate } = useNavigation()
  return (
    <Layout>
      <LayoutHeader>
        <SearchBar placeholder="Pesquisar serviços..." />
        <HStack
          alignItems='center'
        >
          <TextTitle title="Serviços" />
          <Pressable
            flexDir='row'
            ml='auto'
            bg='yellow.400'
            px={3}
            py={1}
            borderRadius={'full'}
            _pressed={{
              bg: 'yellow.500'
            }}
            shadow={1}
            onPress={() => navigate('newservice')}
          >
            <Text fontFamily='medium' mr={1}>Novo</Text>
            <PlusCircle />
          </Pressable>
        </HStack>
      </LayoutHeader>
      <LayoutBody>
        <VStack
          space={5}
        >
          <HStack
            bg={'gray.100'}
            shadow={2}
          >
            <Text
              flex={1}
              textAlign={'center'}
              fontSize={20}
            >
              Seja bem-vinda aos nossos serviços
            </Text>
          </HStack>
          <HStack
            space={2}
          >
            <Box
              borderColor={'gray.200'}
              borderWidth={1}
              w={'49%'}
              alignItems='center'
              py={5}
            >
              <Users />
              <Text>
                Consultoria
              </Text>
            </Box>
            <Box
              borderColor={'gray.200'}
              borderWidth={1}
              w={'49%'}
              alignItems='center'
              py={5}
            >
              <UsersThree />
              <Text>
                Mentoria e networking
              </Text>
            </Box>
          </HStack>

          <HStack
            space={2}
          >
            <Box
              borderColor={'gray.200'}
              borderWidth={1}
              w={'49%'}
              alignItems='center'
              py={5}
            >
              <Gear />
              <Text>
                Ferramentas
              </Text>
            </Box>
            <Box
              borderColor={'gray.200'}
              borderWidth={1}
              w={'49%'}
              alignItems='center'
              py={5}
            >
              <GraduationCap />
              <Text>
                Formação
              </Text>
            </Box>
          </HStack>

          <HStack
            space={2}
          >
            <Box
              borderColor={'gray.200'}
              borderWidth={1}
              w={'49%'}
              alignItems='center'
              py={5}
            >
              <Lightbulb />
              <Text>
                Outros serviços
              </Text>
            </Box>
          </HStack>
        </VStack>
      </LayoutBody>
    </Layout>
  )
}