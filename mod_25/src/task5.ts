interface QuizSummary {
    total: number;
    average: number;
}
const getQuizSummary=(scores:number[]):QuizSummary=>{
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = total / scores.length;
    if (total === 0) {
        return { total, average: 0 };
    }
    return { total, average };
}