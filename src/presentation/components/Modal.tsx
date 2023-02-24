import React from 'react';

import { AlertDialog, Button, Center } from "native-base"

type ModalPros = {
  title: string
  text: string
  open: boolean
  onClose?: () => void
  onConfirme: () => void
}

export const ModalAlert = ({ title, text, onClose, open, onConfirme }: ModalPros) => {
  const [isOpen, setIsOpen] = React.useState(open)

  React.useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleClose = () => {
    if (onClose) onClose()
    setIsOpen(false)
  }

  const cancelRef = React.useRef(null)
  return <Center>
    <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={handleClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>{title}</AlertDialog.Header>
        <AlertDialog.Body>
          {text}
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              bg="gray.200"
              onPress={handleClose}
              ref={cancelRef}
              _pressed={{
                bg: 'gray.300'
              }}
            >
              Cancelar
            </Button>
            <Button colorScheme="yellow" onPress={onConfirme}>
              Confirmar
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  </Center>
}