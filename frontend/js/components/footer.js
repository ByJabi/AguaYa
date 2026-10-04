/* ==========================================================================
   COMPONENTE FOOTER REUTILIZABLE - AguaYa
   ¿Qué es?
   Un módulo que genera e inyecta dinámicamente el pie de página de la web.
   
   ¿De qué se encarga?
   Muestra la marca, enlaces de navegación, información de contacto de Aguachica
   y el año de copyright actualizado de forma automática.
   
   ¿Por qué se hace así?
   Garantiza que el pie de página sea idéntico en todas las pantallas del sistema
   y actualiza automáticamente el año en curso sin mantenimiento manual.
   ========================================================================== */

export const FooterComponent = {
  /**
   * Renderiza el Footer dentro de un contenedor del DOM
   * @param {string} containerSelector - Selector CSS del elemento contenedor (ej. '#footer-container')
   * @param {string} basePath - Ruta relativa hacia la raíz
   */
  render(containerSelector = '#footer-container', basePath = '') {
    const container = document.querySelector(containerSelector);

    if (!container) {
      console.warn(`[FooterComponent] No se encontró el contenedor: ${containerSelector}`);
      return;
    }

    const currentYear = new Date().getFullYear();

    container.innerHTML = `
      <footer class="footer">
        <div class="container footer__container">
          
          <!-- Identidad corporativa -->
          <div class="footer__brand">
            <h3>💧 AguaYa</h3>
            <p>Conectando soluciones de agua potable en Aguachica, Cesar.</p>
          </div>

          <!-- Navegación secundaria -->
          <div class="footer__links">
            <h4>Navegación</h4>
            <ul>
              <li><a href="${basePath}index.html#como-funciona">Cómo funciona</a></li>
              <li><a href="${basePath}index.html#servicios">Servicios</a></li>
              <li><a href="${basePath}index.html#conductores">Conductores</a></li>
            </ul>
          </div>

          <!-- Canales de contacto directo -->
          <div class="footer__contact">
            <h4>Contacto</h4>
            <p>WhatsApp: +57 318 333 4914</p>
            <p>Aguachica, Cesar - Colombia</p>
          </div>

        </div>

        <!-- Derechos y año dinámico -->
        <div class="footer__bottom">
          <p>&copy; ${currentYear} AguaYa. Todos los derechos reservados.</p>
        </div>
      </footer>
    `;
  }
};