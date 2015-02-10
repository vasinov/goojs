define([
	'goo/entities/World',
	'goo/addons/physicspack/systems/PhysicsSystem',
	'goo/entities/systems/TransformSystem',
	'goo/math/Vector3',
	'goo/addons/physicspack/components/RigidbodyComponent',
	'goo/addons/physicspack/components/ColliderComponent',
	'goo/addons/physicspack/RaycastResult',
	'goo/addons/physicspack/colliders/SphereCollider'
], function (
	World,
	PhysicsSystem,
	TransformSystem,
	Vector3,
	RigidbodyComponent,
	ColliderComponent,
	RaycastResult,
	SphereCollider
) {
	'use strict';

	describe('ColliderComponent', function () {
		var world, system;

		beforeEach(function () {
			world = new World();
			system = new PhysicsSystem({
				maxSubSteps: 1
			});
			system.setGravity(new Vector3());
			world.setSystem(system);
			world.setSystem(new TransformSystem());
		});

		it('can update its world collider', function () {
			var cc = new ColliderComponent({
				collider: new SphereCollider({ radius: 1 })
			});
			var entity = world.createEntity(cc).addToWorld();

			entity.setTranslation(1, 2, 3);
			entity.setScale(1, 2, 3);

			world.process(); // Update the transformsystem

			cc.updateWorldCollider();

			expect(cc.worldCollider.radius).toBe(3);
		});
	});
});