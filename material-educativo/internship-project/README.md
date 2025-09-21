
## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio:

Crea un formulario de contacto con campos `name`, `email`, `message`:

1. Validación por campo y al enviar.
2. Muestra mensajes de error accesibles.
3. Deshabilita el botón mientras haya errores.
4. Limpia el formulario tras enviar correctamente.
5. Usa tipos `ContactForm` y `Errors` correctamente.
6. Extra: Campo `topic` select con opciones.
7. Extra: Persistencia en `localStorage`.

**Requisitos técnicos:**

- React + TypeScript.
- Componentes funcionales y hooks (`useState`, `useRef` opcional).
- Validaciones con expresiones regulares y atributos HTML5.
- Tipado estricto de eventos y estado.

**Estructura sugerida:**

```
src/
├── App.jsx
├── components/
│   ├── Tarea.jsx
│   ├── ListaTareas.jsx
│   ├── FormularioTarea.jsx
│   ├── Filtros.jsx
│   └── Estadisticas.jsx
├── hooks/
│   └── useLocalStorage.js
└── App.css
```

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [Fragments – React Docs](https://react.dev/reference/react/Fragment) - Documentación oficial.
- [Forms – React Docs](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components) - Controlados vs no controlados.
- [TypeScript Handbook: Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) - Tipos útiles.
- [MDN Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Validación en formularios.

### 📖 Conceptos para Investigar

- **`<></>` vs `<Fragment>`** Diferencias y uso de `key`.
- **`ChangeEvent` y `FormEvent`** en TS.
- **Validación accesible** con `aria-*`.
- **Librerías de formularios**: React Hook Form, Formik, Zod.

---

## ❓ Preguntas Frecuentes

### ¿Cuándo usar un Fragment y no un `div`?

- **Evitar wrappers** innecesarios que afectan estilos o accesibilidad.
- **Listas** donde se requiere `key` en el Fragment (usar forma larga).
- **Retornar múltiples elementos** desde un componente.

### ¿Cómo valido emails correctamente?

- **Suficiente** usar un regex simple + validación del backend.
- **Evita regex complejos** difíciles de mantener.
- **Aprovecha `type="email"`** para validación nativa.

### ¿Controlado o no controlado?

- **Controlado** para reglas y UI reactivas.
- **No controlado** para formularios simples y performance.

---

## 🎉 ¡Fragments y Formularios Dominados!

¡Excelente trabajo! Ya conoces cómo agrupar sin `div`, construir formularios controlados y validar datos con TS. En la próxima clase veremos listas, iteración y `key` para renderizar colecciones eficientemente.

**Recuerda:** practica creando pequeñas formas con distintos campos. ¡Tú puedes! 🚀
