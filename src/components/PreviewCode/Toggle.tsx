'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Toggle = ({
  onToggle,
}: {
  onToggle?: (toggled: boolean) => void
}) => {
  const [toggled, setToggled] = useState(true)

  const handleToggle = () => {
    const newState = !toggled
    setToggled(newState)
    if (onToggle) {
      onToggle(newState)
    }
  }

  return (
    <motion.button
      className="h-10 w-20 cursor-pointer rounded-full"
      onClick={handleToggle}
      variants={{
        on: { backgroundColor: 'rgb(239, 68, 68)' }, // Tailwind bg-red-500
        off: { backgroundColor: 'rgb(55, 65, 81)' }, // Tailwind bg-neutral-700
      }}
      animate={toggled ? 'on' : 'off'}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
    >
      <motion.span
        className="inline-block aspect-square h-full transform rounded-full bg-white shadow-lg "
        variants={{
          on: { x: 20, opacity: 1, scale: 0.7 },
          off: { x: -20, opacity: 0.5, scale: 0.6 },
        }}
        animate={toggled ? 'on' : 'off'}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      />
    </motion.button>
  )
}
