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

## � Queick Start

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

### Phase 3: Social Media Integration � r(Planned)

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

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📱 Current Application Features

### Authentication System

- **Sign Up**: Create new account with email and password
- **Sign In**: Login with existing credentials
- **Forgot Password**: Password recovery flow
- **User Persistence**: Login state maintained across sessions
- **Route Protection**: Secure pages require authentication

### Dashboard

- **User Profile**: Display user name and email
- **Statistics Overview**: Posts, scheduled content, and connected accounts
- **Connected Accounts**: Visual representation of linked social media platforms
- **Recent Activity**: Timeline of user actions
- **Quick Actions**: Easy access to create posts, schedule content, and manage accounts

### Content Creation

- **AI Content Generator**: Interface for AI-powered content creation
- **Multi-Platform Selection**: Choose Twitter, LinkedIn, and/or Instagram
- **Media Upload**: Support for images and videos
- **Post Scheduling**: Immediate publishing or scheduled posting options
- **Content Preview**: Real-time preview of post content
- **Draft Management**: Save and manage post drafts

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel
```

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages (login, signup, forgot-password)
│   ├── dashboard/         # Dashboard and create post pages
│   ├── about/             # About page
│   ├── globals.css        # Global styles and Tailwind CSS
│   ├── layout.tsx         # Root layout with UserProvider
│   └── page.tsx           # Home page
├── contexts/              # React Context providers
│   └── UserContext.tsx    # User authentication context
├── lib/                   # Utility libraries
│   └── env.ts            # Environment configuration
└── types/                 # TypeScript type definitions
    └── index.ts          # Shared type definitions
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue tones for main actions and branding
- **Secondary**: Gray tones for secondary elements
- **Success**: Green for positive actions
- **Warning**: Yellow for caution states
- **Error**: Red for error states

### Components

- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Consistent card layout with shadows and borders
- **Forms**: Styled input fields with focus states
- **Navigation**: Clean header and sidebar navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add tests for new features
- Ensure responsive design

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Review the documentation and setup instructions

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Vercel](https://vercel.com/) for seamless deployment
- [OpenAI](https://openai.com/) for future AI integration

---

**Status**: Active Development | **Version**: 1.0.0 | **Last Updated**: December 2024
