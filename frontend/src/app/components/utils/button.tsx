import { ButtonHTMLAttributes, Component, ReactNode } from "react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children? : ReactNode
    variants? : "btn1" | "btn2"
}  

export class Button extends Component<buttonProps> {
    static defaultProps = {
        variants: "btn1",
    };

    render(): ReactNode {
        return (
            <button className={this.props.variants} {...this.props}>{this.props.children}</button> 
        );
    }
}