import { Menu, Printer, CheckSquare, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Component({children}) {
  return (
    <main>
        <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="bg-black p-2 mr-4">
              <Menu className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl">CompanyLogo</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="shadow-md">
              <HelpCircle className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="shadow-md">
              <Printer className="h-5 w-5" />
            </Button>
            <Button variant="default" className="bg-black text-white hover:bg-gray-800">
              <CheckSquare className="h-5 w-5 mr-2" />
              Aceptar Propuesta
            </Button>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="shadow-md">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="shadow-md">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    {children}
    </main>
  )
}