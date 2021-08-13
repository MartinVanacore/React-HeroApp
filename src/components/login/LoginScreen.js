import React, { useContext} from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ( { history } ) => {

    const { dispatch }  = useContext(AuthContext);

   
    const handleLogin = () => {
        // history.push('/marvel')
        const lastPath = localStorage.getItem('lastPath') || '/marvel' ;

        dispatch({
            type: types.login,
            payload: {
                name: "Martin"
            }
        });
        history.push(lastPath);
    }

    return (

        <div>
            <h4 className="m-4">LoginScreen</h4>
            <hr/>
            <button type="submit" className="btn btn-primary m-3 " onClick={ handleLogin }>Login</button>
        </div>
            
     
        // <form className="mt-5 ml-2">
        //     <div className="form-row align-items-center">
        //         <div className="col-auto">
        //             <label className="sr-only" htmlFor="inlineFormInput">Name</label>
        //             <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe"/>
        //         </div>
        //         <div className="col-auto">
        //             <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
        //             <div className="input-group mb-2">
        //                 <div className="input-group-prepend">
        //                     <div className="input-group-text">@</div>
        //                 </div>
        //                 <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username"/>
        //             </div>
        //         </div>
        //         {/* <div class="col-auto">
        //             <div class="form-check mb-2">
        //             <input class="form-check-input" type="checkbox" id="autoSizingCheck"/>
        //             <label class="form-check-label" for="autoSizingCheck">
        //                 Remember me
        //             </label>
        //             </div>
        //             </div> */}
        //         <div className="col-auto">
        //             <button type="submit" className="btn btn-primary mb-2" onClick={ handleLogin }>Login</button>
        //         </div>
        //     </div>
        //  </form>
        
    )
}
