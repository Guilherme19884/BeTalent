import Route from '@adonisjs/core/services/router'
import AddClientController from '#controllers/AddClientController'
import GetAllClientsController from '#controllers/GetAllClientController'

Route.post('/clients', [AddClientController, 'handle'])
Route.get('/clients', [GetAllClientsController, 'handle'])
