import React from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import News from './components/News';

function App() {
  return (
    <div className="App 2xl:flex 2xl:justify-center 2xl:items-center">
      <main className="w-full 2xl:w-width min-h-full p-4 md:p-10 lg:p-16 xl:px-24">
        <div>
          <Header></Header>
          <News></News>
          <List></List>
        </div>
      </main>
    </div>
  );
}

export default App;
