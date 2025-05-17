require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const helmet = require('helmet');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const products = {
  product1: { name: 'Mod Pack v1', priceId: process.env.PRODUCT1_PRICE_ID },
  product2: { name: 'Python Coding Lessons - Basic', priceId: process.env.PRODUCT2_PRICE_ID }
};

app.post('/create-checkout-session', async (req, res) => {
  const { productId } = req.body;
  const product = products[productId];
  if (!product) {
    return res.status(400).json({ error: 'Invalid product ID' });
  }
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        { price: product.priceId, quantity: 1 }
      ],
      mode: 'payment',
      success_url: `${process.env.DOMAIN}/success.html`,
      cancel_url: `${process.env.DOMAIN}/cancel.html`
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at ${process.env.DOMAIN}`));
