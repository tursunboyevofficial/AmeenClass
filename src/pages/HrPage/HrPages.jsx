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
        <HrNavbar/>
        <HrCourse/>
        <FreeDay/>
        <HrCours/>
        <AppPartner/>
        <Tarif/>
        <AppComment/>
        <AppFooter/>
    </>
  )
}

export default HrPages