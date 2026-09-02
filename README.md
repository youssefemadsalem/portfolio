# Developer Portfolio

A modern, responsive, and animated personal portfolio website built for developers to showcase their skills, projects, and professional experience.

## ✨ Features

- **Modern UI/UX**: Clean and professional design with smooth scroll animations.
- **Responsive Design**: Fully mobile-responsive layouts using Tailwind CSS.
- **Dynamic Content**: Easy to update content via centralized `constants.js` and data files.
- **Custom Animations**: Incorporates fade-in effects, gradient backgrounds, and scroll spy navigation.
- **Contact Form**: Integrated with EmailJS for direct message delivery.
- **Sections**:
  - Hero (Intro & Tech Stack)
  - About
  - Skills
  - Education
  - Internships
  - Projects
  - Contact

## 🛠️ Tech Stack

- **Framework**: [React.js](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Email Service**: [@emailjs/browser](https://www.emailjs.com/)

## 📂 Project Structure

```text
src/
├── components/
│   ├── animations/     # Custom animation wrappers (e.g., FadeIn)
│   ├── backgrounds/    # Animated background components
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # Main page sections (Hero, About, Skills, etc.)
│   └── ui/             # Reusable UI components (Preloader)
├── data/               # Project, service, and skill data arrays
├── hooks/              # Custom React hooks (useScrollSpy, useScrollReveal)
├── utils/              # Helper constants (constants.js)
├── App.jsx             # Main application component layout
├── main.jsx            # React entry point
└── index.css           # Global styles & Tailwind entry
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/youssefemadsalem/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## ⚙️ Customization

You can easily customize the portfolio data without diving deep into the component code. Most of the personal information, social links, and statistics are stored in `src/utils/constants.js`.

### Updating Personal Info

Edit `src/utils/constants.js`:

```javascript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ...other details
};
```

### Updating Projects & Skills

To update the specific projects, skills, and services displayed, edit the files in the `src/data/` directory:
- `src/data/projects.js`
- `src/data/skills.js`
- `src/data/services.js`

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
