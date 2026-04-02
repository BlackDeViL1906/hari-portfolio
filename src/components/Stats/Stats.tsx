const Stats = () => {
    const stats = [
        { value: "2450", label: "Project Completed" },
        { value: "1085", label: "Satisfied Clients" },
        { value: "07", label: "Team Members" },
        { value: "2790", label: "Working Hours" },
    ];

    return (
        <section className="stats">
            {stats.map((item, idx) => (
                <div className="stat" key={idx}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                </div>
            ))}
        </section>
    );
};

export default Stats;