import GetAllClientService from "#services/GetAllClientService";
import { HttpContext } from "@adonisjs/core/http";

export default class GetAllClientController{
    public async handle({response}: HttpContext){
       const clients = await new GetAllClientService().execute()
       return response.ok(clients)
    }
}