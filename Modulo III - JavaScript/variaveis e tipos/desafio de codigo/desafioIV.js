function desenhaHeadAndFooter(){
    console.log("-".repeat(39));
}

function drawTheBody(){
    console.log("|" + " ".repeat(37) + "|");
}

desenhaHeadAndFooter();
for(let i = 0; i <= 4; i++){
    drawTheBody();
}
desenhaHeadAndFooter();