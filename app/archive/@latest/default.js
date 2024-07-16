import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

const Latest = ()=>{
    const LatestNews=getLatestNews();
    return (
        <>
         <h1>Latest Page</h1>
         <NewsList news={LatestNews}/>
        </>
       
    )
}
export default Latest;