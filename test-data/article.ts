const id = (+new Date).toString(36).slice(-5);

type Article = {
    title: string,
    description: string,
    body: string,
    tags: string[]
}

export const article: Article = {
    title: `Test Article ${id}`,
    description: 'Test Article Description',
    body: 'Test Article Body',
    tags: ['test', 'article']
}