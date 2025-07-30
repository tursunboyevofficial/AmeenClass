import s from './tarif.module.scss';

const tariffs = [
    {
      title: 'Standard',
      price: '4 900 000',
      items: [
        { label: 'Video darslar', active: true },
        { label: 'Quiz testlar', active: true },
        { label: "Mashqlar bajarish uchun qo'llanma", active: true },
        { label: "1 oy darslarni ko'rish imkoni", active: true },
        { label: 'Sertifikat', active: false },
        { label: 'Prezentatsiyalarni slaydlarini elektron versiyasi', active: false },
        { label: 'Darsga aloqali bolgan shablon materiallar', active: false },
        { label: 'Kurs qatnashchilari bilan har hafta speaker zoom da jonli uchrashuv', active: false },
        { label: "6 oy davomida korish imkoni", active: false },
        { label: 'Online yoki offline speaker bilan yuzma yuz 2 soatlik konsultatsiya', active: false },
      ],
    },
    {
      title: 'Premium',
      price: '6 900 000',
      items: [
        { label: 'Video darslar', active: true },
        { label: 'Quiz testlar', active: true },
        { label: "Mashqlar bajarish uchun qo'llanma", active: true },
        { label: 'Sertifikat', active: true },
        { label: 'Prezentatsiyalarni slaydlarini elektron versiyasi', active: true },
        { label: 'Darsga aloqali bolgan shablon materiallar', active: true },
        { label: 'Kurs qatnashchilari bilan har hafta speaker zoom da jonli uchrashuv', active: true },
        { label: "3 oy davomida ko'rish imkoni", active: true },
        { label: 'Online yoki offline speaker bilan yuzma yuz 2 soatlik konsultatsiya', active: false },
      ],
    },
    {
      title: 'Faqat toplamda',
      price: '9 900 000',
      items: [
        { label: 'Video darslar', active: true },
        { label: 'Quiz testlar', active: true },
        { label: "Mashqlar bajarish uchun qo'llanma", active: true },
        { label: 'Sertifikat', active: true },
        { label: 'Prezentatsiyalarni slaydlarini elektron versiyasi', active: true },
        { label: 'Darsga aloqali bolgan shablon materiallar', active: true },
        { label: 'Kurs qatnashchilari bilan har hafta speaker zoom da jonli uchrashuv', active: true },
        { label: "6 oy davomida ko'rish imkoni", active: true },
        { label: 'Online yoki offline speaker bilan yuzma yuz 2 soatlik konsultatsiya', active: true },
      ],
    },
  ];

  export default function tarif() {
    return (
      <section className={s.tariff_section}>
        <p className={s.subtitle}><span className={s.span}></span>TARIFLAR<span className={s.span}></span></p>
        <h1 className={s.title}>Tariflar va narxlar</h1>
        <div className={s.tariff_container}>
          {tariffs.map((plan, index) => (
            <div className={s.tariff_card} key={index}>
              <h3>{plan.title}</h3>
              <p className={s.price}>{plan.price} <span>So'm</span></p>
              <ul>
                {plan.items.map((item, i) => (
                  <li key={i} className={`${item.active ? s.active : s.inactive}`}>
                    {item.label}
                  </li>
                ))}
              </ul>
              <button className={s.select_button}>Tarifni tanlash</button>
            </div>
          ))}
        </div>
      </section>
    );
  }