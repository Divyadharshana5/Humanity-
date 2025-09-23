// User and Authentication Types
export interface User {
  id: string
  email: string
  emailVerified: boolean
  createdAt: Date
  updatedAt: Date
  businessContext?: BusinessContext
  socialAccounts: SocialAccount[]
}

export interface BusinessContext {
  id: string
  userId: string
  businessName: string
  industry: string
  targetAudience: string
  brandVoice: string
  keyTopics: string[]
  contentPreferences: ContentPreferences
  createdAt: Date
  updatedAt: Date
}

export interface ContentPreferences {
  tone: 'professional' | 'casual' | 'friendly' | 'authoritative'
  postLength: 'short' | 'medium' | 'long'
  includeHashtags: boolean
  includeEmojis: boolean
  includeQuestions: boolean
}

// Social Media Integration Types
export interface SocialAccount {
  id: string
  userId: string
  platform: Platform
  platformUserId: string
  username: string
  accessToken: string
  refreshToken?: string
  tokenExpiresAt?: Date
  isActive: boolean
  lastSyncAt: Date
  createdAt: Date
}

export enum Platform {
  TWITTER = 'twitter',
  LINKEDIN = 'linkedin',
  INSTAGRAM = 'instagram'
}

// Content and Scheduling Types
export interface ScheduledPost {
  id: string
  userId: string
  content: PostContent
  platforms: Platform[]
  scheduledAt: Date
  status: PostStatus
  postType: PostType
  createdAt: Date
  updatedAt: Date
  publishResults?: PublishResult[]
}

export interface PostContent {
  text: string
  images?: MediaFile[]
  videos?: MediaFile[]
  hashtags: string[]
  mentions: string[]
}

export interface MediaFile {
  id: string
  url: string
  type: 'image' | 'video'
  filename: string
  size: number
  mimeType: string
}

export enum PostStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  PUBLISHING = 'publishing',
  PUBLISHED = 'published',
  FAILED = 'failed'
}

export enum PostType {
  DYNAMIC = 'dynamic',
  STATIC = 'static'
}

// Publishing and Analytics Types
export interface PublishResult {
  id: string
  scheduledPostId: string
  platform: Platform
  platformPostId?: string
  status: PublishStatus
  error?: string
  publishedAt?: Date
  retryCount: number
}

export enum PublishStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
  RATE_LIMITED = 'rate_limited',
  RETRYING = 'retrying'
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: ApiError
  message?: string
}

export interface ApiError {
  code: string
  message: string
  details?: Record<string, any>
  timestamp: Date
  requestId: string
}

// Authentication Types
export interface AuthToken {
  accessToken: string
  refreshToken: string
  expiresIn: number
  user: User
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  password: string
  confirmPassword: string
}

// Content Generation Types
export interface ContentVariation {
  id: string
  text: string
  hashtags: string[]
  mentions: string[]
  tone: string
  platform?: Platform
}

export interface ContentGenerationRequest {
  prompt: string
  businessContext: BusinessContext
  platform?: Platform
  postType: PostType
}

// Calendar and Scheduling Types
export interface DateRange {
  start: Date
  end: Date
}

export interface CalendarEvent {
  id: string
  title: string
  start: Date
  end: Date
  post: ScheduledPost
}

// Dashboard Types
export interface DashboardStats {
  totalPosts: number
  scheduledPosts: number
  publishedPosts: number
  failedPosts: number
  connectedAccounts: number
  activeAccounts: number
}

export interface AccountHealth {
  platform: Platform
  username: string
  isConnected: boolean
  lastSync: Date
  hasErrors: boolean
  errorMessage?: string
}