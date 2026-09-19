"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const searchItems = [
  { name: "BMI Calculator", href: "/calculators/bmi", category: "Calculator" },
  { name: "GFR Calculator", href: "/calculators/gfr", category: "Renal" },
  { name: "Anion Gap", href: "/calculators/anion-gap", category: "Electrolytes" },
  { name: "Corrected Calcium", href: "/calculators/corrected-calcium", category: "Electrolytes" },
  { name: "Wells Score", href: "/calculators/wells-score", category: "Clinical Score" },
  { name: "Parkland Formula", href: "/calculators/parkland-formula", category: "Emergency" },
  { name: "NEET-PG Study", href: "/neetpg", category: "Study" },
  { name: "Clinical Examination", href: "/clinical-examination", category: "Study" },
]

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [filteredItems, setFilteredItems] = useState(searchItems)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      setQuery("")
      setFilteredItems(searchItems)
      setSelectedIndex(0)
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredItems(searchItems)
    } else {
      const filtered = searchItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredItems(filtered)
      setSelectedIndex(0)
    }
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
      } else if (e.key === "Enter" && filteredItems.length > 0) {
        e.preventDefault()
        router.push(filteredItems[selectedIndex].href)
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, filteredItems, selectedIndex, router, onClose])

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
        
        <div className="max-h-96 overflow-y-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-8 text-slate-500 dark:text-slate-400">
              No results found
            </div>
          ) : (
            <div className="space-y-2">
              {filteredItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`block p-3 rounded-lg transition ${
                    index === selectedIndex 
                      ? "bg-slate-100 dark:bg-slate-700" 
                      : "hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-slate-900 dark:text-slate-100">{item.name}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{item.category}</div>
                    </div>
                    <div className="text-slate-400">→</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span>Press <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Enter</kbd> to select</span>
            <span>Press <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">↑↓</kbd> to navigate</span>
          </div>
        </div>
      </div>
    </div>
  )
}