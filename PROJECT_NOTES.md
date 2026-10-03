# AguaYa — Notas y seguimiento del proyecto

> Documento de continuidad del proyecto.
> Aquí se registran decisiones, tareas pendientes, ideas, problemas encontrados y puntos importantes para poder retomar el proyecto sin perder contexto.

---

## 1. Información general

**Nombre:** AguaYa
**Tipo de proyecto:** Plataforma intermediaria para servicios relacionados con abastecimiento de agua
**Ubicación inicial:** Aguachica, Cesar, Colombia

### Idea principal

AguaYa busca facilitar el acceso de los habitantes a servicios relacionados con el abastecimiento de agua.

La primera versión del proyecto funcionará como intermediario entre:

* Residentes que necesitan agua.
* Conductores/locales que prestan el servicio de carrotanque.

Inicialmente, el contacto puede realizarse mediante WhatsApp y AguaYa obtiene una comisión por la intermediación.

A futuro se busca evolucionar hacia una plataforma digital con:

* Solicitud de carrotanques.
* Información sobre racionamientos.
* Mapa de zonas afectadas.
* Alertas de disponibilidad de agua.
* Productos de filtración.
* Limpieza y sanitización de tanques.
* Gestión digital de solicitudes y servicios.

---

# 2. Objetivo actual del proyecto

Construir progresivamente un MVP funcional de AguaYa, dejando desde el comienzo una arquitectura que permita ampliar el sistema posteriormente.

### Prioridad actual

> No intentar construir todo de una vez.

Primero se debe construir una base organizada y funcional, y posteriormente agregar módulos.

---

# 3. Arquitectura tecnológica

## Frontend

* HTML
* CSS
* JavaScript puro
* Componentes reutilizables
* Módulos JS

## Backend

* Node.js
* Express
* API REST

## Base de datos

* PostgreSQL

## Herramientas

* Git
* GitHub
* Visual Studio Code
* PostgreSQL
* pgAdmin (opcional)

---

# 4. Estructura del proyecto

```text
AguaYa/
│
├── frontend/
│   ├── index.html
│   ├── pages/
│   ├── components/
│   ├── css/
│   ├── js/
│   │   ├── services/
│   │   ├── utils/
│   │   └── config/
│   └── assets/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   └── middleware/
│   ├── tests/
│   ├── .env.example
│   └── package.json
│
├── database/
│   ├── migrations/
│   ├── seeds/
│   └── schema.sql
│
├── docs/
│
├── .github/
│
├── .gitignore
├── .editorconfig
├── README.md
└── PROJECT_NOTES.md
```

---

# 5. Estado actual

### Completado

* [x] Definir idea general de AguaYa.
* [x] Definir enfoque inicial como intermediario.
* [x] Definir tecnologías principales.
* [x] Definir arquitectura modular.
* [x] Crear estructura inicial del proyecto.
* [x] Inicializar repositorio Git.
* [x] Crear rama `main`.
* [x] Crear rama inicial de trabajo `feature/landing`.
* [x] Crear `.gitignore`.
* [x] Crear `.editorconfig`.
* [x] Crear README inicial.

### En progreso

* [ ] Construcción de la landing page.
* [ ] Definir diseño visual de AguaYa.
* [ ] Definir componentes reutilizables del frontend.

### Pendiente

* [ ] Diseñar completamente la base de datos.
* [ ] Crear backend Express.
* [ ] Crear API REST.
* [ ] Conectar frontend con backend.
* [ ] Crear sistema de usuarios.
* [ ] Crear sistema de conductores.
* [ ] Crear solicitudes de servicio.
* [ ] Crear estados de solicitudes.
* [ ] Crear sistema de tarifas/comisiones.
* [ ] Crear módulo de alertas de racionamiento.
* [ ] Crear mapa.
* [ ] Crear servicios adicionales.
* [ ] Definir autenticación.
* [ ] Crear pruebas.
* [ ] Configurar GitHub.
* [ ] Definir estrategia de despliegue.

---

# 6. Próxima tarea

## Tarea actual

Construir la primera versión visual de la landing page de AguaYa.

### Objetivo

Crear una página inicial que permita visualizar la idea del proyecto antes de conectar el backend.

### Elementos inicialmente considerados

* Logo/nombre AguaYa.
* Barra de navegación.
* Presentación principal.
* Botón para solicitar agua.
* Explicación de cómo funciona.
* Servicios ofrecidos.
* Sección para conductores.
* Información de contacto.
* Footer.

