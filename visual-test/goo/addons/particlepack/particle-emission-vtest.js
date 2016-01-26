require([
	'goo/math/Vector3',
	'goo/shapes/Box',
	'lib/V',
	'goo/entities/SystemBus',
	'goo/entities/components/HtmlComponent',
	'goo/entities/systems/HtmlSystem',
	'goo/addons/particlepack/components/ParticleSystemComponent',
	'goo/addons/particlepack/systems/ParticleSystemSystem',
	'goo/addons/particlepack/curves/ConstantCurve',
	'goo/addons/particlepack/curves/LinearCurve',
	'goo/addons/particlepack/curves/Vector4Curve'
], function (
	Vector3,
	Box,
	V,
	SystemBus,
	HtmlComponent,
	HtmlSystem,
	ParticleSystemComponent,
	ParticleSystemSystem,
	ConstantCurve,
	LinearCurve,
	Vector4Curve
) {
	'use strict';

	var goo = V.initGoo();
	var world = goo.world;

	world.setSystem(new ParticleSystemSystem());
	world.setSystem(new HtmlSystem(goo.renderer));

	V.addLights();
	V.addOrbitCamera(new Vector3(100, Math.PI / 2, 0.3));

	var optionsObjects = [

	{
		label: 'preWarm: false<br>loop: true<br>localSpace: false',
		loop: true,
		localSpace: false,
		maxParticles: 10,
		emissionRate: new ConstantCurve({ value: 10 }),
		preWarm: false
	}, {
		label: 'preWarm: false<br>loop: true<br>localSpace: true',
		loop: true,
		localSpace: true,
		maxParticles: 10,
		emissionRate: new ConstantCurve({ value: 10 }),
		preWarm: false
	},

	{
		label: 'preWarm: true<br>loop: true<br>localSpace: false',
		loop: true,
		localSpace: false,
		maxParticles: 10,
		emissionRate: new ConstantCurve({ value: 10 }),
		preWarm: true
	}, {
		label: 'preWarm: true<br>loop: true<br>localSpace: true',
		loop: true,
		localSpace: true,
		maxParticles: 10,
		emissionRate: new ConstantCurve({ value: 10 }),
		preWarm: true
	},

	{
		label: 'loop: false<br>localSpace: false',
		loop: false,
		localSpace: false,
		maxParticles: 10,
		emissionRate: new ConstantCurve({ value: 10 }),
	}, {
		label: 'loop: false<br>localSpace: true',
		loop: false,
		localSpace: true,
		maxParticles: 10,
		emissionRate: new ConstantCurve({ value: 10 }),
	},

	// Make it run out of particles
	{
		label: 'duration: 1<br>lifeTime: 2<br>localSpace: false',
		duration: 1,
		startLifetime: new ConstantCurve({ value: 2 }),
		loop: true,
		localSpace: false,
		maxParticles: 10,
		startColor: new Vector4Curve({
			x: new LinearCurve({ m: 0, k: 1 }),
			y: new LinearCurve({ m: 1, k: -1 }),
			z: new LinearCurve({ m: 1, k: -1 }),
			w: new LinearCurve({ m: 1, k: 0 })
		}),
		emissionRate: new LinearCurve({ m: 10, k: 0 })
	},
	{
		label: 'duration: 1<br>lifeTime: 2<br>localSpace: true',
		duration: 1,
		startLifetime: new ConstantCurve({ value: 2 }),
		startColor: new Vector4Curve({
			x: new LinearCurve({ m: 0, k: 1 }),
			y: new LinearCurve({ m: 1, k: -1 }),
			z: new LinearCurve({ m: 1, k: -1 }),
			w: new LinearCurve({ m: 1, k: 0 })
		}),
		loop: true,
		localSpace: true,
		maxParticles: 10,
		emissionRate: new LinearCurve({ m: 10, k: 0 })
	}

	];

	var dist = 20;

	for (var i=0; i<optionsObjects.length; i++) {
		var position = [i * dist - dist*(optionsObjects.length - 1) / 2, -12, 0];
		var options = optionsObjects[i];
		var entity = world.createEntity(position, new ParticleSystemComponent(options)).addToWorld();

		// HTML sign below
		var htmlElement = document.createElement('p');
		htmlElement.style.position = 'absolute';
		htmlElement.style['-webkit-user-select'] = 'none';
		htmlElement.style.color = 'white';
		htmlElement.innerHTML = options.label;
		document.body.appendChild(htmlElement);
		var htmlComponent = new HtmlComponent(htmlElement);
		position[1] -= 1;
		world.createEntity(position).addToWorld().set(htmlComponent);
	}
	V.goo.renderer.setClearColor(0, 0, 0, 1);
});