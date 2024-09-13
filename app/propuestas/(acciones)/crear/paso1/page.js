'use client'
import Breadcrumb from '@/app/components/Breadcrumb';
import Button from '@/app/components/Button';
import Card from '@/app/components/Card';
import React, { useState } from 'react';


const MainInterface = () => {
  const breadcrumbItems = ['Plantilla', 'Contacto', 'Servicio', 'Informacion'];
  const [selectedCard, setSelectedCard] = useState(null);
  const cardData = [
    { id: 1, title: 'Plantilla 1', description: 'Descripción corta de la plantilla' },
    { id: 2, title: 'Plantilla 2', description: 'Descripción corta de la plantilla' },
    { id: 3, title: 'Plantilla 3', description: 'Descripción corta de la plantilla' },
    { id: 4, title: 'Plantilla 4', description: 'Descripción corta de la plantilla' },
  ];

  const handleCardSelect = (id) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  return (
    <div className='flex justify-center w-full bg-slate-200 py-10'>
      <div className="max-w-4xl mx-auto p-6 bg-white flex-col flex gap-2 items-center">
        <Breadcrumb items={breadcrumbItems} activeIndex={0} />
        <h1 className="text-3xl font-bold mb-6 text-gray-950">Selecciona la plantilla</h1>
        <div className="grid grid-cols-2 gap-6 mb-6">
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              imageUrl="/imgs/plantilla-ejemplo.png"
              onSelect={() => handleCardSelect(card.id)}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <Button 
            variant="primary"
            onClick={() => console.log(`Plantilla seleccionada: ${selectedCard}`)}
            disabled={!selectedCard}
            href='paso2'
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainInterface;
