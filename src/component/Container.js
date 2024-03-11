function Container({ darktheme, title, description, src, Newsurl }) {
  const maxDescriptionLength = window.innerWidth < 640 ? 100 : 80;
  return (
    <div
      key={Newsurl}
      className="flex flex-col justify-between w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2 py-4"
    >
      <div
        className={`border-2 rounded h-80 ${
          darktheme
            ? "bg-slate-600 text-white border-black"
            : "bg-sky-200 text-black border-sky-200"
        }`}
      >
        <img
          src={src}
          alt="img not found"
          loading="lazy"
          className="w-full h-2/4 object-cover rounded-t"
        />
        <div className="p-2 ">
          <h4
            className={`mb-1 text-sm md:text-base cursor-pointer ${
              darktheme ? "bg-slate-800 text-white" : "bg-sky-300 text-black"
            }`}
          >
            {title ? title.slice(0, 50) : "No title available"}
          </h4>
          <p
            className={`mb-1 text-xs md:text-sm cursor-pointer ${
              darktheme ? "bg-slate-600 text-white" : "bg-sky-200 text-black"
            }`}
          >
            {description
              ? description.slice(0, maxDescriptionLength)
              : "No description available"}
          </p>
          <a
            href={Newsurl}
            target="_blank"
            rel="noreferrer"
            className={`inline-block rounded text-white p-1 px-2 cursor-pointer ${
              darktheme ? "bg-sky-600" : "bg-blue-600"
            }`}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Container;
