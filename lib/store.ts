import { create } from 'zustand'
import { Song } from './db'

interface PlayerState {
  currentSong: Song | null
  isPlaying: boolean
  queue: Song[]
  setCurrentSong: (song: Song) => void
  setIsPlaying: (isPlaying: boolean) => void
  setQueue: (queue: Song[]) => void
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentSong: null,
  isPlaying: false,
  queue: [],
  setCurrentSong: (song) => set({ currentSong: song }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setQueue: (queue) => set({ queue }),
}))