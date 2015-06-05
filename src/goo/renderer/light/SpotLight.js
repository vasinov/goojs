define([
	'goo/renderer/light/ProjectionalLight'
], function (
	ProjectionalLight
) {
	'use strict';

	/**
	 * The SpotLight can be viewed as two cones with their apexes located at the light's location.
	 * The properties angle sets the angle (in degrees) for which the outer cone
	 * deviates from the light's direction. The exponent property sets the angle for the inner cone.
	 * The angle property is also known as the outer angle or falloff. The exponent property is also known as
	 * the inner angle or hotspot.
	 * @example-link http://code.gooengine.com/latest/visual-test/goo/renderer/light/Lights-vtest.html Working example
	 * @extends ProjectionalLight
	 * @param {Vector3} [color=(1, 1, 1)] The color of the light
	 */
	function SpotLight(color) {
		ProjectionalLight.call(this, color);

		/**
		 * The range of the light (default is 1000)
		 * @type {number}
		 */
		this.range = 1000;

		/**
		 * The angle (in degrees) of the cone of light that this spotlight projects (default is 45)
		 * @type {number}
		 */
		this.angle = 45;

		/**
		 * The angle to where light is full strength. Then it falls off linearly to the angle-value; penumbra is always smaller than angle. Set to null if the penumbra should be the same as the angle.
		 * @type {number}
		 */
		this.penumbra = null;

		/** @type {number} */
		this.exponent = 16.0;

		// #ifdef DEBUG
		Object.seal(this);
		// #endif
	}

	SpotLight.prototype = Object.create(ProjectionalLight.prototype);
	SpotLight.prototype.constructor = SpotLight;

	SpotLight.prototype.copy = function (source) {
		ProjectionalLight.prototype.copy.call(this, source);

		this.range = source.range;
		this.angle = source.angle;
		this.penumbra = source.penumbra;
		this.exponent = source.exponent;

		return this;
	};

	SpotLight.prototype.clone = function () {
		var clone = new SpotLight();
		clone.copy(this);
		return clone;
	};

	return SpotLight;
});