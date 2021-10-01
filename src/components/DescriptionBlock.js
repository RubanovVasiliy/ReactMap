import React from "react";

const DescriptionBlock = (props) => {

    return (
        <div>
            <div>
                <span className="property">number: </span>
                <b>{`${props.object_number}`}</b>
            </div>
            <div>
                <span className="property">size: </span>
                {`${props.area}`}
            </div>
            <div>
                <span className="property">permitted uses: </span>
                {`${props.n_zone}`}
            </div>
        </div>
    )
}

export default DescriptionBlock