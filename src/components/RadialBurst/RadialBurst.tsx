import "./RadialBurst.css";

export default function RadialBurst() {
    const lines = 120; // controls density

    return (
        <div className="burst-container">
            <div className="burst">
                {Array.from({ length: lines }).map((_, i) => (
                    <span
                        key={i}
                        className="line"
                        style={{
                            transform: `rotate(${(360 / lines) * i}deg)`
                        }}
                    />
                ))}
                <div className="center-circle" />
            </div>
        </div>
    );
}