# D365types  

Paquete de ayuda para el desarrollo de aplicaciones de d365 con JS.  

## 📑 Índice  

1. [Instalación](#instalación)  
2. [Uso de D365types](#uso-de-d365types)  
   - [Referencia de tipos](#referencia-de-tipos)  
   - [Uso en funciones](#uso-en-funciones)  

---

## 📦 Instalación  

TODO: Paquete NPM  

## ⚙️ Uso de D365types  

### 📄 Referencia de tipos  
Para añadir al archivo JS los tipados y el autocompletado del paquete hay que añadir el siguiente código al comienzo del documento:  

```
/// <reference path="types/d365.d.ts" />
```

### 🚀 Uso en funciones

Para hacer uso de las ayudas del paquete es necesario que las funciones a las que pasamos el executionContext de D365 tengan como nombre del parametro principal executionContext
y se añada el comentario siguiente sobre cada funcion que haga uso del paquete:

```
/**
 * @param {D365.ExecutionContext} executionContext
 */
function OnLoad(executionContext) {
    const formContext = executionContext.getFormContext();
    const name =  formContext.getAttribute("name").getValue();
}
```