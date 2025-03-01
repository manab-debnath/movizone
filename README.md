# Movie Explorer

Movie Explorer is a web application built with Next.js that allows users to explore movies and TV shows. Users can view details about movies and TV shows, including their ratings, genres, production companies, and more.

## Features

- Browse popular movies and TV shows
- View detailed information about movies and TV shows
- Search for movies and TV shows
- Responsive design for mobile and desktop

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Axios
- Framer Motion

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-explorer.git
   cd movie-explorer
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your API key and URL:

   ```env
   NEXT_PUBLIC_API_URL=https://api.themoviedb.org/3/
   NEXT_PUBLIC_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
movie-explorer/
├── app/
│   ├── movies/
│   │   ├── [urlTitle]/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── series/
│   │   ├── [urlTitle]/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── loading.tsx
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── MovieCard.tsx
│   ├── Navbar.tsx
│   ├── Pagination.tsx
│   ├── PosterCard.tsx
│   ├── SectionHeader.tsx
│   ├── SearchCard.tsx
│   └── SeriesDetails.tsx
├── hooks/
│   ├── useScrollDirection.ts
│   └── useActiveNav.ts
├── config/
│   └── index.ts
├── public/
│   ├── MoviZone-logo.png
│   └── ...
├── .env.local
├── README.md
├── next.config.js
├── package.json
└── tsconfig.json
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.