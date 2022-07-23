import { Container, Title, StatList, Item } from "./Statistics.styled"

export const Statistics = ({data, title}) => {
    return (
        <Container>
            <Title >{title}</Title>

            <StatList>
                {data.map(stat => {
                    const {id, label, percentage} = stat
                    return (
                        <Item length={data.length} key={id} style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}>
                            <span className="label">{ label }</span>
                            <span className="percentage">{ percentage }%</span>
                        </Item>
                    )
                })}
            </StatList>
        </Container>
    )
}
