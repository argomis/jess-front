import { useState, useId } from 'react'
import './Input.scss'

interface InputProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: 'text' | 'email' | 'tel' | 'number'
  pattern?: string
  maxLength?: number
  error?: string
  onValidate?: (value: string) => boolean
}

export const Input = ({ label, value, onChange, placeholder, type = 'text', pattern, maxLength, error, onValidate }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const id = useId()
  const hasValue = value.length > 0
  const showLabel = isFocused || hasValue

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    // Validation avec pattern si fourni
    if (pattern && newValue && !new RegExp(pattern).test(newValue)) {
      return
    }

    // Validation personnalisée si fournie
    if (onValidate && newValue && !onValidate(newValue)) {
      return
    }

    onChange(newValue)
  }

  return (
    <div className={`input-field ${showLabel ? 'input-field--has-label' : ''} ${error ? 'input-field--error' : ''}`}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={!showLabel ? placeholder || label : ''}
        pattern={pattern}
        maxLength={maxLength}
        className='input-field__input'
      />
      {showLabel && (
        <label htmlFor={id} className='input-field__label'>
          {label}
        </label>
      )}
      {error && <span className='input-field__error'>{error}</span>}
    </div>
  )
}
