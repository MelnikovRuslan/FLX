import { resetStage } from './reset';
import { userScoreSpan, compScoreSpan } from './variables'

export function showScore(userScore, computerScore) {
	userScoreSpan.textContent = userScore;
	compScoreSpan.textContent = computerScore;
	resetStage();
}
