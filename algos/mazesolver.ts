export type Point = {
	x: number;
	y: number;
};

const dir = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1]
];
function walk(
	maze: Array<string>,
	wall: string,
	current: Point,
	end: Point,
	seen: Array<Array<boolean>>,
	path: Point[]
): boolean | undefined {
	if (current.x < 0 || current.x >= maze[0].length || current.y < 0 || current.y >= maze.length) {
		return false;
	}

	if (maze[current.y][current.x] === wall) {
		return false;
	}

	if (current.x === end.x && current.y === end.y) {
		path.push(end);
		return true;
	}

	if (seen[current.y][current.x]) {
		return false;
	}

	seen[current.y][current.x] = true;
	path.push(current);
	for (let i = 0; i < dir.length; i++) {
		const [x, y] = dir[i];
		if (
			walk(
				maze,
				wall,
				{
					x: current.x + x,
					y: current.y + y
				},
				end,
				seen,
				path
			)
		) {
			return true;
		}
	}
	path.pop();

	// return false;
}

export function mazeSolver(
	maze: Array<string>,
	wall: string,
	start: Point,
	end: Point
): Array<Point> {
	const seen: boolean[][] = [];
	const path: Point[] = [];

	for (let i = 0; i < maze.length; i++) {
		seen.push(new Array(maze[i].length).fill(false));
	}

	walk(maze, wall, start, end, seen, path);

	return path;
}
