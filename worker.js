// 큐브 풀이 계산은 여기서 (화면이 멈추지 않게 따로 돌린다)
importScripts('lib/cube.js', 'lib/solve.js');

Cube.initSolver();
self.postMessage({ type: 'ready' });

self.onmessage = (e) => {
  const { id, facelets } = e.data;
  try {
    const cube = Cube.fromString(facelets);
    const solution = cube.isSolved() ? '' : cube.solve();
    self.postMessage({ type: 'solved', id, solution });
  } catch (err) {
    self.postMessage({ type: 'error', id, message: String(err) });
  }
};
