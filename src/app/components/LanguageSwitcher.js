import Link from "next/link";

const LanguageSwitcher = ({ selectedLang, setSelectedLang }) => {
  return (
    <div className="flex space-x-2">
      {["Қаз", "Рус", "Eng"].map((lang) => (
        <Link
          key={lang}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setSelectedLang(lang);
          }}
          className={`w-[53px] h-10 flex items-center justify-center rounded-[12px] transition-all 
            ${selectedLang === lang ? "bg-[#F2F2F2] text-[#353535]" : "hover:bg-[#F2F2F2] hover:text-[#353535] hover:opacity-50"}`}
        >
          {lang}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
