import { useState } from 'react'
import {Show, SignInButton, SignUpButton, UserButton} from '@clerk/react'
import SecretDashboard from '../components/SecretDashboard'


import './App.css'

function App() {

  return (
    <>
      <header>
        <Show when='signed-out'>
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when='signed-in'>
          
          <UserButton />
        </Show>
      </header>
      <main>
        <Show when='signed-out'></Show>
        <Show when='signed-in'>
          <SecretDashboard />
        </Show>
      </main>
    </>
  )
}

export default App
