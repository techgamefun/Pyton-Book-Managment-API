# Book Store API & Frontend

A full-stack web application for managing books with a Django REST API backend and Next.js frontend. Features JWT authentication with HTTP-only cookies and a responsive admin dashboard.

## 🚀 Features

- **Public Book Listing**: Browse books without authentication
- **Admin Dashboard**: Protected routes for book management
- **JWT Authentication**: Secure login with HTTP-only cookies
- **CRUD Operations**: Create, Read, Update, Delete books
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **User Registration**: Sign up for new accounts

## 🛠️ Tech Stack

### Backend

- Django 5.2.4
- Django REST Framework
- Simple JWT for authentication
- SQLite database
- CORS headers support

### Frontend

- Next.js 15
- React Hook Form
- Tailwind CSS
- Axios for API calls
- Lucide React icons

## 📦 Installation

### Prerequisites

- Python 3.8+
- Node.js 18+
- npm or yarn

### Backend Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bookapi
   ```

2. **Create virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install django djangorestframework djangorestframework-simplejwt django-cors-headers python-decouple
   ```

4. **Environment Configuration**
   Create a `.env` file in the `bookapi` directory:

   ```env
   SECRET_KEY=your-secret-key-here
   DEBUG=True
   ALLOWED_HOSTS=localhost,127.0.0.1
   CORS_ALLOWED_ORIGIN=http://localhost:3000
   ACCESS_TOKEN_LIFETIME_MINUTES=30
   REFRESH_TOKEN_LIFETIME_DAYS=1
   ```

5. **Run migrations**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create demo user**

   ```bash
   python manage.py createsuperuser
   # Username: fakeuser
   # Password: 123123
   ```

7. **Start the backend server**
   ```bash
   python manage.py runserver
   ```
   Backend will be available at `http://127.0.0.1:8000`

### Frontend Setup

1. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the `frontend` directory:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000/api
   ```

4. **Start the frontend server**
   ```bash
   npm run dev
   ```
   Frontend will be available at `http://localhost:3000`

## 🔐 Demo Login Credentials

- **Username**: `fakeuser`
- **Password**: `123123`

## 📚 API Endpoints

### Authentication

- `POST /api/register/` - User registration
- `POST /api/token/` - Login (returns JWT tokens in cookies)
- `POST /api/token/refresh/` - Refresh access token
- `POST /api/logout/` - Logout (clears cookies)

### Books

- `GET /api/books/` - List all books (public)
- `POST /api/books/` - Create book (requires auth)
- `GET /api/books/{id}/` - Get specific book (public)
- `PUT /api/books/{id}/` - Update book (requires auth)
- `DELETE /api/books/{id}/` - Delete book (requires auth)

## 🎨 Frontend Routes

### Public Routes

- `/` - Home page with book listing
- `/login` - Login page
- `/register` - User registration page

### Protected Routes (Admin)

- `/dashboard` - Admin dashboard
- `/dashboard/books` - Book management
- `/dashboard/books/add` - Add new book

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **HTTP-only Cookies**: Tokens stored in secure cookies
- **CORS Protection**: Configured for cross-origin requests
- **CSRF Protection**: Django's built-in CSRF protection
- **Route Protection**: Frontend route guards for admin areas

## 🎯 Key Components

### Backend

- **Custom JWT Authentication**: `CookieJWTAuthentication` class for cookie-based JWT
- **Book Model**: Simple model with title, author, and price fields
- **ViewSets**: RESTful API endpoints using Django REST Framework
- **Permission Classes**: Differentiated permissions for read/write operations

### Frontend

- **BookList Component**: Displays books with conditional edit/delete buttons
- **BookForm Component**: Handles both create and update operations
- **Dashboard Layout**: Responsive admin interface with sidebar navigation
- **API Integration**: Axios instance with automatic credential handling

## 🚀 Usage

1. **Start both servers** (backend on :8000, frontend on :3000)
2. **Visit** `http://localhost:3000` to view the public book listing
3. **Click "Log in"** and use the demo credentials
4. **Access admin dashboard** to manage books (create, edit, delete)
5. **Register new users** via the registration page

## 📱 Responsive Design

The application is fully responsive with:

- Mobile-friendly navigation with hamburger menu
- Responsive grid layouts for book cards
- Touch-friendly buttons and forms
- Adaptive sidebar for admin dashboard

## 🔧 Development Notes

- Backend uses SQLite for development (easily configurable for production)
- Frontend uses React Hook Form for form handling
- JWT tokens automatically refresh on API calls
- Environment variables for easy configuration
- CORS configured for local development

## 📝 Future Enhancements

- Book categories and search functionality
- User profiles and book reviews
- Image upload for book covers
- Pagination for large book lists
- Advanced filtering and sorting options
- Email verification for user registration

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure backend CORS settings match frontend URL
2. **Authentication Issues**: Check if JWT tokens are being set in cookies
3. **Database Issues**: Run migrations if models have changed
4. **Port Conflicts**: Change ports if 3000 or 8000 are in use

### Development Tips

- Use browser dev tools to inspect network requests
- Check Django admin at `http://127.0.0.1:8000/admin/`
- Monitor console logs for frontend errors
- Verify environment variables are loaded correctly

## 📄 License

This project is for educational purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

**Happy coding! 📚✨**
