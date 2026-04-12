# Guía Sencilla: Cómo funciona nuestra web (TuristFlow)

¡Hola! Esta es una guía súper fácil para entender qué hace exactamente esta página web que hemos construido. Piensa en esta web como si fuera el **"cerebro"** o el mando a distancia del negocio de alquileres turísticos.

---

## 1. ¿Qué es esta página?
Es un **Sistema de Control** (también llamado ERP). 
Imagina que tienes 10 o 20 apartamentos turísticos. Es imposible recordar en tu cabeza a qué hora sale un huesped, a quién has mandado a limpiar, o qué apartamento tiene una tubería rota. 
Esta web sirve para **ver todo eso en una sola pantalla y con unos pocos clics**.

## 2. Las Tres Piezas Principales
Si miras la pantalla, verás que está dividida en tres bloques:
1. **La Puerta (Login):** La pantalla del principio pide usuario y contraseña para que no se cuele cualquiera. 
2. **El Menú Lateral (Izquierda):** Es como el índice de un libro. Sirve para saltar de un departamento de la empresa a otro (ir a ver la limpieza, ir a ver a los técnicos, o ir al inventario de sábanas).
3. **La Campana de Alertas (Arriba a la derecha):** Es un "chivato". Si algo sale mal (como si faltan toallas o se rompe una cama), te avisa ahí con una lucecita roja o amarilla.

---

## 3. ¿Para qué sirve cada apartado del Menú?

Aquí tienes explicadito qué se hace en cada pestaña:

*   **📊 Panel de Control (Dashboard):** Es el resumen general para el jefe. Te dice con números grandes el resumen del día: cuántas casas están listas, cuántas esperan limpieza y cuántas tienen un problema.
*   **🏠 Viviendas y Turnos:** Es la lista de todos tus pisos. Si haces clic en la fotito de la casa, se amplía. Aquí ves quién hace check-in y a qué hora.
*   **🧹 Gestión de Limpieza:** Parece un tablero de notas adhesivas (post-its). Aquí ves:
    *   Lo que hay que limpiar.
    *   A quién del equipo le toca limpiarlo (puedes elegirlo tú haciendo clic en el desplegable).
    *   Si le das a "Finalizar" cuando acabe de limpiar, mágicamente la casa pasará a estar lista para alquilar.
*   **🔥 Incidencias:** Es para apuntar roturas. Si le das a `+ Nueva Incidencia` y escribes "Se rompió el aire acondicionado", automáticamente la casa se bloquea (se pone roja) para que nadie la alquile por error.
*   **🔧 Mantenimiento:** Aquí ven los técnicos sus tareas. Puedes darle a `Asignar Téc.` y elegir a Javier o a Roberto para que vayan a arreglar el aire acondicionado roto. Cuando le des a "Resolver", la casa vuelve a estar bien.
*   **📦 Gestión de Inventario:** El armario digital. Te avisa si te estás quedando sin jabones o sábanas. Si pulsas en `Generar Pedido`, el ordenador hace una compra automática virtual y vuelves a tener stock en verde.
*   **👩‍💼 Gestión de Usuarios:** Aquí das de alta a los empleados para asignarles roles (quién limpia y quién repara).

## 4. En Resumen
La web está **"viva"**. Si en el apartado de _Incidencias_ apuntas que una casa tiene una rotura, el sistema entero avisa al almacén, bloquea la casa y genera un aviso al conserje. No es solo un dibujo bonito, es una máquina perfectamente engrasada para que el hotel no sea un caos.
