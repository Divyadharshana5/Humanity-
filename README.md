# AI-Powered Social Media Platform

A modern, responsive web application that enables users to create, schedule, and manage social media content across multiple platforms with AI assistance. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Project Goal

Create an intuitive social media management platform that empowers users to:

- Generate engaging content using AI assistance
- Schedule posts across multiple social media platforms
- Manage their social media presence from a unified dashboard
- Streamline their content creation workflow

## 🚀 Current Features

### ✅ Implemented

- **User Authentication System**: Complete signup, login, and logout functionality with email persistence
- **Responsive Dashboard**: Clean, modern interface showing user stats and connected accounts
- **Create Post Interface**: Comprehensive post creation with AI content generation, platform selection, and scheduling
- **User Context Management**: Global state management for user data across the application
- **Route Protection**: Secure pages that require authentication
- **Forgot Password Flow**: Complete password recovery system
- **Multi-Platform Support**: UI for Twitter, LinkedIn, and Instagram integration
- **AI Content Generator**: Interface for AI-powered content creation
- **Media Upload**: Support for images and videos in posts
- **Post Scheduling**: Options for immediate publishing or scheduled posting

### 🚧 In Development

- **Social Media API Integration**: OAuth connections to Twitter, LinkedIn, and Instagram
- **AI Backend Integration**: OpenAI GPT integration for content generation
- **Calendar Interface**: Visual calendar for managing scheduled posts
- **Analytics Dashboard**: Performance metrics and insights
- **Content Templates**: Pre-built templates for different content types

## 🛠️ Tech Stack

### Frontend

- **Next.js 14** with App Router - React framework for production
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Context API** - Global state management for user authentication
- **React Hooks** - Modern React patterns for state and lifecycle management

### Development Tools

- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting
- **Jest** - Testing framework (configured)
- **Git** - Version control

### Planned Integrations

- **OpenAI GPT-4** - AI content generation
- **Twitter API v2** - Twitter integration
- **LinkedIn Marketing API** - LinkedIn integration
- **Instagram Basic Display API** - Instagram integration
- **Node.js/Express** - Backend API server
- **PostgreSQL** - Database for user data and posts
- **Redis** - Caching and job queues

## 📋 Prerequisites

- **Node.js 18+** - JavaScript runtime
- **npm** or **yarn** - Package manager
- **Git** - Version control

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd ai-social-media-platform
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
```

The project currently uses client-side state management, so minimal environment setup is required for development.

### 3. Development

```bash
# Start the development server
npm run dev
```

Visit http://localhost:3000 to see the application.

### 4. Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🏗️ Project Development Process

### Phase 1: Foundation ✅ (Completed)

- [x] Project setup with Next.js 14 and TypeScript
- [x] Tailwind CSS configuration and custom styling
- [x] Basic routing structure
- [x] User authentication UI (signup, login, forgot password)
- [x] User context and state management
- [x] Dashboard layout and components
- [x] Create post interface
- [x] Responsive design implementation

### Phase 2: Backend Integration 🚧 (In Progress)

- [ ] Set up backend API with Node.js/Express
- [ ] Database schema design and implementation
- [ ] JWT authentication system
- [ ] User registration and login endpoints
- [ ] Password reset functionality

### Phase 3: Social Media Integration 📋 (Planned)

- [ ] OAuth integration for Twitter, LinkedIn, Instagram
- [ ] Social media account connection flow
- [ ] Post publishing to connected platforms
- [ ] Account management and disconnection

### Phase 4: AI Integration 📋 (Planned)

- [ ] OpenAI API integration
- [ ] Content generation based on user prompts
- [ ] Business context learning
- [ ] Content optimization suggestions

### Phase 5: Advanced Features 📋 (Planned)

- [ ] Calendar interface for post scheduling
- [ ] Analytics and performance tracking
- [ ] Content templates and saved drafts
- [ ] Bulk scheduling and content planning
- [ ] Team collaboration features

````

### 4. Development

```bash
# Start frontend (Next.js)
npm run dev

# Start backend API (in another terminal)
npm run dev:api
````

Visit:

- Frontend: http://localhost:3000
- API: http://localhost:8000

## 🐳 Docker Development

```bash
# Start all services
docker-compose up

# Or start in detached mode
docker-compose up -d
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - User logout

### Social Media Integration

- `GET /api/social/accounts` - Get connected accounts
- `POST /api/social/connect/:platform` - Connect social account
- `DELETE /api/social/disconnect/:accountId` - Disconnect account

### Content Generation

- `POST /api/content/generate` - Generate content with AI
- `GET /api/content/context` - Get business context
- `PUT /api/content/context` - Update business context

### Scheduling

- `GET /api/posts/scheduled` - Get scheduled posts
- `POST /api/posts/schedule` - Schedule a new post
- `PUT /api/posts/:id` - Update scheduled post
- `DELETE /api/posts/:id` - Delete scheduled post

## 🔧 Configuration

### Social Media API Setup

#### Twitter API v2

1. Create a Twitter Developer account
2. Create a new app in the Twitter Developer Portal
3. Enable OAuth 2.0 with PKCE
4. Add redirect URI: `http://localhost:3000/api/auth/callback/twitter`

#### LinkedIn Marketing API

1. Create a LinkedIn Developer account
2. Create a new app
3. Request access to Marketing API
4. Add redirect URI: `http://localhost:3000/api/auth/callback/linkedin`

#### Instagram Basic Display API

1. Create a Facebook Developer account
2. Create a new app
3. Add Instagram Basic Display product
4. Add redirect URI: `http://localhost:3000/api/auth/callback/instagram`

## 🚀 Deployment

### Using Docker

```bash
# Build and run production containers
docker-compose -f docker-compose.prod.yml up --build
```

### Manual Deployment

```bash
# Build the application
npm run build
npm run build:api

# Start production servers
npm run start &
npm run start:api &
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # React components
│   ├── auth/           # Authentication components
│   ├── calendar/       # Calendar and scheduling components
│   ├── chat/           # AI chatbot components
│   ├── dashboard/      # Dashboard components
│   └── social/         # Social media integration components
├── lib/                # Utility libraries
├── server/             # Backend API server
│   ├── controllers/    # API route handlers
│   ├── middleware/     # Express middleware
│   ├── services/       # Business logic services
│   ├── db/            # Database configuration and models
│   └── utils/         # Server utilities
└── types/              # TypeScript type definitions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Join our [Discord community](https://discord.gg/your-invite) for real-time support

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) for GPT-4 API
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Prisma](https://prisma.io/) for the excellent ORM
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
