// This file extends the JSX element types to support Three.js elements
declare namespace JSX {
  interface IntrinsicElements {
    ambientLight: any;
    pointLight: any;
    directionalLight: any;
    hemisphereLight: any;
    spotLight: any;
    mesh: any;
    meshBasicMaterial: any;
    meshStandardMaterial: any;
    meshPhongMaterial: any;
    meshLambertMaterial: any;
    boxGeometry: any;
    sphereGeometry: any;
    planeGeometry: any;
    cylinderGeometry: any;
    coneGeometry: any;
    group: any;
    object3D: any;
  }
}

// Re-export the canvas and other commonly used types
export * from '@react-three/fiber';