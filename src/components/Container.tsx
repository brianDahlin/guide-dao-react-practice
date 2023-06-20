import React from "react"

export function Container (props:any) {
    return (
        <div className="ui-container">{props.children}</div>
    )
}