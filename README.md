# Dr. Abel Health Consulting Website

A professional health consultancy website for Dr. Abel Gedefaw Ali, offering research, clinical trials, policy consulting, and health education services in Ethiopia and internationally.

## Features

- Responsive design optimized for all devices
- Comprehensive services showcase (GMP, GDP, QMS, Regulatory Compliance)
- Publications and blog sections
- Functional contact form
- SEO optimized
- Accessibility compliant (WCAG 2.1)
- Multi-language support structure

## Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Deployment:** Vercel
- **Email:** Resend (optional)

## Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete step-by-step deployment instructions from VS Code to Vercel.

## Contact Information

- **Email:** abel.gedefaw@yahoo.com
- **Phone:** +251 912 445575
- **Website:** drabelhealthconsulting.org

## Environment Variables (Optional)

For email functionality, add to `.env.local`:

```
RESEND_API_KEY=your_resend_api_key_here
```

The contact form works without this - it logs submissions. Add the API key when you want actual emails sent.

## Project Structure

```
├── app/
│   ├── about/              # About page
│   ├── api/                # API routes (contact form)
│   ├── blog/               # Blog section
│   ├── contact/            # Contact page
│   ├── data-protection/    # Data protection policy
│   ├── faq/                # FAQ page
│   ├── privacy/            # Privacy policy
│   ├── projects/           # Projects showcase
│   ├── publications/       # Publications library
│   ├── services/           # Services overview
│   ├── terms/              # Terms of use
│   └── page.tsx            # Homepage
├── components/
│   ├── ui/                 # UI components (shadcn)
│   ├── header.tsx          # Site header
│   └── footer.tsx          # Site footer
├── public/
│   └── logo.png            # Brand logo
└── lib/
    └── utils.ts            # Utility functions
```

## Key Features

### Contact Form
- Functional form validation
- Success/error notifications
- Email integration ready
- Logs all submissions

### Publications
- Searchable library
- Filter by category and year
- Download functionality
- Individual publication pages

### Blog
- Article listing
- Individual post pages
- Read more functionality
- Category organization

### Legal Pages
- Privacy Policy
- Terms of Use
- Data Protection Policy
- FAQ with accordion

## Customization

### Update Content
- Edit page files in `app/` directory
- Replace sample blog posts and publications with real content
- Update images in `public/` directory

### Styling
- Global styles: `app/globals.css`
- Theme colors: CSS variables in `globals.css`
- Component styles: Tailwind classes

### Contact Info
- Email: `app/contact/page.tsx` and `app/api/contact/route.ts`
- Phone: `app/contact/page.tsx`
- Footer: `components/footer.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2025 Dr. Abel Gedefaw Ali. All rights reserved.
