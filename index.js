var path = require('path')
var child_process = require('child_process')

/**
 * watermark
 * @param {String} source absolute path
 * @param {String} target absolute path
 * @param {String} watermark text or image path
 * @param {{ textMark: Boolean }} textMark
 * @return {Promise<void>}
 */
module.exports = function makeWatermark(source, target, watermark, { textMark } = { textMark: true }) {
  if (!path.isAbsolute(source)) {
    throw new Error("parameter 'source' must be absolute path")
  }
  if (!path.isAbsolute(target)) {
    throw new Error("parameter 'target' must be absolute path")
  }

  var command = null
  if (textMark) {
    command = `ffmpeg -y -i "${source}" -filter_complex "drawtext=x=W-text_w-10:y=H-text_h-10:fontcolor=white:text='${watermark}'" -strict -2 "${target}"`
  } else {
    if (!path.isAbsolute(watermark)) {
      throw new Error("parameter 'watermark' must be absolute path when 'textMark' is false")
    }
    command = `ffmpeg -y -i "${source}" -i "${watermark}" -filter_complex "overlay=x=W-overlay_w-10:y=H-overlay_h-10" -strict -2 "${target}"`
  }

  return new Promise((resolve, reject) => {
    child_process.exec(command, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}