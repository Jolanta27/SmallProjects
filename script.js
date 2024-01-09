 const buttons = document.querySelectorAll(".square");

    for (const button of buttons) {
        button.addEventListener('click', updateSquares);
    }

    let clickedSquarelds = [];

    function updateSquares(event) {
        console.log('Square clicked:', event.target.id);
        const btn = event.target;
        btn.style.backgroundColor = 'green';
        clickedSquarelds.push(btn.id);
    
    if (clickedSquarelds.length === 6) {
        reverseSquares();
    }
    }
    function reverseSquares() {
        clickedSquarelds.reverse();
    
    for (const [index, id] of clickedSquarelds.entries()) 
    {
        const reverseBtn = document.getElementById(id);
if(reverseBtn) {
        setTimeout(() => {
        reverseBtn.style.backgroundColor = 'white'; 
    }, index * 1000);
  } else {
    console.log('Element not found for id', id);
  } 
}
  clickedSquarelds = [];
}

