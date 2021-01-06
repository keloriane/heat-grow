<?php
/*** Template Name: Home Page*/

$context = Timber::context();
$context['posts'] = Gimy::posts();
$ground = Picz::get('ground-eco.png');
$heater = Picz::get('chauffage-entretien.png');
Picz::add('ground', $ground);
Picz::add('chauffage', $heater);
$context['images'] = Picz::getAll();
r($context);
Timber::render( '/index.twig',$context);

