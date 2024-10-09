# Advent Calendar 2025

## How to Open and Navigate the Website

### Opening:
1. **Clone or download** the project repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. Open the `index.html` file in any modern web browser (Chrome, Firefox, etc.).
3. Ensure all assets (CSS, JS, images) are in their respective folders.

### Navigation:
- **Home Page**: Displays an advent calendar with several days (cards).
- **Interaction**: Click the button **"Unlock your gift"** to unlock a card corresponding to the next day. Each unlocked card reveals a new image and gets a border.
- The **footer** includes links to social media and stays at the bottom of the page.

## Technical Description

### HTML Structure:
- **Semantic HTML**: The page uses semantic elements like `<header>`, `<main>`, `<section>`, and `<footer>`.
- The project consists of a **single-page website**.
  
### CSS Styling:
- **Flexbox and Grid**: Used for layout. `Flexbox` is applied to the `body` and `header`, and `Grid` for structuring the calendar items.
- **Clamp**: Used for responsive font sizes and gaps to ensure fluidity across different screen sizes.

### Responsive Design:
- The website adapts to mobile devices, tablets, and desktops.
  - **Grid Layout**: Changes the number of columns in the calendar from 3 (mobile) to 5 (tablet and desktop).
  - **Media Queries**: Adjust layout and font sizes based on screen width.
  
### Accessibility:
- **Alt attributes** for all images.
- **Proper heading structure** with `<h1>` for the main title.
- **High contrast** between text and background for readability.

### Web Browser Tools:
- Used **Chrome DevTools** for debugging and testing responsiveness.
- Ran **Lighthouse** to ensure accessibility and performance optimization.

### Git Version Control:
- The project was versioned with **Git**, including multiple commits documenting different stages of development.

## Folder Structure:

```bash
project-root/
│
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # CSS file for styling
├── js/
│   └── script.js       # JavaScript file for interactivity
└── images/
    └── img1.jpg        # Images used in the advent calendar
```
```