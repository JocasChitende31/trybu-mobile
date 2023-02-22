import DateTimePicker from "@react-native-community/datetimepicker"
import { useToast } from "native-base"
import { VStack, HStack } from "native-base"
import { useState } from "react"
import { Alert } from "react-native"
import { IEvent } from "../../../@types/event"
import { makeAxiosHttpClient } from "../../../main/factory/axios-http-client-factory"
import { DateUtils } from "../../../utils/date-utils"

import { Button } from "../../components/Button"
import { Input, TextArea } from "../../components/Input"
import { Layout, LayoutBody, LayoutHeader } from "../../components/Layout"
import { TextTitle } from "../../components/TextTitle"
import { UploadContainer, UploadFileProps } from "../../components/UploadContainer"

export function NewEvents () {
  const toast = useToast()

  const [formData, setFormData] = useState<IEvent>({} as IEvent)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [photo, setPhoto] = useState<UploadFileProps>(null)

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
    return toast.show({
      title: 'Acção em desenvolvimento. Aqui vai poder cadastrar eventos.',
      placement: 'top',
      bgColor: 'green.500'
    })
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

          <UploadContainer
            onSelectFile={setPhoto}
            label='Imagem/Banner/capa do evento'
            placeholder="Clique aqui para selecionar imagem"
          />

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