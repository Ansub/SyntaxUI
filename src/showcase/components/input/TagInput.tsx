'use client'

import React, { useState } from 'react'
import { X } from 'lucide-react'

interface TagInputProps {
  unique: boolean
}

const TagInput: React.FC<TagInputProps> = ({ unique = false }) => {
  const [keywords, setKeywords] = useState<string[]>(['ansub', 'syntax'])

  const onKeywordsChange = (newKeywords: string[]) => {
    setKeywords(newKeywords)
    // Additional actions upon keywords change can be handled here
  }
  const [inputValue, setInputValue] = useState<string>('')

  // Handles adding new keyword on Enter or comma press, and keyword removal on Backspace
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (event.key === 'Enter' || event.key === ',') &&
      inputValue.trim() !== ''
    ) {
      event.preventDefault()
      const newKeyword = inputValue.trim()
      const newKeywords = unique
        ? [...new Set([...keywords, newKeyword])]
        : [...keywords, newKeyword]

      setKeywords(newKeywords)
      onKeywordsChange(newKeywords)
      setInputValue('')
    } else if (event.key === 'Backspace' && inputValue === '') {
      event.preventDefault()
      const newKeywords = keywords.slice(0, -1)
      setKeywords(newKeywords)
      onKeywordsChange(newKeywords)
    }
  }

  // Handles pasting keywords separated by commas, new lines, or tabs
  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const paste = event.clipboardData.getData('text')
    const keywordsToAdd = paste
      .split(/[\n\t,]+/)
      .map((keyword) => keyword.trim())
      .filter(Boolean)
    if (keywordsToAdd.length) {
      const newKeywords = unique
        ? [...new Set([...keywords, ...keywordsToAdd])]
        : [...keywords, ...keywordsToAdd]

      setKeywords(newKeywords)
      onKeywordsChange(newKeywords)
      setInputValue('')
    }
  }

  // Updates the inputValue state as the user types
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  // Adds the keyword when the input loses focus, if there's a keyword to add
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (inputValue.trim() !== '' && event.relatedTarget?.tagName !== 'BUTTON') {
      const newKeywords = [...keywords, inputValue.trim()]
      setKeywords(newKeywords)
      onKeywordsChange(newKeywords)
      setInputValue('')
    }
  }

  // Removes a keyword from the list
  const removeKeyword = (indexToRemove: number) => {
    const newKeywords = keywords.filter((_, index) => index !== indexToRemove)
    setKeywords(newKeywords)
    onKeywordsChange(newKeywords)
  }

  return (
    <div className="flex w-full flex-wrap items-center rounded-lg border border-gray-200 p-2 dark:border-gray-600">
      <div
        className="flex w-full flex-wrap overflow-y-auto"
        style={{ maxHeight: '300px' }}
      >
        {keywords.map((keyword, index) => (
          <button
            key={index}
            onClick={() => removeKeyword(index)}
            className="active:animate-scale-out active:animate-tag-input-scale-out m-1 flex scale-0 transform animate-tag-input-scale-in items-center rounded-full bg-red-500 px-2 py-0 text-xs font-medium text-white transition duration-300 ease-in-out hover:scale-110"
          >
            {keyword}
            <X size={14} className="ml-1 cursor-pointer" />
          </button>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onBlur={(e) => handleBlur(e)}
          className="my-1 flex-1 bg-transparent text-sm outline-none"
          placeholder="Type keyword and press Enter..."
        />
      </div>
    </div>
  )
}

export default TagInput
