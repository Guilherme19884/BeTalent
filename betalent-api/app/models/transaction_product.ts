import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  belongsTo,
} from '@adonisjs/lucid/orm'
import Transaction from './transaction.js'
import Product from './product.js'
import * as relations from '@adonisjs/lucid/types/relations'

export default class TransactionProduct extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare transaction_id: number

  @column()
  declare product_id: number

  @column()
  declare quantity: number

  @belongsTo(() => Transaction)
  declare transaction: relations.BelongsTo<typeof Transaction>

  @belongsTo(() => Product)
  declare product: relations.BelongsTo<typeof Product>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
