'use client'
import React, { useState } from "react";
import ProposalCoverPage from "./pagina1"; // Importa el componente de la propuesta

const json = {
  "presentacion" : {
    "titulo" : "Propuesta Para la construccion de una Tienda Virtual"
  },
  "propuesta": {
    "introduccion": "Estimados representantes de Grimpo, nos complace presentarles esta propuesta comercial para el desarrollo de su tienda virtual. Entendemos la importancia de tener una presencia en línea en el sector textil y estamos comprometidos a brindarles una solución que potencie su negocio y mejore la experiencia de sus clientes.",
    
    "cuerpo": {
      "descripcion": "En nuestra empresa, nos especializamos en el desarrollo de soluciones digitales personalizadas. Proponemos crear una tienda virtual que no solo refleje la identidad de su marca, sino que también ofrezca una experiencia de usuario excepcional. Nuestro objetivo es ayudar a Grimpo a aumentar sus ventas y a expandir su alcance en el mercado.",
      "servicios_ofrecidos": [
        "Diseño y desarrollo de la tienda virtual.",
        "Integración de métodos de pago seguros.",
        "Optimización para dispositivos móviles.",
        "Soporte técnico y mantenimiento post-lanzamiento.",
        "Capacitación para el uso de la plataforma."
      ]
    },
    
    "funcionalidades": [
      "Catálogo de productos con imágenes y descripciones detalladas.",
      "Sistema de gestión de inventario.",
      "Carrito de compras con opción de guardar productos.",
      "Sistema de cupones y descuentos.",
      "Funcionalidad de búsqueda y filtrado de productos.",
      "Sistema de seguimiento de pedidos.",
      "Integración con redes sociales para compartir productos."
    ],
    
    "sobre_nosotros": {
      "nombre_empresa": "TechSolutions",
      "mision": "Nuestra misión es proporcionar soluciones tecnológicas innovadoras que ayuden a las empresas a crecer y a tener éxito en el entorno digital.",
      "vision": "Aspiramos a ser líderes en el desarrollo de aplicaciones y plataformas digitales en el sector textil y más allá.",
      "experiencia": "Contamos con un equipo de desarrolladores y diseñadores con más de 5 años de experiencia en el sector, habiendo trabajado con diversas empresas para crear soluciones personalizadas."
    },
    
    "portafolio": [
      {
        "proyecto": "Tienda Virtual de Moda Elegante",
        "descripcion": "Desarrollo de una tienda en línea para una marca de moda con más de 300 productos."
      },
      {
        "proyecto": "Plataforma de Venta de Ropa Sustentable",
        "descripcion": "Creación de una plataforma que conecta a consumidores con marcas de ropa ecológica."
      },
      {
        "proyecto": "Sistema de Gestión de Inventario Textil",
        "descripcion": "Desarrollo de un sistema que permite a las empresas de moda gestionar su inventario de manera eficiente."
      }
    ],
    
    "cierre": "Agradecemos la oportunidad de presentar esta propuesta. Estamos entusiasmados por la posibilidad de colaborar con Grimpo y contribuir al éxito de su negocio. Quedamos a su disposición para cualquier consulta o para programar una reunión.",
    
    "firma": "Atentamente,\nEl equipo de TechSolutions"
  }
}


const Slider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Array de páginas (puedes agregar más componentes aquí)
  const pages = [
    <ProposalCoverPage data={json} key={0} />,
    <div key={1} className="page">Page 2 Content</div>,
    <div key={2} className="page">Page 3 Content</div>,
    // Agrega más componentes de páginas según sea necesario
  ];

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === pages.length - 1 ? 0 : prevPage + 1
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? pages.length - 1 : prevPage - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="arrow left-arrow" onClick={prevPage}>
        &#10094; {/* Flecha izquierda */}
      </button>
      <div className="slider">
        {pages[currentPage]}
      </div>
      <button className="arrow right-arrow" onClick={nextPage}>
        &#10095; {/* Flecha derecha */}
      </button>
    </div>
  );
};

export default Slider;
