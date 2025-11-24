import './App.css'
import Gallery from './components/Gallery';
import ToDoList from './components/ToDoList';

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}


function App() {

  return (
    <>
      <section>
        <h1>Amazing scientists</h1>
        <Profile/>
        <Profile/>
        <Profile/>
      </section>

      <Gallery/>
      <ToDoList/>

    </>
  )
}

export default App