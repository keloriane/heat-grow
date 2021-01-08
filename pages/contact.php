<?php
/***Template Name: Contact Page
 */

$context = Timber::context();
$context['images'] = Picz::getAll();
Timber::render('/contact.twig', $context);

