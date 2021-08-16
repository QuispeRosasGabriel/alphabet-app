import React, { FC } from 'react'
import './style.css'

export type WordProps = {
    w: Array<string>
}

const Word: FC<WordProps> = ({w}) => {
    return (
        <div className='letter-wrapper'>
           ( {w.map((x: string, idx: number) => (
                <div key={idx}>
                    <div>{x}</div>
                </div>
            ))})
        </div>
    )
}

export default Word
