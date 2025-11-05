// tests/unit/client/add_client_service.spec.ts
import { test } from '@japa/runner'
import ClientRepository from '../../../app/repositories/ClientRepository.js'
import { ClientCreatePayload } from '../../../app/types/Client.js'
import Client from '#models/client'
import AddClientService from '#services/AddClientService'


test.group('AddClientService', () => {
  test('deve criar um novo cliente', async ({ assert }) => {
    const repo = new ClientRepository()

    // Mockando métodos diretamente
    repo.findByEmail = async () => null

   repo.create = async (data: ClientCreatePayload): Promise<Client> => {
        const client = new Client()
        client.id = 1
        client.name = data.name
        client.email = data.email
        return client
    }


    const service = new AddClientService(repo)

    const result = await service.execute({
      name: 'Guilherme',
      email: 'gui@example.com',
    })

    assert.equal(result.name, 'Guilherme')
    assert.equal(result.email, 'gui@example.com')
  })

  test('deve lançar erro se o email já existir', async ({ assert }) => {
    const repo = new ClientRepository()

    repo.findByEmail = async () => {
      const client = new (require('App/Models/Client'))()
      client.id = 1
      client.name = 'Guilherme'
      client.email = 'gui@example.com'
      return client
    }

    const service = new AddClientService(repo)

    await assert.rejects(
        async () => {
            await service.execute({
                name: 'Guilherme',
                email: 'gui@example.com',
            })
        },
        Error // ou uma RegExp, ou uma função de validação
    )
  })
})
