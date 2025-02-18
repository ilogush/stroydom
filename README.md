# Webstroydom App

This is a simple Astro application that demonstrates the use of components, layouts, and global styles.

## Project Structure

```
my-astro-app
├── src
│   ├── components          # Reusable components
│   │   └── ExampleComponent.astro
│   ├── layouts             # Layout components
│   │   └── MainLayout.astro
│   ├── pages               # Application pages
│   │   └── index.astro     # Main entry point
│   └── styles              # Global styles
│       └── global.css
├── public                  # Static assets
│   └── favicon.ico         # Favicon
├── package.json            # NPM configuration
├── astro.config.mjs       # Astro configuration
└── README.md               # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-astro-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to see your application in action.

## Usage

- The `ExampleComponent.astro` file contains a reusable component that can be used throughout the application.
- The `MainLayout.astro` file provides a consistent layout for all pages.
- The `index.astro` file serves as the homepage and can include various components and content.
- Global styles are defined in `global.css` and are applied across all components and pages.

## License

This project is licensed under the MIT License.