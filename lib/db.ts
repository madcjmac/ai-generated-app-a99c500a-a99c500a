import { openDB } from 'idb'

const DB_NAME = 'mp3-player-db'
const DB_VERSION = 1

export interface Song {
  id: string
  title: string
  artist?: string
  duration: number
  url: string
  coverUrl?: string
  addedAt: number
}

export interface Playlist {
  id: string
  name: string
  songs: string[] // Array of song IDs
  createdAt: number
}

async function initDB() {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('songs')) {
        db.createObjectStore('songs', { keyPath: 'id' })
      }
      if (!db.objectStoreNames.contains('playlists')) {
        db.createObjectStore('playlists', { keyPath: 'id' })
      }
    },
  })
  return db
}

export async function addSong(song: Song) {
  const db = await initDB()
  await db.put('songs', song)
}

export async function getSongs() {
  const db = await initDB()
  return db.getAll('songs')
}

export async function getSong(id: string) {
  const db = await initDB()
  return db.get('songs', id)
}

export async function addPlaylist(playlist: Playlist) {
  const db = await initDB()
  await db.put('playlists', playlist)
}

export async function getPlaylists() {
  const db = await initDB()
  return db.getAll('playlists')
}

export async function getPlaylist(id: string) {
  const db = await initDB()
  return db.get('playlists', id)
}