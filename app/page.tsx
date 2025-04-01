"use client"
import Hero_Section from "@/components/Hero_Section";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ToastContainer } from 'react-toastify';
export default function Home() {
  return (
    <Provider store={store}>
    <div>
    <ToastContainer />
      <Hero_Section />
    </div>
    </Provider>
  )
}
