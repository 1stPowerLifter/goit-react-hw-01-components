import { Container, Item} from "./FriendList.styled"
import PropTypes from 'prop-types';

export const FriendList = ({list}) => {
    return (
        <Container>
            {list.map(friend => <Friend
                avatar={friend.avatar}
                name= {friend.name}
                isOnline={friend.isOnline}
                key={friend.id}
            />)}
        </Container>
    )
}

const Friend = ({ avatar,name,isOnline,id }) => {
    return (
        <Item isOnline={isOnline}>
            <img src={avatar} alt={name} />
            {name}
        </Item>
    )
}

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}