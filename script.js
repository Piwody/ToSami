document.addEventListener('DOMContentLoaded', () => {
  const revelarBtn = document.getElementById('revelar-btn');
  const mensajeSecreto = document.getElementById('mensaje-secreto');
  const terminarBtn = document.getElementById('terminar-btn');
  const mensajeTerminar = document.getElementById('mensaje-terminar');
  const imagenAmor = document.getElementById('imagen-amor');
  const imagenTriste = document.getElementById('imagen-triste');

  function limpiarImagenes() {
    if (imagenAmor) imagenAmor.innerHTML = '';
    if (imagenTriste) imagenTriste.innerHTML = '';
  }

  function ocultarTodo() {
    if (mensajeSecreto) mensajeSecreto.classList.add('oculto');
    if (mensajeTerminar) mensajeTerminar.classList.add('oculto');
    if (imagenAmor) imagenAmor.classList.add('oculto');
    if (imagenTriste) imagenTriste.classList.add('oculto');
    limpiarImagenes(); // eliminar cualquier img previamente agregado
  }

  if (revelarBtn) {
    revelarBtn.addEventListener('click', () => {
      ocultarTodo();
      // crear la imagen solo al hacer clic
      if (imagenAmor) {
        const img = document.createElement('img');
        img.src = 'images/amor.jpg';
        img.alt = 'Te amo';
        img.loading = 'lazy';
        imagenAmor.appendChild(img);
        imagenAmor.classList.remove('oculto');
      }
      if (mensajeSecreto) mensajeSecreto.classList.remove('oculto');
    });
  }

  if (terminarBtn) {
    terminarBtn.addEventListener('click', () => {
      ocultarTodo();
      // crear la imagen solo al hacer clic
      if (imagenTriste) {
        const img = document.createElement('img');
        img.src = 'images/triste.jpg';
        img.alt = 'Triste';
        img.loading = 'lazy';
        imagenTriste.appendChild(img);
        imagenTriste.classList.remove('oculto');
      }
      if (mensajeTerminar) mensajeTerminar.classList.remove('oculto');
    });
  }
});