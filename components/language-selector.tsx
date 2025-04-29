import { useState } from "react";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    console.log(`Idioma selecionado: ${event.target.value}`);
  };

  return (
    <div className="relative">
      <select
        value={language}
        onChange={handleChange}
        className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-3 pr-8 text-sm font-medium text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
      >
        <option value="en" className="flex items-center px-2 py-1">
          <svg
            className="w-5 h-5 mr-2 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3900 3900"
          >
            <path fill="#b22234" d="M0 0h7410v3900H0z" />
            <path
              d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
              stroke="#fff"
              strokeWidth="300"
            />
            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
            <g fill="#fff">
              <g id="d">
                <g id="c">
                  <g id="e">
                    <g id="b">
                      <path
                        id="a"
                        d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                      />
                      <use xlinkHref="#a" y="420" />
                      <use xlinkHref="#a" y="840" />
                      <use xlinkHref="#a" y="1260" />
                    </g>
                    <use xlinkHref="#a" y="1680" />
                  </g>
                  <use xlinkHref="#b" x="247" y="210" />
                </g>
                <use xlinkHref="#c" x="494" />
              </g>
              <use xlinkHref="#d" x="988" />
              <use xlinkHref="#c" x="1976" />
              <use xlinkHref="#e" x="2470" />
            </g>
          </svg>
          English
        </option>
        <option value="es" className="flex items-center px-2 py-1">
          <svg
            className="w-5 h-5 mr-2 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path fill="#c60b1e" d="M0 0h512v170.7H0z" />
            <path fill="#ffc400" d="M0 170.7h512v170.6H0z" />
            <path fill="#c60b1e" d="M0 341.3h512V512H0z" />
          </svg>
          Español
        </option>
        <option value="pt" className="flex items-center px-2 py-1">
          <svg
            className="w-5 h-5 mr-2 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path fill="#006600" d="M0 0h512v512H0z" />
            <path fill="#ffcc00" d="M0 0h512v256H0z" />
            <path fill="#ff0000" d="M0 256h512v256H0z" />
          </svg>
          Português
        </option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSelector;
