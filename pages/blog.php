<?php
/*** Template Name: Blog Page*/

$context = Timber::context();
$context['post'] = Gimy::post();
$pipe = Picz::get('pipe.png');
Picz::add('pipe', $pipe);;
$context['images'] = Picz::getAll();
Timber::render('/blog.twig', $context);

