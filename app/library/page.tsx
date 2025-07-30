import LibraryGrid from '@/components/LibraryGrid'
import UploadButton from '@/components/UploadButton'

export default function Library() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Your Library</h1>
        <UploadButton />
      </div>
      
      <LibraryGrid />
    </div>
  )
}