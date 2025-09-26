'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useUser } from '@/contexts/UserContext'
import { useRouter } from 'next/navigation'

export default function PostsPage() {
  const { user } = useUser()
  const router = useRouter()

  const [activities] = useState([
    {
      id: 1,
      type: 'published',
      platform: 'twitter',
      content: 'Just launched our new feature! 🚀',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      status: 'success',
    },
    {
      id: 2,
      type: 'scheduled',
      platform: 'linkedin',
      content: 'Behind the scenes of our development process',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      status: 'pending',
    },
    {
      id: 3,
      type: 'generated',
      platform: 'instagram',
      content: 'AI-generated content for our latest campaign',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      status: 'draft',
    },
    {
      id: 4,
      type: 'published',
      platform: 'linkedin',
      content: 'Excited to share our quarterly results',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      status: 'success',
    },
  ])

  if (!user) {
    router.push('/auth/login')
    return null
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'published':
        return 'bg-green-500'
      case 'scheduled':
        return 'bg-blue-500'
      case 'generated':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    return 'Just now'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">
                Recent Activity
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Activity Timeline
          </h2>
          <p className="text-gray-600">
            Track all your social media activities and posts.
          </p>
        </div>

        <div className="space-y-6">
          {activities.map(activity => (
            <div key={activity.id} className="card">
              <div className="flex items-start space-x-4">
                <div
                  className={`w-3 h-3 rounded-full mt-2 ${getActivityIcon(activity.type)}`}
                ></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-medium text-gray-900 capitalize">
                        {activity.type === 'published'
                          ? 'Post published'
                          : activity.type === 'scheduled'
                            ? 'Post scheduled'
                            : 'Content generated'}{' '}
                        to {activity.platform}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          activity.status === 'success'
                            ? 'bg-green-100 text-green-800'
                            : activity.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {activity.status}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {formatTimeAgo(activity.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {activity.content}
                  </p>
                  <div className="flex items-center space-x-3 text-xs">
                    <button className="text-primary-600 hover:text-primary-700">
                      View
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
