import './App.css'

function App() {

  return (
      <div className="container flex flex-col gap-3">
        <label htmlFor="jmb">Unesi svoj JMB (jedinstveni matični broj):</label>
        <input className='bg-white text-black h-14 px-4 rounded' type="number" name="jmb" id="jmb" minLength={13} maxLength={13} required autoFocus />
        <button id="btn">OK</button>
        <p id="p"></p>
    </div>
  )
}

export default App
