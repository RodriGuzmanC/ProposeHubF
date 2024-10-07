"use client"
import CreateForm from '@/app/components/contacto/CreateForm'
import DeleteFormModal from '@/app/components/contacto/DeleteForm'
import ContactoCard from '@/app/components/contacto/ContactoCard'
import { Filter, Plus, Briefcase, Edit2, Eye } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'


const propuestas = [
    { id: 1, nombre: 'Juan Pérez', telefono: '555-1234', organizacion: 'Empresa X', estado: 'activo' },
    { id: 2, nombre: 'María López', telefono: '555-5678', organizacion: 'Empresa Y', estado: 'activo' },
    { id: 3, nombre: 'Carlos García', telefono: '555-9012', organizacion: 'Empresa Z', estado: 'activo' },
    { id: 4, nombre: 'Ana González', telefono: '555-3456', organizacion: 'Empresa A', estado: 'inactivo' },
    { id: 5, nombre: 'Pedro Martínez', telefono: '555-7890', organizacion: 'Empresa B', estado: 'activo' },
    { id: 6, nombre: 'Sofía Fernández', telefono: '555-1122', organizacion: 'Empresa C', estado: 'inactivo' },
  ]

export default function PersonasModulo() {

  return (
    <div className="flex flex-col w-full h-screen overflow-auto">
      
      <main className="flex-1 h-full">
        <div className="h-full p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-black">{propuestas.length} propuesta{propuestas.length !== 1 ? 's' : ''}</h2>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                <Filter className="w-5 h-5 mr-2" />
                Filtrar
              </button>
              <button className="flex items-center px-4 py-2 rounded-md text-white bg-principal">
                <Plus className="w-5 h-5 mr-2" />
                Nuevo contacto
              </button>
              
            </div>
          </div>
          <div className="space-y-4">
            {propuestas.map((propuesta) => (
              <ContactoCard nombre={propuesta.nombre} telefono={propuesta.telefono} organizacion={propuesta.organizacion}></ContactoCard>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}