/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import errorIcon from "../public/404icon.svg";

export default function Custom404() {
  return (
    <div className="w-screen h-screen grid place-content-center text-center bg-[#4d4f69]">
      <div className="">
        <Image src={errorIcon} height={400} />
      </div>
      <h1 className="text-4xl">404 Error!</h1>
      <h2 className="text-xl">
        Oh No! Apologies, but this page {"doesn't"} exist.
      </h2>
    </div>
  );
}
