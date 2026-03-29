/*
 * ============================================================
 *  LONE HOOF — data.js
 *  This is the only file you need to edit to update the site.
 *
 *  HOW TO ADD A NEW PIECE:
 *  1. Drop the image file into the /images folder
 *  2. Copy one of the entries below and paste it at the
 *     end of the list (before the closing ]; )
 *  3. Fill in the details. That's it.
 *
 *  FIELDS:
 *    img      — filename inside /images folder (required)
 *    title    — artwork title (required)
 *    price    — e.g. "£49" — leave as null if not for sale
 *    size     — dimensions, e.g. "29.5 x 31 cm"
 *    medium   — e.g. "charcoal"
 *    paper    — e.g. "300 gsm"
 *    notes    — (optional) freeform text shown below the meta.
 *               Use \n for line breaks. Can be as long as needed.
 *    img2     — (optional) filename of a second image, shown
 *               below the main image in the detail view.
 * ============================================================
 */

const ARTWORK = [

  // ── FOR SALE ─────────────────────────────────────────────

  {
    img:    "the-situation-in-paradise.jpg",
    title:  "The situation in paradise",
    price:  "£49",
    size:   "27 x 32.5 cm (31 x 36 cm with border)",
    medium: "charcoal",
    paper:  "print: 300 gsm Hahnemühle German Etching paper (see link below)",
    notes:  null,
    img2:   "paradise2.jpg",
  },

  {
    img:    "insta-ready-at-the-cathedral.jpg",
    title:  "Insta-ready at the cathedral",
    price:  "£49",
    size:   "27 x 32.5 cm (31 x 36 cm with border)",
    medium: "charcoal",
    paper:  "print: 300 gsm Hahnemühle German Etching paper (see link below)",
    notes:  null,
    img2:   null,
  },

  {
    img:    "quaint-and-outdated-rituals.jpg",
    title:  "Quaint and outdated rituals",
    price:  "£49",
    size:   "TODO — add dimensions",
    medium: "charcoal",
    paper:  "300 gsm",
    notes:  null,
    img2:   null,
  },

  {
    img:    "a-child-showing-kindness-at-christmas.jpg",
    title:  "A child showing kindness at christmas",
    price:  "£49",
    size:   "29.5 x 42 cm",
    medium: "charcoal",
    paper:  "300 gsm",
    notes:  null,
    img2:   null,
  },

  {
    img:    "climate-change-deniers-enjoying-a-game-of-chess.jpg",
    title:  "Climate change deniers enjoying a game of chess",
    price:  "£39",
    size:   "29.5 x 31 cm",
    medium: "charcoal",
    paper:  "300 gsm",
    notes:  null,
    img2:   null,
  },

  {
    img:    "la-cave-du-jazz.jpg",
    title:  "La cave du jazz",
    price:  "£39",
    size:   "TODO — add dimensions",
    medium: "charcoal",
    paper:  "300 gsm",
    notes:  null,
    img2:   null,
  },

  {
    img:    "the-scroller-the-troller-and-the-influencer.jpg",
    title:  "The scroller, the troller and the influencer",
    price:  "£39",
    size:   "25.8 x 27 cm",
    medium: "charcoal",
    paper:  "300 gsm",
    notes:  null,
    img2:   null,
  },

  // ── GALLERY ONLY (not for sale) ──────────────────────────

  {
    img:    "hoofy-advent-2025.jpg",
    title:  "Hoofy Advent 2025",
    price:  null,
    size:   "80 x 22.5 cm",
    medium: "charcoal",
    paper:  "300 gsm",
    notes:  "An advent calendar project exhibited (with a daily reveal) in Bristol, UK, as well as via Instagram.\n\nStarting bottom right and working left along each row (to align with an Instagram grid):\n1. Hoofy Advent 2025\n2. Flappers making a snowman\n3. The goose burglar strikes again!\n4. No three kings protest\n5. Three unwelcome kings\n6. Angry shepherds\n7. Satsuma black Friday\n8. Jesus looking for followers\n9. Aftermath of the labubu riots\n10. Demented children\n11. Mulled Soda Stream vendor\n12. An urgent delivery of matcha\n13. Teenagers singing doo-wop\n14. A rowdy elf\n15. Did somebody say just heat?\n16. Confusing a policeman for the stripper\n17. A frail dilettante at Christmas\n18. Insta-ready in the drunk tank\n19. Bishops at large\n20. A child showing kindness at Christmas\n21. Gift exchange in the traitor tower\n22. The eternal gratitude of Mark Zuckerberg for all the content and the content generators\n23. Scaffolder angels\n24. The watchful vigilance of Jeff Bezos and Santa Claus",
    img2:   null,
  },

  {
    img:    "people-eating-momos.jpg",
    title:  "People eating momos",
    price:  null,
    size:   "29.5 x 40.5 cm",
    medium: "charcoal",
    paper:  "300 gsm",
    notes:  null,
    img2:   null,
  },

  {
    img:    "eating-beans-from-a-knife.jpg",
    title:  "Eating beans from a knife (in the jungle)",
    price:  null,
    size:   "",
    medium: "",
    paper:  "",
    notes:  null,
    img2:   null,
  },

  {
    img:    "everything-i-remember-about-grange-hill.jpg",
    title:  "Everything I remember about Grange Hill",
    price:  null,
    size:   "",
    medium: "",
    paper:  "",
    notes:  null,
    img2:   null,
  },

  {
    img:    "pappy-scene-1.jpg",
    title:  "Pappy P. Pappinson & Prince Marzipan (Une Belle Journee, Scene 1)",
    price:  null,
    size:   "",
    medium: "",
    paper:  "",
    notes:  null,
    img2:   null,
  },

/*  {
    img:    "pappy-scene-2.jpg",
    title:  "Pappy P. Pappinson & Prince Marzipan (Une Belle Journee, Scene 2)",
    price:  null,
    size:   "",
    medium: "",
    paper:  "",
    notes:  null,
    img2:   null,
  },

  {
    img:    "pappy-scene-3.jpg",
    title:  "Pappy P. Pappinson & Prince Marzipan (Une Belle Journee, Scene 3)",
    price:  null,
    size:   "",
    medium: "",
    paper:  "",
    notes:  null,
    img2:   null,
  },

  {
    img:    "pappy-scene-4.jpg",
    title:  "Pappy P. Pappinson & Prince Marzipan (Une Belle Journee, Scene 4)",
    price:  null,
    size:   "",
    medium: "",
    paper:  "",
    notes:  null,
    img2:   null,
  },

  {
    img:    "pappy-scene-5.jpg",
    title:  "Pappy P. Pappinson & Prince Marzipan (Une Belle Journee, Scene 5)",
    price:  null,
    size:   "",
    medium: "",
    paper:  "",
    notes:  null,
    img2:   null,
  },

  {
    img:    "pappy-scene-6.jpg",
    title:  "Pappy P. Pappinson & Prince Marzipan (Une Belle Journee, Scene 6)",
    price:  null,
    size:   "",
    medium: "",
    paper:  "",
    notes:  null,
    img2:   null,
  },

  {
    img:    "pappy-scene-7.jpg",
    title:  "Pappy P. Pappinson & Prince Marzipan (Une Belle Journee, Scene 7)",
    price:  null,
    size:   "",
    medium: "",
    paper:  "",
    notes:  null,
    img2:   null,
  },

  {
    img:    "everything-i-remember-about-the-a-team.jpg",
    title:  "Everything I remember about the A-Team",
    price:  null,
    size:   "",
    medium: "",
    paper:  "",
    notes:  null,
    img2:   null,
  },

  {
    img:    "three-cool-guys-in-the-barbershop.jpg",
    title:  "Three cool guys in the barbershop",
    price:  null,
    size:   "",
    medium: "",
    paper:  "",
    notes:  null,
    img2:   null,
  },

  {
    img:    "coffee-shop-squatter.jpg",
    title:  "Coffee shop squatter",
    price:  null,
    size:   "",
    medium: "",
    paper:  "",
    notes:  null,
    img2:   null,
  },

  {
    img:    "the-smoker-the-vaper-and-the-coffee-drinker.jpg",
    title:  "The smoker, the vaper and the coffee drinker",
    price:  null,
    size:   "",
    medium: "",
    paper:  "",
    notes:  null,
    img2:   null,
  },
  */

];
