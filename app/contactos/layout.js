"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Clock, Book, CheckCircle, XCircle } from 'lucide-react'

const menuItems = [
  { id: 'en-progreso', label: 'Organizaciones', icon: Clock },
  { id: 'abierto', label: 'Personas', icon: Book },
]

export default function Sidebar({children}) {
  const [activeItem, setActiveItem] = useState('abierto')

  return (
    <div className='flex w-full h-screen bg-gray-100'>
        <div className="w-64 h-screen bg-white shadow-md flex flex-col">
            <h1 className="text-xl font-bold p-6">Contactos</h1>
            <nav className="flex-1">
                {menuItems.map((item) => (
                <Link
                    key={item.id}
                    href={`/${item.id}`}
                    className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                    activeItem === item.id ? 'bg-blue-100' : ''
                    }`}
                    onClick={() => setActiveItem(item.id)}
                >
                    <item.icon className="w-5 h-5 mr-3" style={{ color: '#2427af' }} />
                    {item.label}
                </Link>
                ))}
            </nav>
        </div>
        {children}
    </div>
  )
}