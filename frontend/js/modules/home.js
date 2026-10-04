/* ==========================================================================
   HOME MODULE - AguaYa
   ¿Qué es?
   Controlador de eventos e interacción de la landing page.
   ¿De qué se encarga?
   Intercepta las acciones de usuario y delega la apertura a la Factory.
   ========================================================================== */

import { WhatsAppFactory } from '../services/whatsapp.service.js';

document.addEventListener('DOMContentLoaded', () => {
  // Escucha clics en cualquier botón configurado para WhatsApp
  document.body.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-wa-action]');
    
    if (!trigger) return;

    event.preventDefault();

    const action = trigger.dataset.waAction;
    WhatsAppFactory.open(action);
  });
});