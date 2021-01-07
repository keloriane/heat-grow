<?php
/*** Template Name: Home Page*/

$context = Timber::context();
$context['posts'] = Gimy::posts();
$ground = Picz::get('ground-eco.png');
$heater = Picz::get('chauffage-entretien.png');
$leaf = Picz::get('leafs.png');
Picz::add('ground', $ground);
Picz::add('chauffage', $heater);
Picz::add('leafs', $leaf);
$context['images'] = Picz::getAll();

Timber::render( '/index.twig',$context);

