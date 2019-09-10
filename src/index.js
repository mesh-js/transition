import * as meshjs from '@mesh.js/core';
import pasition from 'pasition';

export default class Transition {
  constructor(figure1, figure2) {
    this.shapes = pasition._preprocessing(pasition.path2shapes(figure1.path), pasition.path2shapes(figure2.path));
  }

  progress(p) {
    const shape = pasition._lerp(...this.shapes, p)[0];
    const path = shape.reduce((str, c) => {
      return `${str}${c.slice(2).join(' ')} `;
    }, `M${shape[0][0]} ${shape[0][1]}C`).trim();
    const ret = new meshjs.Figure2D();
    ret.addPath(path);
    return ret;
  }
}