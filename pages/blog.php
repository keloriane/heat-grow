<?php
/*** Template Name: Blog Page*/

$context = Timber::context();
$context['posts'] = Gimy::posts(['post_type' => 'post']);
$pipe = Picz::get('pipe.png');
Picz::add('pipe', $pipe);;
$context['images'] = Picz::getAll();
Timber::render('/blog.twig', $context);

