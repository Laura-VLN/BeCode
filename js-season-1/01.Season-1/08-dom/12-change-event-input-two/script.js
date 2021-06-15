// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    function check(param){
        let n = ["1","2","3","4","5","6","7","8","9","0"];
        let pass = param.split("");
        let n1 = false;
        let n2 = false;
        param.split("").forEach(element => {
            if(n.includes(element)){
                if(n1 == true){
                    n2 = true;
                }else{
                    n1 = true;
                }
            }
        });
        return ((pass.length >=8 ? true : false) && n2 );
    }

    document.getElementById("pass-one").addEventListener("input", () =>{

        let value = document.getElementById("pass-one").value;

        if(check(value) ){
            document.getElementById("validity").innerHTML = "ok";
        }
    })

})();
