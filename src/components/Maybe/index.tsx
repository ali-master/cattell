import * as React from "react";

interface Props {
	children: React.ReactElement;
	condition: boolean | null;
}
const Maybe: React.FC<Props> = ({ children, condition }) => (condition ? children : null);

export default Maybe;
