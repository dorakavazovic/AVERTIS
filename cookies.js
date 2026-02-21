  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const declineBtn = document.getElementById("decline-cookies");
  
  // Ako korisnik još nije odlučio, prikaži banner
  if (!localStorage.getItem("cookieConsent")) {
    banner.style.display = "flex";
  }
  
  // Ako prihvati
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    loadCookies();
  });
  
  // Ako odbije
  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "declined");
    banner.style.display = "none";
  });
  
  // Funkcija koja ubacuje GA/Ads skripte
  function loadCookies() {
    // Google Analytics
    const ga = document.createElement("script");
    ga.async = true;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=G-3JFSG643KV";
    document.head.appendChild(ga);
  
    ga.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag('config', 'G-3JFSG643KV');
    };
  
    // Google Ads
    /*
    const ads = document.createElement("script");
    ads.src = "https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID";
    ads.async = true;
    document.head.appendChild(ads);
    */
    }
  
  // Ako je već prije prihvatio → odmah učitaj
  if (localStorage.getItem("cookieConsent") === "accepted") {
    loadCookies();
    banner.style.display = "none";
  }




  /*NEMOJ ZABORAVIT IZBRISAT*/
  localStorage.removeItem("cookieConsent");
