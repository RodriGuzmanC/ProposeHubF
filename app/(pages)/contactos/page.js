"use client"
import CreateForm from '@/app/components/contacto/CreateForm'
import DeleteFormModal from '@/app/components/contacto/DeleteForm'
import PropuestaCard from '@/app/components/PropuestaCard'
import { Filter, Plus, Briefcase, Edit2, Eye } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import PersonasModulo from './personas'


export default function Contactos() {
  
  return (
    <div className="flex flex-col w-full h-screen overflow-auto">
      <PersonasModulo></PersonasModulo>
    </div>
  )
}