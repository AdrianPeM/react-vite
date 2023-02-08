import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [quantity, setQuantity] = useState('')

  const handleChange = useCallback(e => {
    setQuantity(e.target.value)
  }, [])

  const handleSubmit = useCallback(e => {
    e.preventDefault()
    setCount(count => count + Number(quantity))
  }, [quantity])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/react-vite/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <form style={{ marginTop: '1rem' }} onSubmit={handleSubmit}>
          <label htmlFor="quantity">Quantity</label>
          <br />
          <input autoComplete="nio" type="number" name="quantity" id="quantity" onChange={handleChange} />
          <br />
          <button>Add quantity</button>
        </form>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
