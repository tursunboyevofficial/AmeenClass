import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import React, { useState, useRef, useEffect } from 'react';
import styles from './appComment.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css';

import {
  Youtube1,
  Youtube2,
  Youtube3,
  Youtube4,
  Youtube5,
  Youtube6,
} from '../../utils/getImg';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

const feedbacks = [
  {
    image: Youtube1,
    videoId: 'dge53_Gue8U',
    text: 'malumot 1',
  },
  {
    image: Youtube2,
    videoId: 'o4tbI1xOa5o',
    text: 'malumot 2',
  },
  {
    image: Youtube3,
    videoId: 'mkvA5gWM0uU',
    text: 'malumot 3',
  },
  {
    image: Youtube4,
    videoId: 'gfhridk328t',
    text: 'malumot 4',
  },
  {
    image: Youtube5,
    videoId: 'r-erfe4dvt4',
    text: 'malumot 5',
  },
  {
    image: Youtube6,
    videoId: '12e-wqedqd2',
    text: 'malumot 6',
  },
];

function AppComment() {
  const [mainActiveIdx, setMainActiveIdx] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const swiperRef = useRef(null);

  const openModalAt = (idx) => {
    setModalOpen(true);
    setStartIndex(idx);
    setActiveIdx(idx);
  };
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (modalOpen && swiperRef.current) {
      swiperRef.current.slideTo(startIndex, 0);
    }
  }, [modalOpen, startIndex]);

  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.label}>FIKRLAR</p>
        <h2 className={styles.title}>O'quvchilarning fikrlari</h2>

        {/* ====== ОБЁРТКА: контейнер, в который точно влезают 3 карточки ====== */}
        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[EffectCoverflow, Pagination]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView= {2}            // ровно 3 карточки “на экране”
            loop={true}
            spaceBetween={10}      
            grabCursor={true}
            initialSlide={mainActiveIdx}
            c
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 600,
              modifier: 1.5,             // сближаем боковые слайды
              slideShadows: true,
            }}
            pagination={{ clickable: false }}
            className={styles.slider}
            onSlideChange={(swiper) => {
              setMainActiveIdx(swiper.realIndex);
            }}
            onSwiper={(swiper) => {
              setMainActiveIdx(swiper.realIndex);
            }}
          >
            {feedbacks.map((f, i) => (
              <SwiperSlide key={i} className={styles.slide}>
                <div className={styles.card}>
                  <img src={f.image} alt={f.text} />
                  {i === mainActiveIdx && (
                    <button
                      className={styles.playBtn}
                      onClick={() => openModalAt(i)}
                    >
                      ▶
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* ================================================================ */}
      </div>

      {/* ======= Модальное окно с видео-слайдером ======= */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalBox}>
            <button className={styles.closeBtn} onClick={closeModal}>
              <FiX />
            </button>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: `.${styles.prevBtn}`,
                  nextEl: `.${styles.nextBtn}`,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(s) => setActiveIdx(s.realIndex)}
                initialSlide={startIndex}
                slidesPerView={1}
                className={styles.modalSlider}
              >
                {feedbacks.map((f, i) => (
                  <SwiperSlide key={i} className={styles.modalSlide}>
                    <div className={styles.videoWrapper}>
                      {activeIdx === i && (
                        <iframe
                          src={`https://www.youtube.com/embed/${f.videoId}?autoplay=1&controls=1`}
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title={f.text}
                        />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className={styles.prevBtn}>
                <FiArrowLeft />
              </button>
              <button className={styles.nextBtn}>
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default AppComment;