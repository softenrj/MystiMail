# Custom HTML Email Sender with Nodemailer

This is a Next.js project that allows users to send custom HTML emails. It integrates Nodemailer for email sending, and features a Monaco editor for writing the HTML email content. The application also provides real-time output rendering of the email content using an iframe and offers an option to attach a signature to the email. The entire state is managed using Redux Toolkit.

## Demo Video

Watch the demo video below to see how the email sender works:

## 🎬 Demo Video  

[![Watch Demo](https://img.shields.io/badge/🎥%20Watch%20Demo%20Video-red?style=for-the-badge)](https://drive.google.com/file/d/1mfuzsdWwozlLhGJPBTDr4dPtLB8NpUMy/view?usp=sharing)



## Features

- **Email Options**: Choose the 'From', 'To', 'BCC', and 'Subject' fields.
- **Monaco Panel**: A Monaco editor to write and edit custom HTML content for the email.
- **Real-Time Preview**: See how the email will look in real-time with an iframe rendering the HTML.
- **Attach Signature**: Option to attach a signature with the email.
- **Send Email**: Send the email with a toast notification confirming the action.
- **State Management**: All app state is managed by Redux Toolkit.

## Prerequisites

Make sure you have the following installed:

- Node.js (>=14.x)
- npm (>=6.x)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/softenrj/your-repo-name.git
cd your-repo-name
```

### 2.Install the dependencies:

```bash
cd your-repository-name
npm install
```

### 3.Set up environment variables for Nodemailer:
 - Create a .env.local file at the root of the project and add your email configuration, for example:

 ```ini
 EMAIL1 = "app_password" //email 1
 EMAIL2 = "app_password" //email 2
 ```

### 4.Start the development server:

```ini
    npm run dev
```

### 5.Visit http://localhost:3000 in your browser to access the email sender app.

## Usage
**Fill in the email fields:**
- Provide the From, To, BCC, and Subject for the email.

**Write your HTML content:**
- Use the Monaco Editor to write your custom HTML email content. The email content will be rendered in the iframe below in real-time.

**Attach a signature (Optional):**
- Attach a signature (Optional): 
- ⚠️if you already make a signature.html in /public and add your signature

**Send the email:**
- Hit the Send Email button, and if successful, you’ll get a toast notification confirming the email was sent.

## Technologies Used
 - **Next.js:** React framework for building the web application.

 - **Nodemailer:** Library for sending emails.

 - **Monaco Editor:** Code editor used for writing HTML content