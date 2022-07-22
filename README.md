# La Nonna Recetas Backend

# Requerimientos
| Requerimiento | Descripcion |
| ------------- | ----------- |
| **SITIO INSTITUCIONAL** | *La aplicación debe incluir un sitio institucional en donde los usuarios pueden consultar y buscar distintas recetas*|
| **REGISTRO NUEVOS USUARIOS**| *Los usuarios podrán registrarse para utilizar la aplicación, para ello deberán completar un formulario con la siguiente información: **nombre y apellido, mail, número de teléfono**. No se permitirá registrar usuarios con el mismo mail.*|
| **INGRESO USUARIOS** | *Los usuarios podrán ingresar a la aplicación con su mail y contraseña. Tendrán la posibilidad de solicitar una nueva en caso de olvidarla mediante la opción **OLVIDE CONTRASEÑA**. Se recomienda utilizar algún criterio de validación para el reseteo de la misma.* |
| **PERFIL USUARIOS REGISTRADOS**| *Los usuarios registrados podrán gestionar su nombre y cambiar contraseña.*|
| **REGISTRO DE RECETAS** | Los usuarios podrán registrar nuevas recetas en el sitio. Cada receta debe contar con: **nombre**, **categoria**, **ingredientes**, **procedimiento**, **dificultad (calificada de 1 a 5)** e **imagenes**. Las recetas creadas quedaran registradas en el sistema en estado borrador hasta que el usuario decida publicarlas.
| **MODIFICACION DE RECETAS** |  Los usuarios podrán modificar el contenido de sus recetas, quitarlas de publicación o publicarlas nuevamente.|
| **ELIMINACION DE RECETAS** | Los usuarios podrán eliminar sus recetas del sitio.|
| **CALIFICAR RECETAS** | Los usuarios registrados podrán calificar las recetas publicadas. Esta calificación debe poder visualizarse en el sitio principal para que los usuarios puedan filtrar recetas.|

# Endpoints
Usuarios:
- get - /
- put - /
- post - /registration
- delete - /:id
- post - /login/
- post - /guardarImgUser
- post - /uploadImgUser
- post - /sendMail

Recetas:
- get - /
- delete - /
- post - /
- get - /getTopRecipes
- get - /getRecipes/:searchQuery
- post - /rating
- post - /imgRecipeCover
- post - /imgRecipeStep

<!-- PROYECTOS -->
## Proyectos

| Proyecto | Link |
| ------ | ------ |
| **FRONT** | https://github.com/RodriguezMauro94/Api2022Recetas |
| **BACK** | https://github.com/RodriguezMauro94/Api2022RecetasBack |


<p align="right">(<a href="#top">back to top</a>)</p>

### Prerequisites

Node
npm
Express
jsonwebtoken
mongoose
nodemon

`npm install`

`nodemon app.js`


### Clone

- Clone this repo to your local machine using [https://github.com/Abdurraheem/REST-API-JWTWEB-TOKEN.git]

### Setup

> now install npm and packages

```shell
$ npm install
$ bower install (if require)
```



#### *Diagrama de clases conceptuales*

![diagrama de clases conceptuales](https://github.com/RodriguezMauro94/Api2022RecetasBack/blob/main/img/modeloTpoApi.JPG?raw=true)

#### *Diagrama **mongodb***

![diagrama mongodb](https://github.com/RodriguezMauro94/Api2022RecetasBack/blob/main/img/modelobdTPOapi.JPG?raw=true)
 
## Equipo de trabajo
- Mauro Rodriguez
- Franco Benito


## Running the tests

It consist of a User model and controller. The model
defines the data, and the controller will contain all 
the business logic needed to interact with the database. 

It has a db file which will be used to
connect the app to the database, and an app file used
for bootstrapping the application itself.

The server file is used to spin up the server and tells the
app to listen on a specific port.

Let’s test this out. Why not?
Open up your REST API testing tool of choice, I use Postman or Insomnia, but any will do.

Go back to your terminal and run node server.js. If it is running, stop it, save all changes to you files, and run node server.js again.

Open up your REST API testing tool of choice, I use Postman or Insomnia, but any will do.

Go back to your terminal and run node server.js. If it is running, stop it, save all changes to you files, and run node server.js again.

Open up Postman and hit the register endpoint (http://localhost:3000/api/users/registration). Make sure to pick the POST method and x-www-form-url-encoded.
Now, add some values. My user’s name is 'Mohammad' , email is 'mohdabdur786@gmail.com' and his password is 'Wow@123' 

See the response? The token is a long jumbled string. 
To try out the http://localhost:3000/api/users endpoint, first copy the token. Change the URL to http://localhost:3000/api/users , and the method to GET.
Now you can add the token to the request header.

You will get list of users...

Try to update users the http://localhost:3000/api/users endpoint, and the method to PUT with x-www-form-url-encoded.
Now, add some values.Update name is 'Abdur' , email is 'mohdabdur786@gmail.com' and his password is 'Wow@123' 

Delete some users hit http://localhost:3000/api/users/(_id) endpoint with the method DELETE.

##Disclaimer: The logout endpoint is not needed. The act of logging out can solely be done through the client side. A token is usually kept in a cookie or the browser’s localstorage. Logging out is as simple as destroying the token on the client. This /logout endpoint is created to logically depict what happens when you log out. The token gets set to null.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
