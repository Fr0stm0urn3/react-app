const HomeCard = ({ title, button = {}, children, backgroundColor }) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <a
        href="/jobs.html"
        className={`inline-block ${button.btnBgColor} text-white rounded-lg px-4 py-2 ${button.btnHover}`}
      >
        {button.btnContent}
      </a>
    </div>
  )
}

export default HomeCard
