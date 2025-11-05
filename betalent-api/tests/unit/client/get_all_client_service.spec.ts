// tests/unit/client/get_all_client_service.spec.ts
import { test } from '@japa/runner'
import GetAllClientService from '#services/GetAllClientService'
import ClientRepository from '../../../app/repositories/ClientRepository.js'


test.group('GetAllClientService', () => {
  test('should return all clients', async ({ assert }) => {
    const repo = new ClientRepository()

    repo.getAll = async () => [
      { id: 1, name: 'Guilherme', email: 'gui@example.com' },
      { id: 2, name: 'Ana', email: 'ana@example.com' },
    ]

    const service = new GetAllClientService(repo)

    const result = await service.execute()

    assert.lengthOf(result, 2)
    assert.equal(result[0].name, 'Guilherme')
  })
})
