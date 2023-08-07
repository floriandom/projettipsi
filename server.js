const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://testUser:fxPdy4LnzXsEwe9P@cluster0.9fldovw.mongodb.net/projettipsi?retryWrites=true&w=majority'; // ce n'est evidement pas mon vrai password

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(mongoURI, mongooseOptions)
  .then(() => {
    console.log('Connexion à MongoDB Atlas réussie');
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB Atlas :', err);
  });


const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');

app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} :)`);
});