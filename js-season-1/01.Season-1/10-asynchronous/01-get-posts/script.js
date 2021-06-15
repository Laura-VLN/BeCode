// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    
    document.getElementById('run').addEventListener('click',() =>{
        
        lib.getPosts(callback);

        function callback (error, articles) {
            console.log(error, articles)
        }

    })

})();
