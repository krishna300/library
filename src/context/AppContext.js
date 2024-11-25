import { createContext, useEffect, useState } from "react";
import {featured, storyBoards} from '../assets/db'
export const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const [query, setQuery] = useState('');
    const [tabValue, setTabValue] = useState(0)
    const [filtered, setFiltered] = useState(featured)
    // const [filteredStories, setFilteredStories] = useState(storyBoards)

    const value={
        query, setQuery,tabValue, setTabValue,
        filtered,
        // filteredStories
    }
    useEffect(() => {
     switch (tabValue) {
        case 0:
            const filteredNews = featured.filter(news => {
                return news.title.toLowerCase().includes(query) || news.desc.toLowerCase().includes(query)
            })
            setFiltered(filteredNews)
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            // const stories = storyBoards.filter(story => {
            //     return story.title.toLowerCase().includes(query) || story.desc.toLowerCase().includes(query)
            // })
            // setFilteredStories(stories)
            break;
        default:
            break;
     }   
    }, [tabValue, query])
    return( 
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider