import PlaylistGrid from '@/components/PlaylistGrid'
import CreatePlaylistButton from '@/components/CreatePlaylistButton'

export default function Playlists() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Your Playlists</h1>
        <CreatePlaylistButton />
      </div>
      
      <PlaylistGrid />
    </div>
  )
}