import { config } from 'dotenv'

config()

export const serverPort: number = Number(process.env.PORT)
export const user: string = String(process.env.DB_USER)
export const host: string = String(process.env.DB_HOST)
export const database: string = String(process.env.DB_NAME)
export const password: string = String(process.env.DB_PASSWORD)
export const port: number = Number(process.env.DB_PORT)