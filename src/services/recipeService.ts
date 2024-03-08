const API_URL = 'https://api.mob.co.uk/task/recipes.json'

export async function getRecipes() {
    const username = process.env.RECIPE_API_USER;
    const password = process.env.RECIPE_API_PASSWORD;
    const credentials = Buffer.from(`${username}:${password}`).toString('base64');
    const authHeader = `Basic ${credentials}`;

    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            'Authorization': authHeader,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch recipes.');
    }

    const data = await response.json();
    return data.recipes
}