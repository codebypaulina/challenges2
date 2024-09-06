import "./Tag.css";

export default function Tag({ tag }) {
  const userClassName = tag === "admin" ? "tag tag--highlight" : "tag";

  return <li className={userClassName}>{tag}</li>;
}

/*
export default function Tag({ tag }) {
  let userClassName = "tag";

  if (tag === "admin") {
    userClassName = userClassName + " tag--highlight";
  }

  return <li className={userClassName}>{tag}</li>;
}
*/
