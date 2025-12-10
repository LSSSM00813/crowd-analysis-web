export interface QRResultCardProps {
    personNumber: number;
    name: string;
}

export const QRResultCard = (props: QRResultCardProps) => {
    return (
        <div>
            <div>{props.personNumber}人目</div>
            <div>{props.name}</div>
        </div>
    )
};
