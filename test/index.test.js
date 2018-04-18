const makeWatermark = require('../index')
const path = require('path')
const assert = require('assert')

const originImage = path.resolve(__dirname, 'res/origin.jpg')
const originVideo = path.resolve(__dirname, 'res/origin.mp4')
const imageWatermark = path.resolve(__dirname, 'res/watermark.jpg')

const targetImage = path.resolve(__dirname, 'res/target.jpg')
const targetVideo = path.resolve(__dirname, 'res/target.mp4')

describe('#Image: Text Watermark', () => {
  it('should be success', async () => {
    await makeWatermark(originImage, targetImage, '@Watermark', true)
  })
})
describe('#Image: Image Watermark', () => {
  it('should be success', async () => {
    await makeWatermark(originImage, targetImage, imageWatermark, false)
  })
})
describe('#Video: Text Watermark', () => {
  it('should be success', async () => {
    await makeWatermark(originVideo, targetVideo, '@Watermark', true)
  })
})
describe('#Video: Video Watermark', () => {
  it('should be success', async () => {
    await makeWatermark(originVideo, targetVideo, imageWatermark, false)
  })
})