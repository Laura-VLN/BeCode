// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {

    document.getElementById('run').addEventListener('click',() =>{
        
        lib.getPosts(callback);

        function callback (error, articles) {
            console.log(error, articles);
        }

        lib.getComments(id, callback);

            function callback(error, comments) {
                console.log(error, comments);
            }

    })

})();
