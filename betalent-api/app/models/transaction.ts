import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  belongsTo,
  manyToMany,

} from '@adonisjs/lucid/orm'
import Client from './client.js'
import Gateway from './gateway.js'
import Product from './product.js'
import * as relations from '@adonisjs/lucid/types/relations'


export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare gateway_id: number
  
  @column()
  declare external_id: string
  
  @column()
  declare status: string

  @column()
  declare amount: number // valor total da transação em centavos

  @column()
  declare card_last_numbers: string

  @column()
  declare client_id: number


  @belongsTo(() => Client)
  declare client: relations.BelongsTo<typeof Client>

  @belongsTo(() => Gateway)
  declare gateway: relations.BelongsTo<typeof Gateway>

  @manyToMany(() => Product, {
    pivotTable: 'transaction_products',
    pivotColumns: ['quantity'],
  })
  declare products: relations.ManyToMany<typeof Product>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
