"use client";
import { doLogout } from "@/app/action/index";
export default function LogoutButton() {
  return (
    <button onClick={() => doLogout()}>
      Sign Out
    </button>
  );
}



