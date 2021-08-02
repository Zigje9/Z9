const getCurrentY = (curY: number): number => {
  const bodyHeight = document.body.scrollHeight / 4;
  const value = Math.floor(curY / bodyHeight);
  if (value < 1) return 1;
  if (value < 2) return 2;
  if (value < 3) return 3;
  return 0;
};

export default getCurrentY;
