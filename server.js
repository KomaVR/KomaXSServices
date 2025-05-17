require('dotenv').config()
const express = require('express')
const fetch   = require('node-fetch')
const path    = require('path')

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

const { BTCPAY_URL, BTCPAY_API_KEY, DOMAIN } = process.env

const products = {
  product1: {
    name:     'Custom Modded Apk',
    amount:   process.env.PRODUCT1_AMT,
    currency: process.env.PRODUCT1_CURRENCY
  },
  product2: {
    name:     'Python 101 Lessons',
    amount:   process.env.PRODUCT2_AMT,
    currency: process.env.PRODUCT2_CURRENCY
  }
}

app.post('/create-crypto-invoice', async (req, res) => {
  const { productId } = req.body
  const prod = products[productId]
  if (!prod) return res.status(400).json({ error: 'Invalid product ID' })

  try {
    const resp = await fetch(`${BTCPAY_URL}/invoices`, {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `token ${BTCPAY_API_KEY}`
      },
      body: JSON.stringify({
        Amount:    prod.amount,
        currency:  prod.currency,
        metadata:  { product: prod.name },
        checkout:  {
          speedPolicy:           'HighSpeed',
          redirectAutomatically: true
        }
      })
    })
    const invoice = await resp.json()
    const invoiceUrl = invoice.checkoutLink || invoice.url
    return res.json({ invoiceUrl })
  } catch (err) {
    console.error('BTCPay error:', err)
    return res.status(500).json({ error: 'Could not create invoice' })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Server running at ${DOMAIN}`)
})
