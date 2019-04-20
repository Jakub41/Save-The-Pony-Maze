import * as React from 'react';

import { Role, CharactersPosition, GameState, Blueprint } from '../../types/index';
import { range } from '../../utils/helper';

import MazeCell from './maze_cell';

import './maze.css';

interface Props {
	gameState: GameState;
}

const renderCells = (
	width: number,
	height: number,
	charactersPosition: CharactersPosition,
	blueprint: Blueprint
) => {
	return range(height).map(i => (
		<Row key={i}>
			{range(width).map(j => (
				<MazeCell
					key={j}
					sides={blueprint.getIn([i, j, 'sides'])}
					role={getRole(charactersPosition, i, j)}
				/>
			))}
		</Row>
	));
};

function Row({ children }: { children: JSX.Element[] }) {
	return <div className="row">{children}</div>;
}

export default function Maze({
	gameState: { width, height, charactersPosition, blueprint }
}: Props) {
	return <div>{renderCells(width, height, charactersPosition, blueprint)}</div>;
}

const getRole = (charactersPosition: CharactersPosition, i: number, j: number): Role => {
	return charactersPosition.findKey(point => point.x == j && point.y == i) || Role.NONE;
};
