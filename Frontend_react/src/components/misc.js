export const Spinner = (color, spinner, box_width) => {
    return (
        <div className="d-flex justify-content-center" style={{ width: box_width }} >
            <div className="spinner-border" style={{ color: color, width: spinner, height: spinner }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}