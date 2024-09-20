function toggleAccordion(header) {
    // Obtener todos los elementos de contenido desplegable
    const allContents = document.querySelectorAll('.accordion-content');
    
    // Obtener el contenido asociado al encabezado clicado
    const content = header.nextElementSibling;
    
    // Verificar si el contenido está visible o no
    const isActive = content.classList.contains('active');
    
    // Cerrar todas las secciones (remover la clase active)
    allContents.forEach(content => content.classList.remove('active'));
    
    // Si la sección que fue clicada no estaba abierta, entonces abrirla
    if (!isActive) {
      content.classList.add('active');
    }
  }
  