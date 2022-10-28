function showPage(index){

    const p =document.querySelector('.show-quiz1-answer')
       console.log('p',p);
       switch(index){
        case 1:
        p.innerHTML=`<iframe src="./card_40.html" width="100%" height="100%"/>`
            break;
            case 2:
            p.innerHTML=`<iframe src="./card2_40.html" width="100%" height="100%"/>`
                break;
       }
    
    }