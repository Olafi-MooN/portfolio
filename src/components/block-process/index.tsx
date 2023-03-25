import React, { Children } from 'react';
import './block-process.style.css';

type DataBlockProcess = {
	title: string;
	description: string;
	step: number;
};

interface IBlockProcessProps {
	stop: number;
	children?: React.ReactNode;
	data: DataBlockProcess;
}

const BlockProcess = (_props: IBlockProcessProps) => {
	return (
		<div className="block-process" style={{ top: _props?.stop }}>
			<div className="step-number">{_props.data.step}</div>
			<div className="step-main">
				<div className="step-title">{_props.data.title}</div>
				<div className="step-description">{_props.data.description}</div>
			</div>
		</div>
	);
};

export { BlockProcess };
