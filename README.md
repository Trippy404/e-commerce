# E-Commerce App

## Overview
The **E-Commerce App** is a modern web application built using React, CSS, and Firebase. It provides users with a seamless shopping experience, allowing them to browse products, add items to their cart, and complete purchases securely. Firebase is used for authentication, database management, and hosting services.

## Features
- **User Authentication**: Sign up and log in using Firebase Authentication.
- **Product Listing**: Display products dynamically from Firebase Firestore.
- **Shopping Cart**: Add and remove products from the cart.
- **Order Management**: Track placed orders and order history.
- **Responsive Design**: Fully optimized for mobile and desktop.

## Tech Stack
- **Frontend**: React.js, CSS
- **Backend**: Firebase Firestore (NoSQL database), Firebase Authentication
- **Hosting**: Firebase Hosting

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (LTS version)
- npm or yarn
- Firebase CLI (for deployment)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/ecommerce-app.git
   cd ecommerce-app
   ```

2. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable **Firestore**, **Authentication**, and **Hosting**
   - Obtain Firebase config and create a `.env` file with:
     ```env
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

4. Run the development server:
   ```bash
   npm start  # or yarn start
   ```

5. Open the app in your browser at `http://localhost:3000`

## Deployment
To deploy the app to Firebase Hosting:
```bash
firebase login
firebase init
firebase deploy
```

## Folder Structure
```
/ecommerce-app
│-- /public
│-- /src
│   │-- /components   # Reusable UI components
│   │-- /pages        # Main app pages (Home, Product, Cart, etc.)
│   │-- /context      # Context API for global state management
│   │-- /firebase     # Firebase configuration
│   │-- App.js        # Main app component
│   │-- index.js      # Entry point
│-- .env.example     # Example environment variables
│-- package.json     # Project dependencies
│-- README.md        # Project documentation
```

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.


## Contact
For questions or feedback, reach out to suma.satyasahoo@gmail.com.

