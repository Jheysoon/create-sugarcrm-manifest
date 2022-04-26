<?php
$installdefs = 
	array(
	'id' => 'test_id',
	'copy' => array(
		array(
			'from' => '<basepath>/.prettierrc.js',
			'to' => '.prettierrc.js'
		),
		array(
			'from' => '<basepath>/App.tsx',
			'to' => 'App.tsx'
		),
		array(
			'from' => '<basepath>/android/gradle.properties',
			'to' => 'android/gradle.properties'
		),
		array(
			'from' => '<basepath>/babel.config.js',
			'to' => 'babel.config.js'
		),
		array(
			'from' => '<basepath>/package.json',
			'to' => 'package.json'
		),
		array(
			'from' => '<basepath>/yarn.lock',
			'to' => 'yarn.lock'
		),
		array(
			'from' => '<basepath>/src/index.js',
			'to' => 'src/index.js'
		),
		array(
			'from' => '<basepath>/src/common/components/BaseBox.tsx',
			'to' => 'src/common/components/BaseBox.tsx'
		),
		array(
			'from' => '<basepath>/src/common/components/BaseHeader.tsx',
			'to' => 'src/common/components/BaseHeader.tsx'
		),
	),
);