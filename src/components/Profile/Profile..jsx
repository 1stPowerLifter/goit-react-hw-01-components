import { Container, Description, Avatar, Info, Stats, Stat } from "./Profile.styled"


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Container>
            <Description>
                <Avatar
                src={avatar}
                alt="User avatar"
                />
                <Info>{username}</Info>
                <Info>@{tag}</Info>
                <Info>{location}</Info>
            </Description>

            <Stats>
                <Stat>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
                </Stat>
                <Stat>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
                </Stat>
                <Stat>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
                </Stat>
            </Stats>
        </Container>
    )
}