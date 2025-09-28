# PIX Code Website

A simple website with a title, video, and PIX code copying functionality.

## Features

- Clean, modern design with gradient background
- Responsive layout that works on mobile and desktop
- Two "Copiar código PIX" buttons (above title and below video)
- One-click PIX code copying to clipboard
- Visual feedback when code is copied
- Fallback support for older browsers

## Files

- `index.html` - Main HTML structure
- `style.css` - CSS styling and responsive design
- `script.js` - JavaScript for PIX code copying functionality
- `video.mp4` - Video file (you need to add your own video)

## GitHub Pages Deployment

To deploy this website to GitHub Pages:

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings
4. Scroll down to "Pages" section
5. Select "Deploy from a branch"
6. Choose "main" branch and "/ (root)" folder
7. Click "Save"
8. Your website will be available at: `(https://diogotupi.github.io/estimacao-website/)`

## Adding Your Video

Replace the `video.mp4` file with your own video. Make sure it's optimized for web (MP4 format, reasonable file size).

## Customization

- Change the title in `index.html`
- Modify the PIX code in `script.js` (line 2)
- Update colors and styling in `style.css`
- Replace the video file

## Browser Support

- Modern browsers with Clipboard API support
- Fallback support for older browsers using document.execCommand
- Mobile-friendly with touch support

