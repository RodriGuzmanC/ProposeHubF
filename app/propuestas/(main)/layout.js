"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Clock, Book, CheckCircle, XCircle } from 'lucide-react'

const menuItems = [
  { id: 'en-progreso', label: 'En progreso', icon: Clock },
  { id: 'abierto', label: 'Abierto', icon: Book },
  { id: 'aceptado', label: 'Aceptado', icon: CheckCircle },
  { id: 'declinado', label: 'Declinado', icon: XCircle },
]

export default function Sidebar({children}) {
  const [activeItem, setActiveItem] = useState('abierto')

  return (
    <div className='flex w-full h-screen bg-gray-100'>
        <div className="w-64 px-2 h-screen bg-white shadow-md flex flex-col">
            <h1 className="text-2xl font-bold p-6 text-gray-950">Propuestas</h1>
            <nav className="flex-1">
                {menuItems.map((item) => (
                <Link
                    key={item.id}
                    href={`/${item.id}`}
                    className={`flex items-center text-sm px-6 py-3 text-gray-950 hover:bg-gray-100 font-semibold m-2 rounded-md ${
                    activeItem === item.id ? 'bg-blue-200' : ''
                    }`}
                    onClick={() => setActiveItem(item.id)}
                >
                    <item.icon className="w-5 h-5 mr-3 color-principal"/>
                    {item.label}
                </Link>
                ))}
            </nav>
        </div>
        {children}
    </div>
  )
}