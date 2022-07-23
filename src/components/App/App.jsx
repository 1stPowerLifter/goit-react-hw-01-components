import user from "../../data/user.json"
import data from "../../data/data.json"
import friends from "../../data/friends.json"
import transactions from "../../data/transactions.json"
import { Profile } from "../Profile/Profile.";
import { Statistics } from "../Statistics/Statistics"
import { FriendList } from "../FriendList/FriendList"
import {TransactionHistory} from "../TransactionHistory/TransactionHistory"
import { Container } from "./App.styled";
import PropTypes from 'prop-types';


export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList list={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object)
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object)
}