import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPost } from "./Action";

function App() {
  const post = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPost());
  }, []);

  return (
    <div className='container'>
      {post.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}

export default App;
