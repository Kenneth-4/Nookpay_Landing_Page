# NookPay App Landing Page

A sleek, responsive landing page for the NookPay app. Designed for Android APK downloads and iOS PWA installations.

## Features

- Modern, clean design with soft colors using Tailwind CSS
- Responsive layout for all device sizes
- Android APK download button with version info
- iOS PWA installation guide
- Custom modals for installation instructions
- Minimal external dependencies (only Tailwind CSS via CDN)

## Deployment

This project is configured for deployment on Vercel. Follow these steps to deploy:

1. Sign up for a Vercel account at [vercel.com](https://vercel.com) if you don't have one already
2. Install the Vercel CLI:
   ```
   npm i -g vercel
   ```
3. Login to your Vercel account:
   ```
   vercel login
   ```
4. Deploy by running:
   ```
   vercel
   ```
5. For production deployment:
   ```
   vercel --prod
   ```

Alternatively, you can connect your Git repository to Vercel for automatic deployments.

## Local Development

To run this project locally:

1. Clone the repository
2. Launch a local server, for example using Python:
   ```
   python -m http.server
   ```
3. Open your browser and navigate to `http://localhost:8000`

## APK Installation

To add your APK file for download:

1. Place your NookPay APK file in the `downloads` folder
2. Name it `nookpay.apk` (or update the HTML file to match your filename)

## Customization

- Edit `index.html` to change text content and design using Tailwind classes
- Replace the logo in the `images` folder
- Adjust Tailwind colors in the config section
- Modify functionality in `script.js`

## License

This project is available for free use. 