import { DataTypes } from "sequelize";
import sequelize from "../db/db";

const Friend = sequelize.define('Friend', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

class FriendModel {
    static async getModel() {
        return Friend;
    }

    static async getFriendById(id){
        return await Friend.findByPk(id);
    }

    static async createFriend(friend) {
        const createdFriend = await Friend.create(friend);
        return {
            name: createdFriend.name
        }
    }

    static async updateFriend(id, friend) {
        const updatedFriend = await Friend.findByPk(id);
        if (!updatedFriend) return null;
        return await updatedFriend.update(friend);
    }

    static async deleteFriend(friendId) {
        const friend = await Friend.findByPk(friendId)

        if (friend) {
            await friend.destroy();
            return true;
        }

        return false;
    }

    static async getAllFriends() {
        return await Friend.findAll();
    }
}

export default {
    Friend,
    FriendModel
};