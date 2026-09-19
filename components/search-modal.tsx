"use client"

import { useState, useEffect } from "react"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (isOpen) {
      setQuery("")
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="w-full max-w-2xl mx-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="text-2xl text-slate-400">⌕</div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search calculators, topics, formulas..."
            className="flex-1 text-lg bg-transparent outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-slate-100"
            autoFocus
          />
          <div className="text-sm text-slate-400">ESC to close</div>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          Search functionality coming soon...
        </div>
      </div>
    </div>
  )
}