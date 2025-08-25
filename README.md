# Bitcoin Is BAE - Interactive Crypto Training Modules

A comprehensive web-based training platform for cryptocurrency education, designed specifically for the Bitcoin Is BAE brand. This application features interactive modules covering essential crypto trading concepts with a beautiful, modern UI.

## 🚀 Features

- **4 Interactive Training Modules:**
  - Risk Management Essentials
  - Crypto Trading Terminology
  - Candlestick Patterns Explained
  - Chart Patterns for Beginners

- **Modern UI/UX:**
  - Beautiful purple-to-pink gradient design
  - Responsive layout for desktop and mobile
  - Interactive elements and animations
  - Progress tracking

- **Interactive Elements:**
  - Section-by-section navigation
  - Progress tracking
  - Mark as complete functionality
  - Responsive design

## 🛠️ Technology Stack

- **Frontend:** React 18 with Vite
- **Styling:** CSS with modern gradients and animations
- **Build Tool:** Vite
- **Deployment:** Netlify-ready

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd bitcoin-is-bae-crypto-training
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎯 Usage

1. Open the application in your browser
2. Select a training module from the home screen
3. Navigate through sections using the sidebar
4. Mark sections as complete as you progress
5. Use the navigation buttons to move between sections

## 🚀 Deployment

### GitHub Setup
1. Create a new repository on GitHub
2. Push your code to the repository
3. Ensure your repository is public for Netlify deployment

### Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 📁 Project Structure

```
src/
├── components/
│   ├── RiskManagement.jsx
│   ├── CryptoTerminology.jsx
│   ├── CandlestickPatterns.jsx
│   ├── ChartPatterns.jsx
│   └── Module.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## 🎨 Design System

- **Primary Colors:** Purple to pink gradient (#667eea to #764ba2)
- **Accent Colors:** Gold (#feca57), Green (#4caf50)
- **Typography:** Inter font family
- **Layout:** Card-based design with glassmorphism effects

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Modules

1. Create a new component in `src/components/`
2. Import it in `App.jsx`
3. Add it to the modules array
4. Style it using the existing CSS classes

## 📄 License

This project is created for Bitcoin Is BAE training purposes.

## 🤝 Contributing

This is a private training application for Bitcoin Is BAE. For questions or support, please contact the development team.

---

**Bitcoin Is BAE** - Empowering busy mums to learn crypto trading safely and confidently.
