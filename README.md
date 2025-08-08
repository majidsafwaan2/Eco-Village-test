# EcoVillage of Loudoun County

A modern, responsive website for EcoVillage of Loudoun County - a sustainable living community in Virginia. This project features a beautiful SPA (Single Page Application) with an integrated AI-powered chatbot specifically designed for sustainable living and community information.

## 🌱 About EcoVillage

EcoVillage of Loudoun County is a multigenerational community that cares about living sustainably and as good neighbors. The community features:

- **Sustainable Homes**: Green building guidelines, solar panels, and energy-efficient design
- **Common Lands**: 50 acres of organically managed land with walking trails, streams, and wildlife sanctuary
- **Community Garden**: Shared gardening space for residents
- **Wildlife Sanctuary**: Certified through Audubon at Home program
- **Monarch Waystation**: Certified by Monarch Watch
- **Dark Sky Community**: For enjoyment of natural night sky

## ✨ Features

### 🎨 Modern Design
- **Responsive Design**: Fully responsive across all devices
- **Beautiful UI**: Modern, clean design with smooth animations
- **Accessibility**: WCAG compliant with keyboard navigation
- **Performance**: Optimized for fast loading and smooth interactions

### 🤖 AI Chatbot
- **Specialized Characters**: Four expert characters for different aspects of EcoVillage life
  - **Sarah** - Community Leader: Community events, sustainable practices, community life
  - **Mike** - Sustainability Expert: Green building, renewable energy, sustainable design
  - **Lisa** - Nature Guide: Wildlife, native plants, conservation efforts
  - **Emma** - Community Gardener: Organic gardening, community garden, food production
- **Smart Responses**: Powered by Google Gemini AI for intelligent, contextual responses
- **User-Friendly**: Easy-to-use interface with character selection

### 🏠 Website Sections
- **Hero Section**: Beautiful landing with call-to-action
- **Welcome**: Introduction to EcoVillage community
- **Homes**: Information about sustainable housing
- **Common Lands**: Details about shared community spaces
- **Wildlife Sanctuary**: Information about local wildlife
- **Monarch Waystation**: Butterfly conservation efforts
- **Dark Sky Community**: Light pollution awareness
- **Gallery**: Photo showcase of the community
- **Contact**: Contact form and information

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for local development server)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/majidsafwaan2/Eco-Village-test.git
   cd Eco-Village-test
   ```

2. **Start the development server**
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Or using Node.js
   npx serve .
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🏗️ Project Structure

```
ecovillage-demo/
├── index.html              # Main HTML file
├── styles.css              # Comprehensive CSS styles
├── main.js                 # JavaScript functionality
├── chatbot.js              # AI chatbot implementation
├── package.json            # Project configuration
├── README.md               # This file
├── .gitignore              # Git ignore rules
├── vercel.json             # Vercel deployment config
└── images/                 # Image assets
    └── favicon.ico         # Website favicon
```

## 🎯 Key Technologies

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Advanced styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Modern JavaScript with async/await
- **Google Gemini AI**: AI-powered chatbot responses
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Inter font family)

## 🤖 Chatbot Features

### Character System
The chatbot features four specialized characters, each with unique expertise:

1. **Sarah - Community Leader**
   - Community events and gatherings
   - Sustainable living practices
   - Community building and neighbor relationships

2. **Mike - Sustainability Expert**
   - Green building guidelines
   - Solar panels and renewable energy
   - Water conservation and energy efficiency

3. **Lisa - Nature Guide**
   - Wildlife sanctuary information
   - Native plants and biodiversity
   - Conservation efforts and environmental protection

4. **Emma - Community Gardener**
   - Organic gardening practices
   - Community garden management
   - Food production and sustainable agriculture

### AI Integration
- **Google Gemini 1.5 Flash**: Advanced AI model for natural conversations
- **Contextual Responses**: AI understands EcoVillage-specific topics
- **Character Personalities**: Each character has unique knowledge and communication style

## 🎨 Design System

### Color Palette
- **Primary Green**: `#4CAF50` - Main brand color
- **Secondary Green**: `#45a049` - Darker shade for hover states
- **Accent Green**: `#8BC34A` - Light green for highlights
- **Text Colors**: `#333` (dark), `#666` (light)
- **Background**: `#f8f9fa` (light gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean, accessible form design
- **Navigation**: Sticky header with dropdown menus

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ (full layout with sidebars)
- **Tablet**: 768px - 1199px (adjusted grid layouts)
- **Mobile**: 320px - 767px (stacked layouts, mobile menu)

## 🔧 Customization

### Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #4CAF50;
    --secondary-color: #45a049;
    --accent-color: #8BC34A;
    /* ... other colors */
}
```

### Chatbot Characters
Modify character definitions in `chatbot.js`:
```javascript
getEcoVillageCharacters() {
    return [
        {
            id: 'community-leader-sarah',
            name: 'Sarah',
            role: 'Community Leader',
            // ... character configuration
        }
    ];
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the static site
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Drag and drop the project folder
- **GitHub Pages**: Enable in repository settings
- **AWS S3**: Upload files to S3 bucket
- **Any static hosting**: Compatible with all static site hosts

## 🧪 Testing

### Manual Testing
1. **Responsive Design**: Test on various screen sizes
2. **Chatbot**: Test all character interactions
3. **Forms**: Test contact form validation
4. **Navigation**: Test all links and dropdowns
5. **Performance**: Check loading times and animations

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **EcoVillage of Loudoun County**: For inspiration and community information
- **Google AI**: For providing the Gemini API
- **Font Awesome**: For the icon library
- **Google Fonts**: For the Inter font family
- **Open Source Community**: For making this project possible

## 📞 Contact

- **Website**: [https://ecovillageloudoun.com](https://ecovillageloudoun.com)
- **GitHub**: [https://github.com/majidsafwaan2/Eco-Village-test](https://github.com/majidsafwaan2/Eco-Village-test)

---

**Made with ❤️ for sustainable living and community building**

*This website is designed to showcase the beautiful EcoVillage community and help people learn about sustainable living practices.*