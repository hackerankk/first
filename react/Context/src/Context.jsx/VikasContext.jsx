import React, { createContext } from 'react'

export const VikasContext = createContext();
    function FilesP(props){
        const student={
            name:"Hari",
        
    }
    return(
        <VikasContext.Provider value={student}>
            {props.children}
        </VikasContext.Provider>
    )

}

export default FilesP;