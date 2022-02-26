import React, { useState } from 'react'
import { firestore, auth } from '../services/firebase'
import firebase from 'firebase'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await firestore.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='border-2 border-indigo-500 rounded-b-md'>
             <form onSubmit={sendMessage} className="w-full flex justify-center">
                <input
                    className="h-8 p-2 w-full focus:outline-none rounded-bl-lg" value={msg} onChange={e => setMsg(e.target.value)}/>
                <button type="submit" className="w-16 font-bold tracking-wider text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">SEND</button>
            </form>
        </div>
    )
}

export default SendMessage
