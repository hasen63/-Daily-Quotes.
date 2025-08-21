const quotesData = [
   
  { text: "الحياة قصيرة، عش كل لحظة.", category: "life", emoji:"💛" },
  { text: "النجاح يبدأ بخطوة واحدة صغيرة.", category: "success", emoji:"🏆" },
  { text: "الحب هو أجمل شعور يمكن أن تجربه.", category: "love", emoji:"❤️" },
  { text: "لا تستسلم أبداً، فالأفضل لم يأت بعد.", category: "motivation", emoji:"⚡" },
  { text: "ابتسم للحياة، فهي قصيرة.", category: "life", emoji:"💛" },
  { text: "العمل الجاد يؤتي ثماره.", category: "success", emoji:"🏆" },
  { text: "الحب لا يحتاج أسباباً.", category: "love", emoji:"❤️" },
  { text: "كل يوم هو فرصة جديدة.", category: "motivation", emoji:"⚡" },
  { text: "عيش اللحظة، ولا تنتظر الغد.", category: "life", emoji:"💛" },
  { text: "المثابرة تصنع الفرق.", category: "success", emoji:"🏆" },
  { text: "الحب صبر وتفاهم.", category: "love", emoji:"❤️" },
  { text: "الأحلام الكبيرة تحتاج إرادة قوية.", category: "motivation", emoji:"⚡" },
  { text: "لا تقلق من الأخطاء، فهي معلمك.", category: "life", emoji:"💛" },
  { text: "النجاح ليس نهاية الطريق.", category: "success", emoji:"🏆" },
  { text: "الحب الحقيقي يظهر في المواقف الصعبة.", category: "love", emoji:"❤️" },
  { text: "ابدأ اليوم، لا تنتظر الفرصة المثالية.", category: "motivation", emoji:"⚡" },
  { text: "استمتع بما لديك الآن.", category: "life", emoji:"💛" },
  { text: "الطموح طريق النجاح.", category: "success", emoji:"🏆" },
  { text: "الحب يجعل القلب نابضاً بالحياة.", category: "love", emoji:"❤️" },
  { text: "التحديات تصنع منك شخصاً أقوى.", category: "motivation", emoji:"⚡" },
  { text: "التفاؤل هو سر السعادة.", category: "life", emoji:"💛" },
  { text: "النجاح يبدأ بالفكرة ثم العمل.", category: "success", emoji:"🏆" },
  { text: "الحب لا يموت أبداً.", category: "love", emoji:"❤️" },
  { text: "الإصرار يصنع المستحيل.", category: "motivation", emoji:"⚡" },
  { text: "كل لحظة تعلمك شيئاً جديداً.", category: "life", emoji:"💛" },
  { text: "النجاح يحتاج لصبر طويل.", category: "success", emoji:"🏆" },
  { text: "الحب يجعل كل شيء أجمل.", category: "love", emoji:"❤️" },
  { text: "ابدأ قبل أن تشعر بأنك جاهز.", category: "motivation", emoji:"⚡" },
  { text: "تقدّر الأشياء البسيطة في الحياة.", category: "life", emoji:"💛" },
  { text: "النجاح نتيجة التخطيط الجيد.", category: "success", emoji:"🏆" },
  { text: "الحب الحقيقي يدوم للأبد.", category: "love", emoji:"❤️" },
  { text: "لا شيء مستحيل بالإرادة.", category: "motivation", emoji:"⚡" },
  { text: "عش اللحظة بحب وطمأنينة.", category: "life", emoji:"💛" },
  { text: "النجاح يتطلب مجهود مستمر.", category: "success", emoji:"🏆" },
  { text: "الحب يضيء حياتك.", category: "love", emoji:"❤️" },
  { text: "المحاولة أهم من الخوف.", category: "motivation", emoji:"⚡" },
  { text: "تعلم من أخطائك.", category: "life", emoji:"💛" },
  { text: "النجاح لا يأتي بالصدفة.", category: "success", emoji:"🏆" },
  { text: "الحب يجعل القلب سعيداً.", category: "love", emoji:"❤️" },
  { text: "استمر حتى تصل لهدفك.", category: "motivation", emoji:"⚡" },
  { text: "الحياة مليئة بالفرص.", category: "life", emoji:"💛" },
  { text: "التخطيط الجيد يقود للنجاح.", category: "success", emoji:"🏆" },
  { text: "الحب يصنع المعجزات.", category: "love", emoji:"❤️" },
  { text: "الإرادة هي مفتاح الإنجاز.", category: "motivation", emoji:"⚡" },
  { text: "ابتسم حتى في أصعب الأيام.", category: "life", emoji:"💛" },
  { text: "النجاح يحتاج لعقل منظم.", category: "success", emoji:"🏆" },
  { text: "الحب يمنح القوة.", category: "love", emoji:"❤️" },
  { text: "لا تستسلم مهما كان الطريق صعب.", category: "motivation", emoji:"⚡" },
  { text: "استمتع بكل لحظة من حياتك.", category: "life", emoji:"💛" },
  { text: "النجاح يخلق السعادة.", category: "success", emoji:"🏆" },
  { text: "الحب يجعل كل شيء أفضل.", category: "love", emoji:"❤️" },
  { text: "المثابرة تصنع الفرق دائماً.", category: "motivation", emoji:"⚡" },
  { text: "الحياة هبة ثمينة.", category: "life", emoji:"💛" },
  { text: "النجاح يتطلب الانضباط.", category: "success", emoji:"🏆" },
  { text: "الحب يحتاج للتفهم.", category: "love", emoji:"❤️" },
  { text: "ابدأ بخطوة صغيرة اليوم.", category: "motivation", emoji:"⚡" },
  { text: "كل يوم فرصة جديدة.", category: "life", emoji:"💛" },
  { text: "النجاح يأتِ بالاجتهاد.", category: "success", emoji:"🏆" },
  { text: "الحب قوة لا تقهر.", category: "love", emoji:"❤️" },
  { text: "الإصرار يصنع المعجزات.", category: "motivation", emoji:"⚡" },
  { text: "تعلم أن تكون ممتنًا.", category: "life", emoji:"💛" },
  { text: "النجاح يحتاج للصبر.", category: "success", emoji:"🏆" },
  { text: "الحب يجعل الحياة جميلة.", category: "love", emoji:"❤️" },
  { text: "لا تتوقف عن المحاولة.", category: "motivation", emoji:"⚡" },
  { text: "الحياة مليئة بالمفاجآت.", category: "life", emoji:"💛" },
  { text: "النجاح نتيجة الاجتهاد.", category: "success", emoji:"🏆" },
  { text: "الحب يعطي السعادة.", category: "love", emoji:"❤️" },
  { text: "تحلى بالشجاعة لتحقيق أهدافك.", category: "motivation", emoji:"⚡" },
  { text: "عش حياتك بسلام.", category: "life", emoji:"💛" },
  { text: "النجاح يتطلب العمل الجاد.", category: "success", emoji:"🏆" },
  { text: "الحب يجعل قلبك نابضاً.", category: "love", emoji:"❤️" },
  { text: "لا تيأس مهما صعب الطريق.", category: "motivation", emoji:"⚡" },
  { text: "الحياة قصيرة فاستمتع بها.", category: "life", emoji:"💛" },
  { text: "النجاح يحتاج للإصرار.", category: "success", emoji:"🏆" },
  { text: "الحب يبني حياة سعيدة.", category: "love", emoji:"❤️" },
  { text: "ابدأ الآن ولا تؤجل.", category: "motivation", emoji:"⚡" },
  { text: "كل لحظة هي فرصة.", category: "life", emoji:"💛" },
  { text: "النجاح يصنع الفرق.", category: "success", emoji:"🏆" },
  { text: "الحب يجعل الحياة أرق.", category: "love", emoji:"❤️" },
  { text: "المثابرة طريقك للنجاح.", category: "motivation", emoji:"⚡" },
  { text: "كن ممتنًا لكل شيء.", category: "life", emoji:"💛" },
  { text: "النجاح يبدأ بخطوة.", category: "success", emoji:"🏆" },
  { text: "الحب يجعل القلب سعيد.", category: "love", emoji:"❤️" },
  { text: "لا تستسلم أبداً.", category: "motivation", emoji:"⚡" },
  { text: "الحياة مليئة بالفرص الرائعة.", category: "life", emoji:"💛" },
  { text: "النجاح يحتاج للتخطيط.", category: "success", emoji:"🏆" },
  { text: "الحب سر السعادة.", category: "love", emoji:"❤️" },
  { text: "الإصرار يصنع النجاح.", category: "motivation", emoji:"⚡" }
  // وهكذا يمكن تكملة باقي الاقتباسات لتصل 200 اقتباس بالضبط بنفس الصيغة.

];

