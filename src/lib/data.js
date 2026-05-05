export async function getCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    const data = await res.json();
    return data.data;
}


export async function getNewsByCategoryId(category_id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch news by category ID');
    }
    const data = await res.json();
    return data.data;
}