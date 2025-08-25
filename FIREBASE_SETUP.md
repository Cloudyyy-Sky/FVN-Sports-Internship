# Firebase Setup Instructions for FVN Sports

This guide will walk you through setting up Firebase for the FVN Sports streaming platform.

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `fvn-sports` (or your preferred name)
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project console, click "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" provider:
   - Click on "Email/Password"
   - Toggle "Enable" to ON
   - Click "Save"

## Step 3: Set up Firestore Database

1. In your Firebase project console, click "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (we'll configure security rules later)
4. Select a location closest to your users
5. Click "Done"

## Step 4: Get Your Firebase Configuration

1. In your Firebase project console, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (`</>`) to add a web app
5. Enter app nickname: `fvn-sports-web`
6. Check "Also set up Firebase Hosting" (optional)
7. Click "Register app"
8. Copy the configuration object that looks like this:

\`\`\`javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
\`\`\`

## Step 5: Add Environment Variables

Add these environment variables to your Vercel project or `.env.local` file:

\`\`\`env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
\`\`\`

### Adding to Vercel:
1. Go to your Vercel project dashboard
2. Click "Settings" tab
3. Click "Environment Variables" in the sidebar
4. Add each variable one by one

## Step 6: Configure Firestore Security Rules

1. In Firebase Console, go to "Firestore Database"
2. Click "Rules" tab
3. Replace the default rules with:

\`\`\`javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read and write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow authenticated users to read all user profiles (for social features)
    match /users/{userId} {
      allow read: if request.auth != null;
    }
  }
}
\`\`\`

4. Click "Publish"

## Step 7: Test Your Setup

1. Deploy your application or run it locally
2. Try creating a new account
3. Try signing in with the created account
4. Check the Firebase Console:
   - Authentication > Users (should show your new user)
   - Firestore Database > Data (should show user profile document)

## Troubleshooting

### Common Issues:

1. **"Firebase: Error (auth/configuration-not-found)"**
   - Make sure all environment variables are set correctly
   - Verify the Firebase project configuration

2. **"Firebase: Error (auth/unauthorized-domain)"**
   - In Firebase Console > Authentication > Settings > Authorized domains
   - Add your domain (e.g., `your-app.vercel.app`)

3. **"Missing or insufficient permissions"**
   - Check Firestore security rules
   - Make sure the user is authenticated

4. **Environment variables not loading**
   - Restart your development server after adding env vars
   - Make sure variables start with `NEXT_PUBLIC_`

## Optional: Enable Additional Features

### Email Verification (Recommended)
1. In Firebase Console > Authentication > Templates
2. Customize the email verification template
3. In Authentication > Settings, enable "Email verification"

### Password Reset
1. In Firebase Console > Authentication > Templates
2. Customize the password reset email template

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Check the Firebase Console for authentication and database logs
3. Verify all environment variables are correctly set
4. Make sure Firebase project billing is enabled if using production features

Your FVN Sports platform is now ready to use Firebase authentication!
\`\`\`

```json file="" isHidden
