const header = document.querySelector('#site-header');
const footer = document.querySelector('#site-footer');

if (header) {
  header.className = 'site-header';
  header.innerHTML = `
    <a class="logo" href="index.html" aria-label="LCCWA home"><img src="https://static.wixstatic.com/media/d8734e_7629de18031b4031b399071a9f65860e~mv2.jpg/v1/crop/x_4,y_0,w_200,h_187/fill/w_101,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d8734e_7629de18031b4031b399071a9f65860e~mv2.jpg" alt="LCCWA logo"></a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="site-navigation">Menu</button>
    <nav id="site-navigation" class="site-navigation" aria-label="Main navigation">
      <a href="index.html">Home</a>
      <div class="nav-dropdown"><button class="nav-trigger" aria-expanded="false">About us <span aria-hidden="true">⌄</span></button><div class="nav-menu"><a href="about-us.html">Who we are</a><a href="our-leadership.html">Our leadership</a><a href="our-team.html">Our team</a><a href="reports.html">Newsletters and annual reports</a></div></div>
      <div class="nav-dropdown"><button class="nav-trigger" aria-expanded="false">Our programs <span aria-hidden="true">⌄</span></button><div class="nav-menu"><a href="academic-program.html">Academic program</a><a href="ankur-program.html">Ankur program</a><a href="shakti-program.html">Shakti program</a><a href="soft-skills-program.html">Soft skills program</a></div></div>
      <a href="contact-us.html">Contact us</a><a href="volunteer.html">Volunteer</a>
    </nav>`;
  const navigation = header.querySelector('.site-navigation');
  const toggle = header.querySelector('.menu-toggle');
  toggle.addEventListener('click', () => { const open = navigation.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
  header.querySelectorAll('.nav-trigger').forEach((trigger) => trigger.addEventListener('click', () => {
    const dropdown = trigger.closest('.nav-dropdown');
    const willOpen = !dropdown.classList.contains('open');
    header.querySelectorAll('.nav-dropdown').forEach((item) => { item.classList.remove('open'); item.querySelector('.nav-trigger').setAttribute('aria-expanded', 'false'); });
    if (willOpen) { dropdown.classList.add('open'); trigger.setAttribute('aria-expanded', 'true'); }
  }));
}
if (footer) footer.innerHTML = `<img src="https://static.wixstatic.com/media/d8734e_7629de18031b4031b399071a9f65860e~mv2.jpg/v1/crop/x_4,y_0,w_200,h_187/fill/w_101,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d8734e_7629de18031b4031b399071a9f65860e~mv2.jpg" alt="LCCWA logo"><p>Learning Centre for Children and Women Association<br>Mumbai, India</p><a href="contact-us.html">Contact us</a>`;
