/**
 * Interfaces:
 * - Can be implemented by classes or extended by other interfaces.
 * - Allow declaration merging, where multiple declarations with the same name are merged.
 * - Primarily used for defining object shapes.
 * 
 * Types:
 * - Can define a variety of types, including primitives, unions, intersections, and more.
 * - Cannot be reopened to add new properties (no declaration merging).
 * - Useful for complex type definitions and type aliases.
 */

type Coordinate = [number, number];


function compareCoords(
  p1: Coordinate,
  p2: Coordinate
): Coordinate {
  return [p1[0], p2[0]];
}

const cord = compareCoords([1, 2], [3, 4]);

console.log(cord);
