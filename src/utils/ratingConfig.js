import rating from '../data/user.json';
export const ratingConfig = [
    {
        label: "Followers",
        quantity: rating.stats.followers,
    },
    {
        label: "Views",
        quantity: rating.stats.views,
    },
    {
        label: "Likes",
        quantity: rating.stats.likes,
    }
]