import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '../contexts/ThemeContext'

interface ModelViewerProps {
  modelPath: string
  className?: string
}

// 3D modeli yükleyen bileşen
const Model: React.FC<{ path: string }> = ({ path }) => {
  const { scene } = useGLTF(path)
  const groupRef = useRef<THREE.Group>(null)
  const { isDark } = useTheme()
  
  useEffect(() => {
    if (scene && groupRef.current) {
      // Modelin bounding box'unu hesapla (tüm objeler dahil)
      const box = new THREE.Box3().setFromObject(scene)
      const size = box.getSize(new THREE.Vector3())
      const maxDim = Math.max(size.x, size.y, size.z)
      
      // Modeli 3 birime ölçeklendir
      const scale = 3 / maxDim
      
      // Modelin geometrik merkezini bul
      const center = box.getCenter(new THREE.Vector3())
      
      // Scene'in tüm child'larını merkeze taşı
      // Bu işlem modelin pivot point'ini (0,0,0) yapar
      scene.position.x = -center.x
      scene.position.y = -center.y
      scene.position.z = -center.z
      
      // Scale'i group'a uygula
      groupRef.current.scale.set(scale, scale, scale)
      
      // Group'un pozisyonunu da (0,0,0) yap - dönüş merkezi tam ortada olsun
      groupRef.current.position.set(0, 0, 0)
    }
  }, [scene])
  
  // Tema değiştiğinde modelin rengini güncelle
  useEffect(() => {
    if (scene) {
      const color = isDark ? 0xd5d5d5 : 0x2a2a2a // Dark mode'da açık gri, light mode'da açık gri-siyah
      
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material) {
            // Material array ise tüm material'ları güncelle
            if (Array.isArray(child.material)) {
              child.material.forEach((mat: THREE.Material) => {
                if (mat instanceof THREE.MeshStandardMaterial || 
                    mat instanceof THREE.MeshBasicMaterial ||
                    mat instanceof THREE.MeshPhongMaterial ||
                    mat instanceof THREE.MeshLambertMaterial) {
                  mat.color.setHex(color)
                  mat.needsUpdate = true
                }
              })
            } else {
              // Tek material varsa
              if (child.material instanceof THREE.MeshStandardMaterial || 
                  child.material instanceof THREE.MeshBasicMaterial ||
                  child.material instanceof THREE.MeshPhongMaterial ||
                  child.material instanceof THREE.MeshLambertMaterial) {
                child.material.color.setHex(color)
                child.material.needsUpdate = true
              }
            }
          }
        }
      })
    }
  }, [scene, isDark])
  
  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  )
}

// Yüklenme animasyonu
const LoadingSpinner: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-evistal-gray-light border-t-evistal-black rounded-full animate-spin"></div>
    </div>
  )
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath, className = '' }) => {
  return (
    <div className={`w-full ${className}`} style={{ height: '80vh', minHeight: '700px', backgroundColor: 'transparent' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          {/* Gelişmiş Işıklandırma */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
          <directionalLight position={[-5, 5, -5]} intensity={0.8} />
          <pointLight position={[0, 10, 0]} intensity={0.5} />
          
          {/* 3D Model */}
          <Model path={modelPath} />
          
          {/* Çevre ışığı */}
          <Environment preset="studio" />
          
          {/* Kontroller - Mouse ile döndürme, zoom */}
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            minDistance={1}
            maxDistance={20}
            autoRotate={false}
            autoRotateSpeed={0}
            target={[0, 0, 0]}
            makeDefault
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ModelViewer

