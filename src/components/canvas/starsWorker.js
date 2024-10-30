import * as random from "maath/random/dist/maath-random.esm";

self.onmessage = function (e) {
  const { data } = e;
  // Perform the heavy computations of generating star positions here
  const stars = generateStars(data.numStars);
  self.postMessage(stars);
};

function generateStars(numStars) {
  const stars = random.inSphere(new Float32Array(5001), { radius: 1.2 });
  return stars;
}
