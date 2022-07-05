import React from "react"

const Heading = ({
  title,
  content,
  kicker,
  center1 = "left",
  center2 = "left",
}) => {
  return (
    <div className="heading">
      <p
        className={`kicker ${
          center1 === "left" ? "text-start" : "text-center"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`title ${center2 === "left" ? "text-start" : "text-center"}`}
      >
        {title}
      </h2>
      {content && <p className="content">{content}</p>}
    </div>
  )
}

export default Heading
