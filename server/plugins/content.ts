export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      file.body = file.body.replace(/\%20/g, '-')
      file.body = file.body.replace(/\[\[/g, '[](')
      file.body = file.body.replace(/\]\]/g, ')')
    }
  })
})