### Importante

La landing inicial **no necesita todavía conexión con la base de datos**.

Primero se trabaja la interfaz.

---

# 7. Flujo de desarrollo

Cuando se agregue una funcionalidad importante:

1. Definir qué debe hacer.
2. Revisar si necesita cambios en la base de datos.
3. Crear/modificar backend si corresponde.
4. Crear/modificar frontend.
5. Probar.
6. Corregir errores.
7. Hacer commit.
8. Actualizar este documento.
9. Pasar a la siguiente tarea.

---

# 8. Ramas Git

## Rama principal

```text
main
```

Debe mantenerse estable.

## Ramas de trabajo previstas

```text
feature/landing
feature/ui-components
feature/services
feature/requests
feature/backend-api
feature/database
feature/auth
```

### Regla

No trabajar directamente sobre `main` cuando se trate de una funcionalidad nueva.

---

# 9. Modelo inicial de datos

Estas entidades se han planteado como punto de partida.

## Usuarios

Posibles usuarios del sistema:

* Administrador.
* Cliente.
* Conductor.
* Otros roles futuros.

---

## Clientes

Información relacionada con las personas que solicitan servicios.

Posibles datos:

* Nombre.
* Teléfono.
* Dirección.
* Zona.
* Estado.

---

## Conductores

Personas que prestan el servicio de transporte de agua.

Posibles datos:

* Nombre.
* Teléfono.
* Documento.
* Estado.
* Vehículo asociado.

---

## Vehículos

Información de los carrotanques.

Posibles datos:

* Placa.
* Capacidad.
* Tipo.
* Estado.
* Conductor.

---

## Tipos de servicio

Ejemplos:

* Abastecimiento de agua.
* Limpieza de tanque.
* Sanitización.
* Otros servicios futuros.

---

## Solicitudes

Representan una solicitud realizada por un cliente.

Posibles datos:

* Cliente.
* Tipo de servicio.
* Fecha.
* Ubicación.
* Cantidad.
* Estado.
* Conductor asignado.
* Valor.

---

## Historial de estados

Permite saber cómo evolucionó una solicitud.

Ejemplo:

```text
Solicitada
    ↓
Pendiente
    ↓
Asignada
    ↓
En camino
    ↓
Completada
```

---

## Tarifas

Permitirá manejar valores de los servicios.

Debe analizarse posteriormente cómo manejar:

* Precio base.
* Distancia.
* Capacidad.
* Comisión de AguaYa.
* Pago al conductor.
* Otros costos.

---

## Alertas de racionamiento

Información relacionada con cortes o restricciones del servicio de agua.

Posibles datos:

* Zona.
* Fecha.
* Hora de inicio.
* Hora de finalización.
* Descripción.
* Fuente de información.
* Estado.

---

# 10. Decisiones importantes

### Decisión 1 — Frontend

Se utilizará inicialmente:

```text
HTML + CSS + JavaScript
```

No se utilizará inicialmente React, Angular o Vue.

---

### Decisión 2 — Backend

Se utilizará:

```text
Node.js + Express
```

---

### Decisión 3 — Base de datos

La base de datos prevista es:

```text
PostgreSQL
```

---

### Decisión 4 — Arquitectura

Se busca mantener separación entre:

```text
Frontend
    ↓
API / Backend
    ↓
Base de datos
```

El frontend no debe conectarse directamente a PostgreSQL.

---

# 11. Cosas que todavía NO están definidas

No asumir estas decisiones hasta analizarlas.

* [ ] Sistema definitivo de autenticación.
* [ ] Método de pago.
* [ ] Porcentaje de comisión.
* [ ] Cómo se calculará el precio del agua.
* [ ] Cómo se calculará el transporte.
* [ ] Si los conductores tendrán una aplicación propia.
* [ ] Si se utilizará ubicación GPS en tiempo real.
* [ ] Proveedor de mapas.
* [ ] Sistema de notificaciones.
* [ ] Hosting.
* [ ] Dominio.
* [ ] Escalabilidad.
* [ ] Políticas de privacidad.
* [ ] Tratamiento de datos personales.
* [ ] Integración definitiva con WhatsApp.

---

# 12. Ideas para después

Estas son ideas que pueden evaluarse posteriormente, pero NO forman parte de la prioridad actual.

