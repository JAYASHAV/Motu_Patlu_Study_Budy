import Image from "next/image";
import Product from "./components/Product";

export default function Home() {
  return (<>
    <div className="grid gap-4 grid-cols-3 py-4">
      <Product imgUrl={"https://wallpapercave.com/wp/wp2896922.jpg"} />
      <Product imgUrl={"https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-webdonut-19090.jpg&fm=jpg"} />
      <Product imgUrl={"https://wallpapercave.com/wp/3eaIVZM.jpg"} />
      <Product imgUrl={"https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg"} />
      <Product imgUrl={"https://tse1.mm.bing.net/th/id/OIP.7UaM0_ayvUPsbV5vAiqjuwHaEK?pid=Api&P=0&h=220"} />
    </div>
  </>);
}
