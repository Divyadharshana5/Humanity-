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

- Node.js 18+
- PostgreSQL 15+
- Redis 7+
- Docker (optional, for containerized development)

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd ai-social-media-platform
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ai_social_media_platform"
REDIS_URL="redis://localhost:6379"

# Authentication
JWT_SECRET="your-super-secret-jwt-key"
JWT_REFRESH_SECRET="your-super-secret-refresh-key"
ENCRYPTION_KEY="your-32-character-encryption-key"

# OpenAI
OPENAI_API_KEY="your-openai-api-key"

# Social Media APIs
TWITTER_CLIENT_ID="your-twitter-client-id"
TWITTER_CLIENT_SECRET="your-twitter-client-secret"
LINKEDIN_CLIENT_ID="your-linkedin-client-id"
LINKEDIN_CLIENT_SECRET="your-linkedin-client-secret"
INSTAGRAM_CLIENT_ID="your-instagram-client-id"
INSTAGRAM_CLIENT_SECRET="your-instagram-client-secret"
```

### 3. Database Setup

```bash
# Start PostgreSQL and Redis (if using Docker)
docker-compose up postgres redis -d

# Generate Prisma client and run migrations
npm run db:generate
npm run db:migrate
npm run db:seed
```

### 4. Development

```bash
# Start frontend (Next.js)
npm run dev

# Start backend API (in another terminal)
npm run dev:api
```

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
