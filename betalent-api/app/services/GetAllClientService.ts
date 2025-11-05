// app/services/GetAllClientService.ts
import ClientRepository from '../repositories/ClientRepository.js'

export default class GetAllClientService {
  constructor(private clientRepository = new ClientRepository()) {}

  async execute() {
    return await this.clientRepository.getAll()
  }
}
