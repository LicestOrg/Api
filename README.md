# Licest

> [!WARNING]
> This project is still in early developpment.

This repository contains the api of the Licest project.

## How to install
```bash
git clone git@github.com:LicestOrg/Api.git
cd Api
```

## How to use

> [!WARNING]
> Set the environment variables in the `.env` file.

> [!WARNING]
> This repository do not contain the production files and the database server.

Start the api server
```bash
npm ci
npm run start:dev
```

## The database schema

```mermaid
erDiagram

User ||--o| Page : has
User {
    Uuid            id

    String          tag
    String          email
    String          name
    String          password

    Date            createdAt
    Date            updatedAt

    Page[]          pages
}

Page ||--o| Element : has
Page {
    Uuid            id
    User            owner
    Uuid            ownerId

    String          title
    String          type
    TypeProperty[]  properties

    Date            createdAt
    Date            updatedAt

    Element[]       elements
}

Element ||--o| Property : has
Element {
    Int             id
    Page            page
    Uuid            pageId

    String          name

    Date            createdAt
    Date            updatedAt

    Property[]      properties
}

Property {
    number          id
    Element         element
    number          elementId

    String          name
    String          value

    TypeProperty    type
}
```
