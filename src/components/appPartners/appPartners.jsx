import Marquee from 'react-fast-marquee';
import { logoAmplitude, logoAsana, logoAtlassian, logoGitlab, logoGoogle, logoRazorpay } from '../../utils/getImg'
import s from './appPartners.module.scss'
const partners= [logoAmplitude, logoAsana, logoAtlassian, logoGitlab, logoGoogle, logoRazorpay]
function AppPartner() {
  return (
    <>
      <div className={s.box}>
        <p className={s.textp}><span className={s.span}></span>PARTNERS<span className={s.span}></span></p>
        <h1 className={s.title}>Bizning partnerlar</h1>
        <div className={s.arcadionWrapper}>
  {/* <div className={s.arcadion}> */}
    <Marquee
    gradient={true}
    speed={50}
    direction='left'>
      {partners.concat(partners).map((logo,idx)=>(
        <div className={s.acardionImg} key={idx}>
          <img src={logo} alt={`partner-${idx % partners.length}`} />
        </div>
      ))}
    </Marquee>
  {/* </div> */}
</div>

      </div>
    </>
  )
}

export default AppPartner