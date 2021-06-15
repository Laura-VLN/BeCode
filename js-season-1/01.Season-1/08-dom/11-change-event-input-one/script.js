// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    document.getElementById("pass-one").addEventListener("input", () =>{

        let count = document.getElementById("pass-one").value;
        count = count.split("");
        document.getElementById("counter").innerHTML = count.length+"/10";

        if(count.length > 10){
           
            document.getElementById("counter").innerHTML = (count.length-1)+"/10";
            document.getElementById("pass-one").value = document.getElementById("pass-one").value.slice(0,-1);
            
        }

        

    })

})();
