import s from './Home.module.scss'
import Navbar from '../../components/navbar/navbar'
import AppInfo from '../../components/appInfo/appInfo'
import AppTeacher from '../../components/appTeacher/appTeacher'
import AppPartners from '../../components/appPartners/appPartners'
import AppCourse from '../../components/appCourse/appCourse'
import FreeCourse from '../../components/appFreeCourse/appFreeCourse'
import AppAdvantage from '../../components/appAdvantage/appAdvantage'
import AppComment from '../../components/appComment/appComment'
import AppFax from '../../components/appFax/appFax'
import AppFooter from '../../components/appFooter/appFooter'


function Home() {
  return (
    <>
        <Navbar/>
        <section id="appinfo">
        <AppInfo/>
        </section>
        <section id="appteacher">
        <AppTeacher/>
        </section>
        <section id="apppartners">
        <AppPartners/>
        </section>
        <section id="appcourse">
        <AppCourse/>
        </section>
        <section id="appfreecourse">
        <FreeCourse/>
        </section>
        <section id="appadvantage">
        <AppAdvantage/>
        </section>
        <section id="appcomment">
        <AppComment/>
        </section>
        <section id="appfax">
        <AppFax/>
        </section>
        <section id="appfooter">
        <AppFooter/>
        </section>
    </>
  )
}

export default Home