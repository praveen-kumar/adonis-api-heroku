'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get("/", () => {
  return { greeting: "Welcome to the Adonis API tutorial" };
});

//User routes
Route.group(() => {
  Route.post("create", "UserController.create");

  Route.route("get", "UserController.fetch", ["GET", "POST"]);
}).prefix("user");
