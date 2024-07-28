
import CardUi from './component/CardUi';
import Themebtn from './component/Themebtn';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import React from 'react'

function App() {


  return (
    <ThemeContextProvider>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* Theme  */}
                        <Themebtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                       <CardUi  />
                    </div>
                </div>
            </div>
      </ThemeContextProvider>

  )
}

export default App
