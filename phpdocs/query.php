<?php    
  session_start();

  // Incluímos nuestro fichero bd.php para conectarnos a la BBDD.
  include_once("db.php");

  //simple check
  $query = "SELECT id, categoria, descripcion FROM public.categorias";
  $categorias = pg_query($query) or die('Error: ' . pg_last_error());
  $resutado = array();
  while ($row = pg_fetch_assoc($categorias)) {
    $resutado[] = $row;
  }

  // codificar la respuesta en formato JSON
  echo json_encode($resutado);

  // Close connection
  pg_close($dbconn);
?>