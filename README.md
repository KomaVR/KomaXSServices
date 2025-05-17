# Mods & Lessons Store

A modern, responsive storefront to sell game mods and Python coding lessons.

## Features

- **HTML5 semantic structure**: header, nav, main, sections, footer.
- **Tabbed UI**: switch between Mods and Lessons seamlessly.
- **Responsive design**: works on desktop and mobile.
- **Stripe Checkout**: secure payments via Stripe.
- **Bug fixes & loading states**: proper error handling and user feedback.
- **Multi-platform compatible**: tested across browsers and devices.

## Setup

```bash
git clone https://github.com/yourusername/mods-lessons-store.git
cd mods-lessons-store
npm install
cp .env.example .env
```

Edit `.env` with your Stripe key, domain, and product price IDs.

```bash
npm run dev
```

Open `http://localhost:3000`.

## Tabs & Purchase Flow

- Click the **Mods** or **Lessons** tab to view products.
- Click **Buy Now** to start Stripe Checkout.
- Loading indicator and error alerts ensure smooth UX.

## License

MIT
