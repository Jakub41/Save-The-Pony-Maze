import * as React from 'react';
import classNames from 'classnames';

import { Role, Side, PonyName } from '../../types/index';

import CellRole from './cell_role';

import './maze_cell.css';

// sides is bitwise OR of sides
interface Props {
	sides: number;
	role: Role;
	ponyName: PonyName;
}

export default function MazeCeil({ sides, ponyName, role = Role.NONE }: Props) {
	return (
		<div
			className={classNames({
				cell: true,
				left: sides & Side.LEFT,
				right: sides & Side.RIGHT,
				top: sides & Side.TOP,
				bottom: sides & Side.BOTTOM
			})}>
			<CellRole ponyName={ponyName} role={role} />
		</div>
	);
}
