


import { BsFilePersonFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { AiTwotoneHeart } from 'react-icons/ai';
import { IoIosNotifications } from 'react-icons/io';
import { FcApproval } from 'react-icons/fc';



const Description = ()=>{
  return(
    <div className="descroption">
    <div className="container">

    <div className="">

    <div className="head-descroption ">

    <div className="m1">
    <span className="icon"><BsFilePersonFill /></span>
    <h5>Description</h5>
    </div>

    <div className="m2">
     <h5>Edite</h5>
    <span className="icon"><FaEdit /></span>
     </div>

    </div>

    <div className="text-descroption">simplifying interface and experiance science from 2012 feel free to
    contact me for full time or freelance work opportunity</div>
    </div>

         <div>
         <div className="head-descroption">

         <div className="m1">
         <span className="icon"><AiTwotoneHeart /></span>
         <h5>favorite content</h5>
         </div>


             <div className="m2">
              <h5>Edite</h5>
             <span className="icon "><FaEdit /></span>
              </div>

         </div>
         <div className="grop-button">
         <button>ui design</button>
         <button>ux design</button>
         <button>adobe xp</button>
         <button>user experiance</button>
         <button>user interface</button>
         <button>app</button>
         <button>prototyping</button>
         <button>web design</button></div>
         </div>


        <div >
                        <div className="m1">
                        <span className="icon"><IoIosNotifications /></span>
                        <h5 className="Notification-styl">Notification</h5>
                        </div>



      <form className="form-style">
                  <FcApproval />
                 <label for="html" className="label-style">there are no Notification about your </label><br/>
     </form>


               </div>


    </div>

    </div>

  )
}
export default Description

//
//
// <div className="descrip-style ">
//          <div className="d-flex justify-content-between mohamed ">
//               <div className="d-flex m1">
//                           <div  className="des-icn"><BsFilePersonFill /></div>
//                           <div  className="des-tex">Description</div>
//               </div>
//
//               <div className="d-flex m2">
//                           <div  className="des-tex">Edite</div>
//                          <div  className=""><FaEdit /></div>
//               </div>
//
//          </div>
//          <div className="m-3">
//          <p className="text1 mx-4">act projects easily with react-icons, which utilizes ES6
//                       imports that allows you to include only the icons that your project is using.</p>
//                   </div>
//                       <div className="d-flex justify-content-between mohamed ">
//                            <div className="d-flex m1">
//                                        <div  className="des-icn"><AiTwotoneHeart /></div>
//                                        <div  className="des-tex">favorite contant</div>
//                            </div>
//
//                            <div className="d-flex m2">
//                                        <div  className="des-tex">Edite</div>
//                                       <div  className=""><FaEdit /></div>
//                            </div>
//
//                       </div>
//              <div>
//              <button>ui design</button>
//              <button>ux design</button>
//              <button>adobe xp</button>
//              <button>user experiance</button>
//              <button>user interface</button>
//              <button>app</button>
//              <button>prototyping</button>
//              <button>web design</button>
//
//              </div>
//
//    <div className="ahmed">
//    <div className="d-flex m1">
//                <div  className="note-icn"><IoIosNotifications /></div>
//                <div  className="des-tex">Notification</div>
//    </div>
//
//    <div className="d-flex my-5 last"
//    style={{backgroundColor:"#fff",maxWidth:"300px", borderRadius:"20px", display:"flex"}}>
//                <div  className="note-icn ">
//                <form className="align-items-center m-auto">
//                <input type="radio" id="html" name="fav_language" value="HTML" />
//                  <label for="html" className="note">there are no Notification about your </label><br/>
//      </form>
//      </div>
//
//    </div>
//   </div>
//
//
//
//
//  </div>
