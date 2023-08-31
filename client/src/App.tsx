import { useEffect, useState } from 'react';
import api from './api';

const getGreeting = async function () {
  try {
    return (await api.get('/items')).data;
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    getGreeting().then((res) => setGreeting(res.message));
  });

  return (
    <div className='container mx-auto px-4' data-theme='dark'>
      <h1 className='text-3xl font-bold underline'>Hello World</h1>
      <h2 className='text-2xl'>And server says: {greeting}</h2>
    </div>
  );
}

export default App;
