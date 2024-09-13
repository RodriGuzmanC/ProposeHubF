import { Filter, Plus, Briefcase, Edit2, Eye } from 'lucide-react'

const propuestas = [
  { id: 1, titulo: 'Propuesta 1', monto: 1500, fecha: '15 octubre 2024' },
  { id: 2, titulo: 'Propuesta 1', monto: 1500, fecha: '15 octubre 2024' },
  { id: 3, titulo: 'Propuesta 1', monto: 1500, fecha: '15 octubre 2024' },
  { id: 4, titulo: 'Propuesta 1', monto: 1500, fecha: '15 octubre 2024' },
]

export default function Contactos() {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-100">
      <header className="bg-white shadow-sm p-4">
        <h1 className="text-2xl font-bold">Contactos</h1>
      </header>
      <main className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">{propuestas.length} propuesta{propuestas.length !== 1 ? 's' : ''}</h2>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                <Filter className="w-5 h-5 mr-2" />
                Filtrar
              </button>
              <button className="flex items-center px-4 py-2 rounded-md text-white" style={{ backgroundColor: '#2427af' }}>
                <Plus className="w-5 h-5 mr-2" />
                Nueva propuesta
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {propuestas.map((propuesta) => (
              <div key={propuesta.id} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <Briefcase className="w-10 h-10 mr-4" style={{ color: '#2427af' }} />
                  <div>
                    <h3 className="font-semibold">{propuesta.titulo}</h3>
                    <p className="text-sm text-gray-500">S/ {propuesta.monto} | {propuesta.fecha}</p>
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