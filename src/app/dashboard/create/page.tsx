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
    { id: 'twitter', name: 'Twitter', color: 'bg-blue-500' },
    { id: 'linkedin', name: 'LinkedIn', color: 'bg-blue-700' },
    {
      id: 'instagram',
      name: 'Instagram',
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
                      {platform.id === 'twitter' && (
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      )}
                      {platform.id === 'linkedin' && (
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      )}
                      {platform.id === 'instagram' && (
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      )}
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
