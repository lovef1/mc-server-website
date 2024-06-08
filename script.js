
 function initServerData(serverIp,serverPort){
        const serverIpElement = 'mc.hypixel.net' //Change mc.hypixel.net to your server IP
        fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
        .then(response => response.json())
        .then(data => handleServerStatus(data));
  
        function handleServerStatus(data){


         if (data.online == true) {
            document.getElementById(`status`).innerHTML = '<span class="green">Online</span> • '

                        const playerCounter = document.getElementById("player-count");
            playerCounter.innerHTML = data.players.now + ' Players • ';

            const ddddd = document.getElementById("version");
            ddddd.innerHTML = data.server.name;


        } else if (data.online == false) {
            document.getElementById(`status`).innerHTML = '<span class="red">Offline</span>'

            }

        } 
    }

    initServerData("mc.hypixel.net","25565"); //Change mc.hypixel.net to your server IP, and change port if it's not 25565