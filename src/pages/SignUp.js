import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [user, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // useEffect(()=>{
    //     fetchUsers();
    // }, []);

    // const fetchUsers = () => {
    //     axios.get('http://localhost:3000/register')
    //     .then((res)=>{
    //         console.log(res.data);
    //     })
    // }

    const handleRegister = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/register", { username, email, password })
        .then(()=>{
            alert('Registration Successful!')
            setEmail('')
            setPassword('')
            setUsername('')
            // fetchUsers()
            navigate("/login")
        })
        .catch((e)=>{
            console.error(e);
        })
    }

  return (
    <div className='w-full h-screen flex'>
        <div className='w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'>
            <form onSubmit={handleRegister} className='text-center border rounded-lg w-[600px] h-[400px] p-9'>
            {/* Inputs */}
            <label>Email</label>
            <br/>
            <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' type="text" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <br/>
            <br/>
            <label>Username</label>
            <br/>
            <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' type="text" placeholder='Enter your username' value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
            <br/>
            <br/>
            <label>Password</label>
            <br/>
            <input className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2' type="password" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <br/>
            <br/>
            <button type="submit" className='w-[200px] h-[50px] border hover:bg-teal-900'>Sign Up</button>
            </form>
        </div>
        <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-800'>
            <h2 className='text-4xl text-white'>Sign up 😤</h2>
        </div>
    </div>
  )
}

export default SignUp