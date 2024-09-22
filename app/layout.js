'use client'
import Link from 'next/link'
import localFont from "next/font/local";
import "./globals.css";
import { Home, FileText, Briefcase, MessageSquare, PieChart, Clock, LogOut, UserCircle2Icon, AlignRight  } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { id: 'home', icon: Home, href: '/propuestas', label: 'Inicio' },
  { id: 'contactos', icon: FileText, href: '/contactos', label: 'Contactos' },
  { id: 'propuestas', icon: Briefcase, href: '/propuestas', label: 'Propuestas' },
  { id: 'messages', icon: MessageSquare, href: '/messages', label: 'Mensajes' },
  { id: 'analytics', icon: PieChart, href: '/analytics', label: 'Estadisticas' },
]


export default function Navbar({ children }) {
  const [menuItem, setMenuItem] = useState('propuestas')
  return (
    <html lang="en">
      <body className='flex'>
        <nav className="sticky p-3 top-0 left-0 flex flex-col items-start justify-between space-y-4 h-screen bg-principal-950 py-4 shadow-md w-fit">
          <div className='items-nav flex flex-col gap-8 w-full'>
            <div className='flex justify-between items-center'>
              <h1 className='text-gray-50 font-extrabold text-2xl'>ProposeHub</h1>
              <AlignRight size={20} color='#fff'></AlignRight>
            </div>
            <div className='flex flex-col gap-4 w-full'>
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}
                className={`px-4 py-3 flex gap-3 w-full ${menuItem === item.id ? 'menu-active' : ''}`}
                onClick={() => setMenuItem(item.id)}
              >
                <item.icon className="w-5 h-5 text-gray-50" />
                <p className='text-gray-50 font-medium text-sm'>{item.label}</p>
              </Link>
            ))}
            </div>
          </div>
          <div className='navuser-profile w-full flex gap-4 items-center'>
            <UserCircle2Icon size={30} color="white"></UserCircle2Icon>
            <div className='navuser-profile__content flex flex-col text-gray-50 min-w-24'>
              <h5 className='text-sm font-bold'>Guillermo F</h5>
              <p className='text-xs'>Diseñador</p>
            </div>
            <Link href={'/salir'}
              className={`px-2 py-2 flex gap-3 bg-white rounded-md`}
            >
              <LogOut className="w-5 h-5 text-gray-950" />
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>

  )
}
