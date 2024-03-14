# Como iniciar o projeto

clone o repositório na sua máquina
```
  git clone git@github.com:EmmanuelRBoo/fj_backend.git
```

entre na pasta
```
  cd fj_backend
```

execute o comando para instalar as dependências
```
  yarn
```

execute o comando para iniciar o servidor
```
  yarn dev
```

agora você pode fazer as requisições na url 'http://localhost:3333/api/v1/cliente'

As requisições POST e PUT necessitam de coordenadas, recomendo usar este [site](https://www.latlong.net/convert-address-to-lat-long.html)

o body básico para as requisições é: 
```
{
    id: string,
    nome: string,
    email: string,
    telefone: string,
    endereco: {
        rua: string,
        lat: number,
        lng: number
    }
}
```

Para uma requisição post não é necessário o id
As requisições PUT e DELETE necessitam o id na url por exemplo: 'api/v1/cliente/:id'.