import s from './HrPages.module.scss'
import FreeDay from '../../components/freeDay/freeDay'
import HrCourse from '../../components/hrCourse/hrCourse'
import Tarif from '../../components/tarifs/tarif'
import HrCours from '../../components/hrCours/hrCours'
import AppPartner from '../../components/appPartners/appPartners'
import AppComment from '../../components/appComment/appComment'
import AppFooter from '../../components/appFooter/appFooter'
import HrNavbar from '../../components/HrNavbar/HrNavbar'

function HrPages() {
  return (
    <>
        <HrNavbar id="navbar"/>
        <section id="course">
        <HrCourse/>
        </section>
        <section id="freeday">
        <FreeDay/>
        </section>
        <section id="cours">
        <HrCours/>
        </section>
        <section id="partner">
        <AppPartner/>
        </section>
        <section id="tarif">
        <Tarif/>
        </section>
        <section id="comment">
        <AppComment/>
        </section>
        <section id="footer">
        <AppFooter/>
        </section>
    </>
  )
}

export default HrPages