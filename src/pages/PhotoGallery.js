import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const PhotoGallery = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const page_limit = 25;
  const apipath = "https://jsonplaceholder.typicode.com/photos";
  useEffect(() => {
    getDataList()
  }, []);

  const getDataList = () => {
    let pageno = Math.ceil(data?.length / page_limit) + 1;
    const queryparam = "?_page=" + pageno + "&limit=" + page_limit;
    const finalUrl = apipath + queryparam;
    axios.get(finalUrl).then((res) => {
        const apiResp =res?.data;
        const mergeData = [...data , ...apiResp]
      setData(mergeData);
    });
  };

  const fetchMoreData = () =>{
    getDataList()
  }
  
  return (
    <>
      <div className="photo_gallry" 
      id="scrollableDiv"
      style={{
        height: 300,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse',
      }}
      >
        <div className="container">
          <InfiniteScroll
            dataLength={data?.length}
            next={fetchMoreData}
            hasMore={true}
            scrollableTarget="scrollableDiv"
            loader={<h4>Loading...</h4>}
          >
          {data?.length > 0 ? (
            <>
              {data?.map((item, index) => {
                return (
                  <div className="img_card">
                    <img src={item?.url} alt="img" />
                  </div>
                );
              })}
            </>
          ) : (
            "Data Not found"
          )}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
