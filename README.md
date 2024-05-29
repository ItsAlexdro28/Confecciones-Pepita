# Confecciones-Pepita

## Todo List:



#### Materia Prima

| Id                | Alfanumérico    |
| ----------------- | --------------- |
| nombre            | texto           |
| descripcion       | texto           |
| categoria         | texto           |
| proveedor         | texto / alfanum |
| costo unidad      | numero decimal  |
| unidad medida     | texto           |
| cantidad stock    | numero          |
| fecha adquisicion | fecha           |
| fecha vencimiento | fecha           |
| ubicacion almacen | texto           |
| notas             | texto           |

##### Objetivo:

- [ ] Añadir materia

- [ ]  Editar materia

- [ ]  Actualizar stock



#### Eficiencia Operativa

variables (por producto terminado)

- Cantidad total de productos terminados 

- Horas totales de produccion 

- Costos Operativos totales (c)

- Numero de productos defectuosos 

resultados

+ Productividad = v1 / v2

+ Costo Operativo por Unidad = v3 / v1

+ Tasa de Defectos = (v4 / v1)

+ Produccion efectiva = v1 / v4

+ Eficiencia operativa = Produccion efectiva / v3

##### Objetivo:

- [ ]  Ingreso de variables

- [ ]  Aviso de datos faltantes

- [ ]  Diferentes perfiles para cada producto

- [ ]  Envio API



#### Costo Mano de obra

variables (por empleado)

+ Salario por hora

+ Horas trabajadas

+ Beneficios y prestaciones (fijo o %)

+ Costo indirecto (duplicado)

costos indirectos (generales mensuales)

+ alquiler local

+ servicios publicos

+ mantenimiento maquinaria

+ equipo de proteccion personal

+ formacion y capacitacion

+ seguros

+ gstos oficina

+ transporte y logisica

+ licencias y permisos

+ servicios de limpieza

##### Objetivos:

- [ ]  Suma ambos totales

- [ ]  Avisar datos faltantes

- [ ]  envio API



#### Costo produccion por lote

variables (por lote)

+ Cantidad productos

+ Cantidad materia prima (cada una)

+ Costo Por unidad materia prima (cada una)

+ Horas de Mano de obra directa

+ Salario por hora

+ Base de asignacion (unidades producidas al mes)

resultados 

+ costo materia prima por lote = v2 x v3

+ costo mano de obra por lote = v4 x v5

+ tasa de asignacion de costos indirectos = costos indirectos totales / v6

+ costo indirecto asignado por lote = tasa asignacion x v1

+ costo total de produccion por lote = costo materia prima + costo mano de obra + costo indirecto por lote

##### Objetivos:

- [ ]  Calculo total

- [ ]  Avisar datos faltantes

- [ ]  Envio API



#### Reportes

traer desde API para mostrar reporte