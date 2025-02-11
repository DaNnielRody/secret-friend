import { generateSecretFriend } from '../services/friendService.js'


const generateSecretFriends = (req, res, next) => {
    try {
        const { friends } = req.body;
        const pairs = generateSecretFriend(friends);
        return res.status(200).json({
            shuffledFriends: pairs,
        })
    } catch (error) {
        next(error);
    }
}

export default generateSecretFriends;