import s from './freeDay.module.scss'
import { playIcon } from "../../utils/getImg";
function freeDay() {
  return (
    <><div className={s.box}>
      <div className={`${s.header} container`}>
        <div className={s.play}><img src={playIcon} alt='123' className={s.span1}/></div>
        <div className={s.text1}>
          <h1 className={s.title}>Start your 7 Day Free Trial</h1>
          <p className={s.text}>Vestibulum ac diam sit amet quam vehicula elementum</p>
        </div>
          <button className={s.button2}>Get Free Access </button>
      </div>
    </div></>
  )
}

export default freeDay