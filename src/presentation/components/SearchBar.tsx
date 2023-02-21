import { useState } from 'react'
import { Box, HStack, Pressable, VStack } from "native-base"
import { MagnifyingGlass, X } from "phosphor-react-native"
import { Input } from './Input'

type Props = {
  onChangeText?: (text: string) => void
  initialValue?: string
}

export function SearchBar ({ onChangeText, initialValue }: Props) {
  const [showInput, setShowInput] = useState<boolean>(false)

  const handleToggleShow = () => {
    setShowInput(showInput => !showInput)
  }
  return (
    <HStack
      space={2}
      alignItems='center'
      mb={2}
    >
      <Pressable
        borderRadius={"full"}
        borderWidth={2}
        borderColor='yellow.500'
        display={'flex'}
        p={1}
        bg='white'

        onPress={handleToggleShow}
      >
        {showInput ? <X /> : <MagnifyingGlass />}
      </Pressable>
      {showInput && <VStack flex={1}>
        <Input
          nolabel
          w={'full'}
          h={10}
          py={2}
          placeholder='Pesquisar...'
          onChangeText={onChangeText}
          defaultValue={initialValue}
        />
      </VStack>}
    </HStack>
  )
}