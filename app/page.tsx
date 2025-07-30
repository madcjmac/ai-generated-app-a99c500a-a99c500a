import FeaturedTracks from '@/components/FeaturedTracks'
import RecentlyPlayed from '@/components/RecentlyPlayed'
import UploadButton from '@/components/UploadButton'

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <UploadButton />
      </div>
      
      <FeaturedTracks />
      <RecentlyPlayed />
    </div>
  )
}