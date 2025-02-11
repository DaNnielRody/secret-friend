import express from 'express';
import { createFriends, generateSecretFriends } from '../controllers/friendController.js'


const router = express.Router();

router.post('/shuffle', generateSecretFriends);
router.post('/create', createFriends);

export default router;