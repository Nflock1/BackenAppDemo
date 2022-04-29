import {useState} from 'react';
import axios from '../axios';

function  Tile(props) {
    const [userText, setUserText] = useState('');
    const [passText, setPassText] = useState('');
    const [output, setOutput] = useState('Output will display here');

    function submit() {
        let req = {username: userText, password: passText}; 
        console.log(userText+ "    " + passText);
        axios
         .post('/api/register', {username: userText, password: passText})
         .then((res) => setOutput(res.message))
         .catch((res) => setOutput(res.message));
    }

    function getInputA(event){
        setUserText(event.target.value);
    }

    function getInputB(event){
        setPassText(event.target.value);
    }
    const style1 = {padding: '1rem'};
    const style2 = {align: 'center'};
    return (
        <div className={props.className}>
            <h1>{props.call}</h1>

            <div style = {{...style1, ...style2}}>
                <p style = {{align: 'center'}}>{props.instruct}</p>
            </div>
            <div>
                <label htmlFor = "username">username: </label>
                <input name = 'username' onChange = {getInputA}></input>
            </div>
            <div>
                <label htmlFor = "password" id = "password">password: </label>
                <input name = 'password' onChange = {getInputB}></input>
            </div>
            <div>
                <button onClick = {submit}>submit</button>
            </div>

            <div>
                <h3>{output}</h3>
            </div>
        </div>
    );
}


export default Tile;