import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Edit, Eye } from "lucide-react"
import Link from "next/link"



export default function PropuestaCard({ nombre, telefono, organizacion }) {
  return (
    <Card className="w-full">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 p-2 rounded-full">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{nombre}</h3>
            <div className="flex space-x-2 text-sm text-muted-foreground">
              <span>{telefono}</span>
              <span>•</span>
              <span>{organizacion}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Link href={'/viewer/123'}>
            <Button variant="ghost" size="icon">
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}