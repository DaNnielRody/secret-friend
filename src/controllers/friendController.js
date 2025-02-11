import { generateSecretFriend } from '../services/friendService.js'
import { createFriend } from '../services/friendService.js';

export const createFriends = async (req, res, next) => {
    try {
        const friend  = req.body;
        const createdFriend = await createFriend(friend);
        return res.status(201).json(createdFriend);
    } catch (error) {
        next(error);
    }
}

export const generateSecretFriends = (req, res, next) => {
    try {
        const friends  = req.body;
        const pairs = generateSecretFriend(friends);
        const pairsArray = Array.from(pairs.entries()).map(([friend, sortedFriend]) => ({
            friend: friend.name,
            sortedFriend: sortedFriend.name
          }));
          
          return res.status(200).json(pairsArray);
    } catch (error) {
        next(error);
    }
}
