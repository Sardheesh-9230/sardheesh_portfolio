/// <reference types="@react-three/fiber" />
/// <reference types="three" />

import { ThreeElements } from '@react-three/fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Lights
      ambientLight: any
      pointLight: any
      directionalLight: any
      spotLight: any
      hemisphereLight: any
      
      // Materials  
      meshStandardMaterial: any
      meshBasicMaterial: any
      meshPhongMaterial: any
      meshLambertMaterial: any
      
      // Geometries
      boxGeometry: any
      sphereGeometry: any
      torusGeometry: any
      planeGeometry: any
      cylinderGeometry: any
      
      // Basic elements
      group: any
      mesh: any
      scene: any
      object3D: any
      primitive: any
    }
  }
}

export {}