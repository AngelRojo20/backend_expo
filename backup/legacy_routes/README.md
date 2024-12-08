¿Por qué eliminar la carpeta routes?
1. Reducción de redundancia:
El archivo aprendiz.routes.js define rutas para el modelo Aprendiz, pero con GraphQL, estas operaciones se realizan a través de un único endpoint (/graphql).

2. Mantener la arquitectura limpia:
Mantener archivos no utilizados en el proyecto puede causar confusión y desorganización.

3. GraphQL centraliza la lógica:
Las consultas y mutaciones en GraphQL ya manejan las operaciones previamente definidas en las rutas, eliminando la necesidad de mantenerlas por separado.