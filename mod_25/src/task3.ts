
const calculateWeeklyTotal=(expenses:number[]):number=>{
    return expenses.reduce((total, expense) => total + expense, 0);
}