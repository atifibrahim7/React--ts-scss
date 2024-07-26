import './styles/index.scss'
import BaseModelWrapper from './components/BaseModelPopup/BaseModelWrapper'
import { useState } from 'react'
function App() {

  const [isModalVisible , setIsModalVisible] = useState<boolean>(false)  

  const toggleModal = ()=> {
    setIsModalVisible(!isModalVisible)
  }
  return (
      <div className='container' >
        <button onClick={toggleModal}>+</button>
        <h1>My React App</h1>
        <p>My first React App</p>
        <BaseModelWrapper isModalVisible={isModalVisible}   onBackdropClick= {toggleModal} />

      </div>
      )
}

export default App
