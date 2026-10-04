/* ==========================================================================
   COMPONENTE NAVBAR REUTILIZABLE - AguaYa
   ¿Qué es?
   Un módulo que genera e inyecta dinámicamente la barra de navegación.
   
   ¿De qué se encarga?
   Construye la estructura HTML del menú, resalta enlaces y centraliza
   la llamada a la acción hacia WhatsApp mediante data-wa-action.
   
   ¿Por qué se hace así?
   Evita duplicar la cabecera en múltiples páginas HTML. Si agregamos una
   nueva sección al menú, solo se edita este archivo.
   ========================================================================== */

export const NavbarComponent = {
  /**
   * Renderiza el Navbar dentro de un contenedor del DOM
   * @param {string} containerSelector - Selector CSS del elemento contenedor (ej. '#navbar-container')
   * @param {string} basePath - Ruta relativa hacia la raíz (por si se llama desde /pages/)
   */
  render(containerSelector = '#navbar-container', basePath = '') {
    const container = document.querySelector(containerSelector);

    if (!container) {
      console.warn(`[NavbarComponent] No se encontró el contenedor: ${containerSelector}`);
      return;
    }

    container.innerHTML = `
      <header class="navbar" id="inicio">
        <div class="container navbar__container">
          
          <!-- Logotipo principal de AguaYa -->
          <a href="${basePath}index.html" class="navbar__logo">
            <span class="navbar__logo-icon">💧</span> AguaYa
          </a>

          <!-- Menú de navegación principal -->
          <nav class="navbar__menu">
            <a href="${basePath}index.html#como-funciona" class="navbar__link">Cómo funciona</a>
            <a href="${basePath}index.html#servicios" class="navbar__link">Servicios</a>
            <a href="${basePath}index.html#conductores" class="navbar__link">Conductores</a>
            <a href="${basePath}index.html#cobertura" class="navbar__link">Cobertura</a>
          </nav>

          <!-- Botón de acción delegada hacia la Factory de WhatsApp -->
          <button type="button" 
                  class="btn btn--primary navbar__cta" 
                  data-wa-action="request_service">
            Pedir Agua Ahora
          </button>

        </div>
      </header>
    `;
  }
};