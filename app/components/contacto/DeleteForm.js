import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DeleteFormModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <Card className="w-full max-w-sm mx-4">
        <CardHeader>
          <CardTitle className="text-center">Confirmar Eliminación</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">¿Desea eliminar a este usuario?</p>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Button variant="outline">Cancelar</Button>
          <Button variant="destructive">Eliminar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}