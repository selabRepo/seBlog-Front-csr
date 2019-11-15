import * as React from "react"
export interface IButtonProps {
	children?: React.ReactNode
	onClick?: (e: any) => void
}

const Button: React.SFC<IButtonProps> = props => (
	<button onClick={props.onClick} type='button'>
		{props.children}
	</button>
)

export default Button