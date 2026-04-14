# Node API Template (Express + Prisma + MySQL + JWT)

API backend prête à l’emploi construite avec **Node.js**, **Express**, **Prisma ORM**, et **MySQL**, incluant une authentification JWT et une architecture modulaire inspirée de Symfony.

---

## Stack technique

* Node.js (ES Modules)
* Express.js
* Prisma ORM
* MySQL
* JWT (authentification)
* Docker (optionnel)

---

## Structure du projet

```
.
├── prisma/
│   └── schema.prisma
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   └── utils/
├── server.js
├── .env
├── package.json
└── docker-compose.yml
```

---

## Installation

```bash
git clone <repo-url>
cd node-api-template
npm install
```

---

## Configuration

Créer un fichier `.env` à la racine :

```
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/DB_NAME"
JWT_SECRET=your_secret_key
PORT=3000
```

---

## Base de données (Prisma)

### Initialiser Prisma

```bash
npx prisma generate
```

### Appliquer les migrations

```bash
npx prisma migrate dev --name init
```

### Interface graphique

```bash
npx prisma studio
```

---

## Lancer le projet

### Mode développement

```bash
npm run dev
```

### Mode production

```bash
npm start
```

---

## Authentification

### Routes disponibles

* `POST /api/auth/register`
* `POST /api/auth/login`

### Exemple requête login

```json
{
  "email": "test@mail.com",
  "password": "123456"
}
```

---

## Docker (optionnel)

### Lancer les services

```bash
docker-compose up -d
```

---

## Bonnes pratiques

* Ne jamais commit le fichier `.env`
* Versionner `prisma/schema.prisma`
* Versionner les migrations Prisma (recommandé en équipe)
* Utiliser des variables d’environnement

---

## Améliorations possibles

* Refresh Token (JWT)
* Gestion des rôles (RBAC)
* Validation des données (Joi / Zod)
* Documentation API (Swagger)
* Tests (Jest)

---

## Auteur

Projet template créé par Anjarasoa Solofondraibe pour accélérer le développement d’API Node.js.

---

## Licence

MIT
