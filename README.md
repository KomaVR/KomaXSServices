# Mods & Lessons Store

A modern, responsive storefront to sell game mods and Python coding lessons.  
Integrates Stripe Checkout and Google Pay for secure, seamless payments.

## 🚀 Features

- Sleek, responsive UI with a hero section and product grid.
- **Google Pay** button for one-click wallet checkout.
- Chrome native **Autofill** support on card fields.
- Secure backend powered by **Stripe Checkout**.
- Environment config via `.env`.
- Security headers via **Helmet**.
- Development with **nodemon** for live reload.

## 📦 Installation

```bash
git clone https://github.com/yourusername/mods-lessons-store.git
cd mods-lessons-store
npm install
cp .env.example .env
```

1. Edit `.env` with your Stripe secret key, domain, and product price IDs.  
2. Run the server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

## 🛒 Usage

- Browse products on the homepage.
- Click **Buy Now** or **Pay with Google Pay**.
- Complete payment via Stripe Checkout.
- You’ll be redirected to success or cancel pages accordingly.

## 📁 Project Structure

```
├── public
│   ├── index.html       # Storefront
│   ├── success.html     # Payment success page
│   └── cancel.html      # Payment cancel page
├── .env.example         # Environment variables template
├── server.js            # Express server
├── package.json         # npm metadata & scripts
├── .gitignore
└── README.md
```

## License

MIT
