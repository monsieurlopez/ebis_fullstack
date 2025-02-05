type Options = "center" | "left" | "right";

function alignHTMLElement (element: Options) : void {
    console.log(element);
}

alignHTMLElement("center")
alignHTMLElement("top") //Este nos marcaría un error por no estar entre los type