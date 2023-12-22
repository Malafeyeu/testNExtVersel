'use client'
import Header from "./Header";
import { HeaderModel } from "./HeaderModel";

const HeaderPresenter = () => {
  const data = HeaderModel.getInfo();
  
  return <Header {...data}/>
}

export default HeaderPresenter