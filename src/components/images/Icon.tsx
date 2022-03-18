import React from "react";
import { ReactSVG } from "react-svg";
import { indentfyComponent } from "../../helpers";

interface IIcon extends indentfyComponent {
    src: string;
    width: number;
    height: number;
    className?: string;
    onClick?: () => void;
}

const Icon: React.FC<IIcon> = (props) => {
    const { src, width, height, className, onClick, id } = props;

    return (
        <ReactSVG
            id={id}
            src={src}
            beforeInjection={(svg) => {
                let styles = `width:${width}px;height:${height}px`;
                svg.setAttribute("style", styles);
            }}
            style={{ width, height, cursor: onClick ? "pointer" : "default" }}
            onClick={onClick}
            className={className || ""}
        />
    );
};

export default Icon;
