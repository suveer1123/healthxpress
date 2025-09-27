import React, { useState, useEffect } from "react";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [symptomNote, setSymptomNote] = useState("");
  const [symptomOutput, setSymptomOutput] = useState(null);
  const [language, setLanguage] = useState("en");

  // trigger animations on home
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (activeScreen === "home") {
      setTimeout(() => setAnimate(true), 100);
    } else {
      setAnimate(false);
    }
  }, [activeScreen]);

  // ---------------- Doctors ----------------
  const doctors = [
    { name: "Dr. Mehta", spec: "General Physician", emoji: "👨‍⚕" },
    { name: "Dr. Sharma", spec: "Cardiologist", emoji: "🫀" },
    { name: "Dr. Kapoor", spec: "Dermatologist", emoji: "🧴" },
    { name: "Dr. Iyer", spec: "Pediatrician", emoji: "👶" },
    { name: "Dr. Reddy", spec: "Neurologist", emoji: "🧠" },
    { name: "Dr. Singh", spec: "ENT Specialist", emoji: "👂" },
    { name: "Dr. Malhotra", spec: "Orthopedic", emoji: "🦴" },
  ];

  // ---------------- Health Records ----------------
  const healthRecords = [
    { date: "12 Sep", desc: "Blood Pressure Check", type: "Consultation" },
    { date: "05 Sep", desc: "Prescribed Metformin 500mg", type: "Prescription" },
    { date: "28 Aug", desc: "Blood Test: Normal", type: "Test" },
    { date: "15 Aug", desc: "Vitamin D Supplements", type: "Prescription" },
    { date: "01 Aug", desc: "Consultation: Cold & Cough", type: "Consultation" },
    { date: "20 Jul", desc: "X-Ray: No issues", type: "Test" },
    { date: "05 Jul", desc: "Ibuprofen 200mg", type: "Prescription" },
  ];

  // ---------------- Pharmacy ----------------
  const pharmacyData = [
    { name: "Rural Pharmacy A", medicine: "Paracetamol", status: "available" },
    { name: "Village Clinic Store", medicine: "Amoxicillin", status: "low" },
    { name: "City Chemist", medicine: "ORS Pack", status: "out" },
    { name: "Town Medico", medicine: "Cough Syrup", status: "available" },
    { name: "HealthPlus Pharmacy", medicine: "Antihistamine", status: "low" },
    { name: "GreenCare Pharmacy", medicine: "Vitamin C", status: "available" },
    { name: "Central Pharmacy", medicine: "Pain Relief Gel", status: "available" },
  ];

  // ---------------- Texts for Multilingual ----------------
  const texts = {
    en: {
      loginTitle: "HealthXpress",
      login: "Enter details to login",
      email: "Email",
      password: "Password",
      otp: "OTP (1234 demo)",
      loginBtn: "Login",
      signupBtn: "Sign Up",
      back: "Back",
      teleconsult: "🩺 Teleconsultation",
      records: "📄 Health Records",
      pharmacy: "💊 Medicine Availability",
      symptom: "🤖 Symptom Checker",
      symptomPlaceholder: "Type symptoms...",
      check: "Check",
      language: "Language",
      book: "Book",
      available: "✅ Available",
      low: "⚠ Low Stock",
      out: "❌ Out of Stock",
    },
    hi: {
      loginTitle: "हेल्थएक्सप्रेस",
      login: "लॉगिन करने के लिए विवरण दर्ज करें",
      email: "ईमेल",
      password: "पासवर्ड",
      otp: "ओटीपी (1234 डेमो)",
      loginBtn: "लॉगिन",
      signupBtn: "साइन अप",
      back: "वापस",
      teleconsult: "🩺 टेली कंसल्टेशन",
      records: "📄 स्वास्थ्य रिकॉर्ड",
      pharmacy: "💊 दवा उपलब्धता",
      symptom: "🤖 लक्षण जांच",
      symptomPlaceholder: "लक्षण टाइप करें...",
      check: "जाँचें",
      language: "भाषा",
      book: "बुक करें",
      available: "✅ उपलब्ध",
      low: "⚠ कम स्टॉक",
      out: "❌ स्टॉक ख़त्म",
    },
    ta: {
      loginTitle: "ஹெல்த்எக்ஸ்பிரஸ்",
      login: "உள்நுழைய விவரங்களை உள்ளிடவும்",
      email: "மின்னஞ்சல்",
      password: "கடவுச்சொல்",
      otp: "OTP (1234 டெமோ)",
      loginBtn: "உள்நுழை",
      signupBtn: "சைன் அப்",
      back: "பின் செல்லவும்",
      teleconsult: "🩺 டெலிகன்சல்டேஷன்",
      records: "📄 சுகாதார பதிவுகள்",
      pharmacy: "💊 மருந்துகள் கிடைக்கும்",
      symptom: "🤖 அறிகுறி சரிபார்க்க",
      symptomPlaceholder: "அறிகுறிகளை உள்ளிடவும்...",
      check: "சரிபார்க்க",
      language: "மொழி",
      book: "புக் செய்யவும்",
      available: "✅ கிடைக்கும்",
      low: "⚠ குறைந்த நிலை",
      out: "❌ கிடையாது",
    },
    ml: {
      loginTitle: "ഹെൽത്ത്എക്സ്പ്രസ്",
      login: "ലോഗിൻ ചെയ്യാനുള്ള വിവരങ്ങൾ നൽകുക",
      email: "ഇമെയിൽ",
      password: "പാസ്വേഡ്",
      otp: "OTP (1234 ഡെമോ)",
      loginBtn: "ലോഗിൻ",
      signupBtn: "സൈൻ അപ്പ്",
      back: "പുറകിലേക്ക്",
      teleconsult: "🩺 ടെലികൺസൾട്ടേഷൻ",
      records: "📄 ആരോഗ്യ രേഖകൾ",
      pharmacy: "💊 മരുന്നുകളുടെ ലഭ്യത",
      symptom: "🤖 ലക്ഷണ പരിശോധന",
      symptomPlaceholder: "ലക്ഷണങ്ങൾ ടൈപ്പ് ചെയ്യുക...",
      check: "പരിശോധിക്കുക",
      language: "ഭാഷ",
      book: "ബുക്ക് ചെയ്യുക",
      available: "✅ ലഭ്യമാണ്",
      low: "⚠ കുറഞ്ഞ സ്റ്റോക്ക്",
      out: "❌ സ്റ്റോക്ക് ഇല്ല",
    },
    te: {
      loginTitle: "హెల్త్‌ఎక్స్‌ప్రెస్",
      login: "లాగిన్ చేయడానికి వివరాలను నమోదు చేయండి",
      email: "ఇమెయిల్",
      password: "పాస్‌వర్డ్",
      otp: "OTP (1234 డెమో)",
      loginBtn: "లాగిన్",
      signupBtn: "సైన్ అప్",
      back: "వెనక్కి",
      teleconsult: "🩺 టెలికన్సల్టేషన్",
      records: "📄 ఆరోగ్య రికార్డులు",
      pharmacy: "💊 ఔషధం లభ్యత",
      symptom: "🤖 లక్షణం తనిఖీ",
      symptomPlaceholder: "లక్షణాలను టైప్ చేయండి...",
      check: "తనిఖీ చేయండి",
      language: "భాష",
      book: "బుక్ చేయండి",
      available: "✅ అందుబాటులో ఉంది",
      low: "⚠ తక్కువ స్టాక్",
      out: "❌ స్టాక్ లేవు",
    },
  };

  // ---------------- Symptom Responses ----------------
  const symptomResponses = {
    en: { urgent:"⚠ Urgent: Go to hospital", seeDoctor:"🤒 See a doctor soon", mild:"🙂 Mild, manage at home", unknown:"🙂 Symptoms not recognized, monitor & consult if needed", empty:"Please type something first..." },
    hi: { urgent:"⚠ तुरंत अस्पताल जाएँ", seeDoctor:"🤒 डॉक्टर से जल्द मिलें", mild:"🙂 हल्का, घर पर संभालें", unknown:"🙂 लक्षण पहचाने नहीं गए, जरूरत होने पर डॉक्टर से मिलें", empty:"कृपया कुछ टाइप करें..." },
    ta: { urgent:"⚠ அவசரமாக: மருத்துவமனைக்கு செல்லவும்", seeDoctor:"🤒 டாக்டரை விரைவில் பார்க்கவும்", mild:"🙂 லேசானது, வீட்டில் பராமரிக்கவும்", unknown:"🙂 அறிகுறிகள் தெரியவில்லை, தேவையெனில் மருத்துவரை பார்க்கவும்", empty:"தயவுசெய்து ஏதாவது টাইப் செய்யவும்" },
    ml: { urgent:"⚠ അടിയന്തരമായി: ആശുപത്രിയിലേക്ക് പോകുക", seeDoctor:"🤒 ഡോക്ടറെ ഉടനെ കാണുക", mild:"🙂 ലളിതം, വീട്ടിൽ നിയന്ത്രിക്കുക", unknown:"🙂 ലക്ഷണങ്ങൾ തിരിച്ചറിയാനായില്ല, ആവശ്യമെങ്കിൽ ഡോക്ടറെ കാണുക", empty:"ദയവായി ഒന്നുകൂടി ടൈപ്പ് ചെയ്യുക" },
    te: { urgent:"⚠ అత్యవసరం: ఆసుపత్రికి వెళ్లండి", seeDoctor:"🤒 డాక్టర్‌ను త్వరగా చూడండి", mild:"🙂 లైట్, ఇంట్లో నిర్వహించండి", unknown:"🙂 లక్షణాలు గుర్తించబడలేదు, అవసరమైతే డాక్టర్‌ను చూడండి", empty:"దయచేసి ఏదైనా టైప్ చేయండి..." },
  };

  // ---------------- Functions ----------------
  const switchScreen = (screen) => setActiveScreen(screen);

  const handleLogin = () => {
    if (!email || !password || !otpInput) { alert("Please fill all fields"); return; }
    if (password==="1234" && otpInput==="1234") switchScreen("home");
    else alert("Wrong credentials! (Password & OTP are 1234 😅)");
  };

  const checkSymptoms = () => {
    let text = (symptomNote||"").trim().toLowerCase();
    if (!text || text.length<2){ setSymptomOutput(symptomResponses[language].empty); return; }
    if (text.includes("pain")||text.includes("shortness of breath")) setSymptomOutput(symptomResponses[language].urgent);
    else if (text.includes("fever")||text.includes("rash")) setSymptomOutput(symptomResponses[language].seeDoctor);
    else if (text.includes("cough")||text.includes("headache")||text.includes("stomach")) setSymptomOutput(symptomResponses[language].mild);
    else setSymptomOutput(symptomResponses[language].unknown);
  };

  // ---------------- Styles ----------------
  const containerStyle = { minHeight:"100vh", background:"linear-gradient(to bottom,#e6f4ea,#e6f0fa)", fontFamily:"sans-serif", display:"flex", justifyContent:"center", padding:"40px 16px" };
  const contentStyle = { width:"100%", maxWidth:480, minHeight:"80vh", overflowY:"auto", position:"relative" };
  const card = { background:"#fff", borderRadius:16, padding:20, boxShadow:"0 10px 30px rgba(0,0,0,0.08)", marginBottom:20 };
  const inputStyle = { width:"100%", padding:12, borderRadius:999, border:"1px solid #d1d5db", marginBottom:12, outline:"none" };
  const backBtnStyle = { background:"#9ca3af", color:"#fff", padding:10, borderRadius:8, border:"none", cursor:"pointer", marginTop:12, width:"100%" };
  const statusTag = (status)=>{ const color=status==="available"?"#10b981":status==="low"?"#f59e0b":"#ef4444"; return { color:"#fff", background:color, padding:"2px 6px", borderRadius:6, fontSize:12, marginLeft:8 }; };
  const recordTag = (type)=>{ const color=type==="Prescription"?"#3b82f6":type==="Consultation"?"#f97316":"#10b981"; return { color:"#fff", background:color, padding:"2px 6px", borderRadius:6, fontSize:12, marginLeft:8 }; };
  const listCardStyle = { display:"flex", justifyContent:"space-between", padding:12, borderRadius:12, background:"#f3f4f6", marginBottom:8, alignItems:"center" };

  const languageSelector = (
    <div style={{marginTop:12, textAlign:"center"}}>
      {["en","hi","ta","ml","te"].map(lang=>(
        <button
          key={lang}
          onClick={()=>setLanguage(lang)}
          style={{
            margin:4,
            padding:"4px 8px",
            borderRadius:6,
            border:"1px solid #ccc",
            background: language===lang ? "#6366f1" : "#fff",
            color: language===lang ? "#fff" : "#000"
          }}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>

        {/* ---------- LOGIN SCREEN ---------- */}
        {activeScreen==="login" && (
          <div style={card}>
            <h1 style={{color:"#4f46e5", marginBottom:8}}>{texts[language].loginTitle}</h1>
            <p style={{color:"#6b7280", marginBottom:20}}>{texts[language].login}</p>
            <input placeholder={texts[language].email} value={email} onChange={e=>setEmail(e.target.value)} style={inputStyle} />
            <input placeholder={texts[language].password} type="password" value={password} onChange={e=>setPassword(e.target.value)} style={inputStyle} />
            <input placeholder={texts[language].otp} value={otpInput} onChange={e=>setOtpInput(e.target.value)} style={inputStyle} />
            <button onClick={handleLogin} style={{width:"100%", padding:12, borderRadius:999, border:"none", background:"linear-gradient(to right,#4f46e5,#6366f1)", color:"#fff", fontWeight:600, cursor:"pointer", marginTop:10}}>
              {texts[language].loginBtn}
            </button>
            <button onClick={()=>switchScreen("signup")} style={{...backBtnStyle, background:"#6366f1"}}>{texts[language].signupBtn}</button>
            {languageSelector}
          </div>
        )}

        {/* ---------- SIGNUP SCREEN ---------- */}
        {activeScreen==="signup" && (
          <div style={card}>
            <h1 style={{color:"#4f46e5", marginBottom:8}}>{texts[language].signupBtn}</h1>
            <input placeholder={texts[language].email} value={email} onChange={e=>setEmail(e.target.value)} style={inputStyle} />
            <input placeholder={texts[language].password} type="password" value={password} onChange={e=>setPassword(e.target.value)} style={inputStyle} />
            <input placeholder={texts[language].otp} value={otpInput} onChange={e=>setOtpInput(e.target.value)} style={inputStyle} />
            <button onClick={()=>{
              if(!email || !password || !otpInput){ alert("Please fill all fields"); return; }
              if(otpInput!=="1234"){ alert("OTP must be 1234"); return; }
              alert("Signup successful! You can now login.");
              switchScreen("login");
            }} style={{width:"100%", padding:12, borderRadius:999, border:"none", background:"linear-gradient(to right,#4f46e5,#6366f1)", color:"#fff", fontWeight:600, cursor:"pointer", marginTop:10}}>
              {texts[language].signupBtn}
            </button>
            <button style={backBtnStyle} onClick={()=>switchScreen("login")}>{texts[language].back}</button>
            {languageSelector}
          </div>
        )}

        {/* ---------- HOME SCREEN ---------- */}
        {activeScreen==="home" && (
          <div style={{...card, textAlign:"center", position:"relative", overflow:"hidden"}}>
            <div style={{position:"absolute", top:10, right:10, display:"flex", alignItems:"center", gap:8}}>
              <div style={{width:36,height:36,borderRadius:"50%", background:"#d1d5db", display:"flex", alignItems:"center", justifyContent:"center"}}>👤</div>
              <span style={{fontSize:14, fontWeight:600, color:"#374151"}}>{email}</span>
            </div>
            <h2 style={{color:"#166534", fontSize:28, marginBottom:24, opacity:animate?1:0, transform:animate?"translateY(0)":"translateY(-20px)", transition:"all 0.6s ease"}}>
              {texts[language].loginTitle}, {email}
            </h2>
            <div style={{display:"grid", gap:20}}>
              {[ 
                { text: texts[language].teleconsult, screen: "consult", bg:"#dbeafe" },
                { text: texts[language].records, screen: "records", bg:"#dcfce7" },
                { text: texts[language].pharmacy, screen: "pharmacy", bg:"#ccfbf1" },
                { text: texts[language].symptom, screen: "ai", bg:"#e0e7ff" },
              ].map((btn,i)=>(
                <div key={i} onClick={()=>switchScreen(btn.screen)} style={{background:btn.bg, padding:30, borderRadius:20, fontSize:20, fontWeight:600, cursor:"pointer", boxShadow:"0 6px 16px rgba(0,0,0,0.1)", opacity:animate?1:0, transform:animate?"translateY(0)":"translateY(40px)", transition:`all 0.6s ease ${i*0.2}s`, textAlign:"center"}}>
                  {btn.text}
                </div>
              ))}
            </div>
            {languageSelector}
          </div>
        )}

        {/* ---------- TELECONSULT ---------- */}
        {activeScreen==="consult" && (
          <div style={card}>
            <h2 style={{color:"#6366f1", marginBottom:16}}>{texts[language].teleconsult}</h2>
            {doctors.map((doc,i)=>(
              <div key={i} style={listCardStyle}>
                <div>{doc.emoji} {doc.name}</div>
                <div>{doc.spec}</div>
                <button style={{padding:"4px 8px", borderRadius:6, border:"none", background:"#6366f1", color:"#fff"}} onClick={()=>alert("Doctor Booked!")}>{texts[language].book}</button>
              </div>
            ))}
            <button style={backBtnStyle} onClick={()=>switchScreen("home")}>{texts[language].back}</button>
            {languageSelector}
          </div>
        )}

        {/* ---------- HEALTH RECORDS ---------- */}
        {activeScreen==="records" && (
          <div style={card}>
            <h2 style={{color:"#10b981", marginBottom:16}}>{texts[language].records}</h2>
            {healthRecords.map((rec,i)=>(
              <div key={i} style={listCardStyle}>
                <div>{rec.date}</div>
                <div>{rec.desc}</div>
                <div style={recordTag(rec.type)}>{rec.type}</div>
              </div>
            ))}
            <button style={backBtnStyle} onClick={()=>switchScreen("home")}>{texts[language].back}</button>
            {languageSelector}
          </div>
        )}

        {/* ---------- PHARMACY ---------- */}
        {activeScreen==="pharmacy" && (
          <div style={card}>
            <h2 style={{color:"#14b8a6", marginBottom:16}}>{texts[language].pharmacy}</h2>
            {pharmacyData.map((med,i)=>(
              <div key={i} style={listCardStyle}>
                <div>{med.name}</div>
                <div>{med.medicine}</div>
                <div style={statusTag(med.status)}>{texts[language][med.status]}</div>
              </div>
            ))}
            <button style={backBtnStyle} onClick={()=>switchScreen("home")}>{texts[language].back}</button>
            {languageSelector}
          </div>
        )}

        {/* ---------- SYMPTOM CHECKER ---------- */}
        {activeScreen==="ai" && (
          <div style={card}>
            <h2 style={{color:"#6366f1", marginBottom:16}}>{texts[language].symptom}</h2>
            <textarea
              placeholder={texts[language].symptomPlaceholder}
              style={{...inputStyle, minHeight:100}}
              value={symptomNote}
              onChange={e=>setSymptomNote(e.target.value)}
            />
            <button onClick={checkSymptoms} style={{...backBtnStyle, background:"#6366f1"}}>{texts[language].check}</button>
            {languageSelector}
            {symptomOutput && <p style={{marginTop:12, fontWeight:600}}>{symptomOutput}</p>}
            <button style={backBtnStyle} onClick={()=>switchScreen("home")}>{texts[language].back}</button>
          </div>
        )}

      </div>
    </div>
  );
}
