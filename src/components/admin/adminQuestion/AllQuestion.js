import React from "react";
import Questions from "../../UI/Question/Questions";
import { useParams } from "react-router-dom";

const AllQuestion = () => {
  const param = useParams();
  const { examid } = param;
  return (
    <div className="row">
      <div className="col-11">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">اسئلة الامتحان</h5>
          </div>
          <div className="card-body">{<Questions exid={examid} />}</div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestion;

//  <div className="row">
//     <div className="col-12 col-md-12 col-xxl-12 d-flex order-2 order-xxl-3">
//       <div className="card flex-fill w-100">
//         <div className="card-header">
//           <h5 className="card-title mb-">الاسئلة</h5>
//         </div>
//         <div className="card-body d-flex">
//           <div className="align-self-center w-100">

//             <table className="table table-hover my-0">
//               <thead>
//                 <tr>
//                   <th>السؤال</th>
//                   <th>نوع السؤال</th>
//                   <th>صورة السؤال</th>
//                   <th>درجة السؤال</th>
//                   <th>حذف</th>
//                 </tr>
//               </thead>
//               <tbody>{<Questions exid={examid} />}</tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
