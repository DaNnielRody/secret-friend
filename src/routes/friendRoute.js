import express from 'express';
import generateSecretFriends from '../controllers/friendController.js'

const router = express.Router();

router.get('/shuffle', generateSecretFriends)

export default router;