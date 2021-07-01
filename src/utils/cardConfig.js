import { card } from "../data/user.json";
export const cardConfig = [
    {
        name: card.name,
        tag: card.tag,
        location: card.location,
        avatar: card.avatar,
        stats: {
            followers: card.stats.followers,
            views: card.stats.views,
            likes: card.stats.likes
        }
    }
]