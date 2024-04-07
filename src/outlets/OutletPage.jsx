import { Outlet } from "react-router-dom"
import LibComponentNavbar from "../libs/components/LibComponentNavbar";
import WidgetUserSignInModal from "../widgets/user/WidgetUserSignInModal";

const OutletPage = () => {
  return (
    <>
      <LibComponentNavbar />
      <Outlet />
      <WidgetUserSignInModal/>
    </>
  )
}

export default OutletPage;