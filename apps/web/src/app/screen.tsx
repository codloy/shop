'use client';

import { trpc } from '@/lib/trpc/trpc';
import { useState } from 'react';

export function HomeScreen() {
  const [room, setRoom] = useState('hey');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const addMutation = trpc.addMutation.useMutation();
  // trpc.randomNumberSubscription.useSubscription(undefined, {
  //   onData(data) {
  //     console.log(data);
  //   },
  // });
  trpc.addSubscription.useSubscription(
    {
      chatId: room,
    },
    {
      onData(data) {
        setMessages([...messages, data.message]);
      },
    }
  );

  function onAdd() {
    addMutation.mutate({ chatId: room, message });
  }

  return (
    <div>
      <input value={room} onChange={e => setRoom(e.target.value)} />
      <input value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={onAdd}>add</button>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}
