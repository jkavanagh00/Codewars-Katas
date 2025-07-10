function bingo(ticket, win){
  let count = 0;
  ticket.forEach((element) => {
    element[0].split('').forEach((letter) => {
      letter.charCodeAt(0) === element[1] ? count++ : count;
    });
  });
  return count < win ? 'Loser!' : 'Winner!';
};
