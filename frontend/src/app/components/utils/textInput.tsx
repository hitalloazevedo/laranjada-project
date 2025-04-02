import { ButtonHTMLAttributes, Component, InputHTMLAttributes, ReactNode } from "react";

interface textInputProps extends InputHTMLAttributes<HTMLInputElement> {
    // children? : ReactNode
    variants? : "btn1" | "inp2"
    label? : string
}  

export class TextInput extends Component<textInputProps> {
    static defaultProps = {
        variants: "inp1",
        needLabel: false
    };

    render(): ReactNode {
        return (
            <>
                <div className="flex flex-col gap-0.5">
                    {this.props.label && <label htmlFor="inp">{this.props.label}</label>}
                    <input id="" className={this.props.variants} {...this.props}/>
                </div>
            </>
        );
    }
}