# Domain Driven Solutions Homepage

This is the homepage for Domain Driven Solutions, built with Next.js, React, and Tailwind CSS.

## Features

- Modern, responsive design
- Modal contact form using Formspree
- Tailwind CSS for styling
- TypeScript for type safety
- Next.js 14 for server-side rendering and routing

## Getting Started

1. Install dependencies:
```bash
   npm install
```

2. Create a `.env.local` file in the root directory and add your Formspree endpoint ID:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your-formspree-id
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/page.tsx` - Main homepage component
- `src/app/layout.tsx` - Root layout component
- `src/app/globals.css` - Global styles and Tailwind imports

## Contact Form

The contact form uses Formspree for handling form submissions. Make sure to:
1. Create a form at [formspree.io](https://formspree.io)
2. Replace `YOUR_FORMSPREE_ID` in the page component with your actual Formspree form ID
3. Test the form submission in development mode

## Deployment

The site can be deployed to any platform that supports Next.js, such as Vercel or Netlify.

## License

All rights reserved © Domain Driven Solutions 