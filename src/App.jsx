import './App.css'
import Chat from './Chat'
import Contact from './components/Contact'
import Header from './components/Header'

function App() {

  return (
    <div className='web-test'>
      <Contact/>
      <div className='chat'>
        <Header/>
        <Chat/>
      </div>
      <div className='comment'>
        <h1>ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</h1>
      </div>
    </div>

  )
}

export default App
