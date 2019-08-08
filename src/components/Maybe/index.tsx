// @flow
import * as React from "react";

interface IProps {
	children: React.ReactElement;
	condition: boolean | null;
}
const Maybe: React.FC<IProps> = ({ children, condition }) => (condition ? children : null);

export default Maybe;
