import ContentFooter from "../ContentFooter";
import List from "./List";

const Context = () => {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <List/>
      </section>
      <ContentFooter />
    </>
  );
};

export default Context;
