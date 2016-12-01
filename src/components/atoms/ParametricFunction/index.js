import React from 'react';
import AFRAME, { THREE } from 'aframe';
import { Entity } from 'aframe-react';
import math from 'mathjs';

const ParametricFuntion = (props) => {
  return (
    <Entity
      parametric-function={{
        equation: 'x^2 + y^2',
        segments: 30,
        xMin: -1,
        xMax: 1,
        yMin: -1,
        yMax: 1,
        zMin: -4,
        zMax: 4,
      }}
      {...props}
    />
  );
};

export default ParametricFuntion;

// parameters for the equations
var a = 0.01;
var b = 0.01;
var c = 0.01;
var d = 0.01;

/* global THREE AFRAME  */
var graphMesh;

AFRAME.registerComponent('parametric-function', {
  schema: {
    equation: { default: 'x^2 + y^2' },
    segments: { default: 20 },
    xMin: { default: -5 },
    xMax: { default: 5 },
    yMin: { default: -5 },
    yMax: { default: 5 },
    zMin: { default: -5 },
    zMax: { default: 5 },
    animation: { default: false },
    animationType: { default: 'rotation' },
    animateXBy: { default: 0 },
    animateYBy: { default: 0 },
    animateZBy: { default: 0 },

  },

  init: function() {
    // "wireframe texture"
    this.mainMaterial = new THREE.MeshBasicMaterial( { color: 0x00ee00, side: THREE.DoubleSide } );
    this.wireframeMaterial = new THREE.MeshBasicMaterial( { color: 0x00008, wireframe: true, transparent: true } );
    this.functionMaterial = [ this.mainMaterial, this.wireframeMaterial ];
  },

  tick: function() {
    var data = this.data;

    if (data.animation && data.animationType === 'rotation') {
      graphMesh.rotation.x += data.animateXBy;
      graphMesh.rotation.y += data.animateYBy;
      graphMesh.rotation.z += data.animateZBy;
    }
  },

  update: function(oldData) {
    var scene = this.el.object3D;
    // Equation parser
    var equation = 'f(x,y) = ' + this.data.equation;

    var parser = math.parser();
    parser.eval(equation);
    const f1 = parser.get('f');
    parser.clear();

    var segments = this.data.segments;

    var xMin = this.data.xMin;
    var xMax = this.data.xMax;
    var yMin = this.data.yMin;
    var yMax = this.data.yMax;
    var zMin = this.data.zMin;
    var zMax = this.data.zMax;

    var xRange = xMax - xMin;
    var yRange = yMax - yMin;
    // var zRange = zMax - zMin;

    xRange = xMax - xMin;
    yRange = yMax - yMin;

    function meshFunction(x, y) {
      x = (xRange * x) + xMin;
      y = (yRange * y) + yMin;
      var z = f1(x, y);
      // console.log('x is ' + x + ', y is ' + y + ', and f(x,y) = ' + z);
      if (isNaN(z)) {
        return new THREE.Vector3(0, 0, 0); // TODO: better fix
      }

      if (z < zMin) {
        return new THREE.Vector3(x, zMin, y);
      }

      if (z > zMax) {
        return new THREE.Vector3(x, zMax, y);
      }

      return new THREE.Vector3(x, z, y);
    };

    // true => sensible image tile repeat...
    var graphGeometry = new THREE.ParametricGeometry( meshFunction, segments, segments, true );

    if (graphMesh) {
      scene.remove(graphMesh);
      // renderer.deallocateObject( graphMesh );
    }

    graphMesh = new THREE.SceneUtils.createMultiMaterialObject(graphGeometry, this.functionMaterial);
    graphMesh.doubleSided = true;
    scene.add(graphMesh);
  },

  remove: function() {
    var scene = this.el.object3D;
    scene.remove(scene.getObjectByName('parametric-function'));
  }
});
