import React from 'react';
import './Dashboard.scss';

import { CTX } from '../../../Components/Chat/Store/Store.js';

export default function Dashboard() {

    // CTX store
    const { allChats, sendCheckAction, user } = React.useContext(CTX);
    // console.log(allChats);
    const topics = Object.keys(allChats);

    // local state
    // const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
    const [activeTopic] = React.useState(topics[0]);
    const [textValue, changeTextValue] = React.useState('');
    // const [usernameValue, changeUsernameValue] = React.useState('');
    const [usernameValue] = React.useState('');

    return (
        <>
            <div className='Dashboard'>
                <h1>Message</h1>
                {/* <h3>
                    {activeTopic}
                </h3> */}
                <div className='flex'>
                    {/* <div className='topicsWindow'>
                        <div>
                            {
                                topics.map(topic => (
                                    <button onClick={e => changeActiveTopic(e.target.innerText)} key={topic}>
                                        {topic}
                                    </button>
                                ))
                            }
                        </div>
                    </div> */}
                    <div className='chatWindow'>
                        {
                            allChats[activeTopic].map((chat, i) => (
                                <div className='flex' key={i}>
                                    <label>{chat.from}</label>
                                    <p>{chat.msg}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex text-button'>
                    {/* <input type='text' 
                        value={usernameValue}
                        onChange={e => changeUsernameValue(e.target.value)} /> */}
                    <textarea
                        placeholder='Send a text'
                        className='chatbox'
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}>
                    </textarea>
                    <button
                        className='button'
                        onClick={() => {
                            sendCheckAction({ from: user, username: usernameValue, msg: textValue, topic: activeTopic });
                            changeTextValue('');
                        }}
                    >
                        Send
                        </button>
                </div>
            </div>
        </>
    );
}