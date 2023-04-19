# Bike Test
## Este es un proyecto para una aplicación de pruebas para un servicio de alquiler de bicicletas.

## Requerimientos
Node.js 14.x o superior
NPM 7.x o superior
## Instalación
Clonar este repositorio: git clone https://github.com/exequiellatinista/bike-test.git

Instalar dependencias:
```bash
  cd bike-test
  yarn install
```
Iniciar la aplicación en modo de desarrollo:
```bash
  yarn dev
```
## Uso
Una vez que la aplicación esté corriendo en modo de desarrollo, podrás acceder a ella en tu navegador en http://localhost:5173.

La aplicación te permitirá ver una lista de bicicletas disponibles, seleccionar una y alquilarla en un periodo de tiempo.

## Tech Stack
React
React Router
Material UI
Tailwind CSS
Vite

## Enfoque
He decidido poner un mayor enfoque en el router de la app. Evalué la opción de que tanto el formulario como la home se rendericen de manera condicional en la misma página, pero me pareció una mejor solución separarlas y que la página del formulario pueda ser accedida en cualquier momento compartiendo la URL.

Por otro lado, generé una configuración básica para ESLint y Prettier para tener un código más limpio.

Implementé MaterialUI para el uso del modal y toast de notificación, me pareció una buena idea ya que el equipo trabaja con estas herramientas.

También usé Tailwind para algunos estilos sencillos y aproveché otros que genera Vite al momento de crear una React App.

Me pareció una buena idea extraer la lógica del cálculo del precio del alquiler a una función. Además, también tener un objeto que devuelve la ecuación correcta según el tipo de bicicleta que se desea consultar.

Otro aspecto en el que hice hincapié fue en el tipado de los datos, como se puede ver. Me parece muy importante tener claro el contrato de los datos tanto entre servicios externos como en los componentes y funciones de esta.

Me pareció una buena idea agregar un layout para facilitar la navegación a la hora de testear la app. Si bien no es un requerimiento, mejora la experiencia de usuario.



Hay varios puntos que se pueden mejorar para tener una aplicación más escalable:

Implementación de un store global para la gestión de los servicios (o como alternativa: SWR).
Validación de formulario (Formik o similar).
Uso de useReducer en el componente de formulario para mejor manejo del estado.
Test unitarios (Jest).
