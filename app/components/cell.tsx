import { Dispatch, SetStateAction } from "react";

type Cellprops = {
    id: number;
    go:string;
    setGo: Dispatch<SetStateAction<string>>;
    cells:string[];
    setCells:Dispatch<SetStateAction<string[]>>
    cell: string
    winningMessage: string;
}
const Cell = ({id, go, setGo, cells, setCells, cell, winningMessage}:Cellprops) => {
    const handleCick =(e)=>{
        if(winningMessage){
            return
        }
        const nottaken = !cells[id];
        if(nottaken){
            if(go === "circle") {
            handlCellChange("circle")
            setGo("cross")
        } else if (go=== "cross"){
            handlCellChange("cross")
            setGo("circle")
        }
        }

    }
    const handlCellChange =(cellToChange: string) =>{
        let copyCells = [...cells]
        copyCells[id] = cellToChange
        setCells(copyCells)
    }
    return <div className="square" onClick={handleCick}>
        <div className={cell}> 
            {cell ? (cell === "circle" ? "o" : "X") : ""}
            </div>
    </div>;
};

export default Cell;
