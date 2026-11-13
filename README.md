# paginadepepe — XS-Leak de dimensiones de imagen

Página atacante para el challenge **"Imagen Importante"** (UTN FRR, CTF autorizado).

## Idea

El nivel de privilegio de Pepe = `naturalWidth * naturalHeight` del archivo real de su
`/profile-pic`. La CSS lo muestra 500x500 con `object-fit: cover` → eso es un **señuelo**.

Una imagen cross-origin NO deja leer sus píxeles (CORS protege el canvas), pero **sí**
deja leer sus dimensiones intrínsecas. Esa es la fuga. `/profile-pic` se sirve según la
**sesión** del que la pide, así que hay que leerla con la sesión de **Pepe**: la función
de ingeniería social del challenge fuerza a Pepe a abrir esta página con sus cookies.

## Uso

1. Editá `index.html`:
   - `CHALLENGE_ORIGIN` → dominio del challenge (protocolo + dominio, sin path).
   - `LEAK_ENDPOINT` → tu receptor:
     - rápido: `https://webhook.site/<tu-id>` (sin backend), o
     - propio: `https://TU-SERVER/receiver.php` (incluido acá; escribe `leaks.log`).
2. Desplegá el sitio en algo accesible desde Internet.
3. En el challenge:
   - Campo 1 (dominio, sin path): el `CHALLENGE_ORIGIN`.
   - Campo 2 (otro sitio, con path): la URL de tu `index.html`.
   - Clic en **"Engañar a Pepe a ingresar a los sitios"**.
4. Mirá tu receptor: `w`, `h`, `level = w*h` y `md5` ya calculado.

El `md5(level)` es la respuesta.

## Si falla

Si el valor que te llega es igual a tu propio nivel, la cookie de sesión no viajó en la
request de la imagen (`SameSite=Lax/Strict`). En ese caso el leak como `<img>` de
tercera parte no lleva la sesión de Pepe y hay que buscar otra variante.
