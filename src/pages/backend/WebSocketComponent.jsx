import React, { useEffect, useState } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const WebSocketComponent = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const socket = new SockJS('http://localhost:8080/websocket');
        const stompClient = new Client({
            webSocketFactory: () => socket,
            debug: function (str) {
                console.log(str);
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        });

        stompClient.onConnect = (frame) => {
            console.log('Connected: ' + frame);

            stompClient.subscribe('/topic/payment-status', (msg) => {
                if (msg.body) {
                    console.log('Message received: ', msg.body);
                    const parsedMessage = JSON.parse(msg.body);
                    const formattedMessage = JSON.stringify(parsedMessage, null, 2); 
                    console.log('Formatted message received: ', formattedMessage);
                    setMessage(formattedMessage);
                } else {
                    console.log('Received empty message');
                }

            });
        };

        stompClient.activate();

        return () => {
            stompClient.deactivate();
        };
    }, []);

    return (
        <div>
            <h1>WebSocket Message</h1>
            <p>{message}</p>
        </div>
    );
};

export default WebSocketComponent;
