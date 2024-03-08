import PostsList from "../components/PostsList";
import {Outlet} from 'react-router-dom';

function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);
  // const showModalHandler = () => {
  //   setModalIsVisible(true);
  // };
  // const hideModalHandler = () => {
  //   setModalIsVisible(false);
  // };
  return (
    <>
    <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
