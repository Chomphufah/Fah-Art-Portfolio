/*=============== Show Menu =============== */
// ปุ่ม close ปุ่ม toggle nav-menu ทั้งหมด
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
// เมื่อคลิก navToggle จะเพิ่ม show-menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Hide Show =====*/
// เมื่อคลิก navClose จะ Remove show-menu
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
/*=============== Background Header =============== */
function scrollHeader() {
  const header = document.getElementById('header');
  // ในการเลื่อนลงมาถึงค่าคงที่ขนาดหน้าจอ 50 viewport height เพิ่ม scroll-header 
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header'); //remove scroll-header 
}

window.addEventListener('scroll', scrollHeader);
/*=============== Remove Menu Mobile =============== */
// เลือก nav__link ทั้งหมด 
const navLink = document.querySelectorAll('.nav__link');

// เมื่อกด nav-menu ไปแล้วจะ remove show-menu
function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

// ให้ event ทุกอัน
navLink.forEach((n) => n.addEventListener('click', linkAction));


/*=============== Contact Form =============== */
// form จาก input 
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  Message = document.getElementById('message'),
  contactMessage = document.getElementById('contact-message');

// ส่ง email เมื่อกดส่ง
const sendEmail = (e) => {
  e.preventDefault();

  // ดูว่าที่ input มีค่าหรอไม่
  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    Message.value === ''
  ) {
    // ขึ้น text แจ้ง (add class ให้ด้วย)
    contactMessage.classList.add('contact-alert');
    contactMessage.textContent = 'write before summit!';
  } else {
    // ส่ง email ผ่าน emailjs
    emailjs
      .sendForm(
        'service_4z5wb9f', //ก็อปมาจากเว็บ
        'template_j2y4qer',
        '#contact-form',
        'eSyK_cWfmuh2-oao8'
      )
      .then(
        () => {
          // ถ้ากรอกครบก็จะขึ้นว่าส่งแล้ว
          contactMessage.classList.add('contact-alert');
          contactMessage.textContent = 'Message sent';

          // ลบข้อความหลังขึ้นได้ 10 วิ
          setTimeout(() => {
            contactMessage.textContent = '';
          }, 10000);
        },
      );

    // เมื่อส่งแล้วก็จะลบค่า input
    contactName.value = '';
    contactEmail.value = '';
    Message.value = '';
  }
};

// ส่ง email
contactForm.addEventListener('submit', sendEmail);
