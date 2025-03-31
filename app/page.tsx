"use client"
import Image from "next/image";
import Hero_Section from "@/components/Hero_Section";
import { Provider } from "react-redux";
import { store } from "./store/store";
export default function Home() {
  return (
    <Provider store={store}>
    <div>
      <Hero_Section />
    </div>
    </Provider>
  )
}
