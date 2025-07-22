# 🖥️ Frontend - Angular 20.1

Este projeto é a interface web para o CRUD de motos, que se comunica com a API Laravel.

## ✅ Requisitos

- Node.js
- Angular CLI (`npm install -g @angular/cli`)

  ## 🔧 Instalação

```bash
git clone https://github.com/codefull425/CRUD-motocicletas-ANGULAR
cd CRUD-motocicletas-ANGULAR/Desktop/angular/crud-motos/motos-front
npm install
ng serve
```


## 🌐 Rotas da Aplicação

| Caminho        | Componente          | Descrição                     |
|----------------|---------------------|-------------------------------|
| `/motos`       | `IndexComponent`    | Lista todas as motos          |
| `/motos/create`| `CreateComponent`   | Formulário para nova moto     |
| `/motos/edit/:id`| `EditComponent`   | Edição dos dados da moto      |

## 🔗 Comunicação com API

O frontend consome a API hospedada em http://127.0.0.1:8000

| Método | Rota              | Descrição                 |
|--------|-------------------|---------------------------|
| GET    | /api/motos        | Listar todas as motos     |
| POST   | /api/motos        | Criar nova moto           |
| GET    | /api/motos/{id}   | Detalhar uma moto         |
| PUT    | /api/motos/{id}   | Atualizar dados da moto   |
| DELETE | /api/motos/{id}   | Remover moto              |

As URL's de acesso via web são as seguintes, hospedadas em: http://localhost:4200

| Método | Rota              | Descrição                 |
|--------|-------------------|---------------------------|
| GET    | /motos            | Listar todas as motos     |
| POST   | /motos/create     | Criar nova moto           |
| PUT    | /motos/edit/{id}  | Atualizar dados da moto   |
| DELETE | /motos/{id}       | Remover moto              |
