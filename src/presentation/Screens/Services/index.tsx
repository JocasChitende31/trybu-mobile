import { Box, HStack, Text, VStack } from "native-base"
import { Gear, GraduationCap, Lightbulb, Users, UsersThree } from "phosphor-react-native"
import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"
import { TextTitle } from "../../components/TextTitle"

export function Services () {

  return (
    <Layout>
      <LayoutHeader>
        <TextTitle title="Serviços" />
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