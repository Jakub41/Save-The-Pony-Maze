import * as React from 'react';
import { Map as iMap } from 'immutable';

import { Point, Side, Role } from '../../types';
import { range } from '../../utils/helper';

import MazeCell from './maze_cell';

type CharactersPosition = iMap<Role, Point>;

interface Blueprint {
	[index: number]: {
		[index: number]: {
			sides: Side[];
		};
	};
}

export interface MazeProps {
	width: number;
	height: number;
	charactersPosition: CharactersPosition;
	blueprint: Blueprint;
}

const renderCells = (
	width: number,
	height: number,
	charactersPosition: CharactersPosition,
	blueprint: Blueprint
) => {
	return range(width).map(i => (
		<Row>
			{range(height).map(j => (
				<MazeCell key={blueprint[i][j].sides} role={getRole(charactersPosition, i, j)} />
			))}
		</Row>
	));
};

function Row({ children }: { children: JSX.Element[] }) {
	return <div>{children}</div>;
}

export default function Maze({ width, height, charactersPosition, blueprint }: MazeProps) {
	return <div>{renderCells(width, height, charactersPosition, blueprint)}</div>;
}

const getRole = (charactersPosition: CharactersPosition, i: number, j: number): Role => {
	return charactersPosition.findKey(point => point.x == i && point.y == j) || Role.NONE;
};
