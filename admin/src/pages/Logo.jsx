// components/SmallLogo.js
import React from 'react'
import { Stethoscope } from 'lucide-react'

const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-primary font-semibold text-[35px]">
      <Stethoscope size={30} className="text-blue-500" />
      <span className="tracking-tight">CareConnect</span>
    </div>
  )
}

export default Logo