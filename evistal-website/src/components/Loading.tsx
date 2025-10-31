import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-evistal-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* EVISTAL Logo Animation */}
        <div className="w-20 h-20 mx-auto mb-8 relative">
          <div className="w-full h-full border-4 border-evistal-gray-light rounded-full animate-spin">
            <div className="w-full h-full border-4 border-transparent border-t-evistal-black rounded-full"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 32 32" className="w-full h-full text-evistal-black">
                <path d="M4 4 L4 28 L8 28 L8 20 L20 20 L20 16 L8 16 L8 12 L20 12 L20 8 L8 8 L8 4 Z" fill="currentColor"/>
                <path d="M24 4 L28 4 L24 20 L20 20 Z" fill="currentColor"/>
                <path d="M20 20 L24 20 L20 28 L16 28 Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="text-evistal-black font-bold text-xl">EVISTAL</div>
        <div className="text-evistal-gray text-sm mt-2">Yükleniyor...</div>
      </div>
    </div>
  )
}

export default Loading
