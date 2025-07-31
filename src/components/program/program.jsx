import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./program.module.scss";
import { useNavigate } from "react-router-dom";
import {library,Vectorkurs,Vector,icon} from '../../utils/getImg'

const programData = [
  {
    title: "HR vazifalari",
    weeks: "1–4 haftalar",
    lessons: "4 darslar",
    contents: [
      "HR byudjetini rejalashtirish",
      "Tashkiliy tuzilmani loyihalash",
      "Vakansiyalarni aniqlash",
      "Xodimlarni tekshiruv",
      "Hisobot va tahlil",
    ],
  },
  {
    title: "Kompaniyada uchraydigan muammolarga HR beradigan yechimlar",
    weeks: "5–6 haftalar",
    lessons: "5 darslar",
    contents: [
      "Muammolar tahlili",
      "Yechim strategiyasi",
      "Amaliy misollar",
      "Monitoring",
      "Baholash",
    ],
  },
  {
    title: "Kompaniya Missiyasi, Strategiyasi, Maqsadlari va Qadriyatlari",
    weeks: "7–8 haftalar",
    lessons: "4 darslar",
    contents: [
      "Missiya shakllantirish",
      "Qadriyatlar bo‘yicha treninglar",
      "Strategiya aniqlash",
      "Rejalashtirish",
      "Tashabbus",
    ],
  },
  {
    title: "Ishchi kuchini jalb qilish",
    weeks: "9–10 haftalar",
    lessons: "4 darslar",
    contents: [
      "Bozor tahlili",
      "Ishga qabul jarayoni",
      "Intervyu texnikasi",
      "Namuna testlar",
      "Tajriba nazorati",
    ],
  },
  {
    title: "Motivatsiya va rag‘batlantirish",
    weeks: "11–12 haftalar",
    lessons: "4 darslar",
    contents: [
      "Motivatsiya modeli",
      "Moliyaviy rag‘bat",
      "Norasmiy mukofotlar",
      "Doimiy baholash",
      "Liderlik roli",
    ],
  },
  {
    title: "Motivatsiya va rag‘batlantirish",
    weeks: "11–12 haftalar",
    lessons: "4 darslar",
    contents: [
      "Motivatsiya modeli",
      "Moliyaviy rag‘bat",
    ],
  },
  {
    title: "Motivatsiya va rag‘batlantirish",
    weeks: "11–12 haftalar",
    lessons: "4 darslar",
    contents: [
      "Motivatsiya modeli",
      "Moliyaviy rag‘bat",
      "Norasmiy mukofotlar",
    ],
  },
];

export default function Program() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const sendPage = () => {
    navigate("/register");
  };
  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.wrapper}>
    <div className="container">
    <div className={styles.box}>
      {/* Chap tomon */}
      <div className={styles.left}>
        <div className={styles.boxes}>
        <p className={styles.label}><span className={styles.spans}> </span>Dastur</p>
        <h3 className={styles.title}>O‘quv dastur</h3>
        <p className={styles.info}><img src={Vectorkurs} alt="Vectorkurs" /> 12 dars</p>
        <p className={styles.info}><img src={Vector} alt="Vector" /> 80 % kurs — amaliyot</p>
        <button className={styles.btn} onClick={sendPage}>Ro‘yxatdan o‘tish</button>
        </div>
      </div>
      <span className={styles.spanmain}></span>
      {/* O‘ng tomon */}
      <div className={styles.right}>
        {programData.map((item, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles.cardHeader}
              onClick={() => toggleIndex(index)}
            >
              <div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.cardMeta}>
                  <span><img src={icon} alt="icon" /> {item.weeks}</span>
                  <span><img src={library} alt="library" /> {item.lessons}</span>
                </div>
              </div>
              <div className={styles.icon}>
                {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </div>
            </div>
            {activeIndex === index && (
              <div className={styles.cardContent}>
                {item.contents.map((text, i) => (
                  <p key={i}>{` ${i+1} ${text}`}</p> 
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
}
