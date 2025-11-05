import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Transaction from './transaction.js'
import * as relations from '@adonisjs/lucid/types/relations'



export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare amount: number

  @manyToMany(() => Transaction, {
    pivotTable: 'transaction_products',
    pivotColumns: ['quantity'],
  })
  declare transactions: relations.ManyToMany<typeof Transaction>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}