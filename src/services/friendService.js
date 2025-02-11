export const shuffleFriends = (friends) => {

    if (!Array.isArray(friends)) {
        throw new Error("Friends parameter must be an array")
    }

    const shuffle = [...friends];

    for (let i = shuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
    }

    return shuffle;
}

export const generateSecretFriend = (friends) => {
    const shuffled = shuffleFriends(friends);
    const pairs = new Map();

    if (shuffled.length < 2) {
        throw new Error("Need at least two friends to generate");
    }

    for (let i = 0; i < shuffled.length; i++) {
        const friend = shuffled[i];
        const sortedFriend = shuffled[(i + 1) % shuffled.length];
        pairs.set(friend, sortedFriend);
    }

    return pairs;
} 
