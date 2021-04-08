import Card from './Cards'
import CardList from './CardList'
import Form from './Form'
import {useState} from 'react';


function App() {
  const [professores, setProfessores] = useState([
    {name: 'Itay Peceniski', bio: 'Programador na @Stone', ies: 'TADS - UFPR'},
    {name: 'Tomer Peceniski', bio: 'Growth na @Stone', ies: 'Eng. Civil - UFPR'}
  ]);

  const addProfessor = professor => setProfessores([...professores, professor])


  return (
    <>
    <CardList>
      {
        professores.map({name, bio, ies}, index => <Card key={index} name={name} bio={bio} ies={ies} />)
      }
    </CardList>
    <Form/>
    </>
  )
}

const props = {name: ''}
export default App;
