<html>
    <body>
        <?php

        // Get variables from POST
        $devname = $_POST['devname'];
        $devcmd = $_POST['devcmd'];

        // Create socket
        $sock = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);
        
        // Create Set Device State Message
        $msg = "142,127.0.0.1,27061,127.0.0.1,27001,604" + $devname + ",," + $devcmd + ",,";
        $len = strlen($msg);
    
        // Send message and close socket
        socket_sendto($sock, $msg, $len, 0, '127.0.0.1', 27061);
        socket_close($sock);

        ?>

    </body>
</html>