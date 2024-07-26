import React from "react";
import ReactDOM from "react-dom";

interface ModelProps {
	onBackdropClick: () => void;
    children: React.ReactNode;
}

const Model: React.FC<ModelProps> = ({ onBackdropClick, children }) => {
	return ReactDOM.createPortal(
		<div onClick={onBackdropClick}>
			<div onClick={e=> e.stopPropagation()}>
			{children}
			</div>
		</div>,
		document.getElementById('modal-root')!
	);
}

export default Model;