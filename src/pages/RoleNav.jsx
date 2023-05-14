import HeaderUser from "./HeaderUser";
import NormalHeader from "./NormalHeader";

const RoleNav = () => {
  const user = JSON.parse(sessionStorage.getItem("active-user"));
  

  if (user != null) {
    return <HeaderUser />;
  } else {
    return <NormalHeader />;
  }
};

export default RoleNav;
