# projettipsi

Le projet à été fait avec node 16.14

## Installation

1. Clonez ce dépôt : `git clone https://github.com/floriandom/projettipsi.git`
2. Accédez au répertoire : `cd projettipsi`
3. Installez les dépendances : `npm install`


## Utilisation

1. Démarrer le serveur : `node server.js`
2. Addresse locale de l'API : `http://localhost:3000/`
3. Faire les appels via Postman ou autre plateforme


## Endpoints API

- `GET /products/getAllProducts` : Récupère la liste des produits.
- `GET /getProductById/:id` : Récupère un produit par son ID. 
- `GET /orders/getAllOrders` : Récupère la liste des commandes. 
- `POST /orders/create` : Créer une commande. 


## Exemples d'appels d'API

- http://localhost:3000/products/getAllProducts
- http://localhost:3000/products/getProductById/64d0b71e20ea63696555d941
- http://localhost:3000/orders/getAllOrders
- http://localhost:3000/orders/create
    En POST et remplir le body en raw JSON par exemple :
    {
    "productList":[
        "64d0b78520ea636965561c7d",
        "64d0b78c20ea63696556210a"
    ],
    "status": "pending"
    }


## Structure
- models -> les fichiers qui décrivent la structure des differentes collections en base de données
- routes -> les differentes endpoints de l'API y sont centralisés
- server.js -> racine du projet, on y fait la connection à la db et l'écoute du port de l'API


En cas de problème me contacter -> floriandominguez.contact@gmail.com