interface IEndereco {
    rua: string
    lat: number, 
    lng: number
}

export interface ICreateCliente {
    nome: string
    email: string
    telefone?: string
    endereco: IEndereco
}

export interface IPutCliente {
    id: string
    nome?: string
    email?: string
    telefone?: string
    endereco?: IEndereco
}