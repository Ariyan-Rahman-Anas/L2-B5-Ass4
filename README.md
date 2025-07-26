# 📚 Minimal Library Management System

A modern, full-stack library management system built with React, TypeScript, Redux Toolkit Query, Node.js, and MongoDB. This system provides essential book management and borrowing functionality with a clean, responsive interface.

## 🌟 Features

### Core Functionality
- **Book Management**: Complete CRUD operations for books
- **Borrowing System**: Simple book borrowing with availability tracking
- **Borrow Summary**: Aggregated view of all borrowed books
- **Responsive Design**: Fully responsive across all devices
- **Real-time Updates**: Optimistic UI updates for better user experience

### Technical Highlights
- **Type-Safe**: Full TypeScript implementation
- **State Management**: Redux Toolkit with RTK Query
- **Modern UI**: Clean, minimalist design with Tailwind CSS
- **RESTful API**: Well-structured backend with proper error handling
- **Database**: MongoDB with Mongoose ODM

## 🚀 Live Demo

- **Frontend**: [mng-ur-library.vercel.app](https://mng-ur-library.vercel.app)
- **Backend API**: [l2-b5-ass3.vercel.app](https://l2-b5-ass3.vercel.app)

## 📂 Repository Links

- **Frontend**: [Ariyan-Rahman-Anas/Library-MS](https://github.com/Ariyan-Rahman-Anas/Library-MS)
- **Backend**: [Ariyan-Rahman-Anas/L2-B5-Ass3](https://github.com/Ariyan-Rahman-Anas/L2-B5-Ass3)

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Redux Toolkit** + RTK Query for state management
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Vite** for build tooling

### Backend
- **Node.js** + Express.js
- **MongoDB** + Mongoose
- **TypeScript** for type safety
- **CORS** enabled for cross-origin requests
- **Environment-based configuration**

## 📋 Project Structure

### Frontend Pages
- `/books` - Book listing with CRUD operations
- `/create-book` - Add new book form
- `/books/:id` - Detailed book view
- `/edit-book/:id` - Edit book interface
- `/borrow/:bookId` - Book borrowing form
- `/borrow-summary` - Borrowed books summary

### Key Components
- **Navbar**: Navigation with links to all major sections
- **BookTable**: Responsive table showing all books with actions
- **BookForm**: Reusable form for creating/editing books
- **BorrowForm**: Simple borrowing interface
- **Footer**: Clean footer with site information

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn


### Project Setup
```bash
# Clone the frontend repository
git clone https://github.com/Ariyan-Rahman-Anas/Library-MS.git
cd Library-MS

# Install dependencies
npm install

# Create .env file
cp .env.example .env
VITE_SERVER_URL=https://l2-b5-ass3.vercel.app/api

# Start development server
npm run dev
```

## ✨ Bonus Features Implemented

| Feature | Status |
|---------|--------|--------|
| Optimistic UI Updates | ✅ |
| Toast Notifications | ✅ |
| Responsive Layout | ✅ |
| Type-Safe Forms | ✅ |

## 🚀 Deployment

### Frontend (Vercel)
```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

## 🔍 Key Features in Detail

### Book Management
- **View Books**: Comprehensive table with all book details
- **Add Books**: Form validation with real-time feedback
- **Edit Books**: Pre-populated forms with existing data
- **Delete Books**: Confirmation dialog before removal
- **Availability Tracking**: Automatic status updates based on copies

### Borrowing System
- **Smart Validation**: Prevents borrowing more than available copies
- **Due Date Tracking**: Calendar-based date selection
- **Automatic Updates**: Real-time availability updates
- **Borrow History**: Comprehensive summary of all borrows

### User Experience
- **Responsive Design**: Seamless experience across all devices
- **Loading States**: Clear feedback during API operations
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Success/error feedback for all operations

### Optimization Features
- **Code Splitting**: Lazy loading of routes
- **Image Optimization**: Responsive images
- **Bundle Analysis**: Webpack bundle analyzer
- **Caching**: Efficient API caching with RTK Query

## 🔒 Security Features

- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Proper cross-origin resource sharing
- **Error Handling**: Secure error messages
- **Data Sanitization**: MongoDB injection prevention

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write comprehensive tests
- Use conventional commit messages
- Update documentation for new features

## 📄 Changelog

### Version 1.0.0 (Current)
- Initial release with core functionality
- Book CRUD operations
- Borrowing system
- Responsive design
- TypeScript implementation

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Ariyan Rahman Anas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 👨‍💻 Author

**Ariyan Rahman Anas**

- 🌐 Portfolio: [ariyanrahmananas.vercel.app](https://ariyanrahmananas.vercel.app)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/ariyan-rahman-anas)
- 🐦 Twitter: [@AriyAnasRahman](https://twitter.com/AriyAnasRahman)
- 📧 Email: anas.hllw@gmail.com

## 🙏 Acknowledgments

- Thanks to the open-source community for the amazing tools and libraries
- Inspired by modern library management systems
- Built as part of a full-stack development assignment
- Special thanks to mentors and code reviewers

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/Ariyan-Rahman-Anas/Library-MS)
![GitHub language count](https://img.shields.io/github/languages/count/Ariyan-Rahman-Anas/Library-MS)
![GitHub top language](https://img.shields.io/github/languages/top/Ariyan-Rahman-Anas/Library-MS)
![GitHub last commit](https://img.shields.io/github/last-commit/Ariyan-Rahman-Anas/Library-MS)

---

⭐ If you found this project helpful, please give it a star on GitHub!

**Made with ❤️ by [Ariyan Rahman Anas](https://github.com/Ariyan-Rahman-Anas)**