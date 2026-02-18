import React from 'react'

// Добавляем className в аргументы
export default function Button({ type = "button", onClick, children, className }) {
  return (
    // Объединяем стандартный класс "btn" с тем, который передаем снаружи
    <button 
      type={type} 
      onClick={onClick} 
      className={`btn ${className || ''}`}
    >
      {children}
    </button>
  )
}