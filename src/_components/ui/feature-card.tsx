interface CardProps {
    title: string;
    desc: string;
    img: string;
}

export default function Card({ title, desc, img }: CardProps) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    );
}