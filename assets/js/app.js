let tweet = document.getElementById('tweet');
let listaTweet = document.querySelector('#lista-tweets');


document.addEventListener('DOMContentLoaded',function(){
if(localStorage.getItem('tweets') !== null){
    let tweets = JSON.parse(localStorage.getItem('tweets'));
    tweets.forEach(tweet => {
        let li = document.createElement('li');
    li.innerText = tweet;
    
    let a = document.createElement('a');
    a.classList = 'borrar-tweet';
    a.innerText = 'x';
    li.appendChild(a);

    listaTweet.appendChild(li);
    });
}
});

document.getElementById('agregar').addEventListener('click',function(e){
   // Agregar tweet a la listaTweet
    let li = document.createElement('li');
    li.innerText = tweet.value;
    
    let a = document.createElement('a');
    a.classList = 'borrar-tweet';
    a.innerText = 'x';
    li.appendChild(a);

    listaTweet.appendChild(li);

    let tweetLocalStorage ;
    if(localStorage.getItem('tweets') === null){
        tweetLocalStorage = []
        console.log('Cuando es null ' + typeof localStorage.getItem('tweets'));
    }
    else{
        tweetLocalStorage = JSON.parse(localStorage.getItem('tweets'));
    }

    console.log('luego del if ' + typeof localStorage.getItem('tweets'));
    tweetLocalStorage.push(tweet.value);
    localStorage.setItem('tweets', JSON.stringify(tweetLocalStorage));
    tweet.value = '';
    tweet.focus();
});


listaTweet.addEventListener('click',function(e){
    if(e.target.className === 'borrar-tweet'){
        let tweetABorrar = e.target.parentElement.innerText.substring(0, e.target.parentElement.innerText.length - 2);
        
        let tweets = JSON.parse(localStorage.getItem('tweets'));
        // console.log('antes de borrar: ' + tweets);
        tweets.forEach(function(tweet2, index) {
        console.log( tweetABorrar + ' = ' + tweet2);

            if(tweetABorrar === tweet2) {
                 tweets.splice(index, 1);
            }
            // console.log('borrado: ' + tweets);
        });
        localStorage.setItem('tweets',JSON.stringify(tweets));

        e.target.parentElement.remove();

    }else{
        console.log('No');
    }
});