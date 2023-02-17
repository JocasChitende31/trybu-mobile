import { Box, HStack, Text, VStack } from "native-base"
import { Gear, GraduationCap, Lightbulb, Users, UsersFour, UsersThree } from "phosphor-react-native"
import { Header } from "../components/Header"

export function Services () {

  return (
    <VStack flex={1} bg={'white'}>
      <Header
        title={'Serviços'}
        showBackButton
      />
      <HStack
        p={5}
        mt={5}
        mx={5}
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
        p={5}
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
        px={5}
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
        p={5}
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
  )
}