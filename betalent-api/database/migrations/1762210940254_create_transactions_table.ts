import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('gateway_id')
        .unsigned()
        .references('id')
        .inTable('gateways')
        .onDelete('SET NULL')

      table.string('external_id').notNullable()
      table.string('status').notNullable()
      table.integer('amount').notNullable()
      table.string('card_last_numbers', 4).notNullable()

      table
        .integer('client_id')
        .unsigned()
        .references('id')
        .inTable('clients')
        .onDelete('SET NULL')

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
