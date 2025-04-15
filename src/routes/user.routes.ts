import { Router } from 'express';

import { createUser, addHolidaysToCalendar } from '../controllers/user.controller';

const router = Router();

router.post('/', createUser);
router.post('/:userId/calendar/holidays', addHolidaysToCalendar);

export default router;