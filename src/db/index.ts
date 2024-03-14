import { Pool } from 'pg'
import { database, host, password, port, user } from '../constants'

const config = {
    database, 
    host, 
    password, 
    port, 
    user
}

const db = new Pool(config)

export const query = async (q: string, p: any) => await db.query(q, p)