'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useUser } from '@/contexts/UserContext'
import { useData } from '@/contexts/DataContext'
import { useRouter } from 'next/navigation'

export default function CreatePostPage() {
  const { user } = useUser()
  const { addPost } = useData()
  const router = useRouter()
  const [content, setContent] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [scheduleTime, setScheduleTime] = useState('12:00')
  const [amPm, setAmPm] = useState('AM')

  // Redirect to login if no user
  if (!user) {
    router.push('/auth/login')
    return null
  }

  const platforms = [
    { id: 'twitter', name: 'Twitter', icon: '🐦', color: 'bg-blue-500' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼', color: 'bg-blue-700' },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📸',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    },
  ]

  const handlePlatformSelect = (platformId: string) => {
    setSelectedPlatform(platformId)
  }

  const handleGenerateContent = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    const platformTemplates = {
      twitter: {
        'product launch':
          "🚀 Just dropped something amazing! Our new product is here and it's game-changing. Ready to experience the future? #ProductLaunch #Innovation #NewProduct",
        'company update':
          "📢 Big news from our team! Exciting updates and what's next on our journey. Stay tuned! #CompanyNews #Updates #Growth",
        'team achievement':
          '🎉 Shoutout to our incredible team! Another milestone crushed. Teamwork makes the dream work! #TeamWork #Success #Achievement',
        'industry insights':
          "💡 Industry take: Here's what we're seeing and why it matters. Thoughts? #Industry #Insights #Trends",
        'behind the scenes':
          "👀 BTS: Ever wonder how we make the magic happen? Here's a peek behind the curtain! #BehindTheScenes #Process",
        'customer success':
          '⭐ Customer win! Amazing results that speak for themselves. This is why we do what we do! #CustomerSuccess #Results',
      },
      linkedin: {
        'product launch':
          "🚀 We're excited to announce the launch of our latest product innovation. This represents months of dedicated development and customer feedback integration. #ProductLaunch #Innovation #ProfessionalGrowth",
        'company update':
          "📢 Company Update: We're pleased to share our latest organizational developments and strategic initiatives for the upcoming quarter. #CompanyNews #Leadership #Growth",
        'team achievement':
          "🎉 Recognizing our exceptional team's outstanding achievement. Their dedication and collaborative spirit continue to drive our success. #TeamWork #ProfessionalExcellence #Achievement",
        'industry insights':
          '💡 Industry Analysis: Sharing our perspective on current market trends and their implications for business strategy. #Industry #BusinessInsights #Strategy',
        'behind the scenes':
          '👀 Operational Excellence: A glimpse into our processes and methodologies that drive consistent results. #Operations #Process #Excellence',
        'customer success':
          '⭐ Client Success Story: Demonstrating measurable outcomes and the value of strategic partnership. #CustomerSuccess #ROI #Partnership',
      },
      instagram: {
        'product launch':
          "🚀✨ NEW DROP ALERT! ✨ Our latest creation is finally here and we can't contain our excitement! Swipe to see the magic ➡️ #ProductLaunch #NewDrop #Innovation #Excited",
        'company update':
          "📢💫 BIG ANNOUNCEMENT! 💫 So much happening behind the scenes and we're ready to share it all with you! Stay tuned for more ✨ #CompanyNews #BigNews #Updates #Excited",
        'team achievement':
          "🎉🙌 TEAM WIN! 🙌 Our amazing crew did it again! So proud of what we've accomplished together 💪✨ #TeamWork #Success #ProudMoment #Achievement",
        'industry insights':
          "💡🔥 INDUSTRY TALK 🔥 Here's what we're seeing and loving in our space right now! What do you think? 💭✨ #Industry #Insights #Trends #ThoughtLeader",
        'behind the scenes':
          "👀✨ BTS MAGIC ✨ Ever wondered how we create the magic? Here's your exclusive peek! 🎬💫 #BehindTheScenes #Process #Exclusive #Magic",
        'customer success':
          '⭐💖 SUCCESS STORY! 💖 When our clients win, we ALL win! These results speak for themselves 📈✨ #CustomerSuccess #Results #Winning #Grateful',
      },
    }

    setTimeout(() => {
      const lowerPrompt = prompt.toLowerCase()
      const platform = selectedPlatform || 'twitter'
      const templates =
        platformTemplates[platform as keyof typeof platformTemplates]

      let generatedContent = `✨ ${prompt} #AI #Content #SocialMedia`

      for (const [key, template] of Object.entries(templates)) {
        if (lowerPrompt.includes(key.replace(' ', ''))) {
          generatedContent = template
          break
        }
      }

      setContent(generatedContent)
      setIsGenerating(false)
    }, 2000)
  }

  const handlePublish = () => {
    if (content.trim() && selectedPlatform) {
      addPost({
        content: content.trim(),
        platforms: [selectedPlatform],
        scheduledDate: new Date(),
        status: 'published',
      })
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                href="/dashboard"
                className="text-gray-500 hover:text-gray-700 mr-4"
              >
                ← Back to Dashboard
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">
                Create New Post
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content Creation */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Content Generator */}
            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                AI Content Generator
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What would you like to post about?
                  </label>
                  <textarea
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    rows={3}
                    placeholder="Describe your post idea, product launch, company update, etc..."
                  />
                </div>

                <button
                  onClick={handleGenerateContent}
                  disabled={isGenerating}
                  className="btn-primary w-full"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating...
                    </div>
                  ) : (
                    '✨ Generate Content with AI'
                  )}
                </button>
              </div>
            </div>

            {/* Post Content */}
            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Post Content
              </h2>

              <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={6}
                placeholder="Write your post content here or use AI to generate it..."
              />

              <div className="mt-2 text-sm text-gray-500">
                {content.length}/280 characters
              </div>
            </div>

            {/* Media Upload */}
            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Add Media
              </h2>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="mt-4">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <span className="mt-2 block text-sm font-medium text-gray-900">
                      Upload images or videos
                    </span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      accept="image/*,video/*"
                    />
                  </label>
                  <p className="mt-1 text-xs text-gray-500">
                    PNG, JPG, GIF, MP4 up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Platform Selection */}
            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Select Platforms
              </h2>

              <div className="space-y-3">
                {platforms.map(platform => (
                  <div
                    key={platform.id}
                    className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                      selectedPlatform === platform.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handlePlatformSelect(platform.id)}
                  >
                    <div
                      className={`w-8 h-8 ${platform.color} rounded-lg flex items-center justify-center text-white mr-3`}
                    >
                      <span className="text-sm">{platform.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">
                        {platform.name}
                      </p>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        selectedPlatform === platform.id
                          ? 'bg-primary-500 border-primary-500'
                          : 'border-gray-300'
                      }`}
                    >
                      {selectedPlatform === platform.id && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scheduling */}
            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Schedule Post
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="schedule"
                      value="now"
                      defaultChecked
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">Publish now</span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="schedule"
                      value="later"
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      Schedule for later
                    </span>
                  </label>
                </div>

                <div className="ml-6 space-y-2">
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  />
                  <div className="flex space-x-2">
                    <input
                      type="time"
                      value={scheduleTime}
                      onChange={e => setScheduleTime(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    />
                    <select
                      value={amPm}
                      onChange={e => setAmPm(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handlePublish}
                disabled={!content.trim() || !selectedPlatform}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🚀 Publish Post
              </button>

              <button className="btn-secondary w-full">💾 Save as Draft</button>

              <Link
                href="/dashboard"
                className="btn-outline w-full block text-center"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