* Sistema de calificación de conductores.
* Historial de pedidos.
* Seguimiento del conductor.
* Notificaciones.
* Geolocalización.
* Mapa de disponibilidad.
* Predicción de demanda.
* Panel administrativo.
* Estadísticas.
* Facturación.
* Pagos digitales.
* Programa de conductores afiliados.
* Inventario de productos.
* Agenda de limpieza de tanques.
* Alertas automáticas de racionamiento.

---

# 13. Problemas encontrados

Registrar aquí cualquier problema técnico importante.

### Formato

**Fecha:** YYYY-MM-DD

**Problema:**
Descripción.

**Causa:**
Qué lo produjo.

**Solución:**
Cómo se solucionó.

**Importante para el futuro:**
Qué debemos recordar para no repetirlo.

---

# 14. Errores que NO debemos repetir

Registrar aquí errores o decisiones que hayan causado problemas.

Ejemplo:

* No trabajar directamente sobre `main`.
* No guardar contraseñas reales en Git.
* No subir `.env`.
* No modificar varias partes del sistema sin probar.
* No crear tablas de base de datos sin documentarlas.
* No mezclar lógica de negocio con HTML.
* No duplicar código cuando puede convertirse en componente o función reutilizable.

---

# 15. Preguntas pendientes

Usar esta sección para cosas que todavía necesitan investigación o decisión.

### Negocio

* [ ] ¿Cómo se define exactamente la comisión de AguaYa?
* [ ] ¿Quién establece el precio final?
* [ ] ¿Cómo se verifica que un conductor está disponible?
* [ ] ¿Cómo se maneja una cancelación?
* [ ] ¿Qué ocurre si el conductor no cumple el servicio?

### Tecnología

* [ ] ¿Qué proveedor de mapas utilizar?
* [ ] ¿Qué sistema de autenticación utilizar?
* [ ] ¿Cómo enviar notificaciones?
* [ ] ¿Dónde alojar posteriormente el backend?
* [ ] ¿Dónde alojar PostgreSQL?

### Operación

* [ ] ¿Cómo se registran los conductores?
* [ ] ¿Cómo se validan?
* [ ] ¿Cómo se verifica la capacidad del carrotanque?
* [ ] ¿Cómo se controla la calidad del servicio?

---

# 16. Registro de sesiones

Cada vez que retomemos el proyecto, registrar brevemente qué se hizo.

## 2026-10-__

### Trabajamos en:

*

### Se completó:

*

### Problemas:

*

### Decisiones:

*

### Próximo paso:

*

---

# 17. Regla para retomar el proyecto

Cuando se vuelva a trabajar en AguaYa después de varios días:

1. Revisar este archivo.
2. Revisar `README.md`.
3. Ejecutar:

```bash
git status
```

4. Revisar la rama actual:

```bash
git branch
```

5. Revisar los últimos commits:

```bash
git log --oneline -10
```

6. Revisar la sección **"Próxima tarea"**.
7. Continuar desde ahí.
8. Actualizar este documento al terminar.

---

# 18. Registro de decisiones técnicas

Usar esta sección para registrar decisiones que puedan afectar futuras partes del sistema.

### Formato

**Fecha:**

**Decisión:**

**Motivo:**

**Alternativas consideradas:**

**Consecuencia:**

---

# 19. Registro de cambios importantes

| Fecha      | Cambio                      | Motivo                     |
| ---------- | --------------------------- | -------------------------- |
| 2026-10-__ | Arquitectura inicial        | Organizar el proyecto      |
| 2026-10-__ | Se eligió HTML/CSS/JS       | Mantener frontend sencillo |
| 2026-10-__ | Se eligió Node.js + Express | Crear API REST             |
| 2026-10-__ | Se eligió PostgreSQL        | Base de datos relacional   |

---

# 20. Recordatorio principal

> **AguaYa no se debe construir todo de una vez.**

Primero:

```text
Idea
 ↓
Diseño
 ↓
Landing
 ↓
Componentes frontend
 ↓
Backend
 ↓
Base de datos
 ↓
API
 ↓
Integración
 ↓
MVP
 ↓
Pruebas
 ↓
Mejoras
```

Cada funcionalidad debe quedar documentada antes de convertirse en una parte importante del sistema.

---

# 21. Próximo punto al retomar

**Objetivo inmediato:**

> Continuar con `feature/landing` y construir la primera interfaz visual de AguaYa.

Antes de comenzar una nueva funcionalidad, revisar este documento y actualizar el estado.
