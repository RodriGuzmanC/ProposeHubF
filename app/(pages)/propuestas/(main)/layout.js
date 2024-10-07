"use client"
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Clock, Briefcase, CheckCircle, XCircle, Settings } from 'lucide-react'
import { useRouter } from 'next/navigation'

const proposalStates = [
  { id: 'en-progreso', label: 'En progreso', icon: Clock },
  { id: 'abierto', label: 'Abierto', icon: Briefcase },
  { id: 'aceptado', label: 'Aceptado', icon: CheckCircle },
  { id: 'declinado', label: 'Declinado', icon: XCircle },
]




export default function ModernProposalSidebar({children}) {
  const [activeState, setActiveState] = useState('abierto')
  const router = useRouter();

  const handleStateChange = (state) => {
    setActiveState(state);
    router.push(`?estado=${state}`, undefined, { shallow: true });
  };

  return (
    <div className='flex w-full h-screen bg-white'>
    <aside className="w-64 h-screen bg-gray-900 text-gray-300 p-4 flex flex-col">
      <div className="relative mb-4">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <Input
          type="search"
          placeholder="Search"
          className="w-full pl-8 bg-gray-800 border-gray-700 focus:border-blue-600 text-gray-300 placeholder-gray-500"
        />
      </div>
      <ScrollArea className="flex-grow">
        <nav className="space-y-1">
          <h2 className="px-2 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Estados de Propuesta
          </h2>
          {proposalStates.map((state) => (
            <Button
              key={state.id}
              variant="ghost"
              className={`w-full justify-start px-2 py-1.5 ${
                activeState === state.id
                  ? 'bg-blue-600/20 text-white'
                  : 'text-gray-400 hover:bg-blue-600/10 hover:text-white'
              }`}
              onClick={() => handleStateChange(state.id)}
            >
              <state.icon className={`mr-2 h-4 w-4 ${activeState === state.id ? 'text-white' : ''}`} />
              {state.label}
              {state.id === 'en-progreso' && (
                <span className="ml-auto bg-gray-700 text-gray-300 text-xs px-1.5 py-0.5 rounded-full">
                  14
                </span>
              )}
            </Button>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-800">
            <Button
              variant="ghost"
              className="w-full justify-start px-2 py-1.5 text-gray-400 hover:bg-blue-600/10 hover:text-white"
            >
              <Settings className="mr-2 h-4 w-4" />
              Configuración
            </Button>
          </div>
        </nav>
      </ScrollArea>
    </aside>
    {children}
    </div>
  )
}

/*
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Clock, Briefcase, CheckCircle, XCircle } from 'lucide-react'

const estadosPropuesta = [
  { id: 'en-progreso', label: 'En progreso', icon: Clock },
  { id: 'abierto', label: 'Abierto', icon: Briefcase },
  { id: 'aceptado', label: 'Aceptado', icon: CheckCircle },
  { id: 'declinado', label: 'Declinado', icon: XCircle },
]

export default function PropuestasSidebar({children}) {
  const [estadoActivo, setEstadoActivo] = useState('abierto')

  return (
    <div className='flex w-full h-screen bg-white'>
      
    <aside className="w-64 h-screen bg-background border-r">
      <ScrollArea className="h-full">
        <div className="p-4 space-y-4">
          <h2 className="text-lg font-semibold tracking-tight">Propuestas</h2>
          <nav className="space-y-1">
            {estadosPropuesta.map((estado) => (
              <Button
                key={estado.id}
                variant={estadoActivo === estado.id ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setEstadoActivo(estado.id)}
              >
                <estado.icon className="mr-2 h-4 w-4" />
                {estado.label}
              </Button>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </aside>
    {children}
    </div>
  )
}*/
/*import { useState } from 'react'
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
}*/