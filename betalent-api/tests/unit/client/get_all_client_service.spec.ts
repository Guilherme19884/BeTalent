// tests/unit/client/get_all_client_service.spec.ts
import { test } from '@japa/runner'
import ClientRepository from '../../../app/repositories/ClientRepository.js'
import GetAllClientService from '#services/GetAllClientService'
import Client from '#models/client'

test.group('GetAllClientService', () => {
  test('deve retornar todos os clientes', async ({ assert }) => {
    const repo = new ClientRepository()

    // Mockando o método getAll
    repo.getAll = async (): Promise<Client[]> => {
      const client1 = new Client()
      client1.id = 1
      client1.name = 'Guilherme'
      client1.email = 'gui@example.com'

      const client2 = new Client()
      client2.id = 2
      client2.name = 'Ana'
      client2.email = 'ana@example.com'

      return [client1, client2]
    }

    const service = new GetAllClientService(repo)

    const result = await service.execute()

    assert.isArray(result)
    assert.lengthOf(result, 2)
    assert.equal(result[0].name, 'Guilherme')
    assert.equal(result[1].email, 'ana@example.com')
  })
})
