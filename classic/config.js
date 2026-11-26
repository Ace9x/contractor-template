/* =====================================================================
   SITE SETTINGS — the only file most people need to edit.
   Change the text between the quotes, save, and refresh the page.
   Anything left empty ("") or [] is hidden automatically, so no
   placeholder text ever shows on your live site.
   ===================================================================== */
window.SITE = {
  businessName: "Your Company",                 // full name: used in the logo, footer, page title, text-message greeting
  brandSub:     "Painting & Home Services",     // small line under the name in the logo / hero
  tagline:      "Quality color for every home", // short slogan
  phoneDisplay: "(555) 123-4567",               // how your number is shown
  phoneE164:    "+15551234567",                 // same number for call/text links: + country code, digits only
  email:        "",                             // e.g. "hello@yourcompany.com"
  serviceArea:  "",                             // e.g. "Austin & Round Rock" (empty shows "your area")
  hours:        "",                             // e.g. "Mon–Sat 8am–6pm"

  // Optional payment handle shown with a Copy button (Zelle, Venmo, Cash App…).
  // Set payValue to "" to hide every payment mention.
  payLabel:     "Zelle",
  payValue:     "(555) 123-4567",

  // Optional logo image. Put the file in img/ and write e.g. "img/logo.png".
  // Leave "" to use the text logo built from businessName + brandSub.
  logo:         "",

  // Optional job photos. Adding any turns on the "Recent work" gallery.
  // { src: "img/work/kitchen.webp", alt: "Kitchen repaint, warm white walls" }
  photos: []
};
