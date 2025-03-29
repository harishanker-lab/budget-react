import React from 'react'
import {  Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryForm from './EntryForm';
function NewEntryForm({addEntry,description,value,isExpense,setDescription,setValue,setIsExpenses}) {
 
  return (
    <Form unstackable>
   <EntryForm 
   description={description}
   value={value}
   isExpense={isExpense}
   setDescription={setDescription}
   setValue={setValue}
   setIsExpenses={setIsExpenses}
 />
      <ButtonSaveOrCancel 
      addEntry={addEntry} 
      />
         </Form>   
  );
}

export default NewEntryForm;
