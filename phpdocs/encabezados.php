<?php
//agregamos los encabezados correspondientes a la respuesta
http_response_code(200);
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: localhost');
header('Access-Control-Allow-Methods: *');

?>