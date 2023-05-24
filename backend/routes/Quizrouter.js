import express from "express"
import { getQuiz, StoreQuiz } from "../controller/QuizController.js";
const router = express.Router();

router.get('/', getQuiz);

router.post('/', StoreQuiz);

export default router;