import React, { useState, useEffect, useRef } from 'react'
import { firestore, auth } from '../services/firebase'
import SendMessage from './SendMessage'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        firestore.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div className='flex flex-col'>
            <div className="border-2 border-indigo-500 rounded-t-md bg-gray-500 p-4 w-96 overflow-y-scroll flex flex-col h-128 max-w-7xl min-w-7xl">
                {messages.map(({ id, text, photoURL, uid, name }) => (
                    <div>
                        <div key={id} className={`flex p-5 items-center my-2 rounded-full ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <div className="group">
                                <img className='bg-black rounded-full h-12 w-12 border-2 border-black' src={photoURL} alt="" />
                            </div>
                            <p className='font-medium text-md break-words'>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>

        </div>
    )
}

export default Chat
