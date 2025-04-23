'use client'
import AddItemForm from "@/components/addItemForm";
import LogoutButtonV2 from "@/components/LogoutButtonV2 2";
import Navbar from "@/components/NavBar";
import SearchItunes from "@/components/SearchItunes";
import SearchItunesNonAuth from "@/components/SearchItunesNonAuth";
import SessionStatus from "@/components/SessionStatus";
import LoginForm from "../login/page";
const AddItemPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <h1>Add a New Item</h1>
      <AddItemForm />
      <h2>backup test</h2>
      <SearchItunesNonAuth />

      <LogoutButtonV2 />
      <SessionStatus />
      <LoginForm />
    </div>
  );
};

export default AddItemPage;



