import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About Our Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolutionizing social media management with AI-powered content
              generation and automated publishing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What We Do
              </h2>
              <p className="text-gray-600 mb-6">
                Our AI-powered platform streamlines your social media workflow
                by generating authentic, engaging content tailored to your
                business and automatically publishing it across multiple
                platforms.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Connect Twitter, LinkedIn, and Instagram accounts securely
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Generate personalized content using advanced AI
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Schedule posts with intelligent calendar planning
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Maintain compliance with platform guidelines
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    🤖 AI-Powered Intelligence
                  </h3>
                  <p className="text-gray-600">
                    Our chatbot learns about your business to create authentic,
                    engaging content that doesn&apos;t sound robotic.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ⏰ Time-Saving Automation
                  </h3>
                  <p className="text-gray-600">
                    Schedule weeks of content in advance and let our system
                    handle the posting automatically.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    🔒 Secure & Compliant
                  </h3>
                  <p className="text-gray-600">
                    Built with security first and designed to keep your accounts
                    safe from bans and violations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    📊 Multi-Platform Support
                  </h3>
                  <p className="text-gray-600">
                    Manage Twitter, LinkedIn, and Instagram from one unified
                    dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses and creators who are already using
              our platform to streamline their social media presence.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/auth/signup" className="btn-primary">
                Start Free Trial
              </Link>
              <Link href="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                10K+
              </div>
              <div className="text-gray-600">Posts Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                99.9%
              </div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
