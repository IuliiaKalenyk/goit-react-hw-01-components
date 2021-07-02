import rating from '../data/user.json';
export const ratingConfig = [
    {
        label: "Followers",
        quantity: rating.followers,
    },
    {
        label: "Views",
        quantity: rating.views,
    },
    {
        label: "Likes",
        quantity: rating.likes,
    }
]