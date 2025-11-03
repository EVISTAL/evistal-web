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
              <img 
                src="/logo.png" 
                alt="EVISTAL Logo" 
                className="w-full h-full object-contain"
              />
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
