import './style.css'

const html = document.documentElement;

const setClientPositionProperty = (propertyName: string, pos: number) =>
  html.style.setProperty(propertyName, `${pos}px`);

html.addEventListener('mousemove', e => {
  setClientPositionProperty('--x', e.clientX);
  setClientPositionProperty('--y', e.clientY);
});
