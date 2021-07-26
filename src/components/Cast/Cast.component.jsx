import React from 'react'

const Cast = (props) => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="h-28 w-28">
                    <img src={props.image}
                        alt="Crew man"
                        className="h-full w-full rounded-full" />
                </div>
                <h1 className="text-lg text-gray-800">{props.castName}</h1>
                <h5 className="text-sm text-gray-500">as {props.role}</h5>
            </div>
        </div>
    )
}

export default Cast;
