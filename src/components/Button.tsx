import React from "react"

export function Button (props:any) {
    return (
        <button type ={props.type} disabled={props.disabled} className="ui-button" >{props.label}</button>
    )
}