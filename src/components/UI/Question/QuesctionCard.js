import React from "react";
import { Link } from "react-router-dom";

const QuestionCard = (props) => {
  return (
    <>
      <div className="d-flex align-items-start">
        <div className="flex-grow-1">
          <small className="float-end text-navy">Degree: {props.degree}</small>
          <strong>{props.title}</strong>
          <br />
        </div>
      </div>
    </>
  );
};

export default QuestionCard;

// <div className="card mx-3" style={{ width: "18rem" }}>
//       {props.imgurl ? (
//         <img src={props.imgurl} className="card-img-top" alt="..." />
//       ) : (
//         <></>
//       )}

//       <div className="card-body">
//         <h5 className="card-title">{props.title}</h5>
//         <p className="card-text">Question Answer is {props.answercount}</p>
//         <div className="btn-group" role="group" aria-label="Basic example">
//           <a
//             href={`/admin/question/delete/${props.id}`}
//             className="btn btn-danger"
//           >
//             حذف السؤال
//           </a>
//           <a href={`/admin/answer/add/${props.id}`} className="btn btn-primary">
//             اضافة اجابة
//           </a>
//         </div>
//       </div>
//     </div>

//  <tr>
//       <td dir="rtl">
//         <Link to={`/admin/question/${props.id}`}>{props.title}</Link>
//       </td>
//       <td>{props.typ}</td>
//       <td>none</td>
//       <td>{props.degree}</td>
//       <td>
//         <Link to={`/admin/question/delete/${props.id}`}>حذف</Link>
//       </td>
//     </tr>
