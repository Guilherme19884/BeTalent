// app/services/AddClientService.ts
import ClientRepository from '../repositories/ClientRepository.js'
import type { ClientCreatePayload } from '../types/Client.js'

export default class AddClientService {
  constructor(private clientRepository = new ClientRepository()) {}

  async execute(data: ClientCreatePayload) {
    const existing = await this.clientRepository.findByEmail(data.email)
    if (existing) {
      throw new Error('Client already exists')
    }

    return await this.clientRepository.create(data)
  }
}
