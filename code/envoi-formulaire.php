<?php
// Socle technique (SAT 5, Q9) : envoie le message du formulaire par email à l'adresse du client.
// Aucun service tiers, rien n'est stocké sur le serveur. Anti-spam sans traceur : champ piège « site_web ».
// NON TESTÉ chez Hostinger : à tester avec un vrai message pendant les 30 jours (O63, test H10).
// Limites annoncées par Hostinger pour mail() : 10 emails par minute, 100 par jour ; si mail() échoue, revoir Q9 (SMTP).
$destinataire = '[À DEMANDER AU CLIENT : email]';
$expediteur   = 'formulaire@[À DEMANDER AU CLIENT : nom de domaine]';   // [À VÉRIFIER pendant le test O63 : adresse acceptée par l'hébergeur]
$entreprise   = 'Athéna Gym';

function retour($page) { header('Location: ' . $page, true, 303); exit; }
function propre($t, $max) {
  $t = trim((string)$t);
  $t = str_replace(["\r", "\n", "%0a", "%0d"], ' ', $t);   // empêche l'ajout d'en-têtes dans l'email
  return mb_substr($t, 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') retour('index.html');
if (!empty($_POST['site_web'])) retour('merci.html');      // robot : on fait semblant que tout va bien

$nom     = propre($_POST['nom'] ?? '', 100);
$email   = propre($_POST['email'] ?? '', 150);
$tel     = propre($_POST['tel'] ?? '', 30);
$cours   = propre($_POST['cours'] ?? '', 80);   // Athéna Gym : cours choisi dans la liste du formulaire
$message = mb_substr(trim((string)($_POST['message'] ?? '')), 0, 5000);

if ($message === '') $message = '(pas de message : demande de semaine d\'essai)';
if ($nom === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) retour('envoi-erreur.html');

$sujet  = '=?UTF-8?B?' . base64_encode('Message du site — ' . $entreprise) . '?=';
$corps  = "Nom : $nom\nEmail : $email\nTéléphone : " . ($tel !== '' ? $tel : '—') . "\nCours : " . ($cours !== '' ? $cours : '—') . "\n\nMessage :\n$message\n\n"
        . "—\nEnvoyé par le formulaire du site. Pour répondre, utilisez simplement « Répondre ».";
$entetes = "From: $expediteur\r\nReply-To: $email\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit";

retour(mail($destinataire, $sujet, $corps, $entetes) ? 'merci.html' : 'envoi-erreur.html');
