export default function Button({ label, onClick, isActive }) {
    return (
        <button
            className={`button ${isActive ? 'button--active' : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}