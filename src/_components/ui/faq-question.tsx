interface QuestionProps {
    question: string;
    answer: string;
    id: string;
}

const Question: React.FC<QuestionProps> = ({ question, answer, id }) => (
    <details>
        <summary id={id}>{question}</summary>
        {answer}
    </details>
);

export default Question;