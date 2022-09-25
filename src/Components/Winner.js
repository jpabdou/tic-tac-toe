
function winner(board) {
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ]
    for (let i = 0; i< wins.length; i++) {
        const [a,b,c] = wins[i];
        if (board[a] != " " && board[a] === board[b] && board[a] === board[c]) {
            return true
        } 
    }
    return null;
}

export default winner;
