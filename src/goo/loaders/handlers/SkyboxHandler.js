define([
	'goo/loaders/handlers/ConfigHandler',
	'goo/renderer/Texture',
	'goo/renderer/shaders/ShaderBuilder',
	'goo/util/Skybox',
	'goo/util/rsvp',
	'goo/util/PromiseUtil',
	'goo/entities/SystemBus'
], function(
	ConfigHandler,
	Texture,
	ShaderBuilder,
	Skybox,
	RSVP,
	PromiseUtil,
	SystemBus
) {
	'use strict';



	function SkyboxHandler() {
		ConfigHandler.apply(this, arguments);
		// Skybox entity
		var skybox = new Skybox('box', [], null, 0);
		this._skybox = this.world.createEntity(skybox.meshData, skybox.materials[0], skybox.transform);
		this._skybox.transformComponent.updateWorldTransform();
		this._skybox.isSkybox = true;
		this._skybox.name = 'Skybox_box';

		// Skybox texture
		this._skyboxTexture = new Texture(null, {flipY: false });
		this._skyboxTexture.variant = 'CUBE';
		this._skybox.meshRendererComponent.materials[0].setTexture('DIFFUSE_MAP', this._skyboxTexture);

		// Skysphere entity
		var skysphere = new Skybox('sphere', [], null, 0);
		this._skysphere = this.world.createEntity(skysphere.meshData, skysphere.materials[0], skysphere.transform);
		this._skysphere.transformComponent.updateWorldTransform();
		this._skysphere.isSkybox = true;
		this._skysphere.name = 'Skybox_sphere';

		// Skysphere texture
		this._skysphereTexture = new Texture(null, { flipY: false });
		this._skysphere.meshRendererComponent.materials[0].setTexture('DIFFUSE_MAP', this._skysphereTexture);

		//! AT: unused?
		this._activeSkyshape = null;
	}

	SkyboxHandler.prototype = Object.create(ConfigHandler.prototype);
	SkyboxHandler.prototype.constructor = SkyboxHandler;
	ConfigHandler._registerClass('skybox', SkyboxHandler);

	SkyboxHandler.prototype._remove = function(ref) {
		this._hide(this._skybox);
		this._hide(this._skysphere);
		this._skyboxTexture.setImage(null);
		this._activeSkyshape = null;
		ShaderBuilder.SKYBOX = null;
		ShaderBuilder.SKYSPHERE = null;
		delete this._objects[ref];
	};

	SkyboxHandler.prototype._create = function() {
		return {
			textures: [],
			enabled: false
		};
	};

	SkyboxHandler.prototype._update = function(ref, config, options) {
		var that = this;
		return ConfigHandler.prototype._update.call(this, ref, config, options).then(function(skybox) {
			if (!skybox) { return; }
			var promises = [];
			if (config.box) {
				promises.push(that._updateBox(config.box, options, skybox));
			}
			if (config.sphere) {
				promises.push(that._updateSphere(config.sphere, options, skybox));
			}
			return RSVP.all(promises);
		});
	};

	SkyboxHandler.prototype._updateSphere = function(config, options, skybox) {
		var that = this;

		if (config.sphereRef) {
			return this._load(config.sphereRef, options).then(function(texture) {
				if (!texture || !texture.image) {
					SystemBus.emit('goo.error.skybox', {
						type: 'Sphere',
						message: 'The skysphere needs an image to display.'
					});
					that._hide(that._skysphere);
					return;
				}
				var skyTex = that._skysphereTexture;
				skybox.textures = [texture];
				skyTex.setImage(texture.image);

				if (config.enabled) {
					that._show(that._skysphere);
				} else {
					that._hide(that._skysphere);
				}
				return that._skysphere;
			});
		}
		else {
			that._skysphereTexture.setImage(null);
			that._hide(that._skysphere);
		}
		return PromiseUtil.createDummyPromise(that._skysphere);
	};

	var sides = ['rightRef', 'leftRef', 'topRef', 'bottomRef', 'frontRef', 'backRef'];
	function isEqual(a, b) {
		var len = a.length;
		if (len !== b.length) {
			return false;
		}
		while (len--) {
			if (a[len] !== b[len]) {
				return false;
			}
		}
		return true;
	}


	SkyboxHandler.prototype._updateBox = function(config, options, skybox) {
		var that = this;

		var promises = sides.map(function(side) {
			return config[side] ? that._load(config[side], options) : PromiseUtil.createDummyPromise();
		});

		// Load all textures
		return RSVP.all(promises).then(function(textures) {

			// Check if skybox is the same
			if (isEqual(textures, skybox.textures) && that._activeSkyShape === that._skybox) {
				return that._skybox;
			}

			var images = textures.map(function(texture) { return texture ? texture.image : null; });

			// If no textures were found, clear skybox and return
			if (images.filter(Boolean).length === 0) {
				that._skyboxTexture.setImage(null);
				that._hide(that._skybox);
				return that._skybox;
			}


			var w = 1;
			var h = 1;
			for (var i = 0; i < images.length; i++) {
				if (images[i]) {
					w = Math.max(w, images[i].width);
					h = Math.max(h, images[i].width);
				}
			}

			skybox.textures = textures;
			var skyTex = that._skyboxTexture;
			skyTex.setImage(images);
			skyTex.image.width = w;
			skyTex.image.height = h;
			skyTex.image.dataReady = true;
			skyTex.setNeedsUpdate();
			if (config.enabled) {
				that._show(that._skybox);
			} else {
				that._hide(that._skybox);
			}

			return that._skybox;
		});
	};

	SkyboxHandler.prototype._hide = function(skyshape) {
		var renderSystem = this.world.getSystem('RenderSystem');
		renderSystem.removed(skyshape);
		ShaderBuilder.SKYBOX = null;
		ShaderBuilder.SKYSPHERE = null;
	};

	SkyboxHandler.prototype._show = function(skyshape) {
		var renderSystem = this.world.getSystem('RenderSystem');
		renderSystem.added(skyshape);
		this._activeSkyshape = skyshape;
		ShaderBuilder.SKYBOX = skyshape === this._skybox ? this._skyboxTexture : null;
		ShaderBuilder.SKYSPHERE = skyshape === this._skysphere ? this._skysphereTexture : null;
	};

	return SkyboxHandler;
});