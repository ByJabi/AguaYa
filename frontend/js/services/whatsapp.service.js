/* ==========================================================================
   WHATSAPP FACTORY SERVICE - AguaYa
   ¿Qué es?
   Fábrica de enlaces y acciones de WhatsApp.
   ¿De qué se encarga?
   Construye URLs dinámicas basadas en tipos de acción y parámetros,
   evitando URLs quemadas en el HTML.
   ========================================================================== */

const CONFIG = {
  PHONE: '3183334914',
  BASE_URL: 'https://wa.me'
};

// Diccionario de generadores de mensajes según el caso de uso
const messageBuilders = {
  // Fábrica para registro de conductores
  driver_register: () => 
    'Hola AguaYa, tengo un carrotanque y quiero registrarme como conductor.',

  // Fábrica para solicitar pedido de agua
  request_service: (params = {}) => {
    const barrio = params.barrio ? ` en el barrio ${params.barrio}` : '';
    return `Hola AguaYa, necesito solicitar un servicio de agua${barrio}.`;
  },

  // Fábrica para soporte o dudas generales
  general_inquiry: () => 
    'Hola AguaYa, deseo recibir información sobre el servicio en Aguachica.'
};

export const WhatsAppFactory = {
  /**
   * Crea y abre el enlace de WhatsApp según el tipo de acción
   * @param {string} actionType - 'driver_register' | 'request_service' | 'general_inquiry'
   * @param {Object} params - Datos opcionales (ej. barrio, litros)
   */
  open(actionType, params = {}) {
    const builder = messageBuilders[actionType];
    
    if (!builder) {
      console.error(`[WhatsAppFactory] Acción no reconocida: ${actionType}`);
      return;
    }

    const message = builder(params);
    const encodedMessage = encodeURIComponent(message);
    const fullUrl = `${CONFIG.BASE_URL}/${CONFIG.PHONE}?text=${encodedMessage}`;

    // Abre WhatsApp en pestaña nueva de forma segura
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  }
};