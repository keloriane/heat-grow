<?php

Routes::map('/', function($params){
	Routes::load('pages/home.php');
});

Routes::map('/about', function($params){
	Routes::load('pages/about.php');
});

Routes::map('/services', function($params){
	Routes::load('pages/services.php');
});
Routes::map('/articles', function($params){
	Routes::load('pages/blog.php');
});


