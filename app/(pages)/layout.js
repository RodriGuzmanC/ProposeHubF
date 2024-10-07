'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Users, Briefcase, MessageSquare, PieChart, LogOut, Menu } from 'lucide-react'
import { HeightIcon } from '@radix-ui/react-icons'

const navItems = [
  { id: 'inicio', icon: Home, label: 'Inicio', href: '/inicio' },
  { id: 'contactos', icon: Users, label: 'Contactos', href: '/contactos' },
  { id: 'propuestas', icon: Briefcase, label: 'Propuestas', href: '/propuestas' },
  { id: 'mensajes', icon: MessageSquare, label: 'Mensajes', href: '/mensajes' },
  { id: 'estadisticas', icon: PieChart, label: 'Estadísticas', href: '/estadisticas' },
]

export default function ModernNavbar({children}) {
  const [activeItem, setActiveItem] = useState('inicio')
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen">
      <aside className={`flex flex-col h-screen bg-gray-900 text-gray-100 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
        <div className="flex items-center justify-between p-4">
          {!isCollapsed && <h1 className="text-xl font-bold">ProposeHub</h1>}
          <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-grow">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeItem === item.id ? "secondary" : "ghost"}
                className={`w-full justify-start ${isCollapsed ? 'px-2' : 'px-4'}`}
                onClick={() => setActiveItem(item.id)}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className={`h-5 w-5 ${isCollapsed ? 'mr-0' : 'mr-3'}`} />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </Button>
            ))}
          </nav>
        </ScrollArea>
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatar.png" alt="Usuario" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div>
                <p className="text-sm font-medium">Usuario</p>
                <p className="text-xs text-gray-400">usuario@ejemplo.com</p>
              </div>
            )}
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-4" asChild>
            <Link href="/logout">
              <LogOut className="h-4 w-4 mr-2" />
              {!isCollapsed && "Cerrar sesión"}
            </Link>
          </Button>
        </div>
      </aside>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}

/*import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Home, FileText, Briefcase, MessageSquare, PieChart, LogOut, UserCircle2, ChevronLeft, ChevronRight } from 'lucide-react'

const navItems = [
  { id: 'home', icon: Home, href: '/propuestas', label: 'Inicio' },
  { id: 'contactos', icon: FileText, href: '/contactos', label: 'Contactos' },
  { id: 'propuestas', icon: Briefcase, href: '/propuestas', label: 'Propuestas' },
  { id: 'messages', icon: MessageSquare, href: '/messages', label: 'Mensajes' },
  { id: 'analytics', icon: PieChart, href: '/analytics', label: 'Estadísticas' },
]

export default function Navbar({ children }) {
  const [menuItem, setMenuItem] = useState('propuestas')
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen">
      <aside className={`sticky top-0 h-screen bg-principal-950 p-4 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-64'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            {!isCollapsed && <h1 className="text-gray-50 font-extrabold text-2xl">ProposeHub</h1>}
            <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          </div>
          <ScrollArea className="flex-grow">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <TooltipProvider key={item.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                          menuItem === item.id ? 'bg-principal-900 text-white' : 'text-gray-400 hover:text-white hover:bg-principal-900'
                        }`}
                        onClick={() => setMenuItem(item.id)}
                      >
                        <item.icon className="h-5 w-5" />
                        {!isCollapsed && <span>{item.label}</span>}
                      </Link>
                    </TooltipTrigger>
                    {isCollapsed && <TooltipContent side="right">{item.label}</TooltipContent>}
                  </Tooltip>
                </TooltipProvider>
              ))}
            </nav>
          </ScrollArea>
          <div className="mt-auto pt-4 border-t border-principal-900">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/avatar.png" alt="Guillermo F" />
                <AvatarFallback>GF</AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <div>
                  <p className="text-sm font-medium text-gray-50">Guillermo F</p>
                  <p className="text-xs text-gray-400">Diseñador</p>
                </div>
              )}
            </div>
            <Button variant="ghost" size="icon" className="w-full mt-2" asChild>
              <Link href="/salir">
                <LogOut className="h-4 w-4" />
                {!isCollapsed && <span className="ml-2">Salir</span>}
              </Link>
            </Button>
          </div>
        </div>
      </aside>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}*/
/*import Link from 'next/link'
import localFont from "next/font/local";
import "@/app/globals.css";
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
}*/
