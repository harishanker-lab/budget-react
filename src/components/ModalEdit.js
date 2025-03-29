import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import NewEntryForm from './NewEntryForm'

function ModalEdit(isOpen,
  setIsOpen,description,value,isExpense,setDescription,setValue,setIsExpenses
) {
  return <Modal open={isOpen}>
    <Modal.Header>Edit entry</Modal.Header>
    <Modal.Content>
      <NewEntryForm />
      <Modal.Description>Something here</Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={()=>setIsOpen(false)}>close</Button>
      <Button onClick={()=>setIsOpen(false)} primary>ok</Button>
    </Modal.Actions>
  </Modal>
  
  
}

export default ModalEdit