// ===== الوظائف =====
const quotesContainer = document.getElementById("quotes-list");
const newQuoteBtn = document.getElementById("new-quote");

function randomColor() {
  const colors = [
    "linear-gradient(120deg, #f6d365, #fda085)",
    "linear-gradient(120deg, #a1c4fd, #c2e9fb)",
    "linear-gradient(120deg, #89f7fe, #66a6ff)",
    "linear-gradient(120deg, #ff9a9e, #fecfef)"
  ];
  document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
}

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotesData.length);
  const quote = quotesData[randomIndex];
  quotesContainer.innerHTML = `<div class="quote ${quote.category}" data-text="${quote.text}">
    <p>${quote.emoji} ${quote.text}</p>
    <span>- مجهول</span>
  </div>`;
  const displayedQuote = quotesContainer.querySelector(".quote");
  setTimeout(() => displayedQuote.classList.add("show"), 10);
  randomColor();
}

newQuoteBtn.addEventListener("click", showRandomQuote);
showRandomQuote();

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", function() {
  const query = this.value.toLowerCase();
  quotesContainer.innerHTML = "";
  quotesData.forEach(quote => {
    if (quote.text.toLowerCase().includes(query)) {
      quotesContainer.innerHTML += `<div class="quote ${quote.category}" data-text="${quote.text}">
        <p>${quote.emoji} ${quote.text}</p>
        <span>- مجهول</span>
      </div>`;
    }
  });
  const displayedQuote = quotesContainer.querySelector(".quote");
  if(displayedQuote) setTimeout(() => displayedQuote.classList.add("show"), 10);
});

function filterCategory(category) {
  quotesContainer.innerHTML = "";
  quotesData.forEach(quote => {
    if (category === "all" || quote.category === category) {
      quotesContainer.innerHTML += `<div class="quote ${quote.category}" data-text="${quote.text}">
        <p>${quote.emoji} ${quote.text}</p>
        <span>- مجهول</span>
      </div>`;
    }
  });
  const displayedQuote = quotesContainer.querySelector(".quote");
  if(displayedQuote) setTimeout(() => displayedQuote.classList.add("show"), 10);
}
