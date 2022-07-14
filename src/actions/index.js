

export const getGifs = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=9N01IQVq1F8XZJBHxRWEgpoI7PkRkjgg&q=${category}&limit=10`
    const response = await fetch(URL);

    const {data} = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
    return gifs;
}