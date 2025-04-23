export default function LoadingMessage({ message }) {
    return(
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "1rem" }}>
            <div className="spinner" />
            <p style={{ margin: 0 }}>{message}</p>
        </div>
    )
}