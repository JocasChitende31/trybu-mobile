import { useState, useCallback, useEffect } from 'react'
import { Box, HStack, Text, VStack, Pressable } from "native-base"
import { useNavigation } from '@react-navigation/native'

import { InterfaceVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack"
import { UserCircle, X } from "phosphor-react-native"
import { IUser } from "../../@types/user"
import { StringUtils } from "../../utils/string-utils"
import { useAuth } from '../../hooks/useAuth'

type Props = {
  author: IUser
  label?: string
}

export function AuthorBox ({ author, label }: Props) {
  const { navigate } = useNavigation()
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const handleHide = () => {
    setShowInfo(true)
  }
  return (
    <Box position='relative'>
      <BoxInfo show={showInfo} onHiding={() => setShowInfo(false)}
        author={author}
      />
      <HStack space={1} alignItems='center' flex={1}>
        {
          label ?
            <Text>{label}</Text> :
            <UserCircle size={18} />
        }
        <Pressable
          onPress={handleHide}

        >
          <Text fontFamily='medium'>{StringUtils.getFirstAndLastWord(author.name)}</Text>
        </Pressable>
      </HStack>

    </Box>
  )
}


interface BoxInfoProps extends InterfaceVStackProps {
  author: IUser
  show: boolean
  onHiding: () => void
}

function BoxInfo ({ author, show, onHiding, ...props }: BoxInfoProps) {
  const { navigate } = useNavigation()
  const { user } = useAuth()
  const [open, setOpen] = useState(show)

  useEffect(() => setOpen(show), [show])

  const handleHidden = () => {
    onHiding()
    setOpen(false)
  }
  const handleGoProfile = () => {
    navigate('profile', { user: author })
  }

  return (
    <>
      {open &&
        <VStack
          bg='white'
          shadow={2}
          p={4}
          position='absolute'
          right={0}
          bottom={-50}
          zIndex={99999000}
          {...props}
        >
          <Box position='relative'>
            <HStack position='absolute' top={-10} right={-10}>
              <Pressable onPress={handleHidden}>
                <X size={17} />
              </Pressable>
            </HStack>
            <VStack>
              <Text fontFamily='medium'>{author.name}</Text>
              {author.email && <Text>{author.email}</Text>}
              <Box flexDir='row'>
                <Pressable
                  bg='blue.500'
                  px={3}
                  py={1}
                  onPress={handleGoProfile}
                >
                  <Text>Ver Perfil</Text>
                </Pressable>
              </Box>
            </VStack>
          </Box >
        </VStack >
      }
    </>
  )
}