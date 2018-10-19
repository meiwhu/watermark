[![travis-icon]][travis-link]

# watermark
Generate watermark for image and video, based on ffmpeg.

# Dependency
- [ffmpeg](http://ffmpeg.org/)

# Install
`npm install @meibin/watermark`

# Use
```js
  const watermark = require('@meibin/watermark')
  
  const source = '/path/to/image/or/video'
  const target = '/path/to/output/file'

  // text watermark
  watermark(source, target, 'TextWatermark').then(() => {
    // done
  })
  // image watermark
  watermark(source, target, imageSource, { textMark: false }).then(() => {
    // done
  })

```

[travis-icon]:https://travis-ci.org/meiwhu/watermark.svg?branch=master
[travis-link]:https://travis-ci.org/meiwhu/watermark