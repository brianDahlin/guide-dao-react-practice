import React from "react"

export function Input (props: any) {
    return (
        <input className="ui-textfield" type="text" placeholder={props.placeholder} name={props.name}/>
    )
}