export default defineNuxtPlugin(() => {
  return {
    provide: {
      fetchArticle: async (slug) => {
        
        return { article, tagsList }
      }
    }
  }
})
