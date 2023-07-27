import React, { useState } from 'react';
import './weekend.css';

export default function Weekend() {
	const questions = [
		{
			questionText: 'Which of the following is a front-end programming language?',
			answerOptions: [
				{ answerText: ' Python', isCorrect: false },
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'HTML', isCorrect: true },
				{ answerText: 'Ruby', isCorrect: false },
			],
		},
		{
			questionText: 'What does CSS stand for in web development?',
			answerOptions: [
				{ answerText: 'Creative Style Sheets', isCorrect: false },
				{ answerText: 'Cascading Style Sheets', isCorrect: true },
				{ answerText: 'Computer Style Sheets', isCorrect: false },
				{ answerText: 'Colorful Style Sheets', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is NOT a version control system used in front-end development?',
			answerOptions: [
				{ answerText: 'NPM (Node Package Manager)', isCorrect: true },
				{ answerText: 'Git', isCorrect: false },
				{ answerText: 'Subversion (SVN)', isCorrect: false },
				{ answerText: 'Mercurial', isCorrect: false },
			],
		},
		{
			questionText: 'Which HTML tag is used to link an external JavaScript file to an HTML document?',
			answerOptions: [
				{ answerText: '<JavaScript>', isCorrect: false },
				{ answerText: '<js>', isCorrect: false },
				{ answerText: '<link>', isCorrect: false },
				{ answerText: '<script>', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div>
		<h1 style={{paddingLeft:'30%'}}>Weekend Assessment</h1>
		<div className='ques'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='qbtn' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}