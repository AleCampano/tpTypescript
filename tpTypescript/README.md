El proyecto deberá incluir un README.md correctamente redactado.

Dentro del README deberán explicar:
- Cómo organizaron el proyecto.

El proyecto lo organizamos en distintas carpetas dentro del src. En este creamos los componentes en carpetas individuales y cada uno con su propio css.

- Qué componentes crearon.

Los componentes que creamos fueron: Feed, Header, PostCard, PostModal, Profile, SideBar y Stories.

- Qué responsabilidad tiene cada componente.

Cada uno de los componentes tiene como responsabilidad su respectivo TSX y CSS.
-Profile:Se encarg de mostrar justamente las publicaciones y las estadisticas del usuario logueado, que en este caso ya entras logueado.
-Feed: El feed vendria a ser la estructura de toda la pagina principal, donde se muestran  las publicaciones.
-Header: El header tiene la  barra de busqueda la cual no es funcional y el titulo de la pagina.
-PostCard: Esta parte es la estructura de  las publicaciones en la pagina principal.
-PostModal: Cuando tocas la publicacion te abre la publicacion con sus comentarios.
-SideBar: El sideBar son los botones que estan al costado de la pagina.
-Stories: Las stories son justamente como dice el nombre, la zona donde se encuentran las historias no funcionales. Donde estan los nombres de distintos usuarios.

- Por qué decidieron componentizar de esa manera.

Lo componetizamos de esta manera porque nos parecio mucho mas cómodo tener el TSX y CSS de la respectiva seccion de nuestro proyecto. Tambien separamos cada TSX con su respectivo CSS porque nos parece una foma mas simple de componentizar y organizar.

- Cómo se comunican los componentes mediante props.

Los componentes se comunican mediante interfaces, en este caso tenemos las interfaces de Post y de las respuestas de la API. Eso lo exportamos principalmente a los postModal y Card.

- Qué hooks utilizaron y para qué.

Usamos el UseState y el UseEffect. 
-El useState principalmente guarda la funcion setLike para que a las publicaciones a las que le des like se les guarde ese mismo like.
-El useEffect lo usamos principalmente para el feed, en este usamos una funcion async que espere a que le lleguen las imagenes de la api para asi poder mostrarlas en las publicaciones.

- Qué diseño de Figma utilizaron como referencia.

El diseño de Figma que utilizamos como referencia fue: - https://www.figma.com/community/file/1004033523744290376

- Cómo resolvieron la visualización individual de publicaciones.

Principalmente en el postModal, el cual se encarga de ser el componente de cada publicacion individual. Tambien utilizamos la interfaz de Props para estructurar esa publicacion. 

-  Cómo simularon el perfil de usuario logueado.

Exportamos el UserData.ts que tiene toda la info del usuario ya logueado hacia el profile.tsx. Desde UserData se le puede modificar la informacion al usuario ya logueado.

-  Qué datos decidieron mostrar en el perfil.

Los datos que decidimos mostar en el perfil son: Cantidad de Publiaciones, Seguidores y Seguidos, las fotos de las publicaciones, descripción y nombre de usuario. También pusimos un boton visual de editar perfil.

-  Qué estados utilizaron para seleccionar publicaciones o manejar la vista individual.

Utilizamos el estado selectedPost con useState para almacenar la publicacion seleccionada, esto te deja abrir y cerrar el modal de vista individual, mostrando la informacion del post seleccionado.
