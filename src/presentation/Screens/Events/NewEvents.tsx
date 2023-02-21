import DateTimePicker from "@react-native-community/datetimepicker"
import * as ImagePicker from 'expo-image-picker'

import { IInputProps, VStack, HStack, Box, Text, Pressable, Image } from "native-base"
import { useState } from "react"
import { Alert } from "react-native"
import { IEvent } from "../../../@types/event"
import { makeAxiosHttpClient } from "../../../main/factory/axios-http-client-factory"
import { DateUtils } from "../../../utils/date-utils"

import { Button } from "../../components/Button"
import { Input, TextArea } from "../../components/Input"
import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"
import { TextTitle } from "../../components/TextTitle"

export function NewEvents () {
  const [formData, setFormData] = useState<IEvent>({} as IEvent)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [photo, setPhoto] = useState<{ uri: string, type: string, name: string }>(null)

  const [photoProps, setPhotoProps] = useState({ width: 0, height: 0 })

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      const { uri, type, fileName, width, height } = result.assets[0]

      const splitName = uri.split('/')
      const name = fileName ?? splitName[splitName.length - 1]

      const exSplit = name.split('.')
      const ext = exSplit[exSplit.length - 1]

      const typeSplit = type.split('/')
      let newType: string = type
      if (typeSplit.length == 1) {
        newType = `${type}/${ext}`
      }

      setPhotoProps({ width, height })
      setPhoto({ uri, type: newType, name })
    }
  }

  const [modeDate] = useState('date')
  const [modeTime] = useState('time')

  const [showStartDate, setShowStartDate] = useState(false)
  const [showStartTime, setShowStartTime] = useState(false)

  const [showEndDate, setShowEndDate] = useState(false)
  const [showEndTime, setShowEndTime] = useState(false)

  const [startDate, setStartDate] = useState<string>('')
  const [startTime, setStartTime] = useState<string>('')

  const [endDate, endStartDate] = useState<string>('')
  const [endTime, setEndTime] = useState<string>('')

  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate
    setShowStartDate(false)
    setStartDate(DateUtils.getDateEn(currentDate))
  }

  const onChangeStartTime = (event, selectedTime) => {
    const currentTime = selectedTime

    setShowStartTime(false)
    setStartTime(DateUtils.getHourMinute(currentTime) + ':00')
  }

  const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate
    setShowEndDate(false)
    endStartDate(DateUtils.getDateEn(currentDate))
  }

  const onChangeEndTime = (event, selectedTime) => {
    const currentTime = selectedTime
    setShowEndTime(false)
    setEndTime(DateUtils.getHourMinute(currentTime) + ':00')
  }

  const handleInputChange = (text: string, name: string) => {
    setIsLoading(false)
    setFormData({ ...formData, [name]: text })
  }

  const handleSubmit = async (): Promise<void> => {
    const formDataBody = new FormData()

    const data = {
      ...formData,
      startsAt: startDate && startTime ? `${startDate} ${startTime}` : undefined,
      endsAt: endDate && endTime ? `${endDate} ${endTime}` : undefined,
    } as IEvent

    const formObject = Object.keys(data)

    for (let i = 0; i < formObject.length; i++) {
      const value = Object.values(data)[i]
      formDataBody.append(formObject[i], value ? value.toString() : '')
    }
    if (photo) {
      console.log('photo', photo)

      formDataBody.append('picture', photo as any)
    }

    setIsLoading(true)

    const { statusCode, body } = await makeAxiosHttpClient().post({
      url: '/events',
      body: formDataBody,
      options: {
        hasFormData: true
      }
    })
    setIsLoading(false)

    if ([200, 201].includes(statusCode)) {
      Alert.alert('Sucesso', 'Dados registados com sucesso.')
    } else {
      Alert.alert('Erro', 'Erro ao cadastrar' + body?.message)
    }
  }

  return (
    <Layout backTo="events">
      <LayoutHeader>
        <TextTitle title="Criar Evento" />
      </LayoutHeader>

      <LayoutBody
      >
        <VStack space={2}>
          <Input
            required
            label="Título do evento"
            type="text"
            placeholder="Título do evento"
            onChangeText={(text) => handleInputChange(text, 'title')}
          />
          <HStack space={3}>
            {
              showStartDate &&
              <DateTimePicker
                value={new Date()}
                mode={modeDate as any}
                onChange={onChangeStartDate}
              />}
            <Input
              required
              label="Data início"
              type="text"
              value={startDate}
              placeholder="Data início"
              width={'48%'}
              onPressIn={() => setShowStartDate(true)}
              onChangeText={(text) => handleInputChange(text, 'startDate')}
            />
            {
              showStartTime &&
              <DateTimePicker
                value={new Date()}
                mode={modeTime as any}
                is24Hour={true}
                onChange={onChangeStartTime}
              />}
            <Input
              required
              label="Hora início"
              type="text"
              value={startTime}
              placeholder="Hora início"
              width={'48%'}
              onPressIn={() => setShowStartTime(true)}
              onChangeText={(text) => handleInputChange(text, 'startTime')}
            />
          </HStack>
          <HStack space={3}>
            {
              showEndDate &&
              <DateTimePicker
                value={new Date()}
                mode={modeDate as any}
                onChange={onChangeEndDate}
              />}
            <Input
              label="Data fim"
              type="text"
              value={endDate}
              placeholder="Data fim"
              width={'48%'}
              onPressIn={() => setShowEndDate(true)}
              onChangeText={(text) => handleInputChange(text, 'endDate')}
            />
            {
              showEndTime &&
              <DateTimePicker
                value={new Date()}
                mode={modeTime as any}
                is24Hour={true}
                onChange={onChangeEndTime}
              />}
            <Input
              label="Hora fim"
              type="text"
              value={endTime}
              placeholder="Hora fim"
              width={'48%'}
              onPressIn={() => setShowEndTime(true)}
              onChangeText={(text) => handleInputChange(text, 'endTime')}
            />
          </HStack>
          <Input
            required
            label="Local"
            type="text"
            placeholder="Local"
            onChangeText={(text) => handleInputChange(text, 'address')}
          />
          <Input
            label="Preço"
            type="text"
            placeholder="Preço"
            onChangeText={(text) => handleInputChange(text, 'price')}
          />
          <Input
            type="text"
            placeholder="Contactos"
            onChangeText={(text) => handleInputChange(text, 'contact')}
          />
          <Box>
            <Text color={'gray.500'} mb={1}>
              Imagem/Banner/capa do evento
            </Text>
            <Pressable
              h={32}
              p={2}
              alignItems='center'
              justifyContent='center'
              borderWidth={"1"}
              borderStyle='dashed'
              onPress={handleChoosePhoto}
            >
              {photo ?
                <Image source={{ uri: photo.uri }} alt='Foto'
                  width={'full'}
                  height={'full'}
                />
                :
                <Text color={'gray.500'}>Clique para adicionar a imagem</Text>
              }
            </Pressable>
          </Box>
          <TextArea h={20}
            label="Legenda/conteúdo"
            placeholder="Descreva aqui de forma resumida 
            os pontos que serão abordados no seu evento"
            fontSize='md'
            onChangeText={(text) => handleInputChange(text, 'description')}
          />
          <Button
            title={`Salvar`}
            type="PRIMARY"
            onPress={handleSubmit}
            isLoading={isLoading}
          />
        </VStack>
      </LayoutBody>
    </Layout >
  )
}

interface Props extends IInputProps {
  label?: string
}

// function Input ({ label, width, ...rest }: Props) {
//   return (
//     <Box alignItems="center" w={width}>
//       <FormControl isRequired >
//         <FormControl.Label>{label ?? rest.placeholder}</FormControl.Label>
//         <InptupNativeBase
//           fontSize='md'
//           {...rest}
//         />
//       </FormControl>
//     </Box>
//   )
// }