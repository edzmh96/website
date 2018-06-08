import React, { Component } from 'react';
import './Background.css';

class Rainfall extends Component {

  constructor(props) {
    super(props);
    this.rainfall = React.createRef();
  }

  componentDidMount() {
    const canvas = this.rainfall.current;
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      const height = canvas.height;
      ctx.strokeStyle = 'rgba(174,194,224,0.5)';
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';

      const particles = [];
      const maxParts = 100;
      for (var i = 0; i < maxParts; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          l: Math.random() * 0.1,
          xs: -4 + Math.random() * 4 + 2,
          ys: Math.random() * 10 + 10,
        })
      }

      const draw = () => {
        ctx.clearRect(0, 0, w, h)
        particles.forEach(p => {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
          ctx.stroke();
        })
        move();
      }

      const move = () => {
        particles.forEach(p => {
          p.x += p.xs;
          p.y += p.ys;
          if (p.x > w || p.y > h) {
            p.x = Math.random() * w;
            p.y = -20;
          }
        })
      }

      setInterval(draw, 60);
    }
  }

  render() {
    return <canvas className="rainfall" ref={this.rainfall} />
  }
}

export { Rainfall };