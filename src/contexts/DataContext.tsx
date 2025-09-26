'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface Post {
  id: number
  content: string
  platforms: string[]
  scheduledDate: Date
  status: 'scheduled' | 'published' | 'draft'
}

interface Activity {
  id: number
  type: 'published' | 'scheduled' | 'generated'
  platform: string
  content: string
  timestamp: Date
  status: 'success' | 'pending' | 'draft'
}

interface Account {
  platform: string
  connected: boolean
  username: string
}

interface DataContextType {
  posts: Post[]
  activities: Activity[]
  accounts: Account[]
  addPost: (post: Omit<Post, 'id'>) => void
  addActivity: (activity: Omit<Activity, 'id'>) => void
  updateAccount: (
    platform: string,
    connected: boolean,
    username?: string
  ) => void
  deletePost: (id: number) => void
  deleteActivity: (id: number) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export function DataProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([])
  const [activities, setActivities] = useState<Activity[]>([])
  const [accounts, setAccounts] = useState<Account[]>([
    { platform: 'twitter', connected: false, username: '' },
    { platform: 'linkedin', connected: false, username: '' },
    { platform: 'instagram', connected: false, username: '' },
  ])

  const addPost = (post: Omit<Post, 'id'>) => {
    const newPost = { ...post, id: Date.now() }
    setPosts(prev => [...prev, newPost])

    // Add corresponding activity
    addActivity({
      type: 'scheduled',
      platform: post.platforms[0],
      content: post.content,
      timestamp: new Date(),
      status: 'pending',
    })
  }

  const addActivity = (activity: Omit<Activity, 'id'>) => {
    const newActivity = { ...activity, id: Date.now() }
    setActivities(prev => [newActivity, ...prev])
  }

  const updateAccount = (
    platform: string,
    connected: boolean,
    username = ''
  ) => {
    setAccounts(prev =>
      prev.map(acc =>
        acc.platform === platform ? { ...acc, connected, username } : acc
      )
    )
  }

  const deletePost = (id: number) => {
    setPosts(prev => prev.filter(post => post.id !== id))
  }

  const deleteActivity = (id: number) => {
    setActivities(prev => prev.filter(activity => activity.id !== id))
  }

  return (
    <DataContext.Provider
      value={{
        posts,
        activities,
        accounts,
        addPost,
        addActivity,
        updateAccount,
        deletePost,
        deleteActivity,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}
