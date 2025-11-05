// app/repositories/ClientRepository.ts
import Client from '#models/client'
import type { ClientCreatePayload } from '../types/Client.js'

export default class ClientRepository {
  async create(data: ClientCreatePayload) {
    return await Client.create(data)
  }

  async getAll() {
    return await Client.all()
  }

  async findByEmail(email: string) {
    return await Client.query().where('email', email).first()
  }

  async findById(id: number) {
    return await Client.find(id)
  }
}
