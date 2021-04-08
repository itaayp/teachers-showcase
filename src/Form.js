import {useState} from 'react'

const Form = () => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [ies, setIes] = useState('');
    return (
        <div className="form" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <input type='text' placeholder="name" value={name} onChange={evt => setName(evt.target.value)}/>
            <tesxtarea rows="2" placeholder="bio" value={bio}  onChange={evt => setName(evt.target.value)}></tesxtarea>
            <input type='text' placeholder="ies" value={ies}  onChange={evt => setName(evt.target.value)}/>

            <button onClick={() => addProfessor({name, bio, ies})} type='submit'>Criar</button>
        </div>
    )
}