'use client';

import { trpc } from '@/lib/trpc/trpc';
import { useState } from 'react';

export function WebSocketMessageScreen() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [typingName, setTypingName] = useState('');
  const [typingMessage, setTypingMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const addMutation = trpc.addMutation.useMutation();
  const typingMutation = trpc.typingMutation.useMutation();

  trpc.addSubscription.useSubscription(
    {
      room,
    },
    {
      onData(data) {
        setMessages([...messages, data.message]);
      },
    }
  );

  trpc.typingSubscription.useSubscription(
    {
      room,
      name,
      message,
    },
    {
      onData(data) {
        setTypingName(data.name);
        setTypingMessage(data.message);
      },
    }
  );

  function onAdd() {
    addMutation.mutate({ room, message, name });
  }

  return (
    <div>
      <input
        placeholder='Name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder='Room'
        value={room}
        onChange={e => setRoom(e.target.value)}
      />
      <input
        placeholder='Message'
        value={message}
        onChange={e => {
          setMessage(e.target.value);
          typingMutation.mutate({ room, name, message: e.target.value });
        }}
      />

      <button onClick={onAdd}>Send chat</button>

      {!!typingName && <p>{`${typingName} typing "${typingMessage}"`}</p>}

      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}
