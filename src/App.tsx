import React from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <main className="w-full min-h-full p-4">
        <Header></Header>
        <News></News>
        <List></List>
      </main>
    </div>
  );
}

export default App;
