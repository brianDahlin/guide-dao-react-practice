import React from "react"

export function Link (props: any) {
    return (
        <a href={props.href} className="ui-link" target="_blank">{props.label}</a>
    )
}