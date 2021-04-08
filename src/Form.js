import {useState} from 'react';

const Form = ({addProfessor}) => {

    const [name, setName] = useState('Itay Peceniski');
    const [bio, setBio] = useState('Developer @ Stone');
    const [ies, setIes] = useState('TADS-UFPR');

    const btnClickHandler = () => {
        addProfessor({ name, bio, ies })
        setName('');
        setBio('');
        setIes('');
    }

    return (
        <div className='form' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <input type='text' placeholder='name' value={name} onChange={evt => setName(evt.target.value)} />
            <textarea rows='2' placeholder='bio' value={bio} onChange={evt => setBio(evt.target.value)}></textarea>
            <input type='text' placeholder='ies' value={ies} onChange={evt => setIes(evt.target.value)} />
            <button onClick={btnClickHandler}>Criar</button>
        </div>
    )
}

export default Form;