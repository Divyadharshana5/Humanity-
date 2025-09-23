import { z } from 'zod'

const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),

  // Authentication
  JWT_SECRET: z.string().min(32),
  JWT_REFRESH_SECRET: z.string().min(32),
  ENCRYPTION_KEY: z.string().length(32),

  // OpenAI
  OPENAI_API_KEY: z.string().min(1),

  // Social Media APIs
  TWITTER_CLIENT_ID: z.string().min(1),
  TWITTER_CLIENT_SECRET: z.string().min(1),
  LINKEDIN_CLIENT_ID: z.string().min(1),
  LINKEDIN_CLIENT_SECRET: z.string().min(1),
  INSTAGRAM_CLIENT_ID: z.string().min(1),
  INSTAGRAM_CLIENT_SECRET: z.string().min(1),

  // App Configuration
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(1),
  API_BASE_URL: z.string().url(),

  // Email
  SMTP_HOST: z.string().min(1),
  SMTP_PORT: z.string().min(1),
  SMTP_USER: z.string().email(),
  SMTP_PASS: z.string().min(1),

  // Environment
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
})

export type Env = z.infer<typeof envSchema>

let env: Env

try {
  env = envSchema.parse(process.env)
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error('❌ Invalid environment variables:')
    error.errors.forEach(err => {
      console.error(`  ${err.path.join('.')}: ${err.message}`)
    })
    process.exit(1)
  }
  throw error
}

export { env }
