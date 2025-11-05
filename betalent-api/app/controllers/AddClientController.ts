import type { HttpContext } from '@adonisjs/core/http'
import AddClientService from "#services/AddClientService"

export default class AddClientController {
    public async handle({ request, response }: HttpContext){
        const data = request.only(['name', 'email'])
        try{
            const client = await new AddClientService().execute(data)
            return response.created(client)
        }catch (error){
            return response.badRequest({message: error.message})
        }
    }
}