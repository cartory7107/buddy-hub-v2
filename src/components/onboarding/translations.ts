export type LangCode =
  | "en" | "bn" | "hi" | "ar" | "ur" | "es"
  | "it" | "fr" | "pt" | "de" | "zh" | "id";

export const LANGUAGES: { code: LangCode; name: string; rtl?: boolean }[] = [
  { code: "en", name: "English" },
  { code: "bn", name: "বাংলা" },
  { code: "hi", name: "हिन्दी" },
  { code: "ar", name: "العربية", rtl: true },
  { code: "ur", name: "اُردُو", rtl: true },
  { code: "es", name: "Español" },
  { code: "it", name: "Italiano" },
  { code: "fr", name: "Français" },
  { code: "pt", name: "Português" },
  { code: "de", name: "Deutsch" },
  { code: "zh", name: "中文" },
  { code: "id", name: "Bahasa Indonesia" },
];

type Strings = {
  chooseLang: string;
  chooseLangSub: string;
  tourTitle: string;
  tourSub: string;
  yes: string;
  no: string;
  skip: string;
  touring: string;
  step: string;
  scrollHint: string;
  replay: string;
};

export const T: Record<LangCode, Strings> = {
  en: { chooseLang: "Choose your language", chooseLangSub: "Pick the language you're most comfortable with.", tourTitle: "Take a quick tour?", tourSub: "We'll auto-scroll and highlight each section for you.", yes: "Yes, show me", no: "No, thanks", skip: "Skip tour", touring: "Tour in progress", step: "Step", scrollHint: "Scroll to explore", replay: "Replay tour" },
  bn: { chooseLang: "আপনার ভাষা নির্বাচন করুন", chooseLangSub: "যে ভাষায় আপনি স্বাচ্ছন্দ্য, সেটি বেছে নিন।", tourTitle: "একটি দ্রুত ট্যুর নেবেন?", tourSub: "আমরা স্বয়ংক্রিয়ভাবে স্ক্রল করে প্রতিটি সেকশন দেখাবো।", yes: "হ্যাঁ, দেখান", no: "না, ধন্যবাদ", skip: "ট্যুর বাদ দিন", touring: "ট্যুর চলছে", step: "ধাপ", scrollHint: "স্ক্রল করে দেখুন", replay: "আবার ট্যুর দিন" },
  hi: { chooseLang: "अपनी भाषा चुनें", chooseLangSub: "वह भाषा चुनें जिसमें आप सहज हैं।", tourTitle: "क्या एक त्वरित टूर लेंगे?", tourSub: "हम स्वतः स्क्रॉल कर हर सेक्शन दिखाएँगे।", yes: "हाँ, दिखाएँ", no: "नहीं, धन्यवाद", skip: "टूर छोड़ें", touring: "टूर चल रहा है", step: "चरण", scrollHint: "स्क्रॉल करें", replay: "टूर फिर देखें" },
  ar: { chooseLang: "اختر لغتك", chooseLangSub: "اختر اللغة التي تشعر بالراحة معها.", tourTitle: "هل تريد جولة سريعة؟", tourSub: "سنقوم بالتمرير تلقائيًا وإبراز كل قسم.", yes: "نعم، اعرض لي", no: "لا، شكرًا", skip: "تخطي الجولة", touring: "الجولة قيد التشغيل", step: "الخطوة", scrollHint: "مرر للاستكشاف", replay: "إعادة الجولة" },
  ur: { chooseLang: "اپنی زبان منتخب کریں", chooseLangSub: "وہ زبان چنیں جس میں آپ آرام دہ ہیں۔", tourTitle: "ایک مختصر ٹور لیں؟", tourSub: "ہم خودکار طور پر اسکرول کر کے ہر سیکشن دکھائیں گے۔", yes: "ہاں، دکھائیں", no: "نہیں، شکریہ", skip: "ٹور چھوڑیں", touring: "ٹور جاری ہے", step: "مرحلہ", scrollHint: "اسکرول کریں", replay: "ٹور دوبارہ چلائیں" },
  es: { chooseLang: "Elige tu idioma", chooseLangSub: "Selecciona el idioma con el que te sientas cómodo.", tourTitle: "¿Hacer un recorrido rápido?", tourSub: "Desplazaremos y resaltaremos cada sección por ti.", yes: "Sí, muéstrame", no: "No, gracias", skip: "Omitir recorrido", touring: "Recorrido en curso", step: "Paso", scrollHint: "Desplázate para explorar", replay: "Repetir tour" },
  it: { chooseLang: "Scegli la tua lingua", chooseLangSub: "Seleziona la lingua con cui ti trovi meglio.", tourTitle: "Fare un tour rapido?", tourSub: "Scorreremo automaticamente evidenziando ogni sezione.", yes: "Sì, mostrami", no: "No, grazie", skip: "Salta il tour", touring: "Tour in corso", step: "Passo", scrollHint: "Scorri per esplorare", replay: "Riproduci tour" },
  fr: { chooseLang: "Choisissez votre langue", chooseLangSub: "Sélectionnez la langue qui vous convient.", tourTitle: "Faire une visite rapide ?", tourSub: "Nous ferons défiler et mettrons en évidence chaque section.", yes: "Oui, montrez-moi", no: "Non, merci", skip: "Passer la visite", touring: "Visite en cours", step: "Étape", scrollHint: "Faites défiler", replay: "Revoir la visite" },
  pt: { chooseLang: "Escolha o seu idioma", chooseLangSub: "Selecione o idioma com que se sente confortável.", tourTitle: "Fazer um tour rápido?", tourSub: "Faremos rolagem automática e destacaremos cada seção.", yes: "Sim, mostre-me", no: "Não, obrigado", skip: "Pular tour", touring: "Tour em andamento", step: "Etapa", scrollHint: "Role para explorar", replay: "Repetir tour" },
  de: { chooseLang: "Wählen Sie Ihre Sprache", chooseLangSub: "Wählen Sie die Sprache, in der Sie sich wohlfühlen.", tourTitle: "Schnelle Tour starten?", tourSub: "Wir scrollen automatisch und heben jeden Abschnitt hervor.", yes: "Ja, zeig es mir", no: "Nein, danke", skip: "Tour überspringen", touring: "Tour läuft", step: "Schritt", scrollHint: "Scrollen Sie zum Erkunden", replay: "Tour wiederholen" },
  zh: { chooseLang: "选择您的语言", chooseLangSub: "选择您最熟悉的语言。", tourTitle: "快速浏览一下？", tourSub: "我们将自动滚动并突出显示每个部分。", yes: "好的，开始", no: "不用了", skip: "跳过", touring: "导览进行中", step: "步骤", scrollHint: "滚动浏览", replay: "重新导览" },
  id: { chooseLang: "Pilih bahasa Anda", chooseLangSub: "Pilih bahasa yang paling Anda kuasai.", tourTitle: "Ikuti tur singkat?", tourSub: "Kami akan menggulir otomatis dan menyoroti setiap bagian.", yes: "Ya, tampilkan", no: "Tidak, terima kasih", skip: "Lewati tur", touring: "Tur berjalan", step: "Langkah", scrollHint: "Gulir untuk menjelajah", replay: "Putar ulang tur" },
};