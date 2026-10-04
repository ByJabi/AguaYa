/* ==========================================================================
   HOME MODULE - AguaYa
   ¿Qué es?
   Controlador de inicialización y eventos de la landing page.
   
   ¿De qué se encarga?
   1. Renderiza los componentes reutilizables (Navbar y Footer).
   2. Intercepta clics con data-wa-action para disparar la Factory de WhatsApp.
   ========================================================================== */

import { NavbarComponent } from '../components/navbar.js';
import { FooterComponent } from '../components/footer.js';
import { WhatsAppFactory } from '../services/whatsapp.service.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Renderizado de componentes reutilizables
  NavbarComponent.render('#navbar-container');
  FooterComponent.render('#footer-container');

  // 2. Delegación de eventos para botones de WhatsApp
  document.body.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-wa-action]');
    
    if (!trigger) return;

    event.preventDefault();

    const action = trigger.dataset.waAction;
    WhatsAppFactory.open(action);
  });
});