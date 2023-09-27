import { useState } from 'react'
import { Switch } from '@headlessui/react'
import logo from './logo.svg';

function App() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState('');

  const toggleMode = () => {
    setEnabled(!enabled);
    if(enabled) setMode('');
    else setMode('');
  }

  return (
    <div className={`${mode}`}>
      <div className='text-center'>
        {/* HOVER, AND FOCUS STATES */}
        {/* Template */}
        {/* <nav className="p-9">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-link' : 'bg-black bg-opacity-10'}
              relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </nav> */}
        {/* Final */}
        {/* <nav className="bg-gradient-to-r from-white to-link dark:from-primary dark:to-link to-80% p-9">
          <Switch
            checked={enabled}
            onChange={toggleMode}
            className={`${enabled ? 'bg-link' : 'bg-black bg-opacity-10'}
              relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </nav> */}
        
        {/* UTILITY FUNDAMENTALS */}
        {/* Template */}
        <header className="bg-primary min-h-screen flex flex-col items-center justify-center text-white text-header">
          <img src={logo} className="animate-logo h-[40vmin]" alt="logo" />
          <p className='text-primary dark:text-white'>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="text-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* Final */}
        {/* <header className="bg-white dark:bg-primary min-h-screen flex flex-col items-center justify-center text-white text-header">
          <img src={logo} className="animate-logo h-[40vmin]" alt="logo" />
          <p className='text-primary dark:text-white'>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="text-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        {/* RESPONSIVENESS & CUSTOM STYLE */}
        {/* Template */}
        {/* <div className='p-9 grid grid-cols-4 grid-flow-row place-items-center'>
          <div className='bg-link w-[200px] h-[200px] flex items-center justify-center'>1</div>
          <div className='bg-link w-[200px] h-[200px] flex items-center justify-center'>2</div>
          <div className='bg-link w-[200px] h-[200px] flex items-center justify-center'>3</div>
          <div className='bg-link w-[200px] h-[200px] flex items-center justify-center'>4</div>
        </div> */}
        {/* Final */}
        {/* <div className='p-9 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-row place-items-center gap-9'>
          <div className='card'>1</div>
          <div className='card'>2</div>
          <div className='card'>3</div>
          <div className='card'>4</div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
