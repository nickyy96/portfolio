export const CELL_SIZE = 30;

const Cell = () => {
    return (
        <div style={{width: `${CELL_SIZE}px`, height: `${CELL_SIZE}px`}} className="flex justify-center items-center select-none text-[2.5rem] text-transparent">
            ⋅
        </div>
    )
}

export default Cell