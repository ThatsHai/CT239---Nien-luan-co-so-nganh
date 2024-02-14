import React from 'react';
import "./Tile.css";
// 9:44
interface Props {
  image?: string;
  number: number;
}

export default function Tile({ number, image }: Props) {
  if (number % 2 === 0) {
    return (
      <div className='tile black-tile'>
        {/* render image only if the tile is not null */}
        {image && <div style={{backgroundImage: `url(${image})`}} className='chess-piece'></div>}
      </div>
    );
  } else {
    return (
      <div className='tile white-tile'>
        {image && <div style={{backgroundImage: `url(${image})`}} className='chess-piece'></div>}
      </div>
    );
  }
}
