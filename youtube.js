const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const ytdl = require('ytdl-core')
const YtNode = require('youtube-node')
const through2 = require('through2')
const Ffmpeg = require('fluent-ffmpeg')
const cache = {}

class YouTube {
  constructor () {
    this.pageSize = 10
    this.tempFolder = path.resolve(__dirname, '../temp-audio')
    console.log('TEMP AUDIO FOLDER:', this.tempFolder)
    mkdirp(this.tempFolder) // Create temp folder if it doesn't exist.

    const envApiKey = process.env.KEY
    if (envApiKey) this.setKey(envApiKey)
  }

  setKey (apiKey) {
    this.ytNode = new YtNode()
    this.ytNode.setKey(apiKey)
  }

  stream (id, useCache) {
    if (useCache) {
      const cached = cache[id]
      if (cached) return cached
    }

    const video = ytdl(id)
    const ffmpeg = new Ffmpeg(video)
    const stream = through2()

    try {
      ffmpeg
        .format('mp3')
        .on('end', () => {
          cache[id] = null
          ffmpeg.kill()
        })
        .pipe(
          stream,
          { end: true }
        )

      cache[id] = stream
      return stream
    } catch (e) {
      throw e
    }
  }

  search ({ query, type }, callback) {
    if (type) {
      this.ytNode.addParam('type', type)
    }

    this.ytNode.search(query, this.pageSize, callback)
  }

  get (id, callback) {
    this.ytNode.getById(id, callback)
  }
}

module.exports = new YouTube()