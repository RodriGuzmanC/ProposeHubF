import { Filter, Plus, Briefcase, Edit2, Eye } from 'lucide-react'
import Link from 'next/link'

const propuestas = [
  { id: 1, titulo: 'Propuesta 1', monto: 1500, fecha: '15 octubre 2024' },
  { id: 2, titulo: 'Propuesta 2', monto: 2100, fecha: '10 octubre 2024' },
  { id: 3, titulo: 'Propuesta 3', monto: 1200, fecha: '08 octubre 2024' },
  { id: 4, titulo: 'Propuesta 4', monto: 2500, fecha: '31 octubre 2024' },
  { id: 4, titulo: 'Propuesta 4', monto: 2500, fecha: '31 octubre 2024' },
  { id: 4, titulo: 'Propuesta 4', monto: 2500, fecha: '31 octubre 2024' },
  { id: 4, titulo: 'Propuesta 4', monto: 2500, fecha: '31 octubre 2024' },
  { id: 4, titulo: 'Propuesta 4', monto: 2500, fecha: '31 octubre 2024' },
  { id: 4, titulo: 'Propuesta 4', monto: 2500, fecha: '31 octubre 2024' },
  { id: 4, titulo: 'Propuesta 4', monto: 2500, fecha: '31 octubre 2024' },
  { id: 4, titulo: 'Propuesta 4', monto: 2500, fecha: '31 octubre 2024' },
  { id: 4, titulo: 'Propuesta 4', monto: 2500, fecha: '31 octubre 2024' },
  { id: 4, titulo: 'Propuesta 4', monto: 2500, fecha: '31 octubre 2024' },
  { id: 4, titulo: 'Propuesta 4', monto: 2500, fecha: '31 octubre 2024' },
  { id: 4, titulo: 'Propuesta 4', monto: 2500, fecha: '31 octubre 2024' },

]

export default function Propuestas() {
  return (
    <div className="flex flex-col w-full h-screen overflow-auto">
      
      <main className="flex-1 h-full">
        <div className="h-full p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-700">{propuestas.length} propuesta{propuestas.length !== 1 ? 's' : ''}</h2>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                <Filter className="w-5 h-5 mr-2" />
                Filtrar
              </button>
              <Link href="propuestas/crear/" className="flex items-center px-4 py-2 rounded-md text-white bg-principal">
                <Plus className="w-5 h-5 mr-2" />
                Nueva propuesta
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            {propuestas.map((propuesta) => (
              <div key={propuesta.id} className="flex items-center justify-between p-4 bg-white border border-gray-300 rounded-lg">
                <div className="flex items-center">
                  <Briefcase 
                    className="w-8 h-8 mr-4 color-principal"
                    />
                  <div>
                    <h3 className="font-semibold text-gray-950">{propuesta.titulo}</h3>
                    <p className="text-sm text-gray-600">S/ {propuesta.monto} | {propuesta.fecha}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-500 hover:text-gray-700">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
