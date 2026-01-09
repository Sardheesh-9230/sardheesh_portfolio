import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { extend } from '@react-three/fiber'
import * as THREE from 'three'
import './index.css'
import App from './App.tsx'

// Extend THREE namespace for React Three Fiber
extend(THREE)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
