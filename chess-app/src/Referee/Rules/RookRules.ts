import { Piece, Position, TeamType, samePosition } from "../../Constants.ts";
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules.ts";

export const rookMove = (initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean => {
    if(initialPosition.x === desiredPosition.x){
        for(let i = 1; i < 8; i++){
            let multiplier = (desiredPosition.y < initialPosition.y) ? -1 : 1;

            let passedPosition: Position = {x: initialPosition.x, y: initialPosition.y + (i*multiplier)};
            if(samePosition(passedPosition, desiredPosition)){
                if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)){
                    return true;
                }
            }else{
                if(tileIsOccupied(passedPosition, boardState)){
                    break;
                }
            }
        }
    }
    if(initialPosition.y === desiredPosition.y){
        for(let i = 1; i < 8; i++){
            let multiplier = (desiredPosition.x < initialPosition.x) ? -1 : 1;

            let passedPosition: Position = {x: initialPosition.x + (i*multiplier), y: initialPosition.y};
            if(samePosition(passedPosition, desiredPosition)){
                if(tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)){
                    return true;
                }
            }else{
                if(tileIsOccupied(passedPosition, boardState)){
                    break;
                }
            }
        }
    }
return false;
}

export const getPossibleRookMoves = (rook: Piece, boardState: Piece[]): Position[] => {
    const possibleMoves : Position[] = [];
    //Up
    for(let i = 1; i < 8; i++){
        const destination: Position = {x: rook.position.x, y: rook.position.y + i};
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination);
        }else if(tileIsOccupiedByOpponent(destination, boardState, rook.team)){
            possibleMoves.push(destination);
            break;
        }else{
            break;
        }
    }
    //Down
    for(let i = 1; i < 8; i++){
        const destination: Position = {x: rook.position.x, y: rook.position.y - i};
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination);
        }else if(tileIsOccupiedByOpponent(destination, boardState, rook.team)){
            possibleMoves.push(destination);
            break;
        }else{
            break;
        }
    }
    //Left
    for(let i = 1; i < 8; i++){
        const destination: Position = {x: rook.position.x - i, y: rook.position.y};
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination);
        }else if(tileIsOccupiedByOpponent(destination, boardState, rook.team)){
            possibleMoves.push(destination);
            break;
        }else{
            break;
        }
    }
    //Right
    for(let i = 1; i < 8; i++){
        const destination: Position = {x: rook.position.x + i, y: rook.position.y};
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination);
        }else if(tileIsOccupiedByOpponent(destination, boardState, rook.team)){
            possibleMoves.push(destination);
            break;
        }else{
            break;
        }
    }
    return possibleMoves;
}