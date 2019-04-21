import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'pink', 'ornge', 'green', 'yellow', 'blue'];
    const randomColors = colours[Math.floor(Math.random() * 5)];
    const className = randomColors + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }

}

export default Rainbow