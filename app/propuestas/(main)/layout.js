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
    <div className='flex w-full h-screen bg-white'>
        <div className="w-64 h-screen bg-principal-900 shadow-md flex flex-col">
            <h1 className="text-2xl font-bold p-5 text-gray-50">Propuestas</h1>
            <nav className="flex-1 flex flex-col gap-3 text-white">
                {menuItems.map((item) => (
                <Link
                    key={item.id}
                    href={`/${item.id}`}
                    className={`flex items-center text-sm px-6 py-3 font-semibold ${
                    activeItem === item.id ? 'bg-white text-gray-950' : ''
                    }`}
                    onClick={() => setActiveItem(item.id)}
                >
                    <item.icon className={`w-5 h-5 mr-3 ${
                    activeItem === item.id ? ' text-gray-950' : ''
                    }`}/>
                    {item.label}
                </Link>
                ))}
            </nav>
        </div>
        {children}
    </div>
  )
}