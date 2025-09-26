'use client'

import Link from 'next/link'
import { useUser } from '@/contexts/UserContext'
import { useData } from '@/contexts/DataContext'
import { useRouter } from 'next/navigation'

export default function SchedulePage() {
  const { user } = useUser()
  const { posts } = useData()
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState(new Date())

  const scheduledPosts = posts.filter(p => p.status === 'scheduled')

  if (!user) {
    router.push('/auth/login')
    return null
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
                Schedule Posts
              </h1>
            </div>

            <Link href="/dashboard/create" className="btn-primary">
              Create New Post
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Content Calendar
                </h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setSelectedDate(
                        new Date(
                          selectedDate.getFullYear(),
                          selectedDate.getMonth() - 1,
                          1
                        )
                      )
                    }
                    className="p-2 text-gray-400 hover:text-gray-600"
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
                  </button>
                  <span className="text-sm font-medium text-gray-900">
                    {selectedDate.toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <button
                    onClick={() =>
                      setSelectedDate(
                        new Date(
                          selectedDate.getFullYear(),
                          selectedDate.getMonth() + 1,
                          1
                        )
                      )
                    }
                    className="p-2 text-gray-400 hover:text-gray-600"
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Simple Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div
                    key={day}
                    className="p-2 text-center text-sm font-medium text-gray-500"
                  >
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => {
                  const firstDayOfMonth = new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth(),
                    1
                  )
                  const startDate = new Date(firstDayOfMonth)
                  startDate.setDate(
                    startDate.getDate() - firstDayOfMonth.getDay()
                  )
                  const date = new Date(startDate)
                  date.setDate(date.getDate() + i)

                  const isToday =
                    date.toDateString() === new Date().toDateString()
                  const isCurrentMonth =
                    date.getMonth() === selectedDate.getMonth()
                  const hasPost = scheduledPosts.some(
                    post =>
                      post.scheduledDate.toDateString() === date.toDateString()
                  )

                  return (
                    <div
                      key={i}
                      onClick={() => setSelectedDate(date)}
                      className={`p-2 text-center text-sm cursor-pointer rounded-lg ${
                        isToday
                          ? 'bg-primary-100 text-primary-600 font-semibold'
                          : isCurrentMonth
                            ? 'hover:bg-gray-100'
                            : 'text-gray-300 hover:bg-gray-50'
                      } ${hasPost ? 'bg-yellow-50 border border-yellow-200' : ''}`}
                    >
                      {date.getDate()}
                      {hasPost && (
                        <div className="w-1 h-1 bg-yellow-500 rounded-full mx-auto mt-1"></div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Scheduled Posts Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Overview
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Scheduled Posts</span>
                  <span className="text-sm font-medium text-gray-900">
                    {scheduledPosts.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">This Week</span>
                  <span className="text-sm font-medium text-gray-900">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Next Week</span>
                  <span className="text-sm font-medium text-gray-900">0</span>
                </div>
              </div>
            </div>

            {/* Upcoming Posts */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Upcoming Posts
              </h3>
              <div className="space-y-4">
                {scheduledPosts.map(post => (
                  <div
                    key={post.id}
                    className="border border-gray-200 rounded-lg p-3"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 line-clamp-2">
                          {post.content}
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 ml-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-2">
                        {post.platforms.map(platform => (
                          <span key={platform} className="capitalize">
                            {platform}
                          </span>
                        ))}
                      </div>
                      <div>
                        {formatDate(post.scheduledDate)} at{' '}
                        {formatTime(post.scheduledDate)}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Scheduled
                      </span>
                      <div className="flex space-x-1">
                        <button className="text-primary-600 hover:text-primary-700 text-xs">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-700 text-xs">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {scheduledPosts.length === 0 && (
                  <div className="text-center py-6">
                    <svg
                      className="w-12 h-12 text-gray-300 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm text-gray-500">No scheduled posts</p>
                    <Link
                      href="/dashboard/create"
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Create your first post
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
