import React, {useEffect} from 'react';

function App() {
  let getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/notes')
    let data = await response.json()
    console.log(data)
  }
  useEffect(() => {
    getNotes()
  }, [])
  return (
    <>
      <h1 className="mt-52 font-bold">
        Hello world!
      </h1>
    </>

  );
}

export default App;
