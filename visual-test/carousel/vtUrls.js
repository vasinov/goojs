(function () {
	'use strict';

	window.vtUrls = {
		all: ["http://127.0.0.1:8003/goojs/visual-test/goo/addons/Ammo/Ammo-vehicle-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/addons/Ammo/Ammo-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/addons/Cannon/Cannon-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/addons/Gamepad/Gamepad-example.html", "http://127.0.0.1:8003/goojs/visual-test/goo/addons/Howler/Howler-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/addons/PolyBoundingScript/PolyBoundingScript-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/addons/Sound/Sound-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/addons/Water/water-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/addons/p2/p2-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/components/Box2DComponent/Box2DComponent-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/components/CameraDebugComponent/CameraDebugComponent-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/components/HTMLComponent/HTMLComponent-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/components/LightDebugComponent/LightDebugComponent-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/components/PortalComponent/PortalComponent-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/components/TextComponent/TextComponent-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/components/TransformComponent/TransformComponent-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/debug/Debugger/Debugger-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/entities/ApplyRemoveAPI/ApplyRemoveAPI-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/entities/CallbacksNextFrame/CallbacksNextFrame-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/entities/ClothComponent/ClothComponent-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/entities/RanRun/RanRun-example.html", "http://127.0.0.1:8003/goojs/visual-test/goo/fsmpack/LightSwitchGame/LightSwitchGame-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/fsmpack/MoveTheBoxGame/MoveTheBoxGame-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/fsmpack/PongGame/PongGame-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/geometrypack/FilledPolygon/FilledPolygon-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/geometrypack/Surface/HeightMap-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/geometrypack/Surface/Lathe-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/geometrypack/Surface/Surface-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/loaders/crunch/CrunchLoader-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/math/Ray/RayIntersectsPlane-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/BillboardShader/BillboardShader-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/CombinedIndexModes/CombinedIndexModes-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/FlatwaterAndParticles/FlatwaterAndParticles-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/GooDestroy/GooDestroy-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/GooDestroyDynamicLoader/GooDestroyDynamicLoader-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/GooToImage/GooToImage-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/IndexModes/IndexModes-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/LightingBug/LightingBug-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/ParticleLib/ParticleLib-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/PickSync/PickSync-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/PickingEvents/PickingEvents-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/Precompile/Precompile-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/RU/BillboardShader-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/Rot/SmoothRotation-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/misc/VisualProgramming/VisualProgramming-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/quadpack/QuadComponent/QuadComponent-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/renderer/WorldPickCoords/WorldPickCoordinates-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/renderer/bounds/BoundingBox/BoundingBox-computeFromPoints-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/renderer/bounds/BoundingBox/BoundingBox-merge-with-BoundingBox-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/renderer/bounds/BoundingBox/BoundingBox-merge-with-BoundingSphere-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/renderer/bounds/BoundingSphere/BoundingSphere-computeFromPoints-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/renderer/bounds/BoundingSphere/BoundingSphere-merge-with-BoundingBox-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/renderer/light/Lights-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/renderer/light/Shadowmaps-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/renderer/texture/AnisotropicFiltering/Anisotropic-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/renderer/texture/NPOT/NPOT-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/scripts/ButtonScript/ButtonScript.html", "http://127.0.0.1:8003/goojs/visual-test/goo/scripts/FPCamControlScript/FPCamControlScript-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/scripts/GroundBoundMovementScript/GroundBoundMovementScript-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/scripts/HeightMapBoundingScript/HeightMapBoundingScript-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/scripts/KeepOnYControlScript/KeepOnY-script.html", "http://127.0.0.1:8003/goojs/visual-test/goo/scripts/OrbitCamControlScript/OrbitCam-script.html", "http://127.0.0.1:8003/goojs/visual-test/goo/scripts/OrbitNPanControlScript/OrbitNPanControlScript-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/scripts/PanCamControlScript/PanCamControlScript.html", "http://127.0.0.1:8003/goojs/visual-test/goo/scripts/PickAndRotateControlScript/PickAndRotate-script.html", "http://127.0.0.1:8003/goojs/visual-test/goo/scripts/SparseHeightMapBoundingScript/SparseHeightMapBoundingScript-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/scripts/WASDControlScript/WASD-script.html", "http://127.0.0.1:8003/goojs/visual-test/goo/scripts/WorldFittedTerrainScript/WorldFittedTerrainScript-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/shapes/Cone/Cone-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/shapes/Disk/Disk-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/timelinepack/TimelineComponent/TimelineComponent-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/timelinepack/TimelineComponentHandler/TimelineComponentHandler-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/util/FrustumViewer/FrustumViewer-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/util/LightPointer/LightPointer-vtest.html", "http://127.0.0.1:8003/goojs/visual-test/goo/util/TransformGizmos/TransformGizmos-vtest.html"],
		short: [
			"http://127.0.0.1:8003/goojs/visual-test/goo/addons/p2/p2-vtest.html",
			"http://127.0.0.1:8003/goojs/visual-test/goo/timelinepack/TimelineComponent/TimelineComponent-vtest.html",
			"http://127.0.0.1:8003/goojs/visual-test/goo/renderer/WorldPickCoords/WorldPickCoordinates-vtest.html",
			"http://127.0.0.1:8003/goojs/visual-test/goo/addons/Sound/Sound-vtest.html",
			"http://127.0.0.1:8003/goojs/visual-test/goo/misc/FlatwaterAndParticles/FlatwaterAndParticles-vtest.html",
			"http://127.0.0.1:8003/goojs/visual-test/goo/misc/CombinedIndexModes/CombinedIndexModes-vtest.html",
			"http://127.0.0.1:8003/goojs/visual-test/goo/components/PortalComponent/PortalComponent-vtest.html"
			"http://127.0.0.1:8003/goojs/visual-test/goo/passpack/BloomPass/BloomPass.html",
			"http://127.0.0.1:8003/goojs/visual-test/goo/renderer/texture/AnisotropicFiltering/Anisotropic-vtest.html",
		]
	};
})();