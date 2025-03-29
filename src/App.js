
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';

import DisplayBalance from './components/DisplayBalance';
import EntryLines from './components/EntryLines'; 

import DisplayBalances from './components/DisplayBalances';
import NewEntryForm from './components/NewEntryForm';
import {  useEffect, useState } from 'react';
import ModalEdit from './components/ModalEdit';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const[entries,setEntries] =useState(intialEntries);
   const [description, setDescription]=useState('');
    const[value,setValue] =useState('');
    const[isExpense,setIsExpenses]=useState(true);
    const[entryId,setEntryId]=useState();
    const[totalIncome,setIncomeTotal]=useState(0);
    const[totalExpenses,setExpensesTotal]=useState(0);
    const[total,setTotal]=useState(0);

    
    useEffect(()=>{
      if(!isOpen && entryId){
        const index=entries.findIndex(entry=>entry.id ===entryId)
        const newEntries= [...entries];
        newEntries[index].description=description;
        newEntries[index].value=value;
        newEntries[index].isExpense=isExpense;
        setEntries(newEntries);
        resetEntry();
      }
      //eslint-disble-next-line react-hooks/exhaustive-deps
    },[!isOpen])

    useEffect(()=> {
      let totalIncome = 0;
      let totalExpenses =0;
      entries.map(entry=>{
        if(entry.isExpense){
          return (totalExpenses +=Number(entry.value))
        }
          return (totalIncome +=Number(entry.value))
        

      }); 
      setTotal(totalIncome-totalExpenses);
      setExpensesTotal(totalExpenses);
      setIncomeTotal(totalIncome);
    },[entries]);

  function deleteEntry(id){
    const result = entries.filter(entry =>entry.id !==id);
    setEntries(result);
  }
    function editEntry(id){
      console.log('edit entry with id ${id}');
      if(id){
        const index =entries.findIndex(entry=>entry.id===id)
        const entry=entries[index];
        setEntryId(id);
        setDescription(entry.description);
        setValue(entry.value);
        setIsExpenses(entry.isExpense);
        setIsOpen(true);
      }

    
  }
  function addEntry(description, value,isExpense) {
    const result=entries.concat({
      id:entries.length + 1,
      description,
      value,
      isExpense
    });
    console.log('result',result);
    console.log('entries',entries);
    setEntries(result);
    resetEntry(); 
  }
   function resetEntry(){
   setDescription('');
   setValue('');
   setIsExpenses(true);
   }   

  return ( 
    <Container>
      <MainHeader title="Budget"/>
      <DisplayBalance title='Your Balance:'value={total} size='small' />
      
        <DisplayBalances  totalIncome={totalIncome} totalExpenses={totalExpenses}/>
      <MainHeader title="History" type="h3" />
      
      <EntryLines 
      entries={entries} 
      deleteEntry={deleteEntry}
      editEntry={editEntry}
       />
    
       <MainHeader title="Add new transaction" type="h3" />
       <NewEntryForm addEntry={addEntry}
       description={description}
       value={value}
       isExpense={isExpense}
       setDescription={setDescription}
       setValue={setValue}
       setIsExpenses={setIsExpenses}/>
       
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} 
      addEntry={addEntry}
      description={description}
      value={value}
      isExpense={isExpense}
      setDescription={setDescription}
      setValue={setValue}
      setIsExpenses={setIsExpenses}/>
    </Container>
  );
}

export default App;

var intialEntries =[
  {
    id:1,
    description : "work income",
    value: 1000.00,
    isExpense :false
  },
  {
    id:2,
    description : "water bill",
    value: 20.00,
    isExpense :true
  },
  {
    id:3,
    description : "Rent",
    value :300,
    isExpense :true
  },
  {
    id:4,
    description :"power bill",
    value : 50,
    isExpense :true
  }
]
