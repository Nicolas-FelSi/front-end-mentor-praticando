import './App.css'

function App() {
  return (
    <>
      <header className='flex justify-between px-4 py-6  shadow'>
        <p className='font-bold'>Where in the world?</p>
        <div>
          <span>icone</span>
          <span>Dark Mode</span>
        </div>
      </header>
      <main className='bg-slate-200 p-4'>
        <input className='rounded p-4' type="text" placeholder='Search for a country'/>
      </main>
    </>
  )
}

export default App
