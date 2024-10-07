import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Phone, MapPin, Building, Users, X } from 'lucide-react'

export default function CreateForm({ closeEvent }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        organization: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleOrganizationChange = (value) => {
        setFormData(prevData => ({
            ...prevData,
            organization: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Here you would typically send the data to your backend
    }


    return (
        <div className='flex justify-center items-center fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50' onClick={() => { console.log("hola") }}>
            <Card className="w-full max-w-sm mx-auto">
                <CardHeader>
                    <div className='flex items-center justify-between'>
                        <CardTitle>Crear Nuevo Contacto</CardTitle>
                        <button className='w-fit' onClick={closeEvent}>
                            <X height={20} width={20}></X>
                        </button>
                    </div>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">Nombre</Label>
                            <div className="relative">
                                <User className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="pl-8"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Apellidos</Label>
                            <div className="relative">
                                <User className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="pl-8"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Telefono</Label>
                            <div className="relative">
                                <Phone className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="pl-8"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="address">Direccion</Label>
                            <div className="relative">
                                <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                                <Input
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="pl-8"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="organization">Organizacion</Label>
                            <div className="relative">
                                <Building className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 z-10" />
                                <Select onValueChange={handleOrganizationChange} value={formData.organization}>
                                    <SelectTrigger className="pl-8">
                                        <SelectValue placeholder="Selecciona una organizacion" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="org1">Organization 1</SelectItem>
                                        <SelectItem value="org2">Organization 2</SelectItem>
                                        <SelectItem value="org3">Organization 3</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <Button type="submit" className="w-full">
                            <Users className="mr-2 h-4 w-4" />
                            Crear Nuevo Contacto
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}