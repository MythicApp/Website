interface QuestionProps {
    question: string;
    answer: string;
    id: string;
}

export default function Question({ question, answer, id }: QuestionProps) {
    return (
        <details>
            <summary id={id}>{question}</summary>
            {answer}
        </details>
    );
}