'use client'
import Link from 'next/link'
import localFont from "next/font/local";
import "./globals.css";
import { Home, FileText, Briefcase, MessageSquare, PieChart, Clock, LogOut } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { id: 'home', icon: Home, href: '/propuestas' },
  { id: 'contactos', icon: FileText, href: '/contactos' },
  { id: 'propuestas', icon: Briefcase, href: '/propuestas' },
  { id: 'messages', icon: MessageSquare, href: '/messages' },
  { id: 'analytics', icon: PieChart, href: '/analytics' },
  { id: 'history', icon: LogOut, href: '/history' },
]


export default function Navbar({children}) {
  const [menuItem, setMenuItem] = useState('propuestas')
  return (
    <html lang="en">
      <body className='flex'>
        <nav className="sticky top-0 left-0 flex flex-col items-center space-y-4 h-screen bg-white py-4 shadow-md w-fit">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} 
            className={`p-4 ${
              menuItem === item.id ? 'menu-active' : ''}`}
                    onClick={() => setMenuItem(item.id)}
            >
            
              <item.icon className="w-6 h-6 text-gray-950" />
            </Link>
          ))}
        </nav>
        {children}
      </body>
    </html>
    
  )
}
