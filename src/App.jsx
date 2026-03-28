import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './app.module.css'

function App() {
  //состояние для текущего значения
  const [value, setValue] = useState('');


  return (
    <>
      <h1 className={styles['blue']}>Шаблон для разработки</h1>
    </>
  )
}

export default App
