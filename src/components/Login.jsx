// Global Import
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Local Import
import "../dist/login.scss";

export default function Login({ login, setLogin }) {
    const USER_LINK_API = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [mailInput, setMailInput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const { data } = await axios.get(USER_LINK_API);
                setUsers([...data]);
            } catch (error) {
                console.log(error);
            }
        };
        getAllUsers();
    }, []);

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleMailInput = (e) => {
        setMailInput(e.target.value);
    };

    const onLogin = (e) => {
        e.preventDefault();
        users.map((user) => {
            if (user.username === userInput && user.email === mailInput) {
                return setLogin(true), navigate(`/board/${userInput}`);
            } else {
                return console.log("hata");
            }
        });
    };

    return (
        <div className='login'>
            <h3>Rast Mobile Kanbanboard Giriş Sayfası</h3>
            <input
                type='text'
                placeholder='Kullanıcı Adı'
                onChange={handleUserInput}
                value={userInput}
            />
            <input
                type='text'
                placeholder='Email'
                onChange={handleMailInput}
                value={mailInput}
            />
            <button onClick={onLogin}>Giriş Yapın</button>
        </div>
    );
}
