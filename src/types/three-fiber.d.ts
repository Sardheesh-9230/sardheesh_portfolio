// Three.js React Three Fiber type extensions
import { extend } from '@react-three/fiber'
import * as THREE from 'three'

// Extend THREE namespace
extend(THREE)

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
      roundedBoxGeometry: any
      
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