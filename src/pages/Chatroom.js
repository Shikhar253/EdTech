import React from 'react';
import Chat from "./Chat"

export default function Chatroom() {
    return (
        <div className='mx-4 pt-8 pb-12'>

            <div className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl text-white font-semibold tracking-wide">
                    Chatroom
                </h1>
                <div className="inline-flex h-1 bg-secondary rounded-full w-56"></div>
            </div>

            <div className="flex justify-center items-center h-screen mx-4">
                <Chat />
            </div>
        </div>
    );
}
